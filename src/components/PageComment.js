import React, { useState, useEffect } from 'react';
import { axiosAlgolia } from '../utils/axiosAlgolia';
import ItemCardAlgolia from './ItemCardAlgolia';
import { useParams } from 'react-router-dom';

const initialComment = {
  children: null,
  text: ''
}

export default function PageComment(props) {
  const [commentsAll, setCommentsAll] = useState([]);
  const { id } = useParams();

  // children

  useEffect(() => {
    axiosAlgolia(`items/${id}`)
      .then(response => {
        setCommentsAll(response.data);
        console.log('comments',response);
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])
  console.log('commentsAll',commentsAll)
  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          // display data of master parent (post info)
          // 
        }
        {
          // display current comment data
        }
        {
          // iterate over props.comment.children
        }
        {/* {props.comment.children && <CommentItemCard items={children} />} */}
        {/* <ItemCardAlgolia key={commentsAll.id} item={commentsAll}/> */}
      </div>
    </div>
  )
}