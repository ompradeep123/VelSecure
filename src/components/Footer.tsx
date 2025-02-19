import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/velsecure-logo.png" 
                alt="VelSecure Logo" 
                className="h-10 w-auto"
              />
              <span className="text-white text-xl font-bold">VelSecure</span>
            </div>
            <p className="text-gray-400">
              Protecting your digital assets with advanced cybersecurity solutions.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VelSecure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}