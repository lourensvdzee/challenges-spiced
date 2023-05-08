import { useState } from "react";
import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import History from "./components/History";
import useLocalStorageState from "use-local-storage-state";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", { defaultValue: [] });
  const handleRoll = () => {
    setRolls([
      {
        value1: getD6Roll(),
        value2: getD6Roll(),
        value3: getD6Roll(),
        time: Date.now(),
      },
      ...rolls,
    ]);
  };

  const value1 = rolls[0]?.value1;
  const value2 = rolls[0]?.value2;
  const value3 = rolls[0]?.value3;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button
          value1={value1}
          value2={value2}
          value3={value3}
          onRoll={handleRoll}
        />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
