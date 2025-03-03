import React from "react";
import { Shield, Code, Users, Zap, Smartphone, Layout, Layers, Palette, Award, Settings, Coffee } from "lucide-react";

const ServicePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Header with Gradient Background */}
      <header className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover" }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Cybersecurity & UI/UX Design Services</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-blue-100">Secure and intuitive solutions to elevate your digital presence and protect your business</p>
        </div>
      </header>

      {/* Cybersecurity Solutions Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Cybersecurity Solutions</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Comprehensive security services to protect your digital assets and customer data</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Shield className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Security Audits & Vulnerability Assessments</h3>
              <p className="text-gray-700">
                We conduct thorough security audits to identify vulnerabilities in your existing systems and provide actionable
                insights to strengthen them. Our comprehensive approach ensures no security gap goes unnoticed.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Code className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Data Encryption & Secure Transactions</h3>
              <p className="text-gray-700">
                Protect your customer's sensitive data by implementing robust encryption protocols for secure transactions.
                We use industry-leading encryption methods to safeguard your data at rest and in transit.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Multi-Factor Authentication (MFA)</h3>
              <p className="text-gray-700">
                We set up multi-factor authentication for your platform to add an extra layer of security, ensuring only authorized users
                can access sensitive data. Our MFA solutions are both secure and user-friendly.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Zap className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Firewalls & Threat Detection</h3>
              <p className="text-gray-700">
                Protect your platform from malicious activities with advanced firewalls and real-time threat detection systems.
                Our proactive monitoring ensures potential threats are identified and neutralized before they cause damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UI/UX Design Services Section with Curved Edges */}
      <section className="bg-gradient-to-b from-blue-50 to-blue-100 py-24 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}></div>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">UI/UX Design Services</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Creating intuitive and engaging user experiences that convert visitors into customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Users className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">User-Centered Design</h3>
              <p className="text-gray-700">
                We design products with the user in mind, ensuring that your platform is intuitive and user-friendly for maximum engagement.
                Our research-based approach identifies user needs and pain points to create delightful experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Smartphone className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Responsive Design</h3>
              <p className="text-gray-700">
                Our designs adapt seamlessly across all devices, providing your users with a consistent and enjoyable experience.
                From desktops to mobile devices, we ensure your platform looks and functions perfectly everywhere.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Layout className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Wireframes & Prototypes</h3>
              <p className="text-gray-700">
                We build wireframes and prototypes to give you a clear vision of the user journey and interface before full development.
                This iterative approach allows for early feedback and refinement, saving time and resources.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Palette className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Branding & Visual Identity</h3>
              <p className="text-gray-700">
                Our design team will help you establish a unique and memorable visual identity that resonates with your target audience.
                From color schemes to typography, we create cohesive brand experiences that leave lasting impressions.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-200" style={{ clipPath: "ellipse(75% 100% at 50% 100%)" }}></div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-gray-200 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Why Choose Us?</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Our expert team is dedicated to delivering secure, intuitive, and user-friendly digital solutions 
              that drive business growth and protect your most valuable assets.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Award className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Experienced Team</h3>
              <p className="text-gray-700">
                Our team consists of cybersecurity experts and UI/UX designers who stay updated on the latest trends to provide innovative solutions.
                With years of industry experience, we bring knowledge and expertise to every project.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Settings className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">Tailored Solutions</h3>
              <p className="text-gray-700">
                We provide customized services that meet your unique business needs, ensuring a personalized approach for every project.
                No cookie-cutter solutions – we design and develop with your specific requirements in mind.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Coffee className="h-8 w-8 text-blue-700" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-800">End-to-End Service</h3>
              <p className="text-gray-700">
                From consultation to post-launch support, we offer comprehensive solutions that ensure your platform is secure and well-designed.
                Our ongoing support means we're with you for the entire journey, not just until launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-12 text-blue-100">
            Ready to secure your platform and enhance user experience? Let's work together to create 
            digital solutions that are both secure and delightful to use.
          </p>
          <a
            href="mailto:susandorothy552@gmail.com"
            className="inline-block bg-white text-blue-900 py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:bg-blue-100 transform hover:scale-105 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>

  
    </div>
  );
};

export default ServicePage;