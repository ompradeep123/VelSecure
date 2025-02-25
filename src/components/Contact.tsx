import React, { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_test', // Replace with your EmailJS service ID
        'template_test', // Replace with your EmailJS template ID
        formRef.current,
        '1sXHdBQdWwF9jVB-1' // Replace with your EmailJS public key
      );
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! We will get back to you soon.',
      });
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Let's discuss how we can protect your business
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="mt-1 text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="mt-1 text-gray-400">velsecure@veltech.edu.in</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Location</h3>
                <p className="mt-1 text-gray-400">Vel Tech University , Avidi , Chennai 60002</p>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
              ></textarea>
            </div>
            {submitStatus.type && (
              <div className={`p-4 rounded-md ${
                submitStatus.type === 'success' ? 'bg-green-800/50 text-green-200' : 'bg-red-800/50 text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  Send Message
                  <Send className="h-5 w-5" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}