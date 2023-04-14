import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "banana", color: "yellow" },
    { id: 1, name: "orange", color: "orange" },
    { id: 2, name: "kiwi", color: "green" },
    { id: 3, name: "grapefruit", color: "orange" },
    { id: 4, name: "strawberry", color: "red" },
  ];


  return (
    <div className="app">
      {fruits.map((fruit, index) => (
        <Card key={index} name={fruit.name} color={fruit.color} id={fruit.id} />
      ))}
    </div>
  );
}