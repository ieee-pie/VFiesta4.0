import React from 'react'
import { motion } from 'framer-motion'
import ImageWithFallback from './ImageWithFallback'

export default function Contact() {
  const contacts = [
    // {
    //   name: 'Sandra Sara Soloman',
    //   phone: '+91 9074602051',
    //   image: '/assets/img/contact1.jpg',
    //   role: 'Event Coordinator'
    // },
    // {
    //   name: 'Jez Thomas',
    //   phone: '+91 9074602051',
    //   image: '/assets/img/contact4.jpg',
    //   role: 'Event Coordinator'
    // },
    {
      name: 'Alwin Jose',
      phone: '+91 9846797378',
      image: '/assets/img/contact2.jpg',
      role: 'POC IEEE SB PRC'
    },
    {
      name: 'Shreyas Abraham',
      phone: '+91 8078262041',
      image: '/assets/img/contact3.jpg',
      role: 'POC IEEE PIE KS'
    },
    
  ]

  const leads=[
    {
      name: 'Sandra Sara Solomon',
      phone: '+91 9074602051',
      image: '/assets/img/contact1.jpg',
      role: 'Event Coordinator'
    },
    {
      name: 'Jez Thomas',
      phone: '+91 9074602051',
      image: '/assets/img/contact4.jpg',
      role: 'Event Coordinator'
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
      id="contact" 
      className="relative py-24 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-primary-100/30 to-accent-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-100/20 to-primary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 text-sm font-bold rounded-full uppercase tracking-wider mb-6">
            Get In Touch
          </span>
          
          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 tracking-tight">
            CONNECT WITH THE
            <span className="block bg-primary-700 bg-clip-text text-transparent">
              V-FIESTA <span style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-red-700 font-extrabold">4.0</span> TEAM
            </span>
          </h2>
          
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your entrepreneurial journey? Our dedicated team is here to assist you with 
            registrations, partnerships, and any questions about V-Fiesta 4.0.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Map Section */}
          <motion.div variants={itemVariants} className="relative">
             <div className=" rounded-2xl p-4">
              <span className="font-bold text-md text-primary-700 mb-1">Event Venue:</span>&nbsp;
              <h3 className="font-bold text-lg text-secondary-800">
                Providence College of Engineering
              </h3>
            </div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
              <iframe
                title="Providence College of Engineering & School of Business, Chengannur"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.898498176114!2d76.61287717408243!3d9.299333390773205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622984cfaf3af%3A0xd0320f890b6fca5!2sProvidence%20College%20of%20Engineering%20%26%20School%20of%20Business%2C%20Chengannur!5e1!3m2!1sen!2sin!4v1759124074667!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="w-full h-96 lg:h-[500px] border-0"
              />
            </div>
            
            {/* <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 shadow-lg z-20">
              <h3 className="font-bold text-secondary-900 mb-1">Event Venue</h3>
              <p className="text-sm text-secondary-600">
                Providence College of Engineering<br />
                Chengannur, Kerala
              </p>
            </div> */}
          </motion.div>

          {/* Contact Team */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold text-secondary-900 mb-4 font-aderos">
                Meet Our Organizing Team
              </h3>
              <p className="text-secondary-600">
                Reach out to our expert team for personalized assistance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
              {leads.map((leads, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white/80 backdrop-blur-xl border border-secondary-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                      <ImageWithFallback
                        src={leads.image}
                        alt={leads.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        width={80}
                        height={80}
                        text={leads.name.split(' ')[0]}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-1">{leads.name}</h4>
                      <p className="text-sm text-secondary-500 mb-2">{leads.role}</p>
                      {/* <a 
                        href={`tel:${leads.phone}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-medium">{leads.phone}</span>
                      </a> */}
                    </div>
                  </div>
                </motion.div>
              ))}
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group bg-white/80 backdrop-blur-xl border border-secondary-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-accent-400/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                      <ImageWithFallback
                        src={contact.image}
                        alt={contact.name}
                        className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-lg"
                        width={80}
                        height={80}
                        text={contact.name.split(' ')[0]}
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-1">{contact.name}</h4>
                      <p className="text-sm text-secondary-500 mb-2">{contact.role}</p>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm font-medium">{contact.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Email Contact */}
            <motion.div 
              variants={itemVariants}
              className="bg-primary-700 rounded-2xl p-6 text-white shadow-xl"
            >
              <h4 className="font-bold mb-3">Contact Us</h4>
              <a 
                href="mailto:ieeepie.kerala@gmail.com" 
                className="inline-flex items-center text-white hover:text-white/90 transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">ieeepie.kerala@gmail.com</span>
              </a>
              <p className="text-sm mt-2 opacity-90">
                For partnerships, media inquiries, and general information
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-aderos">
              Ready to Transform Your Future?
            </h3>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to connect with industry leaders, gain invaluable insights, 
              and accelerate your entrepreneurial journey.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#tickets"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-700 text-white text-lg font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 font-aderos tracking-wide group"
              >
                <span>REGISTER NOW</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.a>
              
              <a
                href="mailto:ieeepie.kerala@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 font-aderos tracking-wide"
              >
                ASK QUESTIONS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
