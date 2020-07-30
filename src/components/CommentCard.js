import React, {useState} from 'react';

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

export default function CommentCard(props) {
  
  const comment = props.comment;
  
  if (!comment.children || !comment.children.length) return null;
  
  return (
    <ul>
      {comment.children.map(comment => {
        const {
          id,
          author,
          created_at_i,
          created_at,
          text,
          story_id
        } = comment;
//const timeAgo = formatDistanceToNow(created_at_i * 1000);

        return (
          <li className="Comment" key={id}>
            <span className="Comment_author">
              <span>author={author}</span> 
              <a
                href={`https://news.ycombinator.com/user?id=${author}`}
                title={`See ${author} profile"`}
              >
                {author || "deleted"}
              </a>
              {created_at && (
                <span className="Comment_createdAt">
                  -
                  <a
                    href={`https://news.ycombinator.com/item?id=${story_id}#${id}`}
                    
                  >
                    {created_at_i}
                  </a>
                </span>
              )}
            </span>
            <div className="Comment_text">{text}</div>
            <CommentCard comment={comment} />
          </li>
        );
      })}
    </ul>
  )
}