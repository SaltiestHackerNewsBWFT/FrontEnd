/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';


export default function PageHome() {
  const [hnAll, setHnAll] = useState([]);

  useEffect(() => {
    axios.get('https://hackernewsbw31.herokuapp.com/api/comments/data')
      .then(response => {
        setHnAll(response.data);
        console.log('axios response.data: ', response.data)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])
  const extractDomain = (url) => {
    const link = document.createElement("a");
    link.href = url;
    return link.hostname;
  };
  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          hnAll.map(item => {
            return (
              <div key={item.objectID}>
                <div className='uk-card uk-card-default uk-card-body uk-card-small uk-margin'>
                  <article className='uk-comment'>
                    <header className='uk-comment-header uk-margin-remove'>
                      <div className='uk-grid-medium uk-flex-middle' data-uk-grid>
                        {/* <a className='uk-width-auto uk-link-reset' href={`https://news.ycombinator.com/item?id=${item.objectID}`} target='_blank'>
                          <img className='uk-comment-avatar' src='images/avatar.jpg' width='80' height='80' alt=''/>
                        </a> */}
                        <div className='uk-width-expand'>
                          <h4 className='uk-comment-title uk-margin-remove'>
                            <a className='uk-width-auto uk-margin-right' href={`https://news.ycombinator.com/item?id=${item.objectID}`} target='_blank'>
                              <i className="fab fa-hacker-news"></i>
                            </a>
                            <a className='uk-link-reset' href={item.story_url} target='_blank'>{item.story_title}</a>
                          </h4>
                          <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top'>
                            <li><Link to='#' style={{paddingLeft: '2px'}}><i className='fad fa-heart uk-margin-small-right' title='upvote'></i>{item.points}</Link></li>
                            <li><a className='author' href={`https://news.ycombinator.com/user?id=${item.author}`} target='_blank' title='author'><i className='fad fa-user uk-margin-small-right'></i>{item.author || 'deleted'}</a></li>
                            <li><Link className='uk-text-lowercase' to='#' title='posted'><i className='fad fa-clock uk-margin-small-right'></i>{formatDistanceToNow(item.created_at_i * 1000)} ago</Link></li>
                            <li><a href={item.story_url} target='_blank' className='uk-text-lowercase' title='link'><i className="fad fa-link uk-margin-small-right"></i>{extractDomain(item.story_url)}</a></li>
                            <li><a href='/' className='uk-text-lowercase' title='discuss'><i className="fad fa-comments-alt uk-margin-small-right"></i>{item.num_comments}</a></li>
                          </ul>
                        </div>
                      </div>
                    </header>
                    {/* <div className='uk-comment-body'>
                      { ReactHtmlParser(item.comment_text) }
                    </div> */}
                  </article>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}