import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 to-gray-900/95" />
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Cybersecurity Operations Center"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="h-6 w-6 text-blue-400" />
              <span className="text-blue-400 font-medium">Premier Security Partner</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight lg:text-6xl">
              Passion Meets <br />
              <span className="text-blue-400">Security Excellence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              At VelSecure, we combine our passion for cybersecurity with expert knowledge to deliver accurate, 
              transparent, and dependable security solutions that protect your digital assets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-md text-white border-2 border-white/20 hover:border-white/40 transition-all duration-200">
                Our Services
              </a>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-end">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <h3 className="text-blue-400 text-4xl font-bold mb-2">100%</h3>
                <p className="text-white">Dedication</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg mt-8">
                <h3 className="text-blue-400 text-4xl font-bold mb-2">24/7</h3>
                <p className="text-white">Support</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg">
                <h3 className="text-blue-400 text-4xl font-bold mb-2">Expert</h3>
                <p className="text-white">Team</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg mt-8">
                <h3 className="text-blue-400 text-4xl font-bold mb-2">Trusted</h3>
                <p className="text-white">Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}