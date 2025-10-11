 import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const TalksGrid = ({ events }) => {
  return (
    <section className="py-20 px-4" id='events'>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            Talk Session
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Join us for insightful talks led by industry experts and innovators. Discover the latest trends, gain valuable knowledge, and engage in interactive sessions designed to inspire and empower participants from all backgrounds.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-[calc(50%-1rem)]"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:border-primary-600 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img
                    src={`/assets/img/talks${event.id}.jpeg`}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = '/assets/placeholder.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Talk Session
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 style={{ fontFamily: "Montserrat" }} className="text-xl font-bold text-gray-900 mb-0 group-hover:text-primary-600 transition-colors">
                    {event.title}
                  </h3>
                                    
                  <div className="flex items-center text-gray-600 mb-2">
                    
                    <span className="text-md">{event.description}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    {/* <a href={event.link} target="_blank" rel="noopener noreferrer">
                      <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {event.status}
                      </div>
                    </a> */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-primary-600 font-semibold cursor-pointer"
                    >
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TalksGrid