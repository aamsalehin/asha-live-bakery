"use client";

import Link from "next/link";
import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";
import { Flame } from "lucide-react";

export default function HotItemsV4() {
  const addToCart = useCartStore((state) => state.addToCart);

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
    <section className="py-24 px-6 md:px-16 bg-[var(--bg-section)]">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-14">
          <Flame className="w-6 h-6 text-[var(--accent)]" />
          <h2 className="text-3xl font-bold border-l-4 pl-4 border-[var(--primary)]">
            হট আইটেম
          </h2>
        </div>

        {/* LIST */}
        <div className="space-y-6">
          {hotItems.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="group block"
            >
              <div
                className="
                  relative flex flex-col sm:flex-row gap-6
                  rounded-3xl p-6
                  bg-[var(--bg-main)]
                  border border-[var(--border-soft)]
                  shadow-[var(--shadow-soft)]
                  hover:-translate-y-1 hover:shadow-xl
                  transition
                "
              >
                {/* LEFT IMAGE */}
                <div className="relative w-full sm:w-40 h-40 rounded-2xl overflow-hidden bg-[var(--bg-card)]">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition"
                  />

                  {/* HOT STRIP */}
                  <span
                    className="
                      absolute top-3 left-3
                      px-3 py-1 text-xs font-semibold
                      rounded-full
                      bg-[var(--accent)]
                      text-white
                    "
                  >
                    🔥 Hot
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">
                      {item.name}
                    </h3>

                    <p className="text-lg font-bold text-[var(--accent)]">
                      {item.price} টাকা / {item.unit}
                    </p>

                    <p className="mt-2 text-sm text-[var(--text-secondary)] line-clamp-2">
                      জনপ্রিয় ও সদ্য প্রস্তুত হট আইটেম — সরাসরি ওভেন থেকে।
                    </p>
                  </div>

                  {/* ACTION */}
                  <div className="mt-4">
                    <button
                      onClick={(e) => handleAddToCart(e, item.id)}
                      className="
                        inline-flex items-center justify-center
                        px-6 py-3 rounded-xl
                        font-semibold text-white
                        bg-[var(--primary)]
                        hover:bg-[var(--primary-hover)]
                        transition
                      "
                    >
                      + কার্টে যোগ করুন
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
