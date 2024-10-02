import { navLinks } from "../Data";
import { SidebarContext } from "../App";
import { useContext } from "react";
export default function Sidebar() {
  const { sidebarOpen } = useContext(SidebarContext);
  return (
    <aside className={sidebarOpen ? "open" : "close"} >
      <nav>
        <ul>
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <a
                href={link}
                className="display-subtitle primary-color-main"
                title={name}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
