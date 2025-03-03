import React from "react";
import { ArrowRight, Star, Shield, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Header with Gradient Background */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover" }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About TREASURETECH HUB</h1>
          <p className="mt-4 text-xl max-w-2xl mx-auto text-blue-100">Learn more about our mission, vision, and the values that drive our innovation.</p>
        </div>
      </header>

      {/* Mission Section with Image */}
      <section className="py-24 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              At <span className="font-semibold text-blue-800">TREASURETECH HUB</span>, our mission is to provide innovative, secure, and user-centric solutions that help businesses
              thrive in the digital world. We aim to create seamless digital experiences that not only address security challenges
              but also enhance user engagement and drive measurable results.
            </p>
            <div className="mt-8 flex items-center">
              <a href="#vision" className="group flex items-center text-blue-700 font-medium hover:text-blue-900 transition-colors">
                Learn about our vision
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <img src="https://i.pinimg.com/474x/b2/6b/fd/b26bfd236b4190df812cd6096fa8138e.jpg" alt="Our mission" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section with Curved Edges */}
      <section id="vision" className="bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}></div>
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-blue-900">Our Vision</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              Our vision is to become the <span className="font-semibold">leading provider of comprehensive digital solutions</span>, where innovation meets security. We
              aim to empower businesses with the tools they need to succeed while maintaining the highest standards of security and
              user experience. By 2030, we aspire to transform how businesses approach digital challenges, creating a more secure and user-friendly digital ecosystem.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-200" style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}></div>
      </section>

      {/* Values Section with Cards */}
      <section className="py-24 px-6 bg-gray-200 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Innovation Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Star className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Innovation</h3>
              <p className="text-gray-700 flex-grow">
                We believe in constantly evolving and adopting new technologies to create groundbreaking solutions that drive success.
                Our team stays at the cutting edge of industry trends to deliver forward-thinking solutions.
              </p>
            </div>
            
            {/* Security Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Security</h3>
              <p className="text-gray-700 flex-grow">
                Our top priority is ensuring the highest levels of security, protecting your business and your users' data at all
                times. We implement robust security measures in everything we create, giving you peace of mind.
              </p>
            </div>
            
            {/* Customer-Centricity Card */}
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Customer-Centricity</h3>
              <p className="text-gray-700 flex-grow">
                We are committed to putting our clients first, understanding their unique needs, and delivering tailored solutions
                that help them grow. Your success is our success, and we partner with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Join Our Journey</h2>
          <p className="text-xl mb-12 text-blue-100">
            We're always looking for talented and passionate individuals to join our team. If you share our vision and values, get in
            touch with us today and become part of something extraordinary!
          </p>
          <a
            href="mailto:sandraevelyn524@gmail.com"
            className="inline-block bg-white text-blue-900 py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

     
    </div>
  );
};

export default AboutPage;