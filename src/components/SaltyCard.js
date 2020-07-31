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
  submitted : []
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
        //console.log('user card',response)
      })
      .catch(error => {console.log(error)})
  }, [props.id])

  return (
    <div>
      <div className='uk-card uk-card-default'>
        <div className='uk-card-body uk-card-small'>
          <strong className='uk-text-primary uk-text-small'>
              {(salty === 3) && <i>Saltiest</i>}
              {(salty === 2) && <i>Saltier</i>}
              {(salty === 1) && <i>Salty</i>}
          </strong>
          <div className='uk-float-right uk-text-primary'>
            {(salty === 3) && <img src='./iconSaltiest.svg' width='30px' height='30px' alt='saltiest'/>}
            {(salty === 2) && <img src='./iconSaltier.svg' width='30px' height='30px' alt='saltier'/>}
            {(salty === 1) && <img src='./iconSalty.svg' width='30px' height='30px' alt='salty'/>}
          </div>
          <h3 className='uk-card-title uk-margin-remove'>
            {cardData.id}
          </h3>
          <div className='uk-flex uk-flex-center'>
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
            <div className='uk-padding-small uk-flex uk-flex-column uk-flex-middle' title='comments'>
              <i className="fad fa-percent fa-lg"></i>
              <div className='uk-margin-small-top'>Salt</div>
              {salt}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}