import React from "react";
import PostActions from "./PostActions";

const PostCard = (props) => {
  return (
    <div className="post-card">
      <div className="card-header">
        <PostActions {...props}/>
      </div>
      <div className="question-container">
        <p>{props.post.question}</p>
      </div>

      <div className="code-container">
        <p>{props.post.codeblock}</p>
      </div>
      <div className="comment-link"></div>
    </div>
  );
}

export default PostCard;