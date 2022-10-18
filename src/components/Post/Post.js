import React from 'react';
import './Post.css'

const Post = (props) => {
  const {id, title, body} = props.post;

  return (
    <div>
       <div className="card-box">
  <div className="box">
    <div className="body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{body}</p>
    </div>
   </div>
 </div>
</div>
  );
};

export default Post;