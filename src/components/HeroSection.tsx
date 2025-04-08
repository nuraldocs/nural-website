import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToContact = () => {
    if (location.pathname === "/") {
      const section = document.getElementById("contact");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  const handleLearnMore = () => {
    navigate("/about");
  };

  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollToContact) {
      const section = document.getElementById("contact");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white to-nural-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Invest smarter, grow faster with{" "}
              <span className="gradient-text">NURAL</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We revolutionize the way you manage investments and financial
              strategies, providing cutting-edge technology and insightful
              analytics to help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-white px-6 py-6 bg-nural-500 hover:bg-nural-600"
                onClick={handleScrollToContact}
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-nural-600 text-nural-700 hover:bg-nural-100 px-6 py-6"
                size="lg"
                onClick={handleLearnMore}
              >
                Learn More
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Join thousands who trust us to simplify investments and maximize
              returns.
            </p>
          </div>

          {/* The chart section remains unchanged */}
          <div className="relative hidden md:block animate-float">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-nural-200 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-nural-300 rounded-full filter blur-3xl opacity-50"></div>
            <div className="nural-shadow bg-white p-8 rounded-2xl border border-gray-100 relative z-10">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="font-bold text-lg">Portfolio Performance</h3>
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +24.8%
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-40 w-full bg-nural-50 rounded-lg flex items-end p-4">
                  <div className="w-1/6 h-1/4 bg-nural-300 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-2/4 bg-nural-400 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-3/4 bg-nural-500 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-2/3 bg-nural-600 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-5/6 bg-nural-700 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-full bg-nural-800 rounded-t-sm mx-1"></div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                </div>
                <div className="flex items-center mt-4">
                  <BarChart3 className="text-nural-600 h-5 w-5 mr-2" />
                  <span className="text-sm text-gray-600">
                    Asset Growth Trend
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
