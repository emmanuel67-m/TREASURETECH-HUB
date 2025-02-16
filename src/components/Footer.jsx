import React from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import social media icons from react-icons

function Footer() {
  return (
    <footer className="bg-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div className="mb-8 sm:mb-0">
          <h3 className="font-medium mb-4">About Us</h3>
          <p className="text-sm text-muted-foreground">
            TREASURETECH HUB is your trusted partner in e-commerce success, providing comprehensive solutions for online
            businesses.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-8 sm:mb-0">
          <h3 className="font-medium mb-4">Quick Links</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              <a href="#" className="hover:text-foreground">
                Home
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-foreground">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col justify-center items-center sm:items-start sm:mt-0 mt-8">
          <p className="font-medium mb-4">Follow Us for More Information</p>
          <div className="flex justify-center sm:justify-start space-x-6">
            <a
              href="https://www.facebook.com/share/18vr99cDx5/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/velvet_giftsstore?igsh=MWFkMDVnODBoYW1obg=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@velvet.giftsstore?_t=ZM-8tse8GPpXmR&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="text-center text-sm text-muted-foreground mt-8">
        © 2024 TREASURETECH HUB. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
