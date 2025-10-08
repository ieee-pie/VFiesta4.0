import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'

export default function Gallery() {
  const [openSrc, setOpenSrc] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenSrc(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const images = [
    '/assets/img/gallery1.jpeg',
    '/assets/img/gallery2.jpeg',
    '/assets/img/gallery3.jpeg',
    '/assets/img/gallery4.jpeg',
    '/assets/img/gallery5.jpeg',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
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
      id="gallery" 
      className="relative py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-primary-100/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-gradient-to-r from-accent-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-primary-100 text-primary-600 text-sm font-bold rounded-full uppercase tracking-wider mb-6">
            Event Gallery
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 tracking-tight">
            MOMENTS OF
            <span className="block bg-primary-600 bg-clip-text text-transparent">
              EXCELLENCE
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Capturing the extraordinary moments from previous VFiesta events—where innovation meets inspiration 
            and visionaries gather to shape tomorrow.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              className={`relative group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : 
                index === 2 ? 'lg:col-span-2' : 
                index === 3 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl z-10" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <ImageWithFallback
                src={src}
                alt={`VFiesta Gallery ${index + 1}`}
                className={`w-full object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 ${
                  index === 0 ? 'h-64 md:h-full' : 
                  index === 2 ? 'h-48' : 
                  'h-48'
                }`}
                width={400}
                height={300}
                text={`Gallery ${index + 1}`}
              />
              
              {/* Image Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <h3 className="font-bold text-lg mb-1">V-Fiesta Highlights</h3>
                <p className="text-sm opacity-90">Capturing innovation in action</p>
              </div>
              
              {/* Expand Icon */}
              <button
                onClick={() => setOpenSrc(src)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                aria-label="Open image"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {openSrc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setOpenSrc(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full mx-4"
            >
              <button
                onClick={() => setOpenSrc(null)}
                className="absolute top-2 right-2 z-50 bg-white/20 rounded-full p-2"
                aria-label="Close image"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <img src={openSrc} alt="Enlarged" className="w-full h-auto rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        )}

        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-lg text-secondary-500 mb-8">
            Be part of the next chapter. Create memories that will inspire generations of innovators.
          </p>
          
          <motion.a
            href="https://forms.gle/XKA4gsYefJPyRAYB6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-aderos tracking-wide group"
          >
            <span>JOIN THE LEGACY</span>
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  )
}
