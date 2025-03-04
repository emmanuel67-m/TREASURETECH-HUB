import React from "react";
import { 
  Users, 
  Award, 
  Target, 
  Globe, 
  TrendingUp, 
  Briefcase 
} from "lucide-react";

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Who We Are Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative">
              <img
                src="https://i.pinimg.com/474x/5f/e5/df/5fe5df7d28e769e6408cf8bcb62065a5.jpg"
                alt="Marketing Team"
                width="400"
                height="500"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-black mb-2">WHO WE ARE</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevating Brands Through Strategic Marketing</h2>
              <p className="text-gray-600 mb-6">
                At Marketing Mastery Group, our mission is to create powerful, data-driven marketing solutions that 
                transform how businesses connect with their audiences. We blend creativity, strategic thinking, 
                and cutting-edge technologies to deliver marketing campaigns that drive meaningful engagement and growth.
              </p>
              <p className="text-gray-600 mb-8">
                We understand that in today's competitive landscape, effective marketing requires more than just 
                creative content – it demands a comprehensive, strategic approach that delivers measurable results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-black mr-2">✓</div>
                  <div>Integrated marketing strategies across digital and traditional channels</div>
                </div>
                <div className="flex items-start">
                  <div className="text-black mr-2">✓</div>
                  <div>Data-driven insights and performance optimization</div>
                </div>
                <div className="flex items-start">
                  <div className="text-black mr-2">✓</div>
                  <div>Customized marketing solutions for diverse business needs</div>
                </div>
              </div>
              <button className="mt-8 bg-black text-white py-3 px-6 rounded-md transition-all hover:bg-gray-800">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how our innovative marketing approach can transform your brand's digital presence 
              and drive meaningful business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Audience-Centric Approach</h3>
              <p className="text-gray-600">
                Deep understanding of audience behaviors and preferences to create truly resonant marketing strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
              <p className="text-gray-600">
                Advanced targeting techniques that ensure your message reaches the right audience at the right time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Omnichannel Strategies</h3>
              <p className="text-gray-600">
                Seamless marketing approaches that create consistent brand experiences across all platforms.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive analytics and reporting to track, measure, and optimize marketing performance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Strategic Expertise</h3>
              <p className="text-gray-600">
                A team of experienced marketing professionals with a proven track record of driving business growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Award-Winning Creativity</h3>
              <p className="text-gray-600">
                Innovative and creative marketing solutions that help your brand stand out in a crowded marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hear from businesses that have transformed their marketing approach and achieved remarkable results 
              with our strategic solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500">CMO, TechInnovate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our marketing efforts were scattered until we partnered with this team. They developed a 
                comprehensive strategy that increased our lead generation by 65% in just six months."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">Founder, StartUp Solutions</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Their data-driven approach and creative strategies helped us build a strong brand identity 
                and reach our target audience more effectively than we ever thought possible."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Jessica Martinez</h4>
                  <p className="text-sm text-gray-500">Marketing Director, Global Retail</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Our multichannel marketing campaign was a game-changer. The team's strategic insights 
                and creative execution helped us connect with customers like never before."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;