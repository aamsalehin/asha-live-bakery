// 'use client';
// const featured = [
//   { name: 'হাফ ব্রেড', price: 50 },
//   { name: 'বার্গার বান', price: 15 },
//   { name: 'ফুল প্লেইন কেক', price: 180 },
//   { name: 'ড্যানিশ', price: 15 }
// ];

// export default function FeaturedProducts() {
//   return (
//     <section className="py-20 px-6 md:px-16 bg-[var(--light-bg)]">
//       <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
//         জনপ্রিয় পণ্য
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {featured.map((p, index) => (
//           <div key={index} className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
//             <div className="w-full h-40 bg-[var(--secondary)] rounded-xl mb-4"></div>
//             <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
//             <p className="text-lg font-bold text-[var(--accent)] mb-4">{p.price} BDT</p>
//             <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition">
//               কার্টে যোগ করুন
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }




// dynamic featured product 

// "use client";

// import { PRODUCTS } from "@/data/Products";
// import ProductCard from "../productCard/ProductCard";
// import ProductCardV3 from "../productCard/ProductCardV3";
// import ProductCardV4 from "../productCard/ProductCardV4";


// export default function FeaturedProducts() {
//   // ✅ filter featured products from database
//   const featuredProducts = PRODUCTS.filter(
//     (product) => product.featuredProduct
//   );

//   return (
//     <section className="py-20 px-6 md:px-16 bg-[var(--light-bg)]">
//       <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
//         জনপ্রিয় পণ্য
//       </h2>

//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//         {featuredProducts.map((product) => (
//           <ProductCardV4 key={product.id} product={product} />
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import { PRODUCTS } from "@/data/Products";
import ProductCardV4 from "../productCard/ProductCardV4";
import Link from "next/link";
import ProductCardV5 from "../productCard/ProductCardV5";
import ProductCardV7 from "../productCard/ProductCardV7";

export default function FeaturedProducts() {
  const featuredProducts = PRODUCTS.filter(
    (product) => product.featuredProduct
  );

  return (
    <section className="py-24 px-6 md:px-16 bg-[var(--light-bg)] dark:bg-[var(--dark-bg)]">
      
      {/* HEADER */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-bold text-[var(--text-dark)] dark:text-[var(--text-light)]
          border-l-4 pl-4 border-[var(--primary)]">
          জনপ্রিয় পণ্য
        </h2>

        <Link
          href="/products"
          className="text-sm font-semibold flex items-center gap-2
            text-[var(--accent)] hover:text-[var(--primary)] transition"
        >
          সব পণ্য দেখুন
          <span className="text-lg">→</span>
        </Link>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCardV7 key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
