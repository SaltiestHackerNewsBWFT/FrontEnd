import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageJobs() {
  const [jobsAll, setJobsAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('jobstories.json')
      .then(response => {
        setJobsAll(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        <div className='uk-background-primary uk-light uk-text-center' data-uk-alert>
          <button className="uk-alert-close" type="button" data-uk-close></button>
          <p>These are jobs at YC startups. See more at <a href='https://www.workatastartup.com/' target='_blank'>Work at a Startup</a>.</p>
        </div>
        {
          jobsAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}