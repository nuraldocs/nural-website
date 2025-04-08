import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionSection from "@/components/MissionSection";
import FounderSection from "@/components/FounderSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, TrendingUp, Users, BookOpen, Target, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-nural-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Nural</h1>
              <p className="text-xl text-gray-600 mb-8">
                We're a team of passionate financial experts dedicated to helping individuals and businesses succeed in the markets.
              </p>
              <div className="flex justify-center">
                <Button asChild className="bg-nural-500 hover:bg-nural-600 rounded-full">
                  <Link to="/contact">Get to Know Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Nural was founded in 2015 by a group of finance professionals who saw a gap in the market for transparent, accessible trading education and services.
                  </p>
                  <p>
                    After years of witnessing how traditional financial institutions often failed to serve individual investors effectively, we decided to create a company that would prioritize client success above all else.
                  </p>
                  <p>
                    Starting with just a small team and a handful of clients, we've grown steadily over the years by maintaining our commitment to excellence, transparency, and results-driven strategies.
                  </p>
                  <p>
                    Today, Nural serves clients across the globe, from individual traders to institutional investors, all while maintaining the personalized approach that has been our hallmark since day one.
                  </p>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                  alt="Nural team meeting" 
                  className="rounded-xl shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision Section */}
        <MissionSection />
        
        {/* Our Values */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600">
                These principles guide everything we do at Nural
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <TrendingUp className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from the strategies we develop to the support we provide.
                </p>
              </div>
              
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Shield className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-600">
                  We operate with complete transparency and honesty, always putting our clients' interests first.
                </p>
              </div>
              
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <BookOpen className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <p className="text-gray-600">
                  We believe in empowering our clients through knowledge, providing the tools and understanding they need to succeed.
                </p>
              </div>
              
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Users className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community</h3>
                <p className="text-gray-600">
                  We foster a supportive community of traders and investors who learn from and inspire each other.
                </p>
              </div>
              
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Target className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly evolve our approaches and strategies to stay ahead in the ever-changing financial markets.
                </p>
              </div>
              
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Award className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Results</h3>
                <p className="text-gray-600">
                  We measure our success by the results we deliver to our clients, not by our own profit margins.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Founder Section */}
        <FounderSection />
        
        {/* Team Section */}
        {/* Team section is now hidden */}
        {/* <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-lg text-gray-600">
                Meet the experienced professionals who make Nural's success possible
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Head of Trading Education",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  bio: "Former institutional trader with 15 years of experience at top Wall Street firms."
                },
                {
                  name: "Michael Chen",
                  role: "Chief Investment Strategist",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                  bio: "Certified Financial Analyst with a track record of outperforming market indices."
                },
                {
                  name: "David Rodriguez",
                  role: "Director of Client Success",
                  image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  bio: "Dedicated to ensuring clients receive personalized support and achieve their goals."
                },
                {
                  name: "Jennifer Lee",
                  role: "Risk Management Specialist",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                  bio: "Expert in developing risk frameworks that protect capital while maximizing returns."
                }
              ].map((member, index) => (
                <div key={index} className="bg-nural-50 rounded-xl overflow-hidden shadow-md">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-nural-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        
        {/* CTA Section */}
        <section className="py-16 bg-nural-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8">
                Ready to take your trading and investment skills to the next level? Get in touch today.
              </p>
              <Button asChild className="bg-white text-nural-600 hover:bg-gray-100 rounded-full text-lg px-8 py-6">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
