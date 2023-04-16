import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return (
    <Smiley isHappy />
  );
}

function Smiley({ isHappy }) {
  return (
    <h1>{isHappy ? "😄" : "😭"} </h1>
  );
} 
