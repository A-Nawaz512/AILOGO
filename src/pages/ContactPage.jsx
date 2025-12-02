import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/contact/Header";
import ContactForm from "../components/contact/ContactForm";
import Map from '../components/contact/Map';
import ContactInfo from '../components/contact/ContactInfo';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Card */}
          <motion.div
            className="lg:col-span-1 bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <ContactInfo />
          </motion.div>
          
          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <ContactForm />
            </motion.div>
            
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
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
