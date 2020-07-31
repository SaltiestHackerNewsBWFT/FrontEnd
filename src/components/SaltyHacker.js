import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import ReactHtmlParser from 'react-html-parser';
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const initialCardData = {
  about : "This is a test",
  created : null,
  delay : null,
  id : '',
  karma : null,
  submitted: [],
}
// const extractDomain = (url) => {
//   const link = document.createElement("a");
//   link.href = url;
//   return link.hostname;
// };

export default function SaltyCard(props) {
  const [cardData, setCardData] = useState({ ...initialCardData, id: props.id });
  const salty= Math.ceil((props.salty * -100)/33);
  const salt = (props.salty * -100);
  
  
  
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${props.id}.json`)
      .then(response => {
        setCardData({ ...response.data });
        // console.log('user card',response)
      })
      .catch(error => {console.log(error)})
  }, [])

  return (
    <div className='uk-margin uk-flex uk-flex-center'>
      <div className='uk-card uk-card-default uk-width-large'>
        <div className='uk-card-body uk-card-small uk-flex uk-flex-center'>
          <div className='uk-inline uk-heading-medium uk-text-primary'>{props.rank}</div>
          <h3 className='uk-card-title uk-h2 uk-text-primary uk-margin-left'>
             <a href={`https://news.ycombinator.com/user?id=${props.id}`} target='_blank' >{cardData.id}</a>
          </h3>
          <div className='uk-flex'>
            <div className='uk-padding-small uk-flex uk-flex-column uk-flex-middle' title='karma'>
              <i className="fad fa-meteor fa-lg"></i>
              <div className='uk-margin-small-top'>Karma</div>
              {cardData.karma}
            </div>
            <div className='uk-padding-small uk-flex uk-flex-column uk-flex-middle' title='comments'>
              <i className="fad fa-comments-alt fa-lg"></i>
              <div className='uk-margin-small-top'>Comments</div>
              {cardData.submitted.length}
            </div>
            {/* <div className='uk-padding-small uk-flex uk-flex-column uk-flex-middle' title='comments'>
              <i className="fad fa-percent fa-lg"></i>
              <div className='uk-margin-small-top'>Salt</div>
              {salt}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}