// import { PRODUCTS } from "@/data/Products";
// import ProductInfo from "./ProductInfo";

// // Correct TypeScript type for Next.js 16
// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// export default async function ProductDetailsPage({ params }: PageProps) {
//   // Unwrap params (Next.js 16 async param behavior)
//   const { id } = await params;

//   const productId = Number(id);
//   const product = PRODUCTS.find((p) => p.id === productId);

//   if (!product) {
//     return (
//       <div className="px-6 py-24 text-center text-xl font-[Noto_Sans_Bengali]">
//         পণ্যটি খুঁজে পাওয়া যায়নি।
//       </div>
//     );
//   }

//   return (
//     <main className="px-6 md:px-20 pt-30 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
//         {/* Product Image */}
//         <div>
//           <div className="w-full h-96 bg-[var(--secondary)] rounded-2xl shadow-md overflow-hidden">
//             <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
//           </div>
//         </div>

//         {/* Product Info */}
//         <ProductInfo product={product} />
//       </div>

//       {/* Related Products */}
//       <section className="mt-20">
//         <h2 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">
//           সম্পর্কিত আরও পণ্য
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {PRODUCTS.slice(0, 4).map((item) => (
//             <div key={item.id} className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition cursor-pointer">
//               <div className="w-full h-40 bg-[var(--secondary)] rounded-xl mb-4 overflow-hidden">
//                 <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
//               </div>

//               <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
//               <p className="text-lg font-bold text-[var(--accent)]">{item.price} BDT</p>

//               <a
//                 href={`/product/${item.id}`}
//                 className="mt-4 bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full block text-center hover:bg-[#D78A69] transition"
//               >
//                 দেখুন
//               </a>
//             </div>
//           ))}
//         </div>

//       </section>
//     </main>
//   );
// }


import { PRODUCTS } from "@/data/Products";
import ProductInfo from "./ProductInfo";
import ProductCardV5 from "@/app/components/productCard/ProductCardV5";


interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const { id } = await params;

  const productId = Number(id);
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="px-6 py-24 text-center text-xl font-[Noto_Sans_Bengali] text-[var(--text-primary)]">
        পণ্যটি খুঁজে পাওয়া যায়নি।
      </div>
    );
  }

  // ✅ Related products (same category, exclude current, max 4)
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <main
      className="px-6 md:px-20 pt-32 py-16
      bg-[var(--bg-main)]
      text-[var(--text-primary)]
      font-[Noto_Sans_Bengali]"
    >
      {/* PRODUCT DETAILS */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* IMAGE */}
        <div>
          <div
            className="w-full h-96 rounded-2xl overflow-hidden
            bg-[var(--bg-card)]
            border border-[var(--border-soft)]
            shadow-[var(--shadow-soft)]"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* INFO */}
        <ProductInfo product={product} />
      </div>

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <section className="mt-24 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
            সম্পর্কিত আরও পণ্য
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {relatedProducts.map((item) => (
              <ProductCardV5 key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
