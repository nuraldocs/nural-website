
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryForm from "@/components/EnquiryForm";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarClock, Mail, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-nural-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're here to answer your questions and help you take the next
                step in your financial journey.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Phone className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team
                </p>
                <a
                  href="tel:+18001234567"
                  className="text-nural-600 font-medium text-lg"
                >
                  Siddharth Gowda
                  <br />
                  +91 831 076 0036
                </a>
              </div>

              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <Mail className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us a message anytime</p>
                <a
                  href="mailto:team@thenural.com"
                  className="text-nural-600 font-medium text-lg"
                >
                  team@thenural.com
                </a>
              </div>

              <div className="bg-nural-50 p-8 rounded-xl text-center">
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-nural-100 rounded-full">
                  <MapPin className="h-8 w-8 text-nural-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Visit Us</h3>
                <p className="text-gray-600 mb-4">Come to our office</p>
                <address className="text-nural-600 font-medium text-lg not-italic">
                  Bengaluru
                  <br />
                  Karnataka, India
                </address>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white nural-shadow rounded-lg overflow-hidden">
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
                  <TabsContent value="enquiry" className="p-6" id="contact">
                    <EnquiryForm />
                  </TabsContent>
                  <TabsContent value="schedule" className="p-6">
                    <ScheduleMeeting />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Office Hours & Location */}
        <section className="py-16 bg-nural-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="h-8 w-8 text-nural-600" />
                  Office Hours
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-200">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  Note: All times are in Eastern Time (ET). Appointments outside
                  of regular hours may be arranged for clients in different time
                  zones.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="h-8 w-8 text-nural-600" />
                  Our Location
                </h2>
                <div className="h-80 bg-gray-300 rounded-xl overflow-hidden">
                  <iframe
                    title="Bengaluru Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622300.1336800365!2d77.34021784344957!3d12.953790178034556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9a2bdc3%3A0x503f1e49d85c060!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1712577988993!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <p className="mt-6 text-gray-600">
                  Our office is conveniently located in the heart of the
                  financial district, with easy access to public transportation
                  and nearby parking facilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about our services and
                approaches
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How do I know which service is right for me?",
                    answer:
                      "We recommend starting with a free consultation where we can assess your financial goals, trading experience, and time commitment to recommend the most suitable service for your needs.",
                  },
                  {
                    question: "What is your refund policy?",
                    answer:
                      "We offer a 30-day satisfaction guarantee for our courses and coaching programs. If you're not satisfied, we'll provide a full refund within the first 30 days of your purchase.",
                  },
                  {
                    question:
                      "Do I need prior trading experience to work with you?",
                    answer:
                      "No, we work with clients at all experience levels, from complete beginners to advanced traders. Our programs are tailored to meet you where you are in your trading journey.",
                  },
                  {
                    question: "How quickly can I expect to see results?",
                    answer:
                      "Results vary based on your starting point, commitment level, and market conditions. Most clients begin to see improvements in their trading approach within 4-8 weeks, but building consistent profitability typically takes 6-12 months of dedicated practice.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-nural-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">
                  Don't see your question answered here?
                </p>
                <a
                  href="#contact"
                  className="text-nural-600 font-medium hover:underline"
                >
                  Ask Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
