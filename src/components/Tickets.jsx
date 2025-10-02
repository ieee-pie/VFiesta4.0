import React, { memo } from 'react'
import { motion } from 'framer-motion'

const TicketCard = memo(function TicketCard({ ticket, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
      className="relative group"
    >
      <div className="relative bg-white/90 backdrop-blur-xl border-2 rounded-3xl p-8 shadow-xl transition-all duration-300 overflow-hidden border-primary-600 hover:border-primary-700">
        <div className="absolute top-0 right-0 w-28 h-28 bg-primary-100/30 rounded-full blur-2xl" />

        <div className="relative z-10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-secondary-900 mb-2 font-aderos">{ticket.heading}</h3>
            <div className="w-16 h-0.5 bg-primary-600 mx-auto" />
          </div>

          <div className="text-center mb-8">
            <div className="text-4xl font-extrabold mb-2 text-secondary-800">{ticket.price}</div>
            {ticket.originalPrice && (
              <div className="text-lg text-secondary-400 line-through">{ticket.originalPrice}</div>
            )}
          </div>

          <motion.a
            href="#register"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="block w-full py-4 px-6 text-center text-sm font-bold rounded-xl shadow-lg transition-all duration-300 font-aderos tracking-wide relative overflow-hidden group bg-primary-600 text-white hover:shadow-xl reg-btn"
            onClick={e => {
              e.preventDefault();
              const evt = new CustomEvent('reg-btn-click', { bubbles: true });
              e.target.dispatchEvent(evt);
            }}
          >
            <span className="relative z-10">{ticket.price === 'Special Price' ? 'CONTACT FOR PRICING' : 'SECURE YOUR SPOT'}</span>
            <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-primary-700" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
})

export default function Tickets() {
  const ticketCategories = [
    { heading: 'Non-IEEE Members', price: '₹1,299', originalPrice: '₹1,599' },
    { heading: 'IEEE Members', price: '₹999', originalPrice: '₹1,299' },
    { heading: 'IEEE SB PRC', price: '₹899', originalPrice: '₹1,199' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
  }

  return (
    <motion.section
      id="tickets"
      className="relative py-20 px-6 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-6 py-2 bg-primary-100 text-primary-700 text-sm font-bold rounded-full uppercase tracking-wider mb-6">Event Pricing</span>

          <h2 className="text-4xl md:text-6xl font-extrabold text-secondary-900 mb-8 tracking-tight">
            INVESTMENT IN YOUR
            <span className="block bg-primary-600 bg-clip-text text-transparent">FUTURE SUCCESS</span>
          </h2>

          {/* <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your entrepreneurial journey. Every ticket includes access to world-class sessions, premium networking opportunities, and resources that will accelerate your success.
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ticketCategories.map((ticket, index) => (
            <TicketCard key={index} ticket={ticket} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
