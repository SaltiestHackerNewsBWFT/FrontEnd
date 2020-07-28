import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import SaltyCard from './SaltyCard';

export default function PageSaltiest() {
  const [showAll, setShowAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('showstories.json')
      .then(response => {
        setShowAll(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        <div className='uk-grid-small uk-child-width-1-2@s uk-child-width-1-4@m' data-uk-grid='masonry: true'>
          {
            showAll.map(item => {
              return (
                <SaltyCard id={item} key={item}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}