import React, { useState, useEffect } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageNew() {
  const [newAll, setNewAll] = useState([]);
  
  useEffect(() => {
    axiosHackerNews('newstories.json')
      .then(response => {
        setNewAll(response.data);
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
          newAll.map(item => {
            return (
              <ItemCard id={item} key={item}/>
            )
          })
        }
      </div>
    </div>
  )
}