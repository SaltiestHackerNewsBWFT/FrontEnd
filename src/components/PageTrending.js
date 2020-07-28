import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageTrending() {
  const [trendingAll, setTrendingAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('topstories.json')
      .then(response => {
        setTrendingAll(response.data);
        console.log(response);
      });
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          trendingAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}