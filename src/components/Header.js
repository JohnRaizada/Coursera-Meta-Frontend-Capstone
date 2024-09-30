import Nav from "./Nav";
import { name, logo } from "../Data";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" title={name} />
      <Nav />
    </header>
  );
}
