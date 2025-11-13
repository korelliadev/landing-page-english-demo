import React from "react";
import { motion } from 'framer-motion';

import teacherImg from "../assets/img/teacher.png";

export const Hero = () => {
  return (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        {/* Texto a la izquierda */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#484848]">
            Best English
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-[#A938BC]">
            Learning Center
          </h1>
          <p className="text-gray-700 text-lg md:text-xl">
            Our experienced instructors and proven methodology help students
            achieve fluency through personalized lessons and real-world
            practice.
          </p>

          {/* Botón con delay */}
          <motion.button
            className="mt-6 px-8 py-3 rounded-lg font-medium text-white bg-[#A938BC] hover:bg-[#D546ED] transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          >
            Enroll Now!
          </motion.button>
        </motion.div>

        {/* Imagen a la derecha */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img
            src={teacherImg}
            alt="Teacher"
            className="w-full max-w-lg mx-auto md:mx-0"
          />
        </motion.div>
      </div>
    </section>
  );
};
