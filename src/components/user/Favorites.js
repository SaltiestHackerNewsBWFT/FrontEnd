import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export default function Favorites(){
  
  const [favorites, setFavorites] = useState([]);
  
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get()
  //     .then()
  //     .catch()
    
  // })
  console.log(favorites);
  return (
    <div>
      Favorites
      {favorites.map(item =>
        <div key={item.id} item={item}>
          test
        </div>
      )} 
    </div>
  )
}
