"use client";

import Link from "next/link";
import { useCartStore } from "../store/useCartStore";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
  featuredProduct?: boolean;
  productOfTheDay?: boolean;
}

export default function ProductCardV5({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative block rounded-3xl transition-all duration-300"
    >
      {/* CARD */}
      <div
        className="
          relative overflow-hidden rounded-3xl p-4
          backdrop-blur-xl
          bg-[var(--bg-main)]
          border border-[var(--border-soft)]
          shadow-[var(--shadow-soft)]
          transition-all duration-300
          group-hover:-translate-y-1
          group-hover:shadow-2xl
        "
      >
        {/* BADGES */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {product.featuredProduct && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold
              bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]
              text-white shadow">
              ⭐ Featured
            </span>
          )}

          {product.productOfTheDay && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold
              bg-gradient-to-r from-[var(--accent)] to-[var(--accent-light)]
              text-white shadow">
              🔥 Special
            </span>
          )}
        </div>

        {/* IMAGE */}
        <div
          className="
            relative w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center
            bg-gradient-to-br from-[var(--secondary)] to-[var(--bg-section)]
          "
        >
          <img
            src={product.img}
            alt={product.name}
            className="
              w-50 h-50 object-contain
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          {/* ADD TO CART BUTTON */}
          <button
            onClick={handleAddToCart}
            className="
              absolute bottom-3 right-3
              w-11 h-11 rounded-full
              flex items-center justify-center
              text-white text-xl font-bold
              bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
              shadow-xl
              hover:scale-110
              transition
            "
          >
            +
          </button>

          {/* ADDED OVERLAY */}
          {added && (
            <div className="
              absolute inset-0
              flex items-center justify-center
              bg-black/40 backdrop-blur-sm
            ">
              <span className="text-white text-lg font-semibold animate-bounce">
                ✓ Added
              </span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="pt-4 space-y-1 text-center">
          <h3 className="text-lg font-semibold text-[var(--text-primary)] line-clamp-1">
            {product.name}
          </h3>

          <p className="text-base font-bold text-[var(--accent)]">
            {product.price} BDT
          </p>
        </div>
      </div>

      {/* OUTER GLOW */}
      <div
        className="
          pointer-events-none absolute inset-0 rounded-3xl
          ring-1 ring-transparent
          group-hover:ring-[var(--primary)]/40
          transition
        "
      />
    </Link>
  );
}
