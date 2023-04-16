import "./styles.css";

export default function App() {
  return (
    <div>
      {/* <h1>Replace me with your component!</h1>; */}
      <Greetings name="young Padawan" />
    </div>
  );
}

function Greetings({ name }) {
  return (
    <div>
      <h1>What up, {name}!</h1>
    </div>
  )
}