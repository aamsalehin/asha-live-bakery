"use client";

import Link from "next/link";
import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";
import { Flame } from "lucide-react";

export default function HotItemsV2() {
  const addToCart = useCartStore((state) => state.addToCart);

  // 🔥 Only 2 HOT items
  const hotItems = PRODUCTS
    .filter((product) => product.category === "hot")
    .slice(0, 2);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    productId: number
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(productId, 1);
  };

  return (
    <section className="relative py-24 px-6 md:px-16 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--light-bg)] dark:bg-[#120e0c]" />

      {/* GLOW */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-[var(--primary)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex items-center gap-3 mb-12">
          <Flame className="w-7 h-7 text-[var(--accent)]" />
          <h2 className="text-3xl font-bold text-[var(--text-dark)] dark:text-[var(--text-light)] border-l-4 pl-4 border-[var(--primary)]">
            হট আইটেম
          </h2>
        </div>

        {/* ITEMS */}
        <div className="grid md:grid-cols-2 gap-10">
          {hotItems.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="group relative"
            >
              {/* CARD */}
              <div className="relative flex items-center gap-6 p-6 rounded-3xl
                bg-white/60 dark:bg-white/5
                backdrop-blur-xl
                border border-white/40 dark:border-white/10
                shadow-lg hover:shadow-2xl transition">

                {/* IMAGE */}
                <div className="relative w-32 h-28 rounded-2xl overflow-hidden
                  bg-gradient-to-br from-[var(--secondary)] to-[var(--card-bg)]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />
                </div>

                {/* INFO */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[var(--text-dark)] dark:text-[var(--text-light)]">
                    {item.name}
                  </h3>
                  <p className="text-lg font-bold text-[var(--accent)]">
                    {item.price} টাকা / {item.unit}
                  </p>
                </div>

                {/* ADD TO CART BUTTON */}
                <button
                  onClick={(e) => handleAddToCart(e, item.id)}
                  className="absolute right-6 bottom-6
                    w-11 h-11 rounded-full flex items-center justify-center
                    bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                    text-white text-xl font-bold
                    shadow-lg hover:scale-110 transition"
                >
                  +
                </button>
              </div>

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl
                ring-1 ring-transparent group-hover:ring-[var(--primary)]/30 transition" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
