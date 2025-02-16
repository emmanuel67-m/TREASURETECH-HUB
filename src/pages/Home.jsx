"use client"

import { useState } from "react"

function Home() {
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
    }
  ];

  const prevReview = () => {
    setCurrentReview(currentReview === 0 ? reviews.length - 1 : currentReview - 1);
  };

  const nextReview = () => {
    setCurrentReview(currentReview === reviews.length - 1 ? 0 : currentReview + 1);
  };

  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  const toggleShowMore1 = () => setShowMore1(!showMore1);
  const toggleShowMore2 = () => setShowMore2(!showMore2);

  const partners = [
    {
      name: "Google",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(2).png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://www.google.com"
    },
    {
      name: "Shopify",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/rs=w:178,h:100,cg:true,m/cr=w:178,h:100/qt=q:54",
      link: "https://www.shopify.com"
    },
    {
      name: "TikTok",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(1).png/:/rs=w:178,h:100,cg:true,m/cr=w:178,h:100/qt=q:54",
      link: "https://www.tiktok.com/@ecomabubakar"
    },
    {
      name: "Instagram",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/OIP.jpg/:/rs=w:97,h:100,cg:true,m/cr=w:97,h:100/qt=q:54",
      link: "https://www.instagram.com"
    },
    {
      name: "Google Ads",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/OIP%20(1).jpg/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://ads.google.com"
    },
    {
      name: "Klaviyo",
      logo: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/klaviyo_logo-p-500-3fcadbbd165f4f729ccff4854c9.png/:/rs=w:100,h:100,cg:true,m/cr=w:100,h:100/qt=q:54",
      link: "https://www.klaviyo.com"
    }
  ]
  const imageData = [
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.45.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49%20(1).jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.47.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.43.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.51.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.46%20(1).jpeg/:/rs=w:719,h:1230", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.48.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.51%20(1).jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.53.jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.50.jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.48.jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.52.jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.47%20(1).jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.49%20(1).jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.46%20(1).jpeg/:/rs=w:719,h:1230", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.51.jpeg/:/", // Replace with actual image URL
    },
    {
      image: "https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.50.jpeg/:/rs=w:70,h:70,cg:true,m/cr=w:70,h:70,a:cc", // Replace with actual image URL
    },

   

  ];
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDq5q-HgzwQPrsLW_p26wRwVj_8LIXqSGudQ&s"
          alt="E-commerce Growth"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg==" target="_blank" rel="noopener noreferrer">
            <button className="px-4 py-2 sm:px-6 sm:py-2 bg-black text-white rounded-full hover:bg-opacity-90 transition-colors cursor-pointer text-sm sm:text-base">
              LEARN MORE
            </button>
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 sm:py-12 md:py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-serif mb-5 sm:mb-7">TREASURETECH HUB</h1>
        <h2 className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4">TREASURETECH HUB: YOUR E-COMMERCE SUCCESS PARTNER</h2>
        <p className="max-w-4xl mx-auto text-gray-600 text-sm sm:text-base">
          TREASURETECH HUB is a leading advertising agency that specializes in delivering expert solutions and strategic
          guidance to elevate your online business. Our mission is to empower entrepreneurs and established brands with
          the tools, knowledge, and strategies needed to excel in the dynamic world of e-commerce.
        </p>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-100">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-6 sm:mb-8 md:mb-12">ABOUT TREASURETECH HUB SERVICES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Shopify Dropshipping */}
          <div className="text-center px-4">
            <img
              src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/cr=t:0%25,l:21.88%25,w:56.25%25,h:100%25/rs=w:730,h:730,cg:true"
              alt="Shopify Dropshipping"
              className="w-auto h-48 sm:h-64 md:h-80 mx-auto mb-4 object-contain"
            />
            <h3 className="font-medium mb-4">SHOPIFY DROPSHIPPING</h3>
            <p className="text-sm text-gray-600">
              To start a Shopify Dropshipping business, you need to set up a Shopify store, choose a niche and select products to sell, find a reliable dropshipping supplier. You can use apps like Oberlo or Spocket to find products and suppliers.
              Once you have identified your products and supplier, you can add the products to your store, set your prices,
            </p>
            {/* Conditionally render more text */}
            {showMore1 && (
              <p className="text-sm text-gray-600 mb-4">
                design your store and start promoting your store through social media, advertising, and other marketing channels.
              </p>
            )}
            <button
              onClick={toggleShowMore1}
              className="text-sm font-medium mt-4 block w-full"
            >
              {showMore1 ? "- Show Less" : "+ Show More"}
            </button>
          </div>

          {/* Shopify Marketing */}
          <div className="text-center px-4">
            <img
              src="https://img1.wsimg.com/isteam/stock/Y8G53l9/:/cr=t:0%25,l:16.67%25,w:66.67%25,h:100%25/rs=w:730,h:730,cg:true"
              alt="Shopify Marketing"
              className="w-auto h-48 sm:h-64 md:h-80 mx-auto mb-4 rounded-full object-contain"
            />
            <h3 className="font-medium mb-4">SHOPIFY MARKETING</h3>
            <p className="text-sm text-gray-600">
              When it comes to marketing on Shopify, there are several strategies you can implement to promote your online store and increase sales. Here are some key Shopify marketing strategies:
              1. Search Engine Optimization (SEO): Optimize your Shopify store for search engines by using relevant keywords, creating unique product descriptions, optimizing page titles and meta tags, and building high-quality backlinks.
            </p>
            {/* Conditionally render more text */}
            {showMore2 && (
              <p className="text-sm text-gray-600 mb-4">
                2. Content Marketing: Create valuable and engaging content, such as blog posts, guides, or videos, that align with your target audience's interests and needs. This can help drive traffic to your store and establish your brand as an authority in your niche.

                3. Social Media Marketing: Utilize social media platforms to showcase your products, engage with your audience, and drive traffic to your Shopify store. Use a combination of organic posts, paid ads, and influencer collaborations to reach a wider audience.

                4. Email Marketing: Build an email list of subscribers and send targeted email campaigns to promote new products, offer discounts, announce sales, or share valuable content. Use email automation to nurture relationships and drive repeat purchases.

                5. Influencer Marketing: Collaborate with influencers in your industry who have a significant following and align with your brand. They can help promote your products to their audience, generate brand awareness, and drive traffic to your Shopify store.

                6. PPC Advertising: Use platforms like Google Ads or Facebook Ads to run targeted paid advertising campaigns. Set up ads that lead directly to your Shopify store and optimize them to reach your desired audience, increase conversions, and maximize your return on investment (ROI).

                7. Conversion Rate Optimization (CRO): Analyze user behavior on your Shopify store, identify areas for improvement, and optimize your website's design, layout, and checkout process to increase conversion rates. Test different elements such as call-to-action buttons, product images, and pricing to optimize your store's performance.

                8. Referral Programs: Implement a referral program to incentivize your existing customers to refer their friends and family to your store. Offer rewards or discounts to both the referrer and the new customer to encourage word-of-mouth marketing and customer loyalty.

                Remember, the success of your Shopify marketing efforts will depend on understanding your target audience, setting clear goals, and regularly analyzing and optimizing your strategies based on data and customer feedback.
              </p>
            )}
            <button
              onClick={toggleShowMore2}
              className="text-sm font-medium mt-4 block w-full"
            >
              {showMore2 ? "- Show Less" : "+ Show More"}
            </button>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">REVIEWS</h2>
        <div className="max-w-4xl mx-auto relative px-10">
          {/* Previous Button */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10"
            aria-label="Previous review"
          >
            ←
          </button>

          {/* Review Cards */}
          <div className="flex justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm transition-all duration-500 ease-in-out ${
                  index === currentReview ? "block opacity-100" : "hidden opacity-0"
                }`}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-xl sm:text-2xl font-semibold text-gray-700">{review.initial}</span>
                </div>
                <div className="text-yellow-400 mb-4 text-center">★★★★★</div>
                <p className="text-xs sm:text-sm mb-4 text-gray-600">{review.text}</p>
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  {review.name} - {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10"
            aria-label="Next review"
          >
            →
          </button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <img
            src="https://img1.wsimg.com/isteam/stock/87434/:/cr=t:19.23%25,l:26.84%25,w:64.94%25,h:64.94%25/rs=w:1280,h:848/qt=q:30"
            alt="Analytics Dashboard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-4 py-8 order-1 md:order-2">
          <p className="text-sm mb-2 font-bold">Hello</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4">WELCOME TO <br className="hidden sm:block" /> TREASURETECH HUB!</h2>
          <p className="text-gray-600 mb-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl">
            We are a full-service advertising agency that specializes in creating impactful campaigns for businesses of
            all sizes. Let us help you tell your story and reach your target audience today.
          </p>
          <a href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg==" target="_blank" rel="noopener noreferrer">
            <button className="bg-black text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full cursor-pointer w-fit transition-colors text-sm sm:text-base">
              FIND OUT MORE
            </button>
          </a>
        </div>
      </section>

      {/* Hero Title */}
      <section className="py-8 sm:py-12 md:py-16 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-8">WELCOME TO TREASURETECH HUB ADVERTISING AGENCY</h1>
      </section>

      {/* Main Services */}
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">CREATIVE SERVICES</h3>
            <img
              src="https://i.pinimg.com/736x/d5/e4/ef/d5e4efdc5a912177362397d96c5584d6.jpg"
              alt="Creative Services"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              Our team of talented designers and copywriters work together to create compelling and effective
              advertising campaigns that capture the attention of your target audience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">MEDIA PLANNING</h3>
            <img
              src="https://i.pinimg.com/474x/8e/1b/89/8e1b89db408243e8f29abf9718213b04.jpg"
              alt="Media Planning"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              We help you make informed decisions about where and when to place your ads to maximize their impact and
              reach your desired audience.
            </p>
          </div>

          <div className="text-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
            <h3 className="text-xl font-medium mb-4">DIGITAL MARKETING</h3>
            <img
              src="https://i.pinimg.com/474x/a8/62/89/a8628920a3c92be9a97acd1872f242e1.jpg"
              alt="Digital Marketing"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              We specialize in digital marketing strategies that leverage the latest technologies and platforms to
              effectively reach and engage your target audience.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">BRANDING</h3>
            <img
              src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R%20(1).jpg/:/cr=t:12.23%25,l:0%25,w:100%25,h:75.53%25/rs=w:388,h:194,cg:true/qt=q:38"
              alt="Branding"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              We help you develop a strong and recognizable brand that sets you apart from your competitors and
              resonates with your target audience.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-medium mb-4">SOCIAL MEDIA</h3>
            <img
              src="https://i.pinimg.com/474x/d3/b6/fa/d3b6fa75258432f7c8f07bc38a7d67fc.jpg"
              alt="Social Media"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              Our social media experts help you build and maintain a strong online presence on all major social media
              platforms, engaging with your audience and building brand awareness.
            </p>
          </div>

          <div className="text-center sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
            <h3 className="text-xl font-medium mb-4">ANALYTICS AND REPORTING</h3>
            <img
              src="https://i.pinimg.com/736x/71/92/fd/7192fda9c9ac8c75ed9587fedf87e9a1.jpg"
              alt="Analytics and Reporting"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <p className="text-gray-600 text-sm sm:text-base">
              We provide detailed analytics and reporting to help you track the performance of your advertising
              campaigns and make data-driven decisions to optimize your results.
            </p>
          </div>
        </div>
      </section>

      {/* Shopify Store Design Pricing */}
      <section className="py-8 sm:py-12 md:py-16 px-4">
        <h2 className="text-2xl sm:text-3xl font-serif text-center mb-2">PRICING PACKAGES AND PLAN</h2>
        <h3 className="text-xl sm:text-2xl font-serif text-center mb-4">SHOPIFY STORE DESIGN</h3>
        <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base">Here are our packages for Shopify store design and setup</p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <img
              src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0004.jpg/:/cr=t:0%25,l:7.19%25,w:85.62%25,h:100%25/rs=w:360,h:271,cg:true/qt=q:38"
              alt="Basic Package"
              className="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg sm:text-xl font-medium mb-2">BASIC PACKAGE</h4>
            <p className="text-2xl sm:text-3xl font-bold mb-4">250$</p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              I will install a basic theme in your Shopify with your data, color scheme, and personalization
            </p>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li>• Functional website</li>
              <li>• 3 pages</li>
              <li>• Responsive design</li>
              <li>• Content upload</li>
              <li>• 2 plugin/extensions</li>
              <li>• 20 products</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow">
            <img
              src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0001.jpg/:/cr=t:11.32%25,l:0%25,w:100%25,h:77.35%25/rs=w:360,h:271,cg:true/qt=q:38"
              alt="Standard Package"
              className="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg sm:text-xl font-medium mb-2">STANDARD PACKAGE</h4>
            <p className="text-2xl sm:text-3xl font-bold mb-4">350$</p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              I will install a premium theme in your Shopify with your data, color scheme and personalization.
            </p>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li>• Functional website</li>
              <li>• 5 pages</li>
              <li>• Responsive designs</li>
              <li>• Content uploads</li>
              <li>• 4 plugins/extensions</li>
              <li>• 30 products</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 sm:p-6 hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1 sm:max-w-md sm:mx-auto md:max-w-none">
            <img
              src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/R.png/:/cr=t:0%25,l:12.59%25,w:74.81%25,h:100%25/rs=w:360,h:271,cg:true/qt=q:38"
              alt="Premium Package"
              className="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg"
            />
            <h4 className="text-lg sm:text-xl font-medium mb-2">PREMIUM PACKAGE</h4>
            <p className="text-2xl sm:text-3xl font-bold mb-4">500$</p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">I will Design a completely customized Shopify website</p>
            <ul className="space-y-1 sm:space-y-2 text-gray-600 text-sm sm:text-base">
              <li>• Functional website</li>
              <li>• 10 pages</li>
              <li>• Responsive design</li>
              <li>• Content upload</li>
              <li>• 6 plugin/extensions</li>
              <li>• 40 products</li>
            </ul>
          </div>
        </div>
      </section>

    {/* Shopify Store Marketing */}
<section className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-serif text-center mb-4">SHOPIFY STORE MARKETING</h2>
    <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base max-w-3xl mx-auto">Select a suitable result you want with our packages</p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow">
        <img
          src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/blob-548a754.png/:/cr=t:32.61%25,l:0%25,w:100%25,h:34.77%25/rs=w:360,h:271,cg:true/qt=q:57"
          alt="Basic SMM Package"
          className="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg"
        />
        <h4 className="text-lg sm:text-xl font-medium mb-2">BASIC PACKAGE [SMM]</h4>
        <p className="text-2xl sm:text-3xl font-bold mb-4">1500$</p>
        <p className="text-gray-600 text-sm sm:text-base">
          Audiences Research + Facebook Ads + Instagram Ads + Tiktok Ads + Pinterest Marketing To Boost Awareness
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow">
        <img
          src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/IMG-20240718-WA0000.jpg/:/cr=t:31.61%25,l:0%25,w:100%25,h:36.77%25/rs=w:360,h:271,cg:true/qt=q:57"
          alt="Standard Package"
          className="w-full h-40 sm:h-48 object-cover mb-4 rounded-lg"
        />
        <h4 className="text-lg sm:text-xl font-medium mb-2">STANDARD PACKAGE</h4>
        <p className="text-2xl sm:text-3xl font-bold mb-4">3000$</p>
        <p className="text-gray-600 text-sm sm:text-base">
          BASIC PACKAGE + Email Marketing &nbsp;&lt;5 Core Flows For Better And Easy Customer Conversion&nbsp;&gt; +
          Backlinking SEO
        </p>
      </div>

      <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1 mx-auto sm:max-w-md lg:max-w-none">
        <img
          src="https://img1.wsimg.com/isteam/ip/6dd011ca-86ca-4c81-b343-228ba507315a/WhatsApp%20Image%202023-10-18%20at%2011.51.43.jpeg/:/cr=t:22.69%25,l:0%25,w:100%25,h:54.63%25/rs=w:720,h:541,cg:true"
          alt="Premium Package"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h4 className="text-xl font-medium mb-2">PREMIUM PACKAGE</h4>
        <p className="text-3xl font-bold mb-4">5000$</p>
        <p className="text-gray-600">
          COMPLETE SEO + SOCIAL MEDIA + KLAVIYO SALES FUNNEL.... Complete Shopify Marketing And Management + BASIC
          AND STANDARD PACKAGE To Guarantee Sales.
        </p>
      </div>
    </div>
    
    <div className="mt-8 sm:mt-12 text-center">
      <a href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg==" target="_blank" rel="noopener noreferrer">
        <button className="bg-black text-white px-6 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition-colors">
          ORDER NOW
        </button>
      </a>
    </div>
  </div>
</section>

<section className="py-8 sm:py-12 md:py-16 px-4 bg-gray-400">
  <h2 className="text-5xl  font-family- text-center mb-6 sm:mb-8 md:mb-12 text-gray-800">Memorable Sales Collection</h2>
  <div className="max-w-4xl mx-auto relative px-10">
    {/* Previous Button */}
    <button
      onClick={prevReview}
      className="absolute left-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10"
      aria-label="Previous image"
    >
      ←
    </button>

    {/* Image Slider */}
    <div className="flex justify-center overflow-hidden">
      {imageData.map((item, index) => (
        <div
          key={index}
          className={`bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm transition-all duration-500 ease-in-out ${
            index === currentReview ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          {/* Image */}
          <img
            src={item.image}
            alt={`Review image ${index + 1}`}
            className="w-full h-auto rounded-lg object-cover mb-4"
          />
        </div>
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={nextReview}
      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-all duration-300 z-10"
      aria-label="Next image"
    >
      →
    </button>
  </div>
</section>


{/* Partners Section */}
<section className="py-12 sm:py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-serif text-center mb-8 sm:mb-12">OUR PARTNERS</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
      {partners.map((partner, index) => (
        <a
          key={index}
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:opacity-75 transition-opacity"
        >
          <img
            src={partner.logo || "/placeholder.svg"}
            alt={`${partner.name} logo`}
            className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain mx-auto"
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

