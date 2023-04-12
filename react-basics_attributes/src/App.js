import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (<article className="article">
    <h2 className="article__title">Such an awesome H2</h2>
    <label htmlFor="input-field">Input Field:</label>
    <input type="text" id="input-field" />
    <a className="article__link" href="https://nl.wikipedia.org/wiki/Tyrannosaurus">This is a link</a>
  </article>
  )
}
