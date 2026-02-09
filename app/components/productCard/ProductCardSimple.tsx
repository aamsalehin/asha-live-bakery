// "use client";

// import { useState } from "react";
// import { useCartStore } from "../store/useCartStore";
// import { ShoppingCart } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   img: string;
//   badge?: string; // e.g. "HOT", "NEW", "SPECIAL"
// }

// export default function ProductCardSimple({
//   product,
// }: {
//   product: Product;
// }) {
//   const addToCart = useCartStore((state) => state.addToCart);
//   const [adding, setAdding] = useState(false);

//   const handleAdd = () => {
//     addToCart(product.id, 1);
//     setAdding(true);
//     setTimeout(() => setAdding(false), 900);
//   };

//   return (
//     <div className="group cursor-pointer">
//       {/* IMAGE */}
//       <div className="relative overflow-hidden">
//         <img
//           src={product.img}
//           alt={product.name}
//           className="
//             w-full object-contain
//             transition-transform duration-500
//             group-hover:scale-105
//           "
//         />

//         {/* BADGE */}
//         {product.badge && (
//           <span
//             className="
//               absolute top-3 left-3
//               px-3 py-1 rounded-full text-xs font-semibold
//               text-white
//             "
//             style={{ background: "var(--gradient-primary)" }}
//           >
//             {product.badge}
//           </span>
//         )}
//       </div>

//       {/* CONTENT */}
//       <div className="pt-4 space-y-2">
//         <h3 className="text-lg font-semibold text-[var(--text-primary)]">
//           {product.name}
//         </h3>

//         <p className="text-[var(--accent)] font-bold text-base">
//           {product.price} টাকা
//         </p>

//         {/* ADD TO CART */}
//         <button
//           onClick={handleAdd}
//           className="
//             mt-2 inline-flex items-center gap-2
//             text-sm font-semibold
//             text-[var(--primary)]
//             hover:text-[var(--primary-hover)]
//             transition
//           "
//         >
//           <ShoppingCart className="w-4 h-4" />
//           {adding ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";
import { ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  badge?: string; // e.g. "HOT", "NEW", "SPECIAL"
}

export default function ProductCardSimple({
  product,
}: {
  product: Product;
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [adding, setAdding] = useState(false);

  const handleAdd = () => {
    addToCart(product.id, 1);
    setAdding(true);
    setTimeout(() => setAdding(false), 900);
  };

  return (
    <div className="group  p-3 rounded bg-[var(--bg-main)]">

      {/* IMAGE (CLICKABLE) */}
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden border border-[var(--accent)] rounded">
          <img
            src={product.img}
            alt={product.name}
            className="
              w-full object-contain
              transition-transform duration-500
              group-hover:scale-105 overflow-hidden
            "
          />

          {/* BADGE */}
          {product.badge && (
            <span
              className="
                absolute top-3 left-3
                px-3 py-1 rounded-full text-xs font-semibold
                text-white
              "
              style={{ background: "var(--gradient-primary)" }}
            >
              {product.badge}
            </span>
          )}
        </div>
      </Link>

      {/* CONTENT */}
      <div className="pt-4 space-y-2">
        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
          {product.name}
        </h3>

        <p className="text-[var(--accent)] font-bold text-base">
          {product.price} টাকা
        </p>

        {/* ADD TO CART */}
        <button
          onClick={handleAdd}
          className="
            mt-2 inline-flex items-center gap-2
            text-sm font-semibold
            text-[var(--primary)]
            hover:text-[var(--primary-hover)]
            transition 
          "
        >
          <ShoppingCart className="w-4 h-4" />
          {adding ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
        </button>
      </div>
    </div>
  );
}

