"use client";

import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  img: string;
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([
    {
      id: 1,
      name: "হাফ ব্রেড",
      price: 50,
      qty: 1,
      img: "/images/products/half-bread.jpg",
    },
    {
      id: 2,
      name: "ফুল প্লেইন কেক",
      price: 180,
      qty: 1,
      img: "/images/products/full-cake.jpg",
    },
  ]);

  // Update quantity
  const updateQty = (id: number, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  // Remove item
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Subtotal calculation
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">

      <h1 className="text-4xl font-bold mb-10">কার্ট</h1>

      {/* If Cart Empty */}
      {cart.length === 0 && (
        <div className="text-center py-20 text-lg">
          আপনার কার্ট খালি। পণ্য যোগ করুন।
        </div>
      )}

      {/* Grid Layout */}
      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 bg-white shadow-md rounded-xl p-5 items-center"
            >
              {/* Product Image */}
              <div className="w-28 h-24 bg-[var(--secondary)] rounded-xl overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Product Info */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-lg font-bold text-[var(--accent)]">
                  {item.price} BDT
                </p>

                {/* Quantity Selector */}
                <div className="flex items-center gap-4 mt-4">
                  <button
                    className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition"
                    onClick={() => updateQty(item.id, "dec")}
                  >
                    -
                  </button>

                  <span className="text-xl font-semibold">{item.qty}</span>

                  <button
                    className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition"
                    onClick={() => updateQty(item.id, "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 font-bold text-xl hover:text-red-700"
              >
                ✖
              </button>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="bg-white shadow-lg rounded-2xl p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">অর্ডার সারাংশ</h2>

          <div className="space-y-3 text-lg">
            <div className="flex justify-between">
              <span>সাবটোটাল:</span>
              <span>{subtotal} BDT</span>
            </div>

            <div className="flex justify-between">
              <span>ডেলিভারি চার্জ:</span>
              <span>৫০ BDT</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-bold text-xl">
              <span>মোট:</span>
              <span>{subtotal + 50} BDT</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-[var(--primary)] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#D78A69] transition">
            চেকআউট করুন
          </button>
        </div>
      </div>
    </main>
  );
}
