import "./Card.css";

export default function Card({ name, color, id }) {
  return (
    <div className="card">
      <p>{name}</p>
      <p>{color}</p>
      <p>{id}</p>
    </div>
  );
}
