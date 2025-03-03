import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* About Us Section */}
        <div className="mb-8 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">About Us</h3>
          <p className="text-sm text-gray-300 mb-4">
            TREASURETECH HUB is your trusted partner in e-commerce success, providing comprehensive solutions for online
            businesses.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-300">
            <FaEnvelope />
            <a
              href="mailto:susandorothy552@gmail.com"
              className="hover:text-white transition-colors duration-300"
            >
              susandorothy552@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-300 mt-2">
            <FaPhone />
            <a href="tel:+1234567890" className="hover:text-white transition-colors duration-300">
              +1 (661) 470-4312
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="mb-8 sm:mb-0">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="/" className="hover:text-white transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-white transition-colors duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors duration-300">
                About
              </a>
            </li>
            {/* Add more links if necessary */}
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Connect With Us</h3>
          <p className="text-sm text-gray-300 mb-4">Follow us on social media for the latest updates, promotions, and more!</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/share/18vr99cDx5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg=="
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-pink-600 transition-colors duration-300 flex items-center justify-center"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@velvet.giftsstore?_t=ZM-8tse8GPpXmR&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-black transition-colors duration-300 flex items-center justify-center"
              aria-label="TikTok"
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://twitter.com/treasuretechhub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-400 transition-colors duration-300 flex items-center justify-center"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/treasure-tech-hub-392770351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-full hover:bg-blue-800 transition-colors duration-300 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-gray-700 mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} TREASURETECH HUB. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="/sitemap" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Sitemap
            </a>
            <a href="/cookies" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
            <a href="/accessibility" className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
