"use client";

import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";

export default function SpecialsV2() {
  const addToCart = useCartStore((state) => state.addToCart);

  // ⭐ Product of the Day
  const product = PRODUCTS.find((p) => p.productOfTheDay);

  if (!product) return null;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br 
        from-[var(--secondary)] 
        via-[var(--light-bg)] 
        to-[var(--card-bg)] 
        dark:from-[#1a1410] dark:via-[#120e0c] dark:to-[#1f1814]" 
      />

      {/* GLOW BLOBS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[var(--primary)]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center 
          rounded-3xl p-10 md:p-14
          bg-white/60 dark:bg-white/5
          backdrop-blur-xl
          border border-white/40 dark:border-white/10
          shadow-2xl">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr 
              from-[var(--primary)]/20 
              to-[var(--accent)]/20 
              blur-2xl rounded-3xl" />

            <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-white shadow-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            {/* BADGE */}
            <span className="inline-block mb-4 px-4 py-1 rounded-full
              bg-[var(--accent)]/10 text-[var(--accent)]
              font-semibold text-sm">
              ⭐ আজকের স্পেশাল
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 
              text-[var(--text-dark)] dark:text-[var(--text-light)]">
              বিশেষ অফার – আজকের জন্য
            </h2>

            <p className="text-xl font-semibold mb-3 text-[var(--accent)]">
              {product.name} — {product.price} টাকা / {product.unit}
            </p>

            <p className="text-lg leading-relaxed mb-8 
              text-[var(--text-dark)] dark:text-[var(--text-light)] opacity-90">
              {product.description}
            </p>

            {/* ACTIONS */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                  shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              >
                এখনই অর্ডার করুন
              </button>

              <button
                className="px-8 py-4 rounded-xl font-semibold
                  border-2 border-[var(--primary)]
                  text-[var(--text-dark)] dark:text-[var(--text-light)]
                  hover:bg-[var(--secondary)] dark:hover:bg-white/10
                  transition"
              >
                আরও দেখুন
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
