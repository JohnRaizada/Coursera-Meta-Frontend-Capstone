import {logo} from "../Data";
import {
  name,
  navLinks,
  mobile,
  email,
  addressLine1,
  addressLine2,
  socials,
} from "../Data";
export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="logo" title={name} />
      <nav role="navigation">
        <h6 className="section-category highlight-color-other">Sitemap</h6>
        <ul>
          {navLinks.map(({ name, link }) => (
            <li key={name}>
              <a href={link} className="paragraph-text primary-color-main" title={name}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav>
        <h6 className="section-category highlight-color-other">Contact</h6>
        <p className="paragraph-text">
          <a
            href={`tel:${mobile}`}
            className="primary-color-main"
            target="_blank"
            rel="noopener noreferrer"
            title="Call us"
          >
            {mobile}
          </a>
          <br />
          <a href={`mailto:${email}`} className="primary-color-main" title="Email">
            {email}
          </a>
          <br />
          <br />
          <a
            href={`https://maps.google.com/?q=${addressLine1} ${addressLine2}`}
            className="primary-color-main"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit us"
          >
            {addressLine1}
            <br />
            {addressLine2}
          </a>
        </p>
      </nav>
      <nav>
        <h6 className="section-category highlight-color-other">Follow us</h6>
        <ul>
          {socials.map(({ name, link, icon }) => (
            <li key={name}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={name} title={name} />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
