import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceById } from "@/data/servicesData";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Calendar } from "lucide-react";

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
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    Book Consultation <Calendar className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
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
                <Link to="/contact" className="flex items-center justify-center gap-2">
                  Book Consultation <Calendar className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail;
