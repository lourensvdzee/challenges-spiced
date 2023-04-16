import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  return (
    <Button text={"Look at this beautiful text"} disabled color={`#FA8072`} />
  );
}

function Button({ text, disabled, color }) {
  return (
    <><h1>{text}</h1>
      <button disabled={disabled} style={{ color: color }}>This is a button</button></>
  );
}