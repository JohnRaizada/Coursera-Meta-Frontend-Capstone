export default function TestimonialCard({ name, rating, comment, image }) {
  return (
    <article className="testimonial-card">
      <h3 className="section-category primary-color-main">{name}</h3>
      <span>
        <div>
          <img src={image} alt="A person" />
          <p className="section-category primary-color-main">{rating} ⭐</p>
        </div>
        <p className="highlight-text highlight-color-other">{comment}</p>
      </span>
    </article>
  );
}
