import hero from "../assets/main/hero.png";
import { Link } from "react-router-dom";
import { name, city, description } from "../Data";
export default function Hero() {
  return (
    <section className="container" id="hero">
      <div className="hero container">
        <article>
          <h1 className="display-title primary-color-other">{name}</h1>
          <h2 className="display-subtitle highlight-color-main">{city}</h2>
          <p className="lead-text highlight-color-main">{description}</p>
          <Link to="/booking" role="button" title="Reserve a table">
            Reserve a table
          </Link>
        </article>
      </div>
      <img
        src={hero}
        alt="A waiter holding a tray of four food items in black apron."
      />
    </section>
  );
}
