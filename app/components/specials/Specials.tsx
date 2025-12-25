// 'use client';
// export default function Specials() {
//   return (
//     <section className="py-20 px-6 md:px-16">
//       <div
//         className="grid md:grid-cols-2 gap-10 items-center rounded-2xl p-10 shadow-md"
//         style={{ backgroundColor: 'rgba(217,83,79,0.07)' }}
//       >
//         <div>
//           <div className="w-full h-72 bg-white rounded-xl shadow-md"></div>
//         </div>

//         <div>
//           <h2 className="text-3xl font-bold mb-4 text-[var(--text-dark)]">
//             আজকের স্পেশাল অফার
//           </h2>
//           <p className="text-lg leading-relaxed mb-6 text-[var(--text-dark)]">
//             ফ্রেশ ব্রেড + ৬ প্যাক বান আজকের জন্য বিশেষ অফারে! সীমিত সময়ের জন্য।
//           </p>

//           <div className="flex gap-4">
//             <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#D78A69] transition">
//               অর্ডার করুন
//             </button>
//             <button className="border-2 border-[var(--primary)] text-[var(--text-dark)] px-6 py-3 rounded-lg hover:bg-[var(--secondary)] transition">
//               আরও দেখুন
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { PRODUCTS } from "@/data/Products";
import { useCartStore } from "../store/useCartStore";

export default function Specials() {
  const addToCart = useCartStore((state) => state.addToCart);

  // ⭐ Get Product of the Day
  const product = PRODUCTS.find(
    (p) => p.productOfTheDay === true
  );

  if (!product) return null; // safety

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product.id, 1);
  };

  return (
    <section className="py-20 px-6 md:px-16">
      <div
        className="grid md:grid-cols-2 gap-10 items-center rounded-2xl p-10 shadow-md"
        style={{ backgroundColor: "rgba(217,83,79,0.07)" }}
      >
        {/* IMAGE */}
        <div>
          <div className="w-full h-72 bg-white rounded-xl shadow-md overflow-hidden">
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-dark)]">
            আজকের স্পেশাল অফার
          </h2>

          <p className="text-lg font-semibold mb-2 text-[var(--accent)]">
            {product.name} — {product.price} টাকা / {product.unit}
          </p>

          <p className="text-lg leading-relaxed mb-6 text-[var(--text-dark)]">
            {product.description}
          </p>

          <div className="flex gap-4">
            {/* ADD TO CART */}
            <button
              onClick={handleAddToCart}
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#D78A69] transition cursor-pointer"
            >
              অর্ডার করুন
            </button>

            {/* VIEW MORE (optional later link) */}
            <button className="border-2 border-[var(--primary)] text-[var(--text-dark)] px-6 py-3 rounded-lg hover:bg-[var(--secondary)] transition">
              আরও দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
