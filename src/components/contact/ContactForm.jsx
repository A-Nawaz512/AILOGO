import React, { useState, useEffect } from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name:'', phone:'', email:'', subject:'', message:'', service:'' });
  const services = ['VTC Transport','Vehicle Rental','Apartment Rental','Delivery Service','Food Delivery','Roadside Assistance','Partnership Inquiry','Technical Support'];

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log('Form submitted:', formData); alert('Message sent!'); setFormData({ name:'', phone:'', email:'', subject:'', message:'', service:'' }); };

  return (
    <div>
      <div className="mb-8" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Send us a <span className="text-yellow-600">Message</span></h2>
        <p className="text-gray-600">Fill out the form below and our team will contact you within 24 hours.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div data-aos="fade-up"><label className="block text-sm font-medium text-gray-700">Full Name *</label><input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"/></div>
          <div data-aos="fade-up" data-aos-delay="50"><label className="block text-sm font-medium text-gray-700">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+213 XXX XX XX XX" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"/></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100"><label className="block text-sm font-medium text-gray-700">Email Address *</label><input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"/></div>

        <div data-aos="fade-up" data-aos-delay="150"><label className="block text-sm font-medium text-gray-700">Service Interested In</label><select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300"><option value="">Select a service</option>{services.map((s, idx)=><option key={idx} value={s}>{s}</option>)}</select></div>

        <div data-aos="fade-up" data-aos-delay="200"><label className="block text-sm font-medium text-gray-700">Subject</label><input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Brief description of your inquiry" className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300"/></div>

        <div data-aos="fade-up" data-aos-delay="250"><label className="block text-sm font-medium text-gray-700">Message *</label><textarea name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Please provide details about your request..." className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"/></div>

        <button type="submit" className="group w-full py-4 bg-[#b27d38] hover:bg-[#956321] text-gray-100 font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
          <span className="flex items-center justify-center gap-3">Send Message <RiSendPlaneFill className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"/></span>
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
