import React from "react";
import "./styles.css";

export default function App() {
  // return <h1>Replace me with your component!</h1>;
  const valueA = 2;
  const valueB = 3;

  return (
    <Sum valueA={valueA} valueB={valueB} />
  );
}

function Sum({ valueA, valueB }) {
  const sum = parseInt(valueA) + parseInt(valueB);

  return (
    <h1>{valueA} + {valueB} = {sum}</h1>
  );
}