"use client";

import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";
import { motion } from "framer-motion";
import Link from "next/link";
import LanternDecoration from "./LanternDecoration";

export default function RamadanPage() {
  return (
    <div className="relative min-h-screen py-24 px-6 md:px-16 bg-[var(--bg-section)] dark:bg-[var(--bg-section)] overflow-hidden">

      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/images/islamic-pattern.svg')] bg-repeat"></div>

      {/* Animated Lanterns */}
      <LanternDecoration />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            🌙 রমজান স্পেশাল মেনু
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            ইফতারের জন্য তাজা ও বিশেষ প্রস্তুত আইটেম
          </p>
        </div>

        {/* Menu List */}
        <div className="space-y-8">
          {RAMADAN_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="
                flex justify-between items-center
                border-b border-neutral-200 dark:border-neutral-800
                pb-6
              "
            >
              <div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mt-1">
                  {product.description}
                </p>
              </div>

              <div className="text-right">
                <p className="text-xl font-bold text-[var(--primary)]">
                  ৳ {product.price}
                </p>

                <Link href={`/products/${product.id}`}>
                  <button className="text-sm text-[var(--primary)] mt-2 hover:underline">
                    বিস্তারিত
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
    // ramadhan emerald



//     "use client";

// import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import LanternDecoration from "./LanternDecoration";

// export default function RamadanPage() {
//   return (
//     <div className="relative min-h-screen overflow-hidden bg-[var(--ramadan-emerald)] text-white py-28 px-6 md:px-16">

//       {/* Subtle Islamic Pattern */}
//       <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/islamic-pattern.svg')] bg-repeat"></div>

//       {/* Gold Glow */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[var(--ramadan-gold)] opacity-10 blur-[120px] rounded-full"></div>

//       <LanternDecoration />

//       <div className="relative z-10 max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-20">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold mb-6"
//           >
//             🌙 রমজান স্পেশাল মেনু
//           </motion.h1>

//           <p className="text-lg text-neutral-200">
//             ইফতারের জন্য আমাদের বিশেষ আয়োজন — প্রতিদিন তাজা প্রস্তুত
//           </p>
//         </div>

//         {/* Menu Style List */}
//         <div className="space-y-10">
//           {RAMADAN_PRODUCTS.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="flex justify-between items-start border-b border-white/10 pb-8"
//             >
//               <div>
//                 <h3 className="text-xl font-semibold text-[var(--ramadan-gold-soft)]">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-neutral-300 mt-2 max-w-xl">
//                   {product.description}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-xl font-bold text-[var(--ramadan-gold)]">
//                   ৳ {product.price}
//                 </p>

//                 <Link href={`/products/${product.id}`}>
//                   <button className="mt-2 text-sm border border-[var(--ramadan-gold)] px-4 py-1 rounded-full hover:bg-[var(--ramadan-gold)] hover:text-[var(--ramadan-emerald)] transition">
//                     বিস্তারিত
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
   


// ultra luxury 

// "use client";

// import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import LuxuryLantern from "./LuxuryLantern";
// import GoldCrescent from "./GoldCrescent";

// export default function RamadanLuxuryPage() {
//   return (
//     <div className="relative min-h-screen bg-[var(--lux-black)] text-white py-28 px-6 md:px-16 overflow-hidden">

//       {/* Islamic Pattern */}
//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/images/islamic-pattern.svg')] bg-repeat"></div>

//       {/* Gold Glow Center */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--lux-gold)] opacity-10 blur-[160px] rounded-full"></div>

//       <LuxuryLantern />
//       <GoldCrescent />

//       <div className="relative z-10 max-w-4xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-24">
//          <motion.h1
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   className="
//     text-4xl md:text-6xl font-bold mb-6
//   "
// >
//   Ramadan Kareem
// </motion.h1>



//           <p className="text-lg text-neutral-300">
//             আশা লাইভ বেকারির পক্ষ থেকে বিলাসবহুল রমজান আয়োজন
//           </p>
//         </div>

//         {/* Luxury Menu List */}
//         <div className="space-y-12">
//           {RAMADAN_PRODUCTS.map((product, index) => (
//             <motion.div
//               key={product.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               className="flex justify-between items-start border-b border-white/10 pb-10"
//             >
//               <div>
//                 <h3 className="text-2xl font-semibold text-[var(--lux-gold)]">
//                   {product.name}
//                 </h3>
//                 <p className="text-sm text-neutral-400 mt-3 max-w-xl">
//                   {product.description}
//                 </p>
//               </div>

//               <div className="text-right">
//                 <p className="text-2xl font-bold text-[var(--lux-gold-light)]">
//                   ৳ {product.price}
//                 </p>

//                 <Link href={`/products/${product.id}`}>
//                   <button className="mt-3 border border-[var(--lux-gold)] px-5 py-2 rounded-full hover:bg-[var(--lux-gold)] hover:text-black transition">
//                     বিস্তারিত দেখুন
//                   </button>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
