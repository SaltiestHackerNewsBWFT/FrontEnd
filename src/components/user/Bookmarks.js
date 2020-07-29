import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import ItemCard from '../ItemCard.js';

export default function Bookmarks(){
  
  const [bookmarks, setBookmarks] = useState([]);
  
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get()
  //     .then()
  //     .catch()
    
  // })
  console.log(bookmarks);
  return (
    <div>
      Bookmarks
      {bookmarks.map(item =>
        <ItemCard key={item.id} item={item} />
      )} 
    </div>
  )
}