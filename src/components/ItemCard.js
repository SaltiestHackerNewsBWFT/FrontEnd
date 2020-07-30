import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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

export default function CardDataCard(props) {
  const [cardData, setCardData] = useState({ ...initialCardData, id: props.id });
  const [isFavorite, setIsFavorite] = useState()
  
  
  useEffect(() => {
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${props.id}.json`)
      .then(response => {
        setCardData({ ...response.data });
        //console.log(response.data);
      })
      .catch(error => { console.log(error) })
  }, [])
  // console.log('COMMENT ID', props.id)
  const addFavorite = e => {
    e.preventDefault();
    // axiosWithAuth()
    //   .put('https://hackernewsbw31.herokuapp.com/api/favorites', `{"comment": ${props.id}}`)
    //   .then(res => {
        // this.setState({ getFriends: res.data });
        // this.setState({ newFriend: { name: '', age: '', email: '' } });
        // console.log('FRIENDS', res)
        setIsFavorite(true)
        document.getElementById(`deleteButton${props.id}`).classList.remove('uk-link-reset')
      // })
      // .catch(err => console.log({err}))
  }

  const deleteFavorite = e => {
    e.preventDefault();
    // axiosWithAuth()
    //   .delete('https://hackernewsbw31.herokuapp.com/api/favorites', `{"comment": ${props.id}}`)
    //   .then(res => {
        // this.setState({ getFriends: res.data });
        // this.setState({ newFriend: { name: '', age: '', email: '' } });
        // console.log('FRIENDS', res)
        setIsFavorite(false)
        document.getElementById(`deleteButton${props.id}`).classList.add('uk-link-reset')
      // })
      // .catch(err => console.log({err}))
  }
  
  return (
    <div>
      <div className='uk-card uk-card-default uk-card-body uk-card-small uk-margin'>
        <article className='uk-comment'>
          <header className='uk-comment-header uk-margin-remove'>
            <div className='uk-grid-medium uk-flex-middle' data-uk-grid>
              {/* <a className='uk-width-auto uk-link-reset' href={`https://news.ycombinator.com/cardData?id=${cardData.objectID}`} target='_blank'>
                <img className='uk-comment-avatar' src='images/avatar.jpg' width='80' height='80' alt=''/>
              </a> */}
              <div className='uk-width-expand'>
                <h4 className='uk-comment-title uk-margin-remove'>
                  <a className='uk-width-auto uk-margin-right' href={`https://news.ycombinator.com/item?id=${cardData.id}`} target='_blank'>
                    <i className="fab fa-hacker-news"></i>
                  </a>
                  <a className='uk-link-reset' href={cardData.url} target='_blank'>{cardData.title}</a>
                  {/* <span className='uk-float-right'>test</span> */}
                </h4>
                <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-bottom'>
                  <li><Link to='#' style={{paddingLeft: '2px'}}><i className='fad fa-heart uk-margin-small-right' title='upvote'></i>{cardData.score}</Link></li>
                  <li><a className='author' href={`https://news.ycombinator.com/user?id=${cardData.by}`} target='_blank' title='author'><i className='fad fa-user uk-margin-small-right'></i>{cardData.by || 'deleted'}</a></li>
                  <li><Link className='uk-text-lowercase' to='#' title='posted'><i className='fad fa-clock uk-margin-small-right'></i>{formatDistanceToNow(cardData.time * 1000)} ago</Link></li>
                  <li><a href={cardData.url} target='_blank' className='uk-text-lowercase' title='link'><i className="fad fa-link uk-margin-small-right"></i>{extractDomain(cardData.url)}</a></li>
                  {cardData.type != 'job' && <li><Link to={`/comments/${props.id}`} className='uk-text-lowercase' title='discuss'><i className="fad fa-comments-alt uk-margin-small-right"></i>{cardData.descendants}</Link></li>}
                </ul>
                {/* <div className='uk-position-bottom-right uk-margin-right uk-margin-bottom'>test</div> */}
              </div>
              <div className='uk-width-auto uk-position-right uk-flex uk-flex-middle uk-margin-right'>
                  {/* <Link to='#' className='uk-margin-right uk-link-reset'><i className="fad fa-bookmark fa-lg"></i></Link> */}
                  <a id={`deleteButton${props.id}`} type='button' onClick={isFavorite ? deleteFavorite : addFavorite} className='uk-link-reset'> <i className="fad fa-star fa-lg"></i></a>
              </div>
            </div>
          </header>
        </article>
      </div>
    </div>     
  )
}