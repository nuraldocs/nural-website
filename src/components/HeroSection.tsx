
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-24 overflow-hidden bg-gradient-to-b from-white to-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Master the Market with <span className="gradient-text">Neural</span> Trading Coaching
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Expert guidance for stock asset management and trading strategies that help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-neural-600 hover:bg-neural-700 text-white px-6 py-6" size="lg">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-neural-600 text-neural-700 hover:bg-neural-100 px-6 py-6" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative hidden md:block animate-float">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-neural-200 rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-neural-300 rounded-full filter blur-3xl opacity-50"></div>
            <div className="neural-shadow bg-white p-8 rounded-2xl border border-gray-100 relative z-10">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="font-bold text-lg">Portfolio Performance</h3>
                <span className="text-green-500 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +24.8%
                </span>
              </div>
              <div className="space-y-4">
                <div className="h-40 w-full bg-neural-50 rounded-lg flex items-end p-4">
                  <div className="w-1/6 h-1/4 bg-neural-300 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-2/4 bg-neural-400 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-3/4 bg-neural-500 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-2/3 bg-neural-600 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-5/6 bg-neural-700 rounded-t-sm mx-1"></div>
                  <div className="w-1/6 h-full bg-neural-800 rounded-t-sm mx-1"></div>
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
                  <BarChart3 className="text-neural-600 h-5 w-5 mr-2" />
                  <span className="text-sm text-gray-600">Asset Growth Trend</span>
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
