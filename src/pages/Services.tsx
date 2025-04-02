
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/servicesData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-nural-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive trading and investment solutions to help you achieve financial success
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-nural-500 hover:bg-nural-600 rounded-full">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Services Listing */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Card key={service.id} className="border border-gray-100 nural-shadow hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-2">
                    <div className="mb-4"><service.icon className="h-10 w-10 text-nural-600" /></div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                    <Button asChild variant="outline" className="w-full rounded-full border-nural-500 text-nural-600 hover:bg-nural-50">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        Book Consultation <Calendar className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="py-20 bg-nural-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
              <p className="text-lg text-gray-600">
                We're committed to helping you navigate the financial markets with confidence and clarity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nural-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our team of seasoned professionals brings decades of combined experience in trading and financial markets.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nural-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Personalized Approach</h3>
                <p className="text-gray-600">
                  We tailor our services to your unique financial situation, goals, and risk tolerance for optimal results.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nural-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  Our clients consistently outperform market averages through our disciplined, data-driven strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-nural-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Future?</h2>
              <p className="text-xl mb-8">
                Schedule a free consultation with one of our experts to discuss how we can help you achieve your financial goals.
              </p>
              <Button asChild className="bg-white text-nural-600 hover:bg-gray-100 rounded-full text-lg px-8 py-6">
                <Link to="/contact">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;

