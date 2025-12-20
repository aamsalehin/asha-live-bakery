"use client";

import { useState } from "react";
import { useCartStore } from "../../../components/store/useCartStore";



export default function ProductInfo({ product }: any) {
  const [qty, setQty] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);
  

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-2xl font-bold text-[var(--accent)] mb-6">{product.price} BDT</p>

      {/* Description */}
      <p className="text-lg leading-relaxed mb-6">
        {product.description ?? "এই পণ্যের বিস্তারিত বিবরণ শীঘ্রই যোগ করা হবে।"}
      </p>

      {/* Ingredients */}
      {product.ingredients && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">উপকরণ:</h3>
          <ul className="list-disc list-inside space-y-1 text-lg">
            {product.ingredients.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Quantity Selector */}
      <div className="flex items-center gap-4 mb-8">
        <button
          className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition"
          onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
        >
          -
        </button>

        <span className="text-xl font-semibold">{qty}</span>

        <button
          className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition"
          onClick={() => setQty(qty + 1)}
        >
          +
        </button>
      </div>

      {/* Add to cart */}
      {/* <button className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#D78A69] transition w-full md:w-auto">
        কার্টে যোগ করুন
      </button> */}
      <button
  onClick={() => addToCart(product.id, qty)}
  className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#D78A69] transition"
>
  কার্টে যোগ করুন
</button>
    </div>
  );
}
