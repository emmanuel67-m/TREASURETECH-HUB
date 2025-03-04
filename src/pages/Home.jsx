"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function Home() {
  // Reviews state and functions
  const [currentReview, setCurrentReview] = useState(0)
  const reviews = [
    {
      initial: "J",
      text: "This product exceeded my expectations. The quality is fantastic, and the customer service was top-notch. Highly recommended!",
      name: "John Doe",
      date: "January 2025",
    },
    {
      initial: "S",
      text: "An absolute game changer for my business. I can't imagine working without it now. Great support and an intuitive interface.",
      name: "Sarah Lee",
      date: "February 2025",
    },
    {
      initial: "M",
      text: "I've been using this for a few months and it's been a great experience. Simple, efficient, and incredibly useful. Well worth the price!",
      name: "Mark Smith",
      date: "March 2025",
    },
  ]

  const prevReview = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1)
  }

  const nextReview = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1)
  }

  // Image gallery state and functions
  const [currentImage, setCurrentImage] = useState(0)
  const imageData = [
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.45.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49%20(1).jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.47.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.43.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.51.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.46%20(1).jpeg/:/rs=w:719,h:1230",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.48.jpeg/:/",
    },
    {
      image:
        "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.51%20(1).jpeg/:/",
    },
  ]

  const prevImage = () => {
    setCurrentImage(currentImage === 0 ? imageData.length - 1 : currentImage - 1)
  }

  const nextImage = () => {
    setCurrentImage(currentImage === imageData.length - 1 ? 0 : currentImage + 1)
  }

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextReview()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentReview])

  // Auto-advance image gallery
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)
    return () => clearInterval(interval)
  }, [currentImage])

  // Toggle show more state
  const [showMore1, setShowMore1] = useState(false)
  const [showMore2, setShowMore2] = useState(false)
  const toggleShowMore1 = () => setShowMore1(!showMore1)
  const toggleShowMore2 = () => setShowMore2(!showMore2)

  // Partners data
  const partners = [
    {
      name: "Google",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(2).png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://www.google.com",
    },
    {
      name: "Shopify",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/rs=w:178,h:100,cg:true,m/cr=w:178,h:100/qt=q:54",
      link: "https://www.shopify.com",
    },
    {
      name: "TikTok",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(1).png/:/rs=w:178,h:100,cg:true,m/cr=w:178,h:100/qt=q:54",
      link: "https://www.tiktok.com/@ecomabubakar",
    },
    {
      name: "Instagram",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/OIP.jpg/:/rs=w:97,h:100,cg:true,m/cr=w:97,h:100/qt=q:54",
      link: "https://www.instagram.com",
    },
    {
      name: "Google Ads",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/OIP%20(1).jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://ads.google.com",
    },
    {
      name: "Klaviyo",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/klaviyo_logo-p-500-3fcadbbd165f4f729ccff4854c9.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://www.klaviyo.com",
    },
  ]

  return (
    <div className="flex flex-col font-sans">
      {/* Background Image Container */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        
        {/* Background Image */}
        <img 
          src="https://i.pinimg.com/474x/36/3f/a7/363fa71ec3ef14f8806019fa5679158d.jpg" 
          alt="E-commerce growth concept with wooden blocks" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {/* E-Commerce Text */}
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-wider transform -rotate-6">
          E-COMMERCE
        </h2>
        
        {/* Learn More Button */}
        <div className="bg-black rounded-full p-4 sm:p-6 md:p-8">
        <a href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg==" target="_blank" rel="noopener noreferrer">
  <button className="border border-white text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base uppercase tracking-wider font-medium">
    Learn More
  </button>
</a>

        </div>
      </div>
    


     

     

     

      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">OUR SERVICES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img
                src="https://i.pinimg.com/736x/d5/e4/ef/d5e4efdc5a912177362397d96c5584d6.jpg"
                alt="Creative Services"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">CREATIVE SERVICES</h3>
                <p className="text-gray-600">
                  Our team of talented designers and copywriters work together to create compelling and effective
                  advertising campaigns that capture the attention of your target audience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img
                src="https://i.pinimg.com/474x/8e/1b/89/8e1b89db408243e8f29abf9718213b04.jpg"
                alt="Media Planning"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">MEDIA PLANNING</h3>
                <p className="text-gray-600">
                  We help you make informed decisions about where and when to place your ads to maximize their impact
                  and reach your desired audience.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <img
                src="https://i.pinimg.com/474x/a8/62/89/a8628920a3c92be9a97acd1872f242e1.jpg"
                alt="Digital Marketing"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">DIGITAL MARKETING</h3>
                <p className="text-gray-600">
                  We specialize in digital marketing strategies that leverage the latest technologies and platforms to
                  effectively reach and engage your target audience.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img
                src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(1).jpg/:/cr=t:12.23%25,l:0%25,w:100%25,h:75.53%25/rs=w:388,h:194,cg:true/qt=q:38"
                alt="Branding"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">BRANDING</h3>
                <p className="text-gray-600">
                  We help you develop a strong and recognizable brand that sets you apart from your competitors and
                  resonates with your target audience.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <img
                src="https://i.pinimg.com/474x/d3/b6/fa/d3b6fa75258432f7c8f07bc38a7d67fc.jpg"
                alt="Social Media"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">SOCIAL MEDIA</h3>
                <p className="text-gray-600">
                  Our social media experts help you build and maintain a strong online presence on all major social
                  media platforms, engaging with your audience and building brand awareness.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
              <img
                src="https://i.pinimg.com/736x/71/92/fd/7192fda9c9ac8c75ed9587fedf87e9a1.jpg"
                alt="Analytics and Reporting"
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">ANALYTICS AND REPORTING</h3>
                <p className="text-gray-600">
                  We provide detailed analytics and reporting to help you track the performance of your advertising
                  campaigns and make data-driven decisions to optimize your results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Reviews Section */}
    <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">CUSTOMER REVIEWS</h2>
          <div className="max-w-4xl mx-auto relative px-10">
            {/* Previous Button */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Review Cards */}
            <div className="flex justify-center">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-xl shadow-lg w-full max-w-lg transition-all duration-500 ease-in-out ${
                    index === currentReview ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95"
                  }`}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <span className="text-2xl font-bold text-black">{review.initial}</span>
                  </div>
                  <div className="flex justify-center text-yellow-400 mb-6">
                    <span>★★★★★</span>
                  </div>
                  <p className="text-gray-600 mb-6 text-center italic">{review.text}</p>
                  <p className="text-gray-500 text-center font-medium">
                    {review.name} - {review.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview ? "bg-black w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      

      {/* Shopify Store Design Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800">PRICING PACKAGES AND PLAN</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0004.jpg/:/cr=t:0%25,l:7.19%25,w:85.62%25,h:100%25/rs=w:360,h:271,cg:true/qt=q:38"
                  alt="Basic Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">BASIC PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-black">$250</p>
                <p className="text-gray-600 mb-6">
                  I will install a basic theme in your Shopify with your data, color scheme, and personalization
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Functional website
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 3 pages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Responsive design
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Content upload
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 2 plugin/extensions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 20 products
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0001.jpg/:/cr=t:11.32%25,l:0%25,w:100%25,h:77.35%25/rs=w:360,h:271,cg:true/qt=q:11"             
                  https:alt="Standard Package" 
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">STANDARD PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-black">$350</p>
                <p className="text-gray-600 mb-6">
                  I will install a premium theme in your Shopify with your data, color scheme and personalization.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Functional website
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 pages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Responsive designs
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Content uploads
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 4 plugins/extensions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 30 products
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true/qt=q:38"
                  alt="Premium Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">PREMIUM PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-black">$500</p>
                <p className="text-gray-600 mb-6">I will Design a completely customized Shopify website</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Functional website
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 10 pages
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Responsive design
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Content upload
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 6 plugin/extensions
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 40 products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Store Marketing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800">SHOPIFY STORE MARKETING</h2>
        

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/blob-548a754.png/:/cr=t:32.61%25,l:0%25,w:100%25,h:34.77%25/rs=w:360,h:271,cg:true/qt=q:57"
                  alt="Basic SMM Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">BASIC PACKAGE [SMM]</h4>
                <p className="text-3xl font-bold mb-6 text-black">$1,500</p>
                <p className="text-gray-600">
                  Audiences Research + Facebook Ads + Instagram Ads + Tiktok Ads + Pinterest Marketing To Boost
                  Awareness
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0000.jpg/:/cr=t:31.61%25,l:0%25,w:100%25,h:36.77%25/rs=w:360,h:271,cg:true/qt=q:57"
                  alt="Standard Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">STANDARD PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-black">$3,000</p>
                <p className="text-gray-600">
                  BASIC PACKAGE + Email Marketing &lt;5 Core Flows For Better And Easy Customer Conversion&gt; +
                  Backlinking SEO
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.43.jpeg/:/cr=t:22.69%25,l:0%25,w:100%25,h:54.63%25/rs=w:720,h:541,cg:true"
                  alt="Premium Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">PREMIUM PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-black">$5,000</p>
                <p className="text-gray-600">
                  COMPLETE SEO + SOCIAL MEDIA + KLAVIYO SALES FUNNEL.... Complete Shopify Marketing And Management +
                  BASIC AND STANDARD PACKAGE To Guarantee Sales.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white px-8 py-4 rounded-full cursor-pointer hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium text-lg">
                ORDER NOW
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">MEMORABLE SALES COLLECTION</h2>
          <div className="max-w-4xl mx-auto relative px-10">
            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Image Slider */}
            <div className="flex justify-center overflow-hidden">
              {imageData.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-4 rounded-xl shadow-lg w-full max-w-lg transition-all duration-500 ease-in-out ${
                    index === currentImage ? "block opacity-100 scale-100" : "hidden opacity-0 scale-95"
                  }`}
                  aria-hidden={index !== currentImage}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {imageData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage ? "bg-black w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">OUR PARTNERS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-75 transition-opacity transform hover:scale-105"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default Home

