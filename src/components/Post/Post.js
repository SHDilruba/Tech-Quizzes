import React from 'react';
import './Post.css'

const Post = (props) => {
  const {id, title, body} = props.post;

  return (
    <div>
       <div className="card-box container">
  <div className="box">
    <div className="body">
      <h4 className="card-title mb-2">{title}</h4>
      <p className="card-text">{body}</p>
    </div>
   </div>
 </div>
</div>
  );
};

export default Post;