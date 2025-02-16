import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="bg-black text-white py-10 text-center">
        <h1 className="text-3xl font-semibold">About Us</h1>
        <p className="mt-2 text-lg">Learn more about our mission, vision, and values.</p>
      </header>

      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Mission</h2>
          <p className="text-lg">
            At TREASURETECH HUB, our mission is to provide innovative, secure, and user-centric solutions that help businesses
            thrive in the digital world. We aim to create seamless digital experiences that not only address security challenges
            but also enhance user engagement.
          </p>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Vision</h2>
          <p className="text-lg">
            Our vision is to become the leading provider of comprehensive digital solutions, where innovation meets security. We
            aim to empower businesses with the tools they need to succeed while maintaining the highest standards of security and
            user experience.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
              <p>
                We believe in constantly evolving and adopting new technologies to create groundbreaking solutions that drive success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Security</h3>
              <p>
                Our top priority is ensuring the highest levels of security, protecting your business and your users' data at all
                times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Customer-Centricity</h3>
              <p>
                We are committed to putting our clients first, understanding their unique needs, and delivering tailored solutions
                that help them grow.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      <section className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-semibold mb-8">Join Our Journey</h2>
        <p className="text-lg mb-8">
          We’re always looking for talented and passionate individuals to join our team. If you share our vision and values, get in
          touch with us today!
        </p>
        <a
          href="mailto:sandraevelyn524@gmail.com"
          className="bg-black text-white py-2 px-6 rounded-full text-lg font-semibold"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
