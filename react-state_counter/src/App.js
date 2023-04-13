//imported useState from react library..
import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  //switched off let, as react can't handle it. Instead, we need a new function that react can read. We start counting from 0, so that is the initial variable
  // let count = 0; 
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            //switched off emoji and added count -1 for button 1
            //console.log("🤔");
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            //switched off emoji and added count +1 for button 2
            //console.log("🤔");
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
