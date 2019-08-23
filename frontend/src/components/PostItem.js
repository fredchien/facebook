import React from "react";
import PropTypes from "prop-types";

function PostItemHeader({ post }) {
  return (
    <>
      <img src={post.author.avatar} />
      <div>{post.author.name}</div>
    </>
  );
}

function PostItem({ post }) {
  return (
    <div className="post">
      <PostItemHeader key={post.id} post={post} />
      <p className="post-content">{post.content}</p>
      <PostComments comments={post.comments} />
    </div>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img className="avatar" src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default PostItem;
