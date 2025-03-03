import { Shield, Lock, Database, Globe, Users, Award } from "lucide-react"

 function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Who We Are Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2  items-center">
            <div className="relative">
              <img
                src="https://i.pinimg.com/474x/87/9b/38/879b38c61e588dda6bac875c299e3c00.jpg"
                alt="Cybersecurity Expert"
                width="400"
                height="500"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-black mb-2">WHO WE ARE</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We Secure Your Digital Future</h2>
              <p className="text-gray-600 mb-6">
                At TREASURETECH HUB, our mission is to provide innovative, secure, and user-centric solutions that help
                businesses thrive in the digital world. We aim to create seamless digital experiences that not only
                address security challenges but also enhance user engagement and drive measurable results.
              </p>
              <p className="text-gray-600 mb-8">
                Building your own cybersecurity infrastructure has always required extensive technical knowledge,
                complex coding languages, or hiring an expensive security firm for thousands of dollars each month of
                work.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-black mr-2">✓</div>
                  <div>Advanced threat detection and prevention systems.</div>
                </div>
                <div className="flex items-start">
                  <div className="text-black mr mr-2">✓</div>
                  <div>24/7 security monitoring and incident response.</div>
                </div>
                <div className="flex items-start">
                  <div className="text-black mr mr-2">✓</div>
                  <div>Comprehensive security audits and compliance solutions.</div>
                </div>
              </div>
              <button className="mt-8 bg-black mr  text-white py-3 px-6 rounded-md transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our world-class cybersecurity solutions with our beautiful protection products. We want to be a
              part of your safer, successful and future growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black " />
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Protection</h3>
              <p className="text-gray-600">
                State-of-the-art security solutions that protect your digital assets from evolving threats.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-black " />
              </div>
              <h3 className="text-xl font-bold mb-3">Data Encryption</h3>
              <p className="text-gray-600">
                Enterprise-grade encryption protocols that keep your sensitive information secure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Infrastructure</h3>
              <p className="text-gray-600">
                Robust security architecture designed to protect your systems from the ground up.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Global Threat Intelligence</h3>
              <p className="text-gray-600">
                Real-time monitoring and analysis of global security threats to keep you protected.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Security Team</h3>
              <p className="text-gray-600">
                Dedicated cybersecurity professionals with decades of combined industry experience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-3">Compliance Certified</h3>
              <p className="text-gray-600">
                Solutions that help you meet industry regulations and compliance requirements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover how our cybersecurity solutions have helped businesses protect their digital assets and build
              customer trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">CTO, TechInnovate</p>
                </div>
              </div>
              <p className="text-gray-600">
                "TREASURETECH HUB transformed our security posture. Their proactive approach to cybersecurity has
                prevented numerous potential breaches and given us peace of mind."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-500">CISO, FinanceSecure</p>
                </div>
              </div>
              <p className="text-gray-600">
                "In the financial sector, security is non-negotiable. TREASURETECH HUB provides us with enterprise-grade
                protection that meets all our compliance requirements."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow border">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold">Jessica Martinez</h4>
                  <p className="text-sm text-gray-500">CEO, HealthData Systems</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Patient data security is our top priority. TREASURETECH HUB's solutions have helped us maintain HIPAA
                compliance while providing seamless access to authorized personnel."
              </p>
              <div className="text-red-600 text-2xl mt-4">★★★★★</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs