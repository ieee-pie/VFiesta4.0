import React, { memo } from 'react'
import { motion } from 'framer-motion'

const Ticker = memo(function Ticker() {
  const tickerItems = [
    'INNOVATION',
    'ENTREPRENEURSHIP', 
    // 'EXCELLENCE',
    // 'TRANSFORMATION',
    // 'LEADERSHIP',
    // 'VISIONARY',
    // 'BREAKTHROUGH',
    // 'PIONEERING'
  ]

  return (
    <div className="relative bg-black text-white py-4 overflow-hidden border-y border-secondary-700">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5" />
      
      {/* Gradient Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary-900 to-transparent z-10" />
      
      <div className="relative">
        <motion.div 
          className="whitespace-nowrap inline-block"
          animate={{
            x: [0, -1920], // Adjust based on content width
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-8 mr-8">
              {tickerItems.map((item, index) => (
                <span key={index} className="inline-flex items-center gap-6">
                  <span className="text-lg font-bold font-aderos tracking-wider text-white/90">
                    {item}
                  </span>
                  <span className="w-2 h-2 bg-primary-500  rounded-full animate-pulse" />
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-600 to-transparent" />
    </div>
  )
})

export default Ticker
