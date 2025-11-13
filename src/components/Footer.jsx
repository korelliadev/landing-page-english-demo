import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#484848] text-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 items-start">
        {/* Columna 1: Info general */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">Best English</h3>
          <p className="text-gray-300 leading-relaxed">
            Empowering students worldwide to achieve fluency and confidence in
            English. Certified TOEFL preparation and personalized learning for
            every level.
          </p>
        </motion.div>

        {/* Columna 2: Links rápidos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {["Home", "About", "Programs", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#A938BC] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Columna 3: Contacto y redes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
          <p className="text-gray-300 mb-2">📍 123 Language St., New York, NY</p>
          <p className="text-gray-300 mb-2">📞 +1 (555) 234-5678</p>
          <p className="text-gray-300 mb-6">✉️ contact@bestenglish.com</p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-[#A938BC] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#A938BC] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#A938BC] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#A938BC] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Línea inferior */}
      <motion.div
        className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © {new Date().getFullYear()} Developed by Korellia. All rights reserved.
      </motion.div>
    </footer>
  );
};
