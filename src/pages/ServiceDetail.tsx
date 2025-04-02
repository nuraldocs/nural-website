
import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceById } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? getServiceById(serviceId) : null;
  
  useEffect(() => {
    if (!service) {
      navigate("/services", { replace: true });
    }
  }, [service, navigate]);
  
  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-nural-50 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Button variant="outline" asChild className="rounded-full">
                <Link to="/services" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" /> Back to Services
                </Link>
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-2/3">
                <div className="mb-4 inline-block p-3 bg-nural-100 rounded-full">
                  <service.icon className="h-10 w-10 text-nural-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                <p className="text-xl text-gray-600 mb-8">
                  {service.description}
                </p>
              </div>
              
              <div className="md:w-1/3 bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-4">Starting at</h3>
                <p className="text-3xl font-bold text-nural-600 mb-4">{service.pricing}</p>
                <Button asChild className="w-full rounded-full bg-nural-500 hover:bg-nural-600">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Detailed Description */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">About This Service</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-8">{service.fullDescription}</p>
              </div>
              
              <h2 className="text-3xl font-bold mt-12 mb-6">Key Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-nural-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-nural-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-10 text-center">You May Also Be Interested In</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {getRelatedServices(serviceId).map(relService => (
                <div key={relService.id} className="bg-white rounded-xl shadow-md p-6">
                  <div className="mb-4">
                    <relService.icon className="h-8 w-8 text-nural-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{relService.title}</h3>
                  <p className="text-gray-600 mb-4">{relService.description}</p>
                  <Button asChild variant="outline" className="w-full rounded-full border-nural-500 text-nural-600 hover:bg-nural-50">
                    <Link to={`/services/${relService.id}`}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-nural-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8">
                Contact us today to learn how our {service.title} can help you achieve your financial goals.
              </p>
              <Button asChild className="bg-white text-nural-600 hover:bg-gray-100 rounded-full text-lg px-8 py-6">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Helper function to get 3 related services (excluding the current one)
const getRelatedServices = (currentServiceId?: string) => {
  const services = require("@/data/servicesData").services;
  return services
    .filter((service: any) => service.id !== currentServiceId)
    .slice(0, 3);
};

export default ServiceDetail;
