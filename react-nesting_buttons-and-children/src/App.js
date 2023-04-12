import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Button 1</Button>
      <Button>Benjamin Button</Button>
      <Button>Tim Burton, not Button</Button>
      <Button>What does this button do?!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
