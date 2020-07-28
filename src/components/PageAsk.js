import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageAsk() {
  const [askAll, setAskAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('askstories.json')
      .then(response => {
        setAskAll(response.data);
        console.log(response);
      });
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          askAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}