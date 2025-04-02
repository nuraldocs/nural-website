
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EnquiryForm from "@/components/EnquiryForm";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import Footer from "@/components/Footer";
import InstagramFeed from "@/components/InstagramFeed";
import ComparisonSection from "@/components/ComparisonSection";
import FounderSection from "@/components/FounderSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <MissionSection />
        
        <ServicesSection />
        
        <ComparisonSection />
        
        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Neural</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-neural-600 pl-4">
                    <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-gray-600">Our team consists of seasoned traders and financial experts with decades of combined experience in the markets.</p>
                  </div>
                  <div className="border-l-4 border-neural-600 pl-4">
                    <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                    <p className="text-gray-600">We understand that every trader and investor has unique goals, which is why our coaching and strategies are tailored to you.</p>
                  </div>
                  <div className="border-l-4 border-neural-600 pl-4">
                    <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Our clients consistently outperform market averages through disciplined strategies and continuous improvement.</p>
                  </div>
                  <div className="border-l-4 border-neural-600 pl-4">
                    <h3 className="text-xl font-semibold mb-2">Continuous Support</h3>
                    <p className="text-gray-600">We're with you every step of your trading journey, providing guidance, feedback, and encouragement.</p>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] neural-shadow rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-neural-700/20 to-neural-500/20"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Trading and coaching" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        <FounderSection />
        
        <TestimonialsSection />
        
        <InstagramFeed />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to transform your trading approach? Contact us today to start your journey.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="enquiry" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="enquiry" className="text-base">
                    <Mail className="mr-2 h-4 w-4" />
                    Submit Enquiry
                  </TabsTrigger>
                  <TabsTrigger value="schedule" className="text-base">
                    <CalendarClock className="mr-2 h-4 w-4" />
                    Schedule a Meeting
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="enquiry" className="p-6 bg-white neural-shadow rounded-lg">
                  <EnquiryForm />
                </TabsContent>
                <TabsContent value="schedule" className="p-6 bg-white neural-shadow rounded-lg">
                  <ScheduleMeeting />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
