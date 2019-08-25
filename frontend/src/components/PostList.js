import React, { Component } from "react";
import api from "../services/api";
import io from "socket.io-client";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get("posts");
    console.log(response);

    this.setState({ posts: response.data });
  }

  registerToSocket = () => {
    const socket = io("http://localhost:3333");

    socket.on("post", newPost => {
      this.setState({ posts: [newPost, ...this.state.posts] });
    });

    socket.on("comment", commentPost => {
      this.setState({
        posts: this.state.posts.map(post =>
          post._id == commentPost._id ? commentPost : post
        )
      });
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
