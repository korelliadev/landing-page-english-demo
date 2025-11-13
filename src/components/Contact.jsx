import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto e introducción */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#484848] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Whether you have questions about our programs, pricing, or TOEFL
            preparation, our team is ready to help you take the next step in
            your English journey.
          </p>

          <div className="space-y-3">
            <p className="text-[#484848]">
              📍 <span className="font-semibold">Location:</span> 123 Language
              St., New York, NY
            </p>
            <p className="text-[#484848]">
              📞 <span className="font-semibold">Phone:</span> +1 (555) 234-5678
            </p>
            <p className="text-[#484848]">
              ✉️ <span className="font-semibold">Email:</span>{" "}
              contact@bestenglish.com
            </p>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A938BC] transition"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A938BC] transition"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A938BC] transition"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A938BC] transition resize-none"
            required
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-4 flex items-center justify-center gap-2 bg-[#A938BC] hover:bg-[#D546ED] text-white font-medium py-3 rounded-lg transition-all shadow-md"
          >
            <Send size={20} />
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
