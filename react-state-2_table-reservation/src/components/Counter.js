import { useState } from "react";

export default function Counter({ onAdd, onSubtract }) {
  const [people, setPeople] = useState(0);
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={() => {
            setPeople(people + 1);
            onAdd();
          }}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={() => {
            setPeople(people - 1);
            onSubtract();
          }}
        >
          -
        </button>
      </div>
    </>
  );
}
