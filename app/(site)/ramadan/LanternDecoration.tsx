// "use client";

// import { motion } from "framer-motion";

// export default function LanternDecoration() {
//   return (
//     <>
//       {/* Left Lantern */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 4, repeat: Infinity }}
//         className="absolute top-10 left-10 text-4xl opacity-60"
//       >
//         🏮
//       </motion.div>

//       {/* Right Lantern */}
//       <motion.div
//         animate={{ y: [0, 25, 0] }}
//         transition={{ duration: 5, repeat: Infinity }}
//         className="absolute top-20 right-16 text-5xl opacity-60"
//       >
//         🏮
//       </motion.div>
//     </>
//   );
// }

// emerald ramadan 





"use client";

import { motion } from "framer-motion";

export default function LanternDecoration() {
  return (
    <>
      {/* Left Lantern */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-16 left-10 text-5xl opacity-70"
      >
        🏮
      </motion.div>

      {/* Right Lantern */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 right-16 text-6xl opacity-70"
      >
        🏮
      </motion.div>
    </>
  );
}

