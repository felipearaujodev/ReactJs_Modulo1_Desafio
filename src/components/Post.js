import React, { Component } from "react";
import PropTypes from 'prop-types';

import PostHeader from "./PostHeader";

const Post = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      author={props.data.author}
      time={props.data.time}
    />
    <p>{props.data.post}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
  }).isRequired,
};


export default Post;
