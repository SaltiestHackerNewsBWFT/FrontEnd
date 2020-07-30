import React, { useState, useEffect } from 'react';
import { axiosAlgolia } from '../utils/axiosAlgolia';
import CommentCard from './CommentCard';
import { useParams } from 'react-router-dom';


export default function PageComment(props) {
  const [commentsAll, setCommentsAll] = useState([]);
  const { id } = useParams();

  // children

  useEffect(() => {
    axiosAlgolia(`items/${id}`)
      .then(response => {
        setCommentsAll(response.data);
        //console.log('commentsAll',response.data.children);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])
  console.log('commentsAll', commentsAll)
  
  return (
    <CommentCard comment={commentsAll} />
  )
}