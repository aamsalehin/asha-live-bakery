"use client";

import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition block"
    >
      <div className="w-full h-44 bg-[var(--secondary)] rounded-xl mb-4 overflow-hidden">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
      </div>

      <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
      <p className="text-lg font-bold text-[var(--accent)]">{product.price} BDT</p>

      <button
        className="mt-4 bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition"
        onClick={(e) => {
          e.preventDefault(); // Prevent navigating when adding to cart
          alert("কার্টে যোগ হয়েছে!");
        }}
      >
        কার্টে যোগ করুন
      </button>
    </Link>
  );
}
