import React, { useState, useEffect } from 'react';
//import { axiosHackerNews } from '../utils/axiosHackerNews';
import axios from 'axios';
import SaltyCard from './SaltyCard';

export default function PageSaltiest() {
  const [saltiestAll, setSaltiestAll] = useState([]);
  
  // useEffect(() => {
  //   axiosHackerNews('showstories.json')
  //     .then(response => {
  //       setShowAll(response.data);
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log('axios error: ', error);
  //     })
  // }, [])
  
  useEffect(() => {
    axios
      .get('https://guarded-waters-99080.herokuapp.com/saltiest100')
      .then(response => {
        setSaltiestAll(response.data.Top_100_Saltiest.clean_vader_score);
        //console.log(response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])
  const saltiestArray = []
  for (const [key, value] of Object.entries(saltiestAll)) {
    saltiestArray.push({author: key, score: value})
  }
  //console.log('ARRAY' ,saltiestArray)

  const temp = 24001813;

  useEffect(() => {
    axios
      .post('https://guarded-waters-99080.herokuapp.com/predict', `{ "comment_id" : ${temp} }` )
      .then(response => {
        //setSaltiestAll(response.data.Top_100_Saltiest.clean_vader_score);
        console.log('SCORE',response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

 console.log('salty',saltiestAll)
  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        <div className='uk-grid-small uk-child-width-1-2@s uk-child-width-1-4@m' data-uk-grid='masonry: true'>
          {/* {
            saltiestAll.map(item => {
              return (
                <SaltyCard key='kome' id='kome' salty='-0.89'/> // change it to id={item.id} and salty={item.rank}
              )
            })
          } */}
          
          test
        </div>
      </div>
    </div>
  )
}