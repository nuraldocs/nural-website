
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Neural's coaching transformed my approach to trading. I've seen consistent growth in my portfolio and gained confidence in my investment decisions.",
      name: "Sarah Johnson",
      title: "Individual Investor",
      initials: "SJ"
    },
    {
      quote: "The asset management services provided by Neural have exceeded my expectations. Their strategic approach has helped me navigate volatile markets with ease.",
      name: "Michael Chen",
      title: "Business Owner",
      initials: "MC"
    },
    {
      quote: "After just three months of coaching with Neural, I've developed a trading system that fits my lifestyle and financial goals. Highly recommended!",
      name: "David Rodriguez",
      title: "Part-time Trader",
      initials: "DR"
    }
  ];

  return (
    <section id="testimonials" className="section has-background-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-3">What Our Clients Say</h2>
          <p className="subtitle is-5 has-text-grey-dark">
            Hear from traders and investors who have transformed their financial outcomes with Neural.
          </p>
        </div>

        <div className="columns is-multiline">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="column is-4">
              <div className="card neural-shadow">
                <div className="card-content">
                  <div className="mb-4">
                    <Quote className="has-text-neural-light" size={32} />
                  </div>
                  <p className="is-italic has-text-grey-dark mb-5">
                    {testimonial.quote}
                  </p>
                  <div className="is-flex is-align-items-center pt-4 border-top">
                    <div className="is-flex is-justify-content-center is-align-items-center has-background-neural-light has-text-neural-dark" 
                         style={{ width: "40px", height: "40px", borderRadius: "50%" }}>
                      {testimonial.initials}
                    </div>
                    <div className="ml-3">
                      <p className="has-text-weight-bold">{testimonial.name}</p>
                      <p className="is-size-7 has-text-grey">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
