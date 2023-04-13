import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  // let code = "?";
  const [code, setCode] = useState("?");

  const validCode = "🐡🐠🐋";

  const handleClick = (e) => {
    console.log(e.target.innerText);
    setCode(code + e.target.innerText);
  };

  function resetCode() {
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        {/* <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        > */}
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        {/* <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        > */}
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        {/* <button
          type="button"
          onClick={() => {
            console.log("Update Code!");
          }}
        > */}
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      {/* <button
        type="button"
        onClick={() => {
          console.log("Reset Code!");
        }}
      > */}
      <button type="button" onClick={resetCode}>
        Reset
      </button>
      <h2>{code}</h2>
      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}