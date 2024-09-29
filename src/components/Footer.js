import logo from "../assets/logo.svg";
import { navLinks, mobile, email, address, socials } from "../Data";
export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <div>
        <h6>Sitemap</h6>
        <ul>
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <a href={link}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h6>Contact</h6>
        <p>
          <a href={`tel:${mobile}`}>{mobile}</a>
          <br />
          {email}
          <br />
          <br />
          {address}
        </p>
      </div>
      <div>
        <h6>Follow us</h6>
        <ul>
          {socials.map(({ name, link, icon }) => (
            <li key={name}>
              <a href={link}>
                <img src={icon} alt={name} title={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
