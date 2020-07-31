import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageHome() {
  const [hnAll, setHnAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('topstories.json')
      .then(response => {
        setHnAll(response.data);
      })
      .catch(error => { 
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          hnAll.map(item => {
            return (
              <ItemCard key={item} id={item}/>
            )
          })
        }
      </div>
    </div>
  )
}