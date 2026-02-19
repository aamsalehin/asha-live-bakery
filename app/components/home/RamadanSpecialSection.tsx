// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";
// import RamadanProductCard from "./RamadanProductCard";

// export default function RamadanSpecialSection() {
//   const featuredRamadan = RAMADAN_PRODUCTS.filter(
//     (item) => item.featuredProduct
//   ).slice(0, 4);

//   return (
//     <section
//       className="
//         py-20 px-6 md:px-16
//         bg-[var(--bg-section)]
//         dark:bg-[var(--secondary)]
//       "
//     >
//       <div className="max-w-7xl mx-auto">

//         {/* Section Header */}
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
//             🌙 রমজান স্পেশাল আইটেম
//           </h2>
//           <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
//             ইফতারের জন্য আমাদের বিশেষ প্রস্তুতি। প্রতিদিন তাজা ও সুস্বাদু
//             আইটেম তৈরি করা হয় ভালোবাসা দিয়ে।
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
//   {featuredRamadan.map((product) => (
//     <RamadanProductCard key={product.id} product={product} />
//   ))}
// </div>

//         {/* View All Button */}
//         <div className="text-center mt-12">
//           <Link href="/ramadan">
//             <button
//               className="
//                 border-2 border-[var(--primary)]
//                 text-[var(--primary)]
//                 hover:bg-[var(--primary)]
//                 hover:text-white
//                 px-8 py-3 rounded-xl
//                 font-semibold
//                 transition cursor-pointer
//               "
//             >
//               সব রমজান আইটেম দেখুন
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";
import RamadanProductCard from "./RamadanProductCard";

export default function RamadanSpecialSection() {
  const featuredRamadan = RAMADAN_PRODUCTS.filter(
    (item) => item.featuredProduct
  ).slice(0, 6);

  return (
    <section className="
      relative
      py-24 px-6 md:px-16
      bg-gradient-to-b
      from-[#140B09]
      via-[#120807]
      to-[#0F0605]
      text-white
      overflow-hidden
    ">

      {/* Subtle Warm Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,215,0,0.06),transparent_45%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-shimmer">
            রমজান স্পেশাল অফার
          </span>

          <p className="text-neutral-300 max-w-2xl mx-auto mt-4">
            ইফতারের জন্য আমাদের বিলাসবহুল আয়োজন —
            প্রতিদিন প্রস্তুত তাজা ও সুস্বাদু আইটেম।
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          xl:grid-cols-6
          gap-6
        ">
          {featuredRamadan.map((product) => (
            <RamadanProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Beautiful Small Elegant Button */}
        <div className="text-center mt-16">
          <Link href="/ramadan">
            <button className="
              group relative
              inline-flex items-center gap-2
              text-sm tracking-wide
              font-medium
              text-yellow-400
              hover:text-yellow-300
              transition
            ">
              <span>সব রমজান আইটেম দেখুন</span>

              {/* Elegant underline animation */}
              <span className="
                absolute left-0 -bottom-1
                h-[1px] w-0
                bg-yellow-400
                group-hover:w-full
                transition-all duration-300
              "></span>
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
