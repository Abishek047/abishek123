// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center scroll-mt-24">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center gap-12 px-6 py-24">
        
        {/* LEFT: text content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold leading-tight text-white"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            ABISHEK K
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-300 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
          >
            Front-End & Backend · React & Node.js · ML Enthusiast. I build responsive
            web apps and end-to-end solutions. Currently developing a Personal Finance
            monthly-prediction ML project.
          </motion.p>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="assets/Abishek_k_cv.pdf"
              download
              className="inline-flex items-center px-5 py-3 bg-accent text-white rounded-lg shadow hover:opacity-95 transition"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-5 py-3 border border-gray-700 text-gray-200 rounded-lg hover:border-accent transition"
            >
              See Projects
            </a>
          </div>

          <div className="mt-6 text-sm text-gray-400 space-y-1">
            <div>Perungudi, Chennai, IN</div>
            <div>
              <a href="mailto:abishek0455@gmail.com" className="hover:text-accent">
                abishek0455@gmail.com
              </a>{" "}
              · +91 86101 44743
            </div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 bg-gray-800/60 text-sm text-accent px-3 py-1 rounded-full">
              <strong className="text-white">Working on</strong>
              <span className="text-gray-200">Personal Finance ML</span>
            </span>
          </div>
        </div>

       {/* RIGHT: profile image with neat glow */}
<motion.div
  initial={{ scale: 0.85, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.6 }}
  className="flex-shrink-0 relative flex justify-center items-center"
>
  {/* Soft glowing background */}
  <motion.div
    animate={{ scale: [1, 1.05, 1], opacity: [0.7, 1, 0.7] }}
    transition={{ repeat: Infinity, duration: 4 }}
    className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-accent/40 blur-3xl"
  />

  {/* Profile image */}
  <img
    src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
    alt="Abishek profile"
    className="relative w-50 h-51 md:w-64 md:h-64 rounded-full ring-4 ring-accent object-cover shadow-2xl"
  />
    </motion.div>
      </div>
    </section>
  );
}
