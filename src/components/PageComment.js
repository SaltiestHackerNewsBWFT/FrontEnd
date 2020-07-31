import React, { useState, useEffect } from 'react';
import { axiosAlgolia } from '../utils/axiosAlgolia';
import ItemCard from './ItemCard';
import CommentCard from './CommentCard';
import { useParams } from 'react-router-dom';


export default function PageComment(props) {
  const [commentsAll, setCommentsAll] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axiosAlgolia(`items/${id}`)
      .then(response => {
        setCommentsAll(response.data);
        //console.log('commentsAll',response.data.children);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  },[id])
  //console.log('commentsAll', commentsAll)
  
  return (
    <div className='uk-section uk-section-small'>
      <div className='uk-container'>
        <ItemCard key={id} id={id}/>
      </div>
      <div className='uk-container uk-card uk-card-default uk-card-body uk-card-small comment-page'>
        <CommentCard comment={commentsAll} />
      </div>
    </div>
    
  )
}