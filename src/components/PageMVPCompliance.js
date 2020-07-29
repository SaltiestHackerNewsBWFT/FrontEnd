import React, { useEffect, useState } from 'react';
import { axiosHackerNews } from '../utils/axiosHackerNews';
import ItemCard from './ItemCard';

export default function PageMVPCompliance() {

  const [bestStories, setBestStories] = useState([]);

  useEffect(() => {
    (async () => {
      let resp;
      try {
        resp = await axiosHackerNews('beststories.json');
        setBestStories(resp.data)
      } catch (e) {
        console.error(e);
      }
    })();
  }, [])

  return (
    <>
      <div className='uk-section uk-section-small'>
        <div className='uk-container'>
          {bestStories.map(s => <ItemCard key={s} id={s}/>)}
        </div>
      </div>
    </>
  )
}
