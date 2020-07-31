/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
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
  // const salty= Math.ceil((props.salty * -100)/33);
  // const salt = (props.salty * -100);
  
  
  
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${props.id}.json`)
      .then(response => {
        setCardData({ ...response.data });
        // console.log('user card',response)
      })
      .catch(error => {console.log(error)})
  }, [props.id])

  return (
    <div className='uk-margin'>
      <div className=''>
        <div className="uk-child-width-1-3 uk-card uk-card-default uk-padding-remove" data-uk-grid uk-height-match="target: > div > .uk-card">
          <div className='uk-padding-remove'>
            <div className="uk-card uk-tile-primary uk-card-body">
              <div className='uk-heading-medium uk-margin-remove uk-height-expand uk-text-middle'>{props.rank}</div>
              <a className='uk-text-large' href={`https://news.ycombinator.com/user?id=${props.id}`} target='_blank' >{cardData.id}</a>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body">
              <div className='uk-flex uk-flex-column uk-flex-middle' title='karma'>
                <i className="fad fa-meteor fa-3x"></i>
                <div className='uk-margin-top'>Karma</div>
                 <strong class='uk-text-large'>{cardData.karma}</strong>
              </div>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body">
              <div className='uk-flex uk-flex-column uk-flex-middle' title='comments'>
                <i className="fad fa-comments-alt fa-3x"></i>
                <div className='uk-margin-top'>Comments</div>
                <strong class='uk-text-large'>{cardData.submitted.length}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}