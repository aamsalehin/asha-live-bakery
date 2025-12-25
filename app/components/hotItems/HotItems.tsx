"use client";

import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";

export default function HotItems() {
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
    <section className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
        হট আইটেম
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {hotItems.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6 hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="w-32 h-28 bg-[var(--secondary)] rounded-xl overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[var(--text-dark)]">
                {item.name}
              </h3>
              <p className="text-lg font-bold text-[var(--accent)]">
                {item.price} BDT / {item.unit}
              </p>
            </div>

            {/* SAME BUTTON AS ProductCard */}
            <button
              onClick={(e) => handleAddToCart(e, item.id)}
              className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[#D78A69] transition cursor-pointer"
            >
              {/* কার্টে যোগ করুন */}+
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
