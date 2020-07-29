import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import ItemCard from '../ItemCard.js';

export default function Favorites(){
  
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get('https://hackernewsbw31.herokuapp.com/api/favorites')
      .then(response => {
        // setFavorites({ ...response.data });
        console.log('response for favorites: ', response)
      })
      .catch(error => console.log(error))
  },[])
  
  return (
    <div>
      Favorites
      {/* {favorites.map(item =>
        <ItemCard key={item.id} item={item} />
      )}  */}
    </div>
  )
}
