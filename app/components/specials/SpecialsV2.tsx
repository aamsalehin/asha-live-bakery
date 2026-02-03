"use client";

import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";

export default function SpecialsV2() {
  const addToCart = useCartStore((state) => state.addToCart);
  const product = PRODUCTS.find((p) => p.productOfTheDay);

  if (!product) return null;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <section className="relative landing-section overflow-hidden ">

      {/* 🌈 BACKGROUND — SAME FLOW AS HERO */}
      <div className="absolute inset-0 opacity-80" />

      {/* SOFT GLOWS */}
      {/* <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-[var(--primary)]/20 blur-3xl rounded-full" /> */}
      {/* <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[var(--accent)]/20 blur-3xl rounded-full" /> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">

        {/* GLASS CONTAINER */}
        <div className="grid md:grid-cols-2 gap-14 items-center
          glass-surface-strong rounded-3xl p-10 md:p-14">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr 
              from-[var(--primary)]/20 to-[var(--accent)]/20
              blur-2xl rounded-3xl" />

            <div className="relative w-full h-80 rounded-3xl overflow-hidden bg-[var(--bg-main)] shadow-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full
              bg-[var(--hero-badge-bg)] text-[var(--hero-badge-text)]
              font-semibold text-sm">
              ⭐ আজকের স্পেশাল
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              বিশেষ অফার – আজকের জন্য
            </h2>

            <p className="text-xl font-semibold mb-3 text-[var(--accent)]">
              {product.name} — {product.price} টাকা / {product.unit}
            </p>

            <p className="text-lg leading-relaxed mb-8 text-[var(--text-secondary)]">
              {product.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="px-8 py-4 rounded-xl font-semibold text-white
                bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                shadow-lg hover:shadow-xl hover:scale-[1.03] transition">
                এখনই অর্ডার করুন
              </button>

              <button
                className="px-8 py-4 rounded-xl font-semibold
                border-2 border-[var(--primary)]
                text-[var(--text-primary)]
                hover:bg-[var(--bg-soft)] transition">
                আরও দেখুন
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
