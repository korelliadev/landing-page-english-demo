import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Clock, Globe, Users, Award, Laptop } from "lucide-react";
import teacherImg from "../assets/img/teacher.jpg";
import studentImg from "../assets/img/student.jpg";

export const About = () => {
  return (
    <section className="bg-[#FFFDFB] py-20 px-4 sm:px-6 lg:px-8" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* Columna izquierda: descripción general */}
        <motion.div
          className="bg-white rounded-2xl shadow-md p-10 flex flex-col justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-4xl font-bold text-[#484848] mb-6">
              About <span className="text-[#A938BC]">Best English</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We are a certified English learning center that helps students
              achieve fluency and prepare for international exams like{" "}
              <span className="font-semibold text-[#A938BC]">TOEFL</span>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our expert teachers guide learners through personalized courses
              adapted to their level, goals, and schedule. Whether you’re
              studying for academic, professional, or personal growth, we help
              you communicate with confidence.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Enjoy flexible online classes, engaging content, and certified
              methodology proven to deliver results.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-[#E8D9F0] px-4 py-2 rounded-full text-[#A938BC] font-medium">
              <Globe size={20} /> <span>TOEFL Preparation</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#FFF3D8] px-4 py-2 rounded-full text-[#A938BC] font-medium">
              <Clock size={20} /> <span>Flexible Schedules</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#E8D9F0] px-4 py-2 rounded-full text-[#A938BC] font-medium">
              <BookOpen size={20} /> <span>Certified Teachers</span>
            </div>
          </div>

          <motion.button
            className="mt-8 px-8 py-3 rounded-lg font-medium text-white bg-[#A938BC] hover:bg-[#D546ED] transition-colors w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Columna derecha: imagen del profesor */}
        <motion.div
          className="rounded-2xl overflow-hidden relative shadow-lg flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={teacherImg}
            alt="Professional English Teacher"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white text-[#A938BC] px-4 py-2 rounded-lg text-sm font-medium shadow">
            Professional Teachers
          </div>
        </motion.div>
      </div>

      {/* Segunda fila: cards de beneficios con más contenido */}
      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <motion.div
          className="bg-[#E8D9F0] rounded-2xl p-8 shadow-md text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Laptop size={48} className="text-[#A938BC] mb-4" />
          <h3 className="text-xl font-semibold text-[#484848] mb-3">
            Personalized Learning
          </h3>
          <p className="text-gray-700 mb-3">
            We tailor every class to your goals and proficiency level, ensuring
            you learn efficiently and confidently.
          </p>
          <p className="text-[#A938BC] font-medium">
            Adaptive lessons for all ages.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#FFF3D8] rounded-2xl p-8 shadow-md text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Users size={48} className="text-[#A938BC] mb-4" />
          <h3 className="text-xl font-semibold text-[#484848] mb-3">
            Learn Anywhere
          </h3>
          <p className="text-gray-700 mb-3">
            Access our interactive virtual classrooms or study on your own
            schedule from any device — desktop, tablet, or phone.
          </p>
          <p className="text-[#A938BC] font-medium">
            100% online or hybrid options.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="rounded-2xl overflow-hidden relative shadow-md flex flex-col justify-end"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <img
            src={studentImg}
            alt="Student studying English"
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-6 rounded-t-2xl text-center">
            <Award size={40} className="text-[#A938BC] mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-[#484848] mb-3">
              Certified Results
            </h3>
            <p className="text-gray-700 mb-2">
              Our students consistently achieve top TOEFL scores and gain global
              opportunities through their English mastery.
            </p>
            <p className="text-[#A938BC] font-medium">Your success, certified.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
