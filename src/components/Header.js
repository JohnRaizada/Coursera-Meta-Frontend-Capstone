import Nav from "./Nav";
import { logo } from "../Data";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <Nav />
    </header>
  );
}
