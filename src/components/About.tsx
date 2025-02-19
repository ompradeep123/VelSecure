import React from 'react';
import { Shield, Award, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About VelSecure
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Where Passion Meets Expertise in Security
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Welcome to VelSecure</h3>
            <p className="text-gray-400 leading-relaxed">
              At VelSecure, we take pride in being more than just a security service provider. 
              Our passionate team of professionals brings together expertise and innovation to 
              deliver premier security and audit services that set new industry standards.
            </p>
            <p className="text-gray-400 leading-relaxed">
              What sets us apart is our unwavering dedication to providing accurate, transparent, 
              and dependable security solutions for all your needs. Our innovative approach 
              combined with deep industry knowledge ensures that your security challenges are 
              met with cutting-edge solutions.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Award className="h-5 w-5" />
                  <span className="font-semibold">Excellence</span>
                </div>
                <p className="text-gray-400 text-sm">Committed to highest standards</p>
              </div>
              <div className="bg-gray-900/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-blue-400 mb-2">
                  <Users className="h-5 w-5" />
                  <span className="font-semibold">Dedicated Team</span>
                </div>
                <p className="text-gray-400 text-sm">Passionate professionals</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">100%</h4>
                <p className="text-white">Transparency</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">Fast</h4>
                <p className="text-white">Response</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">Expert</h4>
                <p className="text-white">Solutions</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-lg">
                <h4 className="text-4xl font-bold text-blue-400 mb-2">Trust</h4>
                <p className="text-white">Guaranteed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Our Passion</h3>
            </div>
            <p className="text-gray-400">
              We are driven by our passion for cybersecurity and commitment to protecting 
              our clients' digital assets with innovative solutions.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Our Expertise</h3>
            </div>
            <p className="text-gray-400">
              Our team brings deep industry knowledge and technical expertise to deliver 
              comprehensive security solutions.
            </p>
          </div>
          
          <div className="bg-gray-900/50 p-8 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-6 w-6 text-blue-400" />
              <h3 className="text-xl font-semibold text-white">Our Promise</h3>
            </div>
            <p className="text-gray-400">
              We guarantee accurate, transparent, and dependable security solutions that 
              exceed industry standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}