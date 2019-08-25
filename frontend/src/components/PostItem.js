import React from "react";

function PostItemHeader({ post }) {
  return (
    <div className="post-header">
      <img className="avatar" src={post.author.avatar} />
      <div className="details">
        <span>{post.author.name}</span>
        <span>{new Date(post.date).toLocaleDateString("pt-BR")}</span>
      </div>
    </div>
  );
}

function PostItem({ post }) {
  return (
    <div className="post">
      <PostItemHeader key={post._id} post={post} />
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
        <div key={comment._id} className="comment">
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
