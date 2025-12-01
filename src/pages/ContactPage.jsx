import React from 'react';
import { motion } from 'framer-motion';  // Importing motion from framer-motion
import Header from "../components/contact/Header";
import ContactForm from "../components/contact/ContactForm";
import Map from '../components/contact/Map';
import ContactInfo from '../components/contact/ContactInfo';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F0F0F] to-[#1A1A1A]">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Card with framer-motion */}
          <motion.div
            className="lg:col-span-1 bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-2xl p-8 shadow-2xl border border-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              className="bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-2xl p-8 shadow-2xl border border-gray-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-[#1E1E1E] to-[#252525] rounded-2xl p-6 shadow-2xl border border-gray-800 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              <Map />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
