import delivery from "../assets/main/delivery.png";
import { Link } from "react-router-dom";
export default function SpecialCard({ title, price, description, image, alt }) {
  return (
    <article className="specials-card" title={title}>
      <div>
        <img src={image} alt={alt} />
        <span>
          <h2 className="card-title highlight-color-other">{title}</h2>
          <p className="highlight-text secondary-color-main">{price}</p>
        </span>
        <p className="paragraph-text primary-color-main">{description}</p>
      </div>
      <Link to="/order-delivery" id="order-delivery">
        <span>
          <h3 className="section-category highlight-color-other">
            Order a delivery
          </h3>
          <img src={delivery} alt="A delivery person on a bike" />
        </span>
      </Link>
    </article>
  );
}
