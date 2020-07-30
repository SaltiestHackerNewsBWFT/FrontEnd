import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import ItemCard from '../ItemCard.js';

export default function Bookmarks(){
  
  const [bookmarks, setBookmarks] = useState([]);
  
  useEffect(() => {
    axiosWithAuth()
      .get('https://hackernewsbw31.herokuapp.com/api/bookmarks')
      .then(response => {
        setBookmarks(response.data);
        //console.log('response for favorites: ', response)
      })
      .catch(error => console.log(error))
  },[])
  //console.log('bookmarks', bookmarks)
  
  if (bookmarks.length > 0) {
    return (
      <div className='uk-section uk-section-small'>
        <h2 className='uk-text-primary uk-text-center'>Bookmarks</h2>
        <div className='uk-container'>
          {bookmarks.map(item =>
            <ItemCard key={item.id} item={item} />
          )} 
        </div>
      </div>
    )
  } else {
    return (
      <div className='uk-section uk-section-small'>
        <div className='uk-container uk-text-center'>
          <strong>Looks like you have not bookmarked anything yet...</strong>
          <Link to='/'>Let's Get Started!</Link>
        </div>
      </div>
    )
  }
}