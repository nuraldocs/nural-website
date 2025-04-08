
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Nural's coaching transformed my approach to trading. I've seen consistent growth in my portfolio and gained confidence in my investment decisions.",
      name: "Sarah Johnson",
      title: "Individual Investor",
      initials: "SJ"
    },
    {
      quote: "The asset management services provided by Nural have exceeded my expectations. Their strategic approach has helped me navigate volatile markets with ease.",
      name: "Michael Chen",
      title: "Business Owner",
      initials: "MC"
    },
    {
      quote: "After just three months of coaching with Nural, I've developed a trading system that fits my lifestyle and financial goals. Highly recommended!",
      name: "David Rodriguez",
      title: "Part-time Trader",
      initials: "DR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-600">
            Hear from traders and investors who have transformed their financial outcomes with Nural.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 nural-shadow">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-nural-400 mb-4" />
                <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4 border-t border-gray-100 pt-4">
                <Avatar>
                  <AvatarFallback className="bg-nural-100 text-nural-700">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
