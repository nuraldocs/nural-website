
import { ChartLineUp, Briefcase, Users, BookOpen, DollarSign, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: <ChartLineUp className="h-10 w-10 text-neural-600" />,
      title: "Trading Coaching",
      description: "Personalized one-on-one coaching sessions to develop your trading strategy and improve your market analysis skills."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-neural-600" />,
      title: "Asset Management",
      description: "Professional management of your stock portfolio with a focus on long-term growth and risk mitigation."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-neural-600" />,
      title: "Trading Education",
      description: "Comprehensive courses and resources to help you understand market dynamics and trading principles."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-neural-600" />,
      title: "Strategy Development",
      description: "Custom trading strategies tailored to your financial goals, risk tolerance, and market conditions."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-neural-600" />,
      title: "Investment Planning",
      description: "Strategic investment plans that align with your long-term financial objectives and market opportunities."
    },
    {
      icon: <Users className="h-10 w-10 text-neural-600" />,
      title: "Group Workshops",
      description: "Interactive workshops where you can learn and collaborate with other traders under expert guidance."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive trading and investment solutions to help you navigate the financial markets with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 neural-shadow hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
