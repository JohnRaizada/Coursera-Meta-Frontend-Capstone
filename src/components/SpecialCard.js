import delivery from "../assets/main/delivery.png";
export default function SpecialCard({ title, price, description, image, alt }) {
  return (
    <article className="specials-card">
      <div>
        <img src={image} alt={alt} />
        <span>
          <h2 className="card-title highlight-color-other">{title}</h2>
          <p className="highlight-text secondary-color-main">{price}</p>
        </span>
        <p className="paragraph-text primary-color-main">{description}</p>
      </div>
      <span>
        <h3 className="section-category highlight-color-other">Order a delivery</h3>
        <img src={delivery} alt="A delivery person on a bike" />
      </span>
    </article>
  );
}
