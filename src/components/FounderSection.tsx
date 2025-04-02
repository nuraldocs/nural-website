
import { Award, Star, GraduationCap } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Founder</h2>
          <p className="text-lg text-gray-600">
            Meet the visionary behind Nural's revolutionary financial approach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold gradient-text">Siddarth Gowda</h3>
              <p className="text-gray-700 leading-relaxed">
                Siddarth Gowda, the visionary founder behind Nural, has established himself as a pioneering figure in the intersection of finance and technology. With a background that marries deep expertise in financial markets with a keen understanding of artificial intelligence, Gowda identified a critical gap in the trading industry: the absence of a unified platform that could cater comprehensively to a trader's needs.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Motivated by the desire to streamline the trading process and enhance decision-making through technology, he embarked on creating Nural. Gowda's vision was to democratize access to advanced trading tools, making it possible for traders of all levels to leverage AI for informed decision-making. His leadership and innovative approach have been instrumental in developing Nural into a platform that not only simplifies trading but also empowers users to execute strategies with greater precision and confidence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Siddarth's commitment to innovation and his drive to continuously improve the trading experience underscore his role as a transformative leader in the fintech space.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg neural-shadow">
                  <Award className="h-8 w-8 text-neural-600 mb-2" />
                  <h4 className="font-semibold text-center">10+ Years Experience</h4>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg neural-shadow">
                  <Star className="h-8 w-8 text-neural-600 mb-2" />
                  <h4 className="font-semibold text-center">Award-Winning Strategies</h4>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg neural-shadow">
                  <GraduationCap className="h-8 w-8 text-neural-600 mb-2" />
                  <h4 className="font-semibold text-center">4,000+ Investors Guided</h4>
                </div>
              </div>

              <blockquote className="italic border-l-4 border-neural-600 pl-4 py-2 text-gray-600">
                "Success in investing isn't just about strategies and indicators. It's about leveraging technology and expertise to make smarter decisions in any market condition."
              </blockquote>
            </div>
          </div>
          
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative">
              <div className="aspect-[16/9] rounded-xl overflow-hidden neural-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Siddarth Gowda, Founder of NURAL" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg neural-shadow max-w-xs">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold block mb-1">Featured in:</span>
                  Bloomberg, CNBC, Financial Times, Wall Street Journal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
