import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import "./styles/app.scss";

import Header from "./components/Header";
import Post from "./components/Post";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="post-container">
          <Post />
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("app"));
