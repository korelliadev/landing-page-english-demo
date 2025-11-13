import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { plans } from "../constants/plans";

export const Pricing = () => {
  return (
    <section
      id="services"
      className="bg-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-[#484848]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Flexible Plans for Every Learner
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Choose the plan that fits your goals and learning style — whether
          you're starting out or preparing for certification.
        </motion.p>
      </div>

      {/* Cards de precios */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => {
          const Icon = plan.icon;
          return (
            <motion.div
              key={plan.id}
              className={`rounded-2xl shadow-md p-8 flex flex-col justify-between ${
                plan.highlight ? "text-white" : "text-[#484848]"
              } ${plan.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  <Icon
                    size={36}
                    className={plan.highlight ? "text-white" : "text-[#A938BC]"}
                  />
                </div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlight ? "text-white" : "text-[#484848]"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-4xl font-bold ${
                    plan.highlight ? "text-white" : "text-[#A938BC]"
                  }`}
                >
                  {plan.price}
                  <span className="text-lg font-normal">{plan.period}</span>
                </p>
              </div>

              <ul className="mt-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-start space-x-2 ${
                      plan.highlight ? "text-white" : "text-gray-700"
                    }`}
                  >
                    <CheckCircle
                      size={18}
                      className={`mt-1 ${
                        plan.highlight ? "text-white" : "text-[#A938BC]"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={`mt-8 w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlight
                    ? "bg-white text-[#A938BC] hover:bg-[#F5E6FA]"
                    : "bg-[#A938BC] text-white hover:bg-[#D546ED]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Get Started
              </motion.button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
