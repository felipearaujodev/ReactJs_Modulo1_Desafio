import React from "react";

import logo from "../img/avatar1.png";

const PostHeader = props => (
  <div className="post-header-container">
    <img className="avatar" src={logo} alt="avatar" />
  </div>
);

export default PostHeader;
