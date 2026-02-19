// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function RamadanHeroSection() {
//   return (
//     <section
//       className="
//         relative overflow-hidden
//         py-10 md:py-28 px-6 md:px-16
//         bg-[var(--secondary)]
//         dark:bg-[var(--bg-section)]
//       "
//     >
//       {/* Decorative Glow Background */}
//       <div className="absolute inset-0 opacity-10 pointer-events-none">
//         <div className="absolute top-10 left-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
//         <div className="absolute bottom-10 right-10 w-72 h-72 bg-[var(--primary)] rounded-full blur-3xl"></div>
//       </div>

//       <div className="max-w-4xl mx-auto text-center relative z-10">

//         {/* Crescent Moon */}
//         <motion.div
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-5xl mb-6"
//         >
//           🌙
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]"
//         >
//           রমজান স্পেশাল অফার
//         </motion.h1>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="text-xl mb-6 text-[var(--text-secondary)]"
//         >
//           ইফতারের জন্য তাজা ও সুস্বাদু বেকারি আইটেম
//         </motion.p>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//           className="text-lg mb-10 leading-relaxed text-[var(--text-secondary)]"
//         >
//           আশা লাইভ বেকারির পক্ষ থেকে রমজান উপলক্ষে বিশেষ আয়োজন।
//           চিকেন রোল, পিজা, বার্গার, বাখরখানি সহ আরও অনেক সুস্বাদু আইটেম
//           প্রতিদিন তাজা প্রস্তুত করা হয়।
//         </motion.p>

//         {/* CTA Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="flex flex-col sm:flex-row justify-center gap-4"
//         >
//           <Link href="/ramadan">
//             <button
//               className="
//                 bg-[var(--primary)]
//                 hover:bg-[var(--primary-hover)]
//                 text-white
//                 px-8 py-4 rounded-xl
//                 text-lg font-semibold
//                 shadow-md hover:shadow-lg
//                 transition cursor-pointer
//               "
//             >
//               রমজান স্পেশাল দেখুন
//             </button>
//           </Link>

