"use client";

import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function ProductCardV3({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group relative bg-white rounded-3xl p-4 shadow-md hover:shadow-2xl transition-all duration-300 block"
    >
      {/* IMAGE */}
      <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-[#F3D7B9] to-[#FFE8D6]">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        {/* FLOATING ADD BUTTON */}
        <button
          onClick={handleAddToCart}
          className="absolute bottom-3 right-3 bg-gradient-to-r from-[#C32524] to-[#E47A3A] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
          aria-label="Add to cart"
        >
          +
        </button>
      </div>

      {/* CONTENT */}
      <div className="pt-4 space-y-1">
        <h3 className="text-lg font-semibold text-[var(--text-dark)] line-clamp-1">
          {product.name}
        </h3>

        <p className="text-base font-bold text-[#C32524]">
          {product.price} BDT
        </p>
      </div>

      {/* SUBTLE BORDER GLOW */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent group-hover:ring-[#E47A3A]/30 transition" />
    </Link>
  );
}
