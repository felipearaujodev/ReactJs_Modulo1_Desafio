import React, { Component } from "react";

import PostHeader from "./PostHeader";

const Post = props => (
  <div className="post">
    <PostHeader />
    <p>Sou um Post</p>
  </div>
);

export default Post;
