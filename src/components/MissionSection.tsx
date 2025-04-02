
import { Lightbulb, Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="text-lg text-gray-600">
            Transforming the way the world invests—efficiently, transparently, and intelligently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl neural-shadow">
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 text-neural-600 mr-4" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to democratize investment opportunities by providing state-of-the-art financial solutions 
              that are easy to use, transparent, and tailored to individual and corporate needs. We strive to bridge 
              the gap between technology and finance, ensuring that our clients have the best tools to achieve 
              financial success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl neural-shadow">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-10 w-10 text-neural-600 mr-4" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to be the leading financial services platform that empowers investors with cutting-edge 
              technology, insightful analytics, and expert guidance. We aim to create a world where financial 
              independence is accessible to everyone through smart, simple, and innovative investment solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
