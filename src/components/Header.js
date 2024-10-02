import Nav from "./Nav";
import { name, logo } from "../Data";
import hamburger from "../assets/icons/hamburger.svg";
import { SidebarContext, HeaderContext } from "../App";
import { useContext, useEffect } from "react";
export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext);
  const { headerVisible, setHeaderVisible } = useContext(HeaderContext);
  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setHeaderVisible(currentScroll < lastScroll || currentScroll < 100);
      lastScroll = currentScroll;
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  },[setHeaderVisible]);
  return (
    <header className={headerVisible ? "show" : "hide"}>
      <img
        src={logo}
        alt="logo"
        title={name}
        id="logo"
        onClick={() => (window.location.href = "/")}
      />
      <Nav />
      <img
        src={hamburger}
        alt="menu"
        title="menu"
        id="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      />
    </header>
  );
}
