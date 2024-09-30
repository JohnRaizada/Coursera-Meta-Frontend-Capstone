import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../Data";
export default function Testimonials() {
    return (
      <section className="container" id="testimonial">
        <h2 className="display-title primary-color-main">Testimonials</h2>
            <section>
                {testimonials.map((testimonial) => (
                    <TestimonialCard
                        key={testimonial.name}
                        name={testimonial.name}
                        rating={testimonial.rating}
                        comment={testimonial.comment}
                        image={testimonial.image}
                    />
                ))}
        </section>
      </section>
    );
}
