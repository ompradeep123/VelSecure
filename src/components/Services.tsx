import React from 'react';
import { Network, Camera, Globe, Shield, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Network Auditing',
    description: 'Comprehensive assessment of network infrastructure, security controls, and vulnerabilities to ensure robust protection of your network assets.',
    icon: Network,
    color: 'blue',
  },
  {
    title: 'CCTV Auditing',
    description: 'Thorough evaluation of surveillance systems, camera placement, recording integrity, and security measures for optimal monitoring coverage.',
    icon: Camera,
    color: 'purple',
  },
  {
    title: 'Web Auditing',
    description: 'In-depth analysis of web applications, APIs, and services to identify security vulnerabilities and ensure compliance with security standards.',
    icon: Globe,
    color: 'green',
  },
  {
    title: 'Firewall Auditing',
    description: 'Detailed review of firewall configurations, rule sets, and security policies to maintain strong perimeter defense against cyber threats.',
    icon: Shield,
    color: 'red',
  }
];

const colorVariants = {
  blue: 'bg-blue-400/10 text-blue-400',
  purple: 'bg-purple-400/10 text-purple-400',
  red: 'bg-red-400/10 text-red-400',
  green: 'bg-green-400/10 text-green-400'
};

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Professional Auditing Services
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Comprehensive security auditing solutions to protect your infrastructure
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 p-8 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className={`rounded-lg inline-flex p-3 ${colorVariants[service.color]}`}>
                  <service.icon className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
              </div>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors transform hover:scale-105"
                >
                  Request audit
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}