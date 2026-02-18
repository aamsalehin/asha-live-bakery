"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/Products";

interface Props {
  product: Product;
}

export default function RamadanProductCard({ product }: Props) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="
        group
        bg-white dark:bg-[var(--bg-section)]
        rounded-2xl
        shadow-sm hover:shadow-2xl
        transition-all duration-300
        overflow-hidden
        border border-neutral-100 dark:border-neutral-800
      "
    >
      {/* Image Area */}
      <div className="relative h-56 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        
        {/* Ramadan Badge */}
        <div
          className="
            absolute top-4 left-4
            bg-[var(--primary)]
            text-white text-xs
            px-3 py-1 rounded-full
            tracking-wide
            shadow-md
          "
        >
          রমজান স্পেশাল
        </div>

        <img
          src={product.img}
          alt={product.name}
          className="
            h-36 object-contain
            transition-transform duration-500
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}
      <div className="p-6 text-center">

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 tracking-wide">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <p className="text-xl font-bold text-[var(--primary)] mb-6">
          ৳ {product.price}
        </p>

        {/* Button */}
        <Link href={`/products/${product.id}`}>
          <button
            className="
              w-full
              border border-[var(--primary)]
              text-[var(--primary)]
              py-2.5 rounded-xl
              text-sm font-medium
              tracking-wide
              hover:bg-[var(--primary)]
              hover:text-white
              transition-all duration-300
              cursor-pointer
            "
          >
            বিস্তারিত দেখুন
          </button>
        </Link>
      </div>
    </motion.div>
  );
}
