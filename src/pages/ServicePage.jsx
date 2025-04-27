import React from "react";
import { 
  PenTool, 
  BarChart, 
  Globe, 
  Target, 
  Share2, 
  TrendingUp, 
  Briefcase, 
  MousePointer 
} from "lucide-react";

const ServicePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-sans">
      {/* Hero Header with Black Background */}
      <header className="bg-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern */}
          <div className="absolute inset-0" style={{ backgroundImage: "url('/api/placeholder/1200/800')", backgroundSize: "cover" }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Comprehensive Marketing & Advertising Solutions</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto text-gray-300">Innovative strategies to elevate your brand, engage your audience, and drive business growth</p>
        </div>
      </header>

      {/* Creative Services Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Our Marketing Services</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Tailored marketing solutions designed to help your brand stand out and succeed</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <PenTool className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Creative Services</h3>
              <p className="text-gray-700">
                Our team of talented designers and copywriters collaborate to create compelling advertising campaigns 
                that capture attention and drive engagement. We craft unique, memorable content that resonates with your target audience.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <BarChart className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Media Planning</h3>
              <p className="text-gray-700">
                Strategic media planning to maximize your advertising impact. We help you make informed decisions 
                about ad placement, timing, and channels to ensure your message reaches the right audience at the right time.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Globe className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Digital Marketing</h3>
              <p className="text-gray-700">
                Cutting-edge digital marketing strategies that leverage the latest technologies and platforms. 
                We develop comprehensive digital campaigns that effectively reach and engage your target audience across multiple channels.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Target className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Branding</h3>
              <p className="text-gray-700">
                Develop a strong, recognizable brand identity that sets you apart from competitors. 
                We create comprehensive branding strategies that capture your unique value proposition and resonate with your target market.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Analytics Section with Curved Edges */}
      <section className="bg-gray-100 py-24 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gray-50" style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}></div>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black">Digital Engagement & Insights</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">Connecting your brand with your audience through strategic digital presence and data-driven insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Share2 className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Social Media Marketing</h3>
              <p className="text-gray-700">
                Our social media experts help you build and maintain a powerful online presence across all major platforms. 
                We create engaging content, manage community interactions, and build brand awareness that drives meaningful connections.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Analytics & Reporting</h3>
              <p className="text-gray-700">
                Comprehensive analytics and detailed reporting to track your campaign performance. 
                We provide actionable insights that help you make data-driven decisions and continuously optimize your marketing strategies.
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
            <h2 className="text-3xl md:text-4xl font-bold text-black">Why Partner With Us?</h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Our dedicated team combines creativity, strategic thinking, and data-driven insights to deliver marketing solutions that drive real business results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Briefcase className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Strategic Expertise</h3>
              <p className="text-gray-700">
                Our team brings deep marketing expertise and strategic insights to every project. 
                We stay ahead of industry trends to provide innovative solutions that give your brand a competitive edge.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <MousePointer className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Targeted Approach</h3>
              <p className="text-gray-700">
                We develop customized marketing strategies tailored to your specific business goals and target audience. 
                Our personalized approach ensures maximum relevance and impact for your campaigns.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-200">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-gray-100 rounded-full">
                  <Globe className="h-8 w-8 text-black" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">Comprehensive Support</h3>
              <p className="text-gray-700">
                We provide end-to-end marketing support from initial strategy development through execution and ongoing optimization. 
                Our commitment extends beyond campaign launch to ensure sustained success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Grow Your Brand?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Let's discuss how our marketing and advertising solutions can help you achieve your business objectives 
            and create meaningful connections with your audience.
          </p>
          <a
            href="mailto:sandraevelyn524@gmail.com"
            className="inline-block bg-white text-black py-3 px-8 rounded-full text-lg font-bold shadow-lg hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;