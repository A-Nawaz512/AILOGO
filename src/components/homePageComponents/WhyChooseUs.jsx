import React from 'react'
import { motion, useScroll, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Target, Zap, Globe, TrendingUp, Shield, Star } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.8 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

const features = [
  { icon: Target, title: 'AI-Powered Matching', description: 'Advanced algorithms that connect you with perfect job opportunities' },
  { icon: Zap, title: 'Rapid Placement', description: 'Average placement time of 2 weeks with streamlined process' },
  { icon: Globe, title: 'Global Opportunities', description: 'Access to positions across 50+ countries worldwide' },
  { icon: TrendingUp, title: 'Career Acceleration', description: 'Personalized growth paths for faster career progression' },
  { icon: Star, title: 'Elite Network', description: 'Connect with top companies from startups to enterprises' },
  { icon: Shield, title: 'Career Security', description: 'Continuous support throughout your professional journey' }
]

const WhyChooseUs = () => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className='px-4 sm:px-6 lg:px-8 bg-black py-10'

    >
      <motion.div variants={itemVariants} className='text-center mb-10'>
        <motion.h3
          className='text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_12px_rgba(255,211,53,0.3)]'
        >
          Why Users <span className='text-[#FFD335]'>Choose ALLOGO</span>
        </motion.h3>

        <motion.p
          className='text-lg text-gray-300 max-w-2xl mx-auto'
        >
          Earn rewards, enjoy low fees, and benefit from an all-in-one super app.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-x-8 lg:gap-y-9 px-8'
      >
        {features.map((feature, index) => {
          const IconComponent = feature.icon
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group relative w-full p-8 bg-black rounded-3xl text-center 
                border border-[#FFD335]/20
                hover:border-[#FFD335]/80 
                shadow-[0_0_15px_rgba(255,211,53,0.12)]
                hover:shadow-[0_0_35px_rgba(255,211,53,0.45)]
                cursor-pointer transition-all duration-500"
            >
              <div className="relative z-10">
                <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center bg-[#FFD335] rounded-full 
                  shadow-[0_0_20px_rgba(255,211,53,0.45)]
                  group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                  
                  <IconComponent className='w-10 h-10 text-black font-bold transition-colors duration-300' />
                </div>

                <motion.h4
                  className='text-xl font-semibold text-[#FFD335] mb-3'
                >
                  {feature.title}
                </motion.h4>

                <motion.p
                  className='text-gray-300 leading-relaxed group-hover:text-white'
                >
                  {feature.description}
                </motion.p>
              </div>

              <div className="absolute top-4 right-4 w-3 h-3 bg-[#FFD335] rounded-full animate-ping"></div>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default WhyChooseUs
