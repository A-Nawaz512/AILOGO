import React, { useState, useEffect } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    service: ''
  });

  const services = [
    'VTC Transport',
    'Vehicle Rental',
    'Apartment Rental',
    'Delivery Service',
    'Food Delivery',
    'Roadside Assistance',
    'Partnership Inquiry',
    'Technical Support'
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <div className="mb-8" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-white mb-3">
          Send us a <span className="text-[#C1A762]">Message</span>
        </h2>
        <p className="text-gray-400">
          Fill out the form below and our team will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="space-y-2" data-aos="fade-up">
            <label className="block text-sm font-medium text-gray-300">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
            />
          </div>

          {/* Phone Input */}
          <div className="space-y-2" data-aos="fade-up" data-aos-delay="50">
            <label className="block text-sm font-medium text-gray-300">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+213 XXX XX XX XX"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="space-y-2" data-aos="fade-up" data-aos-delay="100">
          <label className="block text-sm font-medium text-gray-300">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
          />
        </div>

        {/* Service Select */}
        <div className="space-y-2" data-aos="fade-up" data-aos-delay="150">
          <label className="block text-sm font-medium text-gray-300">
            Service Interested In
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 appearance-none hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-900">
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Subject Input */}
        <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
          <label className="block text-sm font-medium text-gray-300">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Brief description of your inquiry"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
          />
        </div>

        {/* Message Textarea */}
        <div className="space-y-2" data-aos="fade-up" data-aos-delay="250">
          <label className="block text-sm font-medium text-gray-300">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Please provide details about your request..."
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50 focus:border-transparent transition-all duration-300 resize-none hover:bg-gray-800/50 hover:border-[#FFD700]/50 backdrop-blur-sm"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group w-full py-4 bg-gradient-to-r from-[#FFA500] via-[#eead5d] to-[#daab53] hover:from-[#efac5b] hover:via-[#FFA500] hover:to-[#d59d58] text-black font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#FFD700]/40"
          data-aos="zoom-in" data-aos-delay="300"
        >
          <span className="flex items-center justify-center gap-3">
            Send Message
            <RiSendPlaneFill className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;