"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RAMADAN_PRODUCTS } from "@/data/ramadanProducts";
import RamadanProductCard from "./RamadanProductCard";

export default function RamadanSpecialSection() {
  const featuredRamadan = RAMADAN_PRODUCTS.filter(
    (item) => item.featuredProduct
  ).slice(0, 4);

  return (
    <section
      className="
        py-20 px-6 md:px-16
        bg-[var(--bg-section)]
        dark:bg-[var(--secondary)]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
            🌙 রমজান স্পেশাল আইটেম
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            ইফতারের জন্য আমাদের বিশেষ প্রস্তুতি। প্রতিদিন তাজা ও সুস্বাদু
            আইটেম তৈরি করা হয় ভালোবাসা দিয়ে।
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
  {featuredRamadan.map((product) => (
    <RamadanProductCard key={product.id} product={product} />
  ))}
</div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/ramadan">
            <button
              className="
                border-2 border-[var(--primary)]
                text-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-white
                px-8 py-3 rounded-xl
                font-semibold
                transition cursor-pointer
              "
            >
              সব রমজান আইটেম দেখুন
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
