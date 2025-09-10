"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export const Stats: React.FC = () => {
  const stats = [
    { id: 1, value: 500, label: "Products" },
    { id: 2, value: 10000, label: "Happy Customers" },
    { id: 3, value: 100, label: "Natural Ingredients (%)" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[--card] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="p-4 sm:p-6 border border-[--border]/20 rounded-[--radius-lg] hover:bg-[--card]/90 transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.id * 0.3 }}
              aria-label={`${stat.value} ${stat.label}`}
            >
              <h3 className="text-5xl sm:text-6xl font-bold text-[--primary] mb-2 tracking-tight">
                <CountUp end={stat.value} duration={2} separator="," />
              </h3>
              <p className="text-lg sm:text-xl font-medium text-[--muted-foreground] tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
