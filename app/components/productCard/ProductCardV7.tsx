"use client";

import Link from "next/link";
import { useCartStore } from "@/app/components/store/useCartStore";
import { Plus } from "lucide-react";

interface ProductCardV7Props {
  product: any;
}

export default function ProductCardV7({ product }: ProductCardV7Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <Link href={`/product/${product.id}`} className="group block">
      <div
        className="
          rounded-3xl p-4
          bg-[var(--bg-main)]
          border border-[var(--border-soft)]
          shadow-[var(--shadow-soft)]
          hover:-translate-y-1 hover:shadow-xl
          transition
        "
      >
        {/* IMAGE */}
        <div
          className="
            rounded-2xl bg-[var(--bg-main)]
            p-4 flex items-center justify-center border border-[var(--light-bg)] 
          "
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-50 h-36 object-contain group-hover:scale-105 transition"
          />
        </div>

        {/* INFO + CART */}
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-[var(--primary)]">
              {product.price} টাকা
            </p>
            <h3 className="text-base font-medium text-[var(--text-primary)] leading-snug">
              {product.name}
            </h3>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAdd}
            aria-label="Add to cart"
            className="
              w-10 h-10 flex items-center justify-center
              rounded-full
              bg-[var(--bg-main)]
              border border-[var(--border-soft)]
              text-[var(--primary)]
              shadow-md
              hover:bg-[var(--secondary)]
              transition
            "
          >
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </Link>
  );
}
