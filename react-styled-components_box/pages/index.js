import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents/BoxWithStyledComponents";


export default function HomePage() {
  return (
    <div style={{ display: "flex" }}>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </div>
  );
}
