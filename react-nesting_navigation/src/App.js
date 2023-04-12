import Header from "./components/Header";
import Nav from "./components/Navigation";
import Link from "./components/Link";
import Logo from "./components/Logo";
import Avatar from "./components/Avatar";
import "./styles.css";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav>
          <Link href="#home" />
          <Link href="#about" />
          <Link href="#impressum" />
        </Nav>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}