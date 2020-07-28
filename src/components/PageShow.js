import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageShow() {
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
        {
          showAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}