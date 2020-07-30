import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard.js';

export default function Favorites(){
  
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get('https://hackernewsbw31.herokuapp.com/api/favorites')
      .then(response => {
        setFavorites(response.data);
        console.log('response for favorites: ', response.data)
      })
      .catch(error => console.log(error))
  },[])
  //console.log(favorites)

  if (favorites.length > 0) {
    return (
      <div className='uk-section uk-section-small'>
        <h2 className='uk-text-primary uk-text-center'>Favorites</h2>
        <div className='uk-container'>
          {favorites.map(item =>
            <ItemCard key={item.id} item={item} />
          )} 
        </div>
      </div>
    )
  } else {
    return (
      <div className='uk-section uk-section-small'>
        <h2 className='uk-text-primary uk-text-center'>Favorites</h2>
        <div className='uk-container uk-text-center'>
          <strong>Looks like you have no favorites yet...</strong>
          <Link to='/'>Let's Get Started!</Link>
        </div>
      </div>
    )
  }
}
