"use client";

import Link from "next/link";
import { useCartStore } from "@/app/components/store/useCartStore";

interface ProductCardV6Props {
  product: any;
}

export default function ProductCardV6({ product }: ProductCardV6Props) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      className="group block"
    >
      <div
        className="
          relative rounded-3xl p-4
          bg-[var(--bg-main)]
          border border-[var(--border-soft)]
          shadow-[var(--shadow-soft)]
          hover:-translate-y-1 hover:shadow-xl
          transition
        "
      >
        {/* IMAGE WRAPPER */}
        <div
          className="
            relative rounded-2xl
            bg-[var(--bg-card)]
            p-4
            flex items-center justify-center
          "
        >
          <img
            src={product.img}
            alt={product.name}
            className="
              w-full h-36 object-contain
              group-hover:scale-105 transition
            "
          />

          {/* ADD BUTTON */}
          <button
            onClick={handleAdd}
            className="
              absolute -top-3 -right-3
              w-10 h-10 rounded-full
              flex items-center justify-center
              text-2xl font-bold
              text-[var(--primary)]
              bg-[var(--bg-main)]
              border border-[var(--border-soft)]
              shadow-md
              hover:bg-[var(--secondary)]
              transition
            "
            aria-label="Add to cart"
          >
            +
          </button>
        </div>

        {/* INFO */}
        <div className="mt-4 space-y-1">
          <p className="text-lg font-bold text-[var(--primary)]">
            {product.price} টাকা
          </p>

          <h3 className="text-base font-medium text-[var(--text-primary)] leading-snug">
            {product.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
