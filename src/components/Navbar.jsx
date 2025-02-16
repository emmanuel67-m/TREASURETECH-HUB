import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when clicking outside and when window resizes to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-50 flex flex-wrap items-center justify-between px-4 py-4 md:py-6 bg-white border-b border-black">
      {/* Left side - Home link */}
      <a href="/" className="text-sm font-medium hover:underline transition-colors order-1">
        HOME
      </a>
      
      {/* Center - Logo/Title (full width on mobile, centered on desktop) */}
      <div className="w-full md:w-auto text-center order-3 md:order-2 mt-3 md:mt-0">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-serif">TREASURETECH HUB</h1>
      </div>
      
      {/* Right side - Menu toggle on mobile, links on desktop */}
      <div className="order-2 md:order-3">
        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-2 lg:space-x-4">
          <a href="/service" className="text-sm font-medium hover:underline transition-colors">
            SERVICES
          </a>
          <a href="/about" className="text-sm font-medium hover:underline transition-colors">
            ABOUT US
          </a>
          <a href="/conditions" className="text-sm font-medium hover:underline transition-colors">
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden" onClick={toggleMenu} />
      )}

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-[calc(1.5rem+1.5rem+1px)] right-0 w-64 h-screen bg-white shadow-lg transform transition-all duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col space-y-4 p-6">
          <a 
            href="/service" 
            className="text-sm font-medium hover:underline transition-colors"
            onClick={toggleMenu}
          >
            SERVICES
          </a>
          <a 
            href="/about" 
            className="text-sm font-medium hover:underline transition-colors"
            onClick={toggleMenu}
          >
            ABOUT US
          </a>
          <a 
            href="/conditions" 
            className="text-sm font-medium hover:underline transition-colors"
            onClick={toggleMenu}
          >
            TERMS AND CONDITIONS
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;