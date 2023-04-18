import { useState } from "react";
import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
import History from "./components/History";
import "./styles.css";

export default function App() {
  const [rolls, setRolls] = useState([]);
  const currentRollValue = rolls[0]?.value;
  // const onRoll = handleRoll;
  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const a = 5;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll} />
      </main>
      <aside className="app__aside">
        {console.log(rolls)}
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

