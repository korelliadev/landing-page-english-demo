import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "../constants/testimonials";



export const Testimonials = () => {
 

  return (
    <section className="bg-[#FFFDFB] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#484848]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          What Our Students Say
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Real experiences from students who achieved their goals with{" "}
          <span className="text-[#A938BC] font-semibold">Best English</span>.
        </motion.p>
      </div>

      {/* Testimonials grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-24 h-24 rounded-full object-cover mb-6"
            />

            {/* Stars */}
            <div className="flex justify-center mb-3">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={18} className="text-[#FFD700] fill-[#FFD700]" />
              ))}
            </div>

            <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
              "{t.text}"
            </p>

            <div>
              <h4 className="text-xl font-semibold text-[#484848]">{t.name}</h4>
              <p className="text-[#A938BC] font-medium text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
