"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RamadanHeroSection() {
  return (
    <section
      className="
        relative overflow-hidden
        py-10 md:py-28 px-6 md:px-16
        bg-[var(--secondary)]
        dark:bg-[var(--bg-section)]
      "
    >
      {/* Decorative Glow Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Crescent Moon */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl mb-6"
        >
          🌙
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
        >
          রমজান স্পেশাল অফার
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl mb-6 text-[var(--text-secondary)]"
        >
          ইফতারের জন্য তাজা ও সুস্বাদু বেকারি আইটেম
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-lg mb-10 leading-relaxed text-[var(--text-secondary)]"
        >
          আশা লাইভ বেকারির পক্ষ থেকে রমজান উপলক্ষে বিশেষ আয়োজন।
          চিকেন রোল, পিজা, বার্গার, বাখরখানি সহ আরও অনেক সুস্বাদু আইটেম
          প্রতিদিন তাজা প্রস্তুত করা হয়।
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/ramadan">
            <button
              className="
                bg-[var(--primary)]
                hover:bg-[var(--primary-hover)]
                text-white
                px-8 py-4 rounded-xl
                text-lg font-semibold
                shadow-md hover:shadow-lg
                transition cursor-pointer
              "
            >
              রমজান স্পেশাল দেখুন
            </button>
          </Link>

          <Link href="/contact">
            <button
              className="
                border-2 border-[var(--primary)]
                text-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-white
                px-8 py-4 rounded-xl
                text-lg font-semibold
                transition cursor-pointer
              "
            >
              প্রি-অর্ডার করুন
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
