import React from "react";
import { motion } from 'framer-motion'

export default function AboutHost() {
    return (
        <section className="py-16 px-4 bg-white" id="about-host">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
                    <div className="bg-neutral-800 rounded-2xl p-8 shadow-lg text-md text-white font-medium flex flex-col md:flex-row gap-6" id="aboutHostCard">
                        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
                            <img
                                src="assets/img/host.jpg"
                                alt="IEEE SB PRC"
                                className="rounded-3xl shadow-xl object-contain w-full max-w-md h-64 md:h-72"
                                style={{ minHeight: 220, maxHeight: '100%', width: '100%' }}
                            />
                        </div>
                        <div className="w-full md:w-1/2 order-2 md:order-1">
                            <div className="bg-none rounded-2xl p-8 text-md font-medium">
                                <h3 className="text-4xl md:text-3xl font-extrabold mb-10 text-center tracking-tight font-aderos">
                                    About IEEE SB PRC
                                </h3>
                                <p className="leading-relaxed">
                                    The IEEE Student Branch at Providence College of Engineering (PRC) is a vibrant community dedicated to fostering technological innovation and professional development among engineering students.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
