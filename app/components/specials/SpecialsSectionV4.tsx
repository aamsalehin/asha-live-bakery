
"use client";

import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";
import { ShoppingCart } from "lucide-react";

export default function SpecialsSectionV4() {
  const addToCart = useCartStore((state) => state.addToCart);

  // Pick special product
  const product = PRODUCTS.find((p) => p.productOfTheDay);

  if (!product) return null;

  return (
    <section className="py-24 px-6">

      {/* Section title */}
      <div className="max-w-5xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold border-l-4 pl-4 border-[var(--primary)]">
          আজকের স্পেশাল
        </h2>
      </div>

      {/* FEATURED IMAGE BLOCK */}
      <div className="max-w-5xl mx-auto ">
        <div
          className="
            group relative overflow-hidden rounded-3xl
            shadow-2xl cursor-pointer bg-white
          "
        >
          {/* IMAGE */}
          <img
            src="/images/products/bun-items/burger-bun.png"
            alt={product.name}
            className="
              w-full h-[420px] md:h-[480px] object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* DARK OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-black/50
              group-hover:bg-black/50
              transition
            "
          />

          {/* CONTENT */}
          <div
            className="
              absolute inset-0
              flex items-end
              p-8 md:p-12
            "
          >
            <div className="max-w-xl text-white space-y-4">

              <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-[var(--primary)]">
                ⭐ স্পেশাল অফার
              </span>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                {product.name}
              </h3>

              <p className="text-base md:text-lg opacity-90">
                {product.description ??
                  "আজকের জন্য বিশেষভাবে প্রস্তুত তাজা ও সুস্বাদু বেকারি আইটেম।"}
              </p>

              <p className="text-2xl font-bold text-[var(--secondary)]">
                {product.price} টাকা / {product.unit}
              </p>

              {/* ACTION */}
              <button
                onClick={() => addToCart(product.id, 1)}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4 rounded-xl
                  font-semibold text-lg
                  bg-[var(--primary)]
                  hover:bg-[var(--primary-hover)]
                  transition shadow-lg
                "
              >
                <ShoppingCart className="w-5 h-5" />
                কার্টে যোগ করুন
              </button>

            </div>
          </div>

          {/* HOVER BORDER */}
          <div
            className="
              pointer-events-none absolute inset-0 rounded-3xl
              ring-1 ring-transparent
              group-hover:ring-[var(--primary)]/40
              transition
            "
          />
        </div>
      </div>
    </section>
  );
}
