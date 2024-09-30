import SpecialCard from "./SpecialCard";
import { Link } from "react-router-dom";
import {specials} from "../Data";
export default function Specials() {
  return (
    <section className="container" id="specials">
      <span>
        <h2 className="display-title highlight-color-other">This weeks specials!</h2>
        <Link to="/online-menu" role="button" title="Online Menu">Online Menu</Link>
      </span>
          <section>
              {specials.map((special) => (
                    <SpecialCard
                        key={special.title}
                        title={special.title}
                        price={special.price}
                        description={special.description}
                        image={special.image}
                        alt={special.alt}
                    />
              ))}
      </section>
    </section>
  );
}
