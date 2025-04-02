
import { Check, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ComparisonSection = () => {
  const comparisonData = [
    {
      feature: "Personalized Strategy",
      nural: true,
      others: false,
    },
    {
      feature: "1-on-1 Coaching",
      nural: true,
      others: false,
    },
    {
      feature: "24/7 Support",
      nural: true,
      others: false,
    },
    {
      feature: "Risk Management Focus",
      nural: true,
      others: false,
    },
    {
      feature: "Advanced Technical Analysis",
      nural: true,
      others: true,
    },
    {
      feature: "Community Access",
      nural: true,
      others: true,
    },
    {
      feature: "Performance Tracking",
      nural: true,
      others: false,
    },
    {
      feature: "Psychological Training",
      nural: true,
      others: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nural vs Others</h2>
          <p className="text-lg text-gray-600">
            See why traders choose Nural for their trading education and coaching needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-6 text-center font-bold">
            <div className="col-span-1">Features</div>
            <div className="col-span-1 text-nural-600">Nural</div>
            <div className="col-span-1 text-gray-600">Others</div>
          </div>

          <Card className="neural-shadow rounded-xl overflow-hidden">
            <CardContent className="p-0">
              {comparisonData.map((item, index) => (
                <div 
                  key={index} 
                  className={`grid grid-cols-3 gap-4 p-4 items-center ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <div className="col-span-1 font-medium">{item.feature}</div>
                  <div className="col-span-1 flex justify-center">
                    {item.nural ? (
                      <Check className="text-green-500 h-6 w-6" />
                    ) : (
                      <X className="text-red-500 h-6 w-6" />
                    )}
                  </div>
                  <div className="col-span-1 flex justify-center">
                    {item.others ? (
                      <Check className="text-green-500 h-6 w-6" />
                    ) : (
                      <X className="text-red-500 h-6 w-6" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="mt-10 text-center">
            <p className="text-gray-600 italic">
              "Nural's personalized approach and dedicated support set us apart from the competition. 
              We don't just teach you how to trade; we help you build a sustainable trading career."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
