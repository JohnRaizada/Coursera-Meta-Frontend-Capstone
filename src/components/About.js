import aboutTop from "../assets/main/aboutTop.png";
import aboutBottom from "../assets/main/aboutBottom.png";
import { name, city, description } from "../Data";
export default function About() {
  return (
    <section className="container" id="about">
      <article>
        <h2 className="display-title secondary-color-main">{name}</h2>
        <h3 className="display-subtitle primary-color-main">{city}</h3>
        <p className="lead-text highlight-color-other">{description}</p>
      </article>
      <span>
        <img
          src={aboutBottom}
          alt="A cook preparing food in a kitchen by sprinking on it where the food is in a plate placed on top of a table."
          id="about-bottom"
        />
        <img
          src={aboutTop}
          alt="An open restaurant in sunshine with modern floors and glass top."
          id="about-top"
        />
      </span>
    </section>
  );
}
