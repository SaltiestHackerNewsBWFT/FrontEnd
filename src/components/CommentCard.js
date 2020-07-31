/* eslint-disable no-redeclare */
/* eslint-disable react/jsx-no-target-blank */
import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

// const initialComment = {
//   author: '',
//   children: [],
//   created_at: '',
//   created_at_i: null,
//   id: null,
//   options: [],
//   parent_id: null,
//   story_id: null,
//   points: null,
//   text: '',
//   title: '',
//   type: '',
//   url: '',
// };

const encodeStringToColor = (string) => {
  if (!string) return 'black';

  for (
    var i = 0, hash = 0;
    i < string.length;
    hash = string.charCodeAt(i++) + ((hash << 5) - hash)
  );
  
  for (
    var i = 0, colour = '#';
    i < 3;
    colour += ('00' + ((hash >> (i++ * 8)) & 0xff).toString(16)).slice(-2)
  );
  return colour;
};

const Avatar = ({ author }) => {
  if (!author) {
    return (
      <div className='Avatar'>
        
      </div>
    );
  }
  return (
    <div
      className='Avatar'
      style={{
        minWidth: '24px',
        minHeight: '24px',
        maxWidth: '24px',
        maxHeight: '24px',
        lineHeight: '24px',
        marginRight: '10px',
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        backgroundColor: encodeStringToColor(author)
      }}
    >
      {author[0]}
    </div>
  );
};


export default function CommentCard(props) {
  
  const comment = props.comment;
  const [saltyScore, setSaltyScore] = useState();
  useEffect(() => {
    axios
      .post('https://guarded-waters-99080.herokuapp.com/predict', `{ "comment_id" : ${props.id} }` )
      .then(response => {
        setSaltyScore(response.data.Score_for_comment_from_id);
        // console.log('SCORE',response.data.Score_for_comment_from_id);
        // console.log(saltyScore)
      })
      .catch(error => {
        console.log('axios error: ', error);
      })
  }, [props.id])
//   const[saltyLevel,setSaltyLevel] = useState()
//   if (saltyScore < 0 && saltyScore !== undefined) { 
//     //const saltyPercentage = Math.floor(saltyScore * -100);
//     setSaltyLevel(Math.ceil((saltyScore * -100)/33));
//     console.log(saltyLevel,'%')
//   }
// console.log(saltyLevel,'%')
  if (!comment.children || !comment.children.length) return null;
  return (
    <ul className='uk-comment-list' data-uk-accordion='multiple: true'>
      {comment.children.map(comment => {
        const {
          id,
          author,
          created_at_i,
          //created_at,
          text,
          story_id,
          children,
          //points
        } = comment;
        
        return (
          <li key={id}>
            <article className='uk-comment uk-visible-toggle' tabIndex='-1'>
              <header className='uk-comment-header uk-position-relative'>
                <ul className='uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-bottom'>
                  {/* <li><Link to='#' style={{paddingLeft: '2px'}}><i className='fad fa-heart uk-margin-small-right' title='upvote'></i>{points}</Link></li> */}
                  <li><Avatar author={author}/><a className='author uk-link-reset' href={`https://news.ycombinator.com/user?id=${author}`} target='_blank' title='author'>{author || 'deleted'}</a></li>
                  <li><a className='uk-text-lowercase' href={`https://news.ycombinator.com/item?id=${story_id}#${id}`} target='_blank' title='posted'><i className='fad fa-clock uk-margin-small-right'></i>{formatDistanceToNow(created_at_i * 1000)} ago</a></li>
                  <li><Link to={`/comments/${props.id}`} className='uk-text-lowercase' title='discuss'><i className='fad fa-comments-alt uk-margin-small-right'></i>{children.length}</Link></li>
                  <li>
                    <strong className='uk-text-primary uk-text-small'>
                        {(saltyScore < 0 && saltyScore !== undefined) && (Math.ceil((saltyScore * -100)/33) === 3) && <i>Saltiest</i>}
                        {(saltyScore < 0 && saltyScore !== undefined) && (Math.ceil((saltyScore * -100)/33) === 2) && <i>Saltier</i>}
                        {(saltyScore < 0 && saltyScore !== undefined) &&(Math.ceil((saltyScore * -100)/33) === 1) && <i>Salty</i>}
                    </strong>
                    <div className='uk-float-right uk-text-primary'>
                      {(saltyScore < 0 && saltyScore !== undefined) && (Math.ceil((saltyScore * -100)/33) === 3) && <img src='../iconSaltiest.svg' width='30px' height='30px' alt='saltiest'/>}
                      {(saltyScore < 0 && saltyScore !== undefined) && (Math.ceil((saltyScore * -100)/33) === 2) && <img src='../iconSaltier.svg' width='30px' height='30px' alt='saltier'/>}
                      {(saltyScore < 0 && saltyScore !== undefined) && (Math.ceil((saltyScore * -100)/33) === 1) && <img src='../iconSalty.svg' width='30px' height='30px' alt='salty'/>}
                    </div>
                  </li>
                </ul>
              </header>
              {/* <button className='uk-button uk-button-default uk-float-right' type='button' data-uk-toggle={`'target: ${id}'`} >Toggle</button> */}
              <div id={id} className='uk-comment-body'>
                { ReactHtmlParser(text) }
              </div>
              <CommentCard comment={comment} id={id}/>
            </article>
            <hr className='uk-divider'></hr>
          </li>
        );
      })}
    </ul>
  )
}