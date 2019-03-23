import React, { Component } from "react";
import Header from "./Header";
import Post from "./Post";

export default class App extends Component {
  state = {
    datapost: [
      {
        id: 1,
        author: "Felipe Araujo",
        time: "há 30 minutos",
        avatar:
          require("../img/avatar1.png"),
        post: "This post was created with the intention of showing that, anyone can go after their dreams, my dream is: 'Learn new technologies and improve people's lives using the best technologies.<br>I believe that we as human beings can learn, do and be anything. I am learning, making and being the difference in the lives of my clients, I help people achieve their goals and business in the world.' You can contact me through comunicar.felipearaujo@gmail.com if you want to talk about Programming, or about DBA, Mysql or even about RestAPI and Mobile development. You can also find me on Linkedin: https://www.linkedin.com/in/felipe-de-sousa-araujo-1408a5113/"
      },
      {
        id: 2,
        author: "Daiani Araujo",
        time: "há 25 minutos",
        avatar: require("../img/avatar2.png"),
        post:
          "I am the bride of Felipe Araujo and it makes me very happy, together we are stronger and we are winners."
      }
    ]
  };
  render() {
    const dataposts = this.state.datapost;
    return (
      <div>
        <Header />
        <div className="post-container">
          {dataposts &&
            dataposts.map(post => <Post key={post.id} data={post} />)}
        </div>
      </div>
    );
  }
}
