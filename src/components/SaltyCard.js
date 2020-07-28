import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const initialCardData = {
  deleted: false,
  type: '',
  by: '',
  time: null,
  text: '',
  dead: false,
  parent: null,
  poll: null,
  kids: [],
  url: '',
  score: null,
  title: '',
  parts: [],
  descendants:[]
}
const extractDomain = (url) => {
  const link = document.createElement("a");
  link.href = url;
  return link.hostname;
};

export default function SaltyCard(props) {
  const [cardData, setCardData] = useState({...initialCardData, id: props.id });
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`)
      .then(response => { setCardData({...response.data})})
      .catch(error => {console.log(error)})
  }, [])
  
  return (
    <div>
      <div className='uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle'>
        <div className='uk-card-body uk-card-small'>
          <h3 className='uk-card-title'>{cardData.by}</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        </div>
      </div>
    </div>
  )
}