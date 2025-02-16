import React from "react";

const ServicePage = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <header className="bg-black text-white py-10 text-center">
        <h1 className="text-3xl font-semibold">Our Cybersecurity & UI/UX Design Services</h1>
        <p className="mt-2 text-lg">Secure and intuitive solutions to elevate your digital presence</p>
      </header>

      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Cybersecurity Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Security Audits & Vulnerability Assessments</h3>
              <p>
                We conduct thorough security audits to identify vulnerabilities in your existing systems and provide actionable
                insights to strengthen them.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Data Encryption & Secure Transactions</h3>
              <p>
                Protect your customer’s sensitive data by implementing robust encryption protocols for secure transactions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Multi-Factor Authentication (MFA)</h3>
              <p>
                We set up multi-factor authentication for your platform to add an extra layer of security, ensuring only authorized users
                can access sensitive data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Firewalls & Threat Detection</h3>
              <p>
                Protect your platform from malicious activities with advanced firewalls and real-time threat detection systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-100 py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">UI/UX Design Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">User-Centered Design</h3>
              <p>
                We design products with the user in mind, ensuring that your platform is intuitive and user-friendly for maximum engagement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
              <p>
                Our designs adapt seamlessly across all devices, providing your users with a consistent and enjoyable experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Wireframes & Prototypes</h3>
              <p>
                We build wireframes and prototypes to give you a clear vision of the user journey and interface before full development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Branding & Visual Identity</h3>
              <p>
                Our design team will help you establish a unique and memorable visual identity that resonates with your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Why Choose Us?</h2>
          <p className="mb-8 text-lg">Our expert team is dedicated to delivering secure, intuitive, and user-friendly digital solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Experienced Team</h3>
              <p>
                Our team consists of cybersecurity experts and UI/UX designers who stay updated on the latest trends to provide innovative solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Tailored Solutions</h3>
              <p>
                We provide customized services that meet your unique business needs, ensuring a personalized approach for every project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">End-to-End Service</h3>
              <p>
                From consultation to post-launch support, we offer comprehensive solutions that ensure your platform is secure and well-designed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 text-center bg-black text-white">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <p className="mb-6 text-lg">Ready to secure your platform and enhance user experience? Let’s talk.</p>
        <a
          href="mailto:susandorothy552@gmail.com"
          className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

export default ServicePage;
