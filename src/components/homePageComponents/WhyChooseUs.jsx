import React from 'react'
import { motion } from "framer-motion";
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
className='bg-white text-black min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-16'
>
<motion.div variants={itemVariants} className='text-center mb-16'>
<motion.h3
className='text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-[0_0_12px_rgba(255,211,53,0.3)]'
>
Why Users <span className='text-[#C8AF37]'>Choose ALLOGO</span>
</motion.h3>

    <motion.p
      className='text-gray-700 max-w-2xl mx-auto'
    >
      Earn rewards, enjoy low fees, and benefit from an all-in-one super app.
    </motion.p>
  </motion.div>

  <motion.div
    variants={containerVariants}
    className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'
  >
    {features.map((feature, index) => {
      const IconComponent = feature.icon
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ y: -8, scale: 1.01 }}
          className="group relative w-full p-8 bg-white rounded-3xl text-center 
            border border-[#BCA25B]/30
            hover:border-[#BCA25B]/80 
            shadow-[0_0_15px_rgba(255,211,53,0.15)]
            hover:shadow-[0_0_35px_rgba(255,211,53,0.3)]
            cursor-pointer transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="w-20 h-20 mb-6 mx-auto flex items-center justify-center bg-[#BCA25B] rounded-full 
              shadow-[0_0_20px_rgba(255,211,53,0.3)]
              group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
              
              <IconComponent className='w-10 h-10 text-black font-bold transition-colors duration-300' />
            </div>

            <motion.h4 className='text-xl font-semibold text-[#BCA25B] mb-3'>
              {feature.title}
            </motion.h4>

            <motion.p className='text-gray-700 leading-relaxed group-hover:text-black'>
              {feature.description}
            </motion.p>
          </div>

          <div className="absolute top-4 right-4 w-3 h-3 bg-[#BCA25B] rounded-full animate-ping"></div>
        </motion.div>
      )
    })}
  </motion.div>
</motion.div>


)
}

export default WhyChooseUs




