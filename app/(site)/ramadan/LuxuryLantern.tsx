"use client";

import { motion } from "framer-motion";

export default function LuxuryLantern() {
  return (
    <>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-16 text-6xl text-[var(--lux-gold)] opacity-80"
      >
        🏮
      </motion.div>

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-32 right-24 text-5xl text-[var(--lux-gold)] opacity-80"
      >
        🏮
      </motion.div>
    </>
  );
}
