import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import formatDistanceToNow from "date-fns/formatDistanceToNow";


export default function PageHome() {
  const [hnAll, setHnAll] = useState([]);
  let timeAgo;

  useEffect(() => {
    axios.get('https://hackernewsbw31.herokuapp.com/api/comments')
      .then(response => {
        setHnAll(response.data);
        console.log('axios response.data: ', response.data)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [])

  return (
    <div className='uk-section uk-section-small'> 
      <div className='uk-container'>
        {
          hnAll.map(item => {
            return (
              <div key={item.objectID}>
                <div className='uk-card uk-card-default uk-card-body uk-card-small uk-margin'>
                  <article className='uk-comment'>
                    <header className='uk-comment-header'>
                      <div className='uk-grid-medium uk-flex-middle' data-uk-grid>
                        {/* <div className='uk-width-auto'>
                          <img className='uk-comment-avatar' src='images/avatar.jpg' width='80' height='80' alt=''/>
                        </div> */}
                        <div className='uk-width-expand'>
                          <h4 className='uk-comment-title uk-margin-remove'><Link className='uk-link-reset' to='#'>{item.author}</Link></h4>
                          <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top'>
                            <li><Link className='uk-text-lowercase' ><i className="fad fa-clock"></i> {timeAgo = formatDistanceToNow(item.created_at_i * 1000)} ago</Link></li>
                            <li><Link to='#'>Reply</Link></li>
                            <li><a href={`https://news.ycombinator.com/item?id=${item.story_id}`} target='_blank'> go to</a></li>
                          </ul>
                        </div>
                      </div>
                    </header>
                    <div className='uk-comment-body'>
                      {/* {item.comment_text.replace(/<\/?[^>]+>/ig, " ")} */}
                      {/* {item.comment_text} */}
                      { ReactHtmlParser(item.comment_text) }
                    </div>
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