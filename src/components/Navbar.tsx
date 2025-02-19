import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <img 
                  src="https://github.com/ompradeep123/images/blob/main/VelSecure_logo.png?raw=true" 
                  alt="VelSecure Logo" 
                  className="h-40 w-auto" // Changed from h-16 to h-48
                />
                
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors transform hover:scale-105">Home</a>
                <a href="#services" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors transform hover:scale-105">Services</a>
                <a href="#about" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors transform hover:scale-105">About</a>
                <a href="#contact" className="text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors transform hover:scale-105">Contact</a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none transform hover:scale-105"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="text-white block px-3 py-2 text-base font-medium transform hover:scale-105">Home</a>
            <a href="#services" className="text-gray-300 block px-3 py-2 text-base font-medium transform hover:scale-105">Services</a>
            <a href="#about" className="text-gray-300 block px-3 py-2 text-base font-medium transform hover:scale-105">About</a>
            <a href="#contact" className="text-gray-300 block px-3 py-2 text-base font-medium transform hover:scale-105">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}