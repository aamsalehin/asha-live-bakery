"use client";

import { motion } from "framer-motion";

export default function GoldCrescent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 2 }}
      className="absolute top-10 right-10 text-7xl text-[var(--lux-gold)]"
    >
      🌙
    </motion.div>
  );
}
