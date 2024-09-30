import { navLinks } from "../Data";
export default function Nav() {
  return (
    <nav>
      <ul>
        {navLinks.map(({ name, link }) => (
          <li key={name}>
            <a href={link} className="primary-color-main lead-text" title={name}>{name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
