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
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5q-HgzwQPrsLW_p26wRwVj_8LIXqSGudQ&s"
          alt="E-commerce Growth"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center px-4">TREASURETECH HUB</h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl text-center px-4">Your E-Commerce Success Partner</p>
          <a
            href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg=="
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-medium text-base sm:text-lg">
              LEARN MORE
            </button>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
            TREASURETECH HUB: YOUR E-COMMERCE SUCCESS PARTNER
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            TREASURETECH HUB is a leading advertising agency that specializes in delivering expert solutions and
            strategic guidance to elevate your online business. Our mission is to empower entrepreneurs and established
            brands with the tools, knowledge, and strategies needed to excel in the dynamic world of e-commerce.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            ABOUT TREASURETECH HUB SERVICES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Shopify Dropshipping */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/cr=t:0%25,l:21.88%25,w:56.25%25,h:100%25/rs=w:730,h:730,cg:true"
                    alt="Shopify Dropshipping"
                    className="w-auto h-48 sm:h-64 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">SHOPIFY DROPSHIPPING</h3>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    To start a Shopify Dropshipping business, you need to set up a Shopify store, choose a niche and
                    select products to sell, find a reliable dropshipping supplier. You can use apps like Oberlo or
                    Spocket to find products and suppliers. Once you have identified your products and supplier, you can
                    add the products to your store, set your prices,
                  </p>
                  {/* Conditionally render more text */}
                  {showMore1 && (
                    <p className="mt-4">
                      design your store and start promoting your store through social media, advertising, and other
                      marketing channels.
                    </p>
                  )}
                </div>
                <button
                  onClick={toggleShowMore1}
                  className="mt-6 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  {showMore1 ? "- Show Less" : "+ Show More"}
                </button>
              </div>
            </div>

            {/* Shopify Marketing */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <img
                    src="https://img1.wsimg.com/isteam/stock/Y8G53l9/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true"
                    alt="Shopify Marketing"
                    className="w-auto h-48 sm:h-64 object-contain rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">SHOPIFY MARKETING</h3>
                <div className="text-gray-600 leading-relaxed">
                  <p>
                    When it comes to marketing on Shopify, there are several strategies you can implement to promote
                    your online store and increase sales. Here are some key Shopify marketing strategies: 1. Search
                    Engine Optimization (SEO): Optimize your Shopify store for search engines by using relevant
                    keywords, creating unique product descriptions, optimizing page titles and meta tags, and building
                    high-quality backlinks.
                  </p>
                  {/* Conditionally render more text */}
                  {showMore2 && (
                    <div className="mt-4 space-y-2">
                      <p>
                        2. Content Marketing: Create valuable and engaging content, such as blog posts, guides, or
                        videos, that align with your target audience's interests and needs. This can help drive traffic
                        to your store and establish your brand as an authority in your niche.
                      </p>
                      <p>
                        3. Social Media Marketing: Utilize social media platforms to showcase your products, engage with
                        your audience, and drive traffic to your Shopify store. Use a combination of organic posts, paid
                        ads, and influencer collaborations to reach a wider audience.
                      </p>
                      <p>
                        4. Email Marketing: Build an email list of subscribers and send targeted email campaigns to
                        promote new products, offer discounts, announce sales, or share valuable content. Use email
                        automation to nurture relationships and drive repeat purchases.
                      </p>
                      <p>
                        5. Influencer Marketing: Collaborate with influencers in your industry who have a significant
                        following and align with your brand. They can help promote your products to their audience,
                        generate brand awareness, and drive traffic to your Shopify store.
                      </p>
                    </div>
                  )}
                </div>
                <button
                  onClick={toggleShowMore2}
                  className="mt-6 text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  {showMore2 ? "- Show Less" : "+ Show More"}
                </button>
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
                    <span className="text-2xl font-bold text-blue-600">{review.initial}</span>
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
                    index === currentReview ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="order-2 md:order-1 h-[400px] md:h-auto">
          <img
            src="https://img1.wsimg.com/isteam/stock/87434/:/cr=t:19.23%25,l:26.84%25,w:64.94%25,h:64.94%25/rs=w:1280,h:848/qt=q:30"
            alt="Analytics Dashboard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-8 py-16 order-1 md:order-2 bg-gray-50">
          <p className="text-blue-600 font-bold mb-4">Hello</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">
            WELCOME TO <br className="hidden sm:block" /> TREASURETECH HUB!
          </h2>
          <p className="text-gray-600 mb-8 text-xl sm:text-2xl leading-relaxed">
            We are a full-service advertising agency that specializes in creating impactful campaigns for businesses of
            all sizes. Let us help you tell your story and reach your target audience today.
          </p>
          <a
            href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg=="
            target="_blank"
            rel="noopener noreferrer"
            className="self-start"
          >
            <button className="bg-black text-white px-8 py-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-800 transform hover:scale-105">
              FIND OUT MORE
            </button>
          </a>
        </div>
      </section>

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
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-800">ADDITIONAL SERVICES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Shopify Store Design Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800">PRICING PACKAGES AND PLAN</h2>
          <h3 className="text-xl sm:text-2xl font-medium text-center mb-4 text-gray-700">SHOPIFY STORE DESIGN</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Here are our packages for Shopify store design and setup
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0004.jpg/:/cr=t:0%25,l:7.19%25,w:85.62%25,h:100%25/rs=w:360,h:271,cg:true/qt=q:38"
                  alt="Basic Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">BASIC PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-blue-600">$250</p>
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
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315                <img
                  src="
                  https:alt="Standard Package" //img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0001.jpg/:/cr=t:11.32%25,l:0%25,w:100%25,h:77.35%25/rs=w:360,h:271,cg:true/qt=q:38"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">STANDARD PACKAGE</h4>
                <p className="text-3xl font-bold mb-6 text-blue-600">$350</p>
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
                <p className="text-3xl font-bold mb-6 text-blue-600">$500</p>
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
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Select a suitable result you want with our packages
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-gray-100">
              <div className="p-8">
                <img
                  src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/blob-548a754.png/:/cr=t:32.61%25,l:0%25,w:100%25,h:34.77%25/rs=w:360,h:271,cg:true/qt=q:57"
                  alt="Basic SMM Package"
                  className="w-full h-48 object-cover mb-6 rounded-lg"
                />
                <h4 className="text-xl font-bold mb-2 text-gray-800">BASIC PACKAGE [SMM]</h4>
                <p className="text-3xl font-bold mb-6 text-blue-600">$1,500</p>
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
                <p className="text-3xl font-bold mb-6 text-blue-600">$3,000</p>
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
                <p className="text-3xl font-bold mb-6 text-blue-600">$5,000</p>
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
                    index === currentImage ? "bg-blue-600 w-6" : "bg-gray-300"
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

