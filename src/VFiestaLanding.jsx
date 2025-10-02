import React, { useMemo, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "./components/Header";
import AlertModal from "./components/alert";
import AboutPie from "./components/AboutPie";
import AboutHost from "./components/AboutHost";
import Ticker from "./components/Ticker";
import About from "./components/About";
import EventsGrid from "./components/EventsGrid";
import Gallery from "./components/Gallery";
import Tickets from "./components/Tickets";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GridBackground from "./components/GridBackground";
import Countdown from "./components/Countdown";

export default function VFiestaLanding() {
  const [alertOpen, setAlertOpen] = useState(false);
  const alertTitle = "Registration";
  const alertMessage = "Registration will open soon. Stay tuned!";

  // Handler for reg-btn click
  useEffect(() => {
    const handleRegBtnClick = (e) => {
      setAlertOpen(true);
    };
    document.addEventListener('reg-btn-click', handleRegBtnClick);
    return () => document.removeEventListener('reg-btn-click', handleRegBtnClick);
  }, []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Smooth scroll behavior
    const handleScroll = (e) => {
      if (e.target.hash) {
        e.preventDefault();
        const target = document.querySelector(e.target.hash);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleScroll);
    return () => document.removeEventListener("click", handleScroll);
  }, []);

  const stats = useMemo(() => ({ days: 10, hours: 11 }), []);
  const speakers = useMemo(
    () => [
      { name: "RJ Shambu", role: "MC", img: "/assets/speaker1.jpg" },
      { name: "RJ Shambu", role: "MC", img: "/assets/speaker2.jpg" },
      { name: "RJ Shambu", role: "MC", img: "/assets/speaker3.jpg" },
    ],
    []
  );
  const events = useMemo(
    () => [
      { id: 1, title: "Mascot Marvels - Pre Event #1 ", date: "Oct 2nd", link: "https://tinyurl.com/MascotMarvels" },
      { id: 2, title: "Doooodle — Pre Event #2", date: "Oct 2nd", link: "https://tinyurl.com/Doodle-VFIESTA" },
      { id: 3, title: "Game Gambit — Pre Event #3", date: "Oct 4th", link: "https://tinyurl.com/GrandGambit-VFIESTA" },
      { id: 4, title: "Goal Rush — Pre Event #4", date: "Oct 5th",  link: "https://tinyurl.com/Goal-Rush" },
      { id: 5, title: "Stumble Fest — Pre Event #5", date: "Oct 6th", link: "https://tinyurl.com/Stumble-Fest" },
    ],
    []
  );
  // const eventLink = useMemo(
  //   () =>[
  //     {id: 1, link: "https://tinyurl.com/Stumble-Fest"},
  //     {id: 2, link: "https://tinyurl.com/Doodle-VFIESTA"},
  //     {id: 3, link: "https://tinyurl.com/Grand-Gambit-VFIESTA"},
  //     {id: 4, link: "https://tinyurl.com/Goal-Rush"},
  //     {id: 5, link: "https://tinyurl.com/MascotMarvels"},
  //   ]
    
  // )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 font-sans text-gray-900 overflow-x-hidden">
      <AlertModal isOpen={alertOpen} onClose={() => setAlertOpen(false)} title={alertTitle} message={alertMessage} />
      {/* Loading Screen */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-secondary-900 to-secondary-800 z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ pointerEvents: isLoaded ? "none" : "auto" }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-white font-aderos">
            Loading Excellence...
          </h2>
        </motion.div>
      </motion.div>

      <GridBackground
        className="min-h-screen"
        background="transparent"
        size={32}
        lineColor="rgba(220, 38, 38, 0.05)"
      >
        <Header />

        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center pt-5 px-6"
          aria-labelledby="hero-heading"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-200/20 to-primary-200/20 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                IEEE PIE KS x IEEE SB PRC
                
              </motion.p> */}
              <motion.h1 
                id="hero-heading" 
                className="custom-hero-heading font-extrabold tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="block text-black font-normal" style={{ fontFamily: 'inherit' }}>
                  V-FIESTA{' '}
                  <span style={{ fontFamily: 'Montserrat, sans-serif' }} className="text-red-600 font-extrabold">4.0</span>
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-600 max-w-4xl mx-auto leading-relaxed font-medium px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Igniting Innovation & Entrepreneurship Excellence
                <span className="block mt-2 text-sm sm:text-base md:text-lg text-secondary-500">
                  An IEEE PIE Kerala Section flagship experience that transforms
                  visionaries into industry leaders
                </span>
              </motion.p>

              {/* Countdown Timer */}
              <Countdown targetDate="2024-10-15T00:00:00" />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8 md:mt-10 px-4"
              >
                <motion.a
                  href="#tickets"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 font-aderos tracking-wide group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center ">
                    SECURE YOUR SPOT
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </motion.a>

                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary-300 text-secondary-700 text-lg font-semibold rounded-2xl hover:border-primary-600 hover:text-primary-600 transition-all duration-300 font-aderos tracking-wide md:mb-0 mb-12"
                >
                  EXPLORE EVENT
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Ticker />

        <main className="relative">
          <About />
          <AboutPie />
          <AboutHost />
          <EventsGrid events={events} />
          <Gallery />
          <Tickets />
          <Contact />
        </main>

        <Footer />
      </GridBackground>
    </div>
  );
}
