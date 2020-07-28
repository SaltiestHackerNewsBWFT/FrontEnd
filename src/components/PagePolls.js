import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PagePolls() {
  const [pollAll, setPollAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('pollstories.json')
      .then(response => {
        setPollAll(response.data);
        console.log(response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          pollAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}