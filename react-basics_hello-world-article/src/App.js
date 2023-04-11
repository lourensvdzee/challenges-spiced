import React from "react";
import "./styles.css";

//first return article
//then return something...

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Such a great headline</h1>
      <p>With an amazing paragraph</p>
    </article>
  )
}