//           <Link href="/contact">
//             <button
//               className="
//                 border-2 border-[var(--primary)]
//                 text-[var(--primary)]
//                 hover:bg-[var(--primary)]
//                 hover:text-white
//                 px-8 py-4 rounded-xl
//                 text-lg font-semibold
//                 transition cursor-pointer
//               "
//             >
//               প্রি-অর্ডার করুন
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function RamadanHeroSection() {
//   return (
//     <section
//       className="
//         relative overflow-hidden
//         pt-16 pb-20 md:pt-28 md:pb-32
//         px-5 sm:px-8 md:px-16
//         bg-gradient-to-b 
//         from-[var(--secondary)] 
//         to-[var(--bg-section)]
//       "
//     >
//       {/* Soft Glow Background */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--primary)] opacity-20 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary)] opacity-10 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative z-10 max-w-3xl mx-auto text-center">

//         {/* Crescent */}
//         <motion.div
//           initial={{ y: -15, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl sm:text-5xl mb-5"
//         >
//           🌙
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="
//             text-3xl sm:text-4xl md:text-5xl 
//             font-bold 
//             leading-tight
//             text-[var(--text-primary)]
//             mb-4
//           "
//         >
//           রমজান স্পেশাল অফার
//         </motion.h1>

//         {/* Decorative Line */}
//         <div className="w-20 h-[2px] bg-[var(--primary)] mx-auto mb-6 rounded-full"></div>

//         {/* Tagline */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="
//             text-base sm:text-lg md:text-xl 
//             text-[var(--text-secondary)]
//             mb-4
//           "
//         >
//           ইফতারের জন্য তাজা ও সুস্বাদু বেকারি আইটেম
//         </motion.p>

//         {/* Description */}
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="
//             text-sm sm:text-base md:text-lg
//             leading-relaxed
//             text-[var(--text-secondary)]
//             max-w-xl mx-auto
//             mb-10
//           "
//         >
//           আশা লাইভ বেকারির পক্ষ থেকে রমজান উপলক্ষে বিশেষ আয়োজন।
//           চিকেন রোল, পিজা, বার্গার, বাখরখানি সহ আরও অনেক সুস্বাদু
//           আইটেম প্রতিদিন তাজা প্রস্তুত করা হয়।
//         </motion.p>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
//           className="
//             flex flex-col sm:flex-row 
//             justify-center items-center
//             gap-4
//           "
//         >
//           <Link href="/ramadan">
//             <button
//               className="
//                 w-full sm:w-auto
//                 bg-[var(--primary)]
//                 hover:bg-[var(--primary-hover)]
//                 text-white
//                 px-8 py-3.5
//                 rounded-full
//                 text-base font-semibold
//                 shadow-lg hover:shadow-xl
//                 transition-all duration-300
//               "
//             >
//               রমজান স্পেশাল দেখুন
//             </button>
//           </Link>

//           <Link href="/contact">
//             <button
//               className="
//                 w-full sm:w-auto
//                 border border-[var(--primary)]
//                 text-[var(--primary)]
//                 hover:bg-[var(--primary)]
//                 hover:text-white
//                 px-8 py-3.5
//                 rounded-full
//                 text-base font-semibold
//                 transition-all duration-300
//               "
//             >
//               প্রি-অর্ডার করুন
//             </button>
//           </Link>
//         </motion.div>

//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// export default function RamadanHeroSection() {
//   return (
//     <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 px-6 md:px-16 bg-[#0b0b0c] text-white">

//       {/* 🌌 Star Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.06),transparent_40%)]"></div>

//       {/* ✨ Soft Gold Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500 opacity-10 blur-[140px] rounded-full"></div>

//       {/* 🏮 Lantern Left */}
//       <motion.div
//         animate={{ y: [0, 20, 0] }}
//         transition={{ duration: 6, repeat: Infinity }}
//         className="absolute top-16 left-6 md:left-16 text-5xl text-yellow-400 opacity-80"
//       >
//         🏮
//       </motion.div>

//       {/* 🏮 Lantern Right */}
//       <motion.div
//         animate={{ y: [0, 25, 0] }}
//         transition={{ duration: 7, repeat: Infinity }}
//         className="absolute top-24 right-6 md:right-20 text-6xl text-yellow-400 opacity-80"
//       >
//         🏮
//       </motion.div>

//       {/* 🎁 Floating Offer Badge */}
//       <motion.div
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         transition={{ delay: 0.5 }}
//         className="absolute top-6 right-6 bg-yellow-500 text-black text-xs px-4 py-2 rounded-full shadow-lg font-semibold"
//       >
//         Ramadan Offer
//       </motion.div>

//       <div className="relative z-10 max-w-3xl mx-auto text-center">

//         {/* 🌙 Animated SVG Crescent */}
//         <motion.svg
//           initial={{ rotate: -20, opacity: 0 }}
//           animate={{ rotate: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           viewBox="0 0 100 100"
//           className="w-16 h-16 mx-auto mb-6"
//         >
//           <path
//             d="M60 10 A40 40 0 1 0 60 90 A30 30 0 1 1 60 10"
//             fill="#d4af37"
//           />
//         </motion.svg>

//         {/* ✨ Gold Shimmer Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block"
//         >
//           <span className="relative bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-shimmer">
//             রমজান স্পেশাল অফার
//           </span>
//         </motion.h1>

//         <p className="text-base md:text-lg text-neutral-300 mb-8">
//           ইফতারের জন্য তাজা ও সুস্বাদু বেকারি আইটেম —
//           প্রতিদিন প্রস্তুত ভালোবাসা দিয়ে।
//         </p>

//         {/* CTA */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link href="/ramadan">
//             <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg transition">
//               রমজান স্পেশাল দেখুন
//             </button>
//           </Link>

//           <Link href="/contact">
//             <button className="w-full sm:w-auto border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full font-semibold transition">
//               প্রি-অর্ডার করুন
//             </button>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// }


// more dark to my colors
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RamadanHeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 px-6 md:px-16 bg-[#120807] text-white">

      {/* 🌌 Star Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.06),transparent_40%)]"></div>

      {/* ✨ Soft Gold Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500 opacity-10 blur-[140px] rounded-full"></div>

      {/* 🏮 Lantern Left */}
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-16 left-6 md:left-16 text-5xl text-yellow-400 opacity-80"
      >
        🏮
      </motion.div>

      {/* 🏮 Lantern Right */}
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-24 right-6 md:right-20 text-6xl text-yellow-400 opacity-80"
      >
        🏮
      </motion.div>

      {/* 🎁 Floating Offer Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute top-6 right-6 bg-yellow-500 text-black text-xs px-4 py-2 rounded-full shadow-lg font-semibold"
      >
        Ramadan Offer
      </motion.div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* 🌙 Animated SVG Crescent */}
        <motion.svg
          initial={{ rotate: -20, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewBox="0 0 100 100"
          className="w-16 h-16 mx-auto mb-6"
        >
          <path
            d="M60 10 A40 40 0 1 0 60 90 A30 30 0 1 1 60 10"
            fill="#d4af37"
          />
        </motion.svg>

        {/* ✨ Gold Shimmer Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 relative inline-block"
        >
          <span className="relative bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-shimmer">
            রমজান স্পেশাল অফার
          </span>
        </motion.h1>

        <p className="text-base md:text-lg text-neutral-300 mb-8">
          ইফতারের জন্য তাজা ও সুস্বাদু বেকারি আইটেম —
          প্রতিদিন প্রস্তুত ভালোবাসা দিয়ে।
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/ramadan">
            <button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold shadow-lg transition">
              রমজান স্পেশাল দেখুন
            </button>
          </Link>

          <Link href="/contact">
            <button className="w-full sm:w-auto border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full font-semibold transition">
              প্রি-অর্ডার করুন
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
