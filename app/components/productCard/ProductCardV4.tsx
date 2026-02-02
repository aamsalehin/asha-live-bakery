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
}

export default function ProductCardV4({ product }: { product: Product }) {
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
      className="group relative rounded-3xl transition-all duration-300"
    >
      {/* CARD */}
      <div className="relative rounded-3xl p-4 backdrop-blur-xl 
        bg-white/60 dark:bg-white/5
        border border-white/40 dark:border-white/10
        shadow-lg hover:shadow-2xl transition">

        {/* IMAGE */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden 
          bg-gradient-to-br from-[var(--secondary)] to-[var(--card-bg)]">
          
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />

          {/* ADD BUTTON */}
          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 w-11 h-11 rounded-full
              flex items-center justify-center
              bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
              text-white text-xl font-bold
              shadow-xl hover:scale-110 transition"
          >
            +
          </button>

          {/* ADDED OVERLAY */}
          {added && (
            <div className="absolute inset-0 flex items-center justify-center
              bg-black/40 backdrop-blur-sm rounded-2xl">
              <span className="text-white text-lg font-semibold animate-bounce">
                ✓ Added
              </span>
            </div>
          )}
        </div>

        {/* CONTENT */}
        <div className="pt-4 space-y-1">
          <h3 className="text-lg font-semibold text-[var(--text-dark)] dark:text-[var(--text-light)] line-clamp-1">
            {product.name}
          </h3>

          <p className="text-base font-bold text-[var(--accent)]">
            {product.price} BDT
          </p>
        </div>
      </div>

      {/* HOVER GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl
        ring-1 ring-transparent
        group-hover:ring-[var(--primary)]/30 transition" />
    </Link>
  );
}
