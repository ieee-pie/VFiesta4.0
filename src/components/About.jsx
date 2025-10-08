import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation Hub",
      description: "Cutting-edge sessions exploring tomorrow's technologies and breakthrough solutions"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m11 0a2 2 0 01-2 2H7a2 2 0 01-2-2m2-4h2m2-2h2m0 0h2v2M7 7h.01M7 3h.01" />
        </svg>
      ),
      title: "Entrepreneurship Excellence",
      description: "Strategic insights from industry pioneers who've transformed ideas into global enterprises"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Visionary Network",
      description: "Connect with the brightest minds and forge partnerships that will define the future"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <motion.section 
      id="about" 
      className="relative py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-100/50 to-accent-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-100/30 to-primary-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div variants={itemVariants} className="mb-16">
          <span className="inline-block px-6 py-2 bg-primary-100 text-primary-700 text-sm font-bold rounded-full uppercase tracking-wider mb-6">
            About V-Fiesta 4.0
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 tracking-tight">
            WHERE INNOVATION
            <span className="block bg-primary-600 bg-clip-text text-transparent">
              MEETS EXCELLENCE
            </span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-xl md:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-medium">
            V-Fiesta 4.0 represents the pinnacle of{' '}
            <span className="font-bold text-primary-600">IEEE PIE Kerala Section's</span>{' '}
            commitment to fostering innovation and entrepreneurial excellence. This flagship experience unites{' '}
            visionary leaders
            emerging entrepreneurs, and industry pioneers in an unprecedented celebration of transformative thinking.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
              }}
              className="group relative bg-white/80 backdrop-blur-xl border border-secondary-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-accent-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-secondary-900 mb-4 font-aderos">
                  {feature.title}
                </h3>
                
                <p className="text-secondary-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants}>
          <div className="bg-primary-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-aderos">
              Join the Elite Circle of Innovators
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Experience thought-provoking discussions, hands-on workshops, and exclusive networking opportunities 
              that will elevate your entrepreneurial journey.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8 text-sm font-semibold">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Interactive Workshops
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Expert Speaker
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Networking Excellence
              </div>
              {/* <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                Innovation Showcase
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
