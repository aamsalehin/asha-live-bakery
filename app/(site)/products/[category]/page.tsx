
// import ProductCard from "@/app/components/productCard/ProductCard";
// import { PRODUCTS } from "@/data/Products";

// // Plural → Singular Mapping
// const CATEGORY_ALIAS: Record<string, string> = {
//   bread: "bread",
//   breads: "bread",
//   bun: "bun",
//   buns: "bun",
//   cake: "cake",
//   cakes: "cake",
//   hot: "hot",
//   hots: "hot",
//   cookie: "cookies",
//   cookies: "cookies",
// };

// // Bangla names
// const CATEGORY_NAMES: Record<string, string> = {
//   bread: "ব্রেড",
//   bun: "বান",
//   cake: "কেক",
//   hot: "হট আইটেম",
//   cookies: "কুকিজ",
// };

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ category: string }>;
// }) {
//   const { category } = await params;
//   const slug = category.toLowerCase();
//   const canonical = CATEGORY_ALIAS[slug];

//   if (!canonical) {
//     return <div className="px-6 py-24 text-center text-xl">সঠিক ক্যাটাগরি পাওয়া যায়নি।</div>;
//   }

//   const filtered = PRODUCTS.filter((p) => p.category === canonical);

//   if (!filtered.length) {
//     return (
//       <div className="px-6 py-24 text-center text-xl">
//         এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
//       </div>
//     );
//   }

//   return (
//     <main className="px-6 md:px-16 pt-30 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
      
//       {/* Header */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold mb-2">{CATEGORY_NAMES[canonical]}</h1>
//         <p className="text-lg opacity-80">এই ক্যাটাগরির পণ্যসমূহ</p>
//       </div>

//       {/* Product Cards */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {filtered.map((item) => (
//           <ProductCard key={item.id} product={item} />
//         ))}
//       </div>

//     </main>
//   );
// }


import Link from "next/link";
import ProductCardV5 from "@/app/components/productCard/ProductCardV5";
import { PRODUCTS } from "@/data/Products";
import ProductCardV7 from "@/app/components/productCard/ProductCardV7";
import ProductCardSimple from "@/app/components/productCard/ProductCardSimple";

/* Plural → Singular Mapping */
const CATEGORY_ALIAS: Record<string, string> = {
  bread: "bread",
  breads: "bread",
  bun: "bun",
  buns: "bun",
  cake: "cake",
  cakes: "cake",
  hot: "hot",
  hots: "hot",
  cookie: "cookies",
  cookies: "cookies",
};

/* Bangla names */
const CATEGORY_NAMES: Record<string, string> = {
  bread: "ব্রেড",
  bun: "বান",
  cake: "কেক",
  hot: "হট আইটেম",
  cookies: "কুকিজ",
};

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const slug = category.toLowerCase();
  const canonical = CATEGORY_ALIAS[slug];

  if (!canonical) {
    return (
      <div className="px-6 py-24 text-center text-xl text-[var(--text-primary)]">
        সঠিক ক্যাটাগরি পাওয়া যায়নি।
      </div>
    );
  }

  const filtered = PRODUCTS.filter((p) => p.category === canonical);

  if (!filtered.length) {
    return (
      <div className="px-6 py-24 text-center text-xl text-[var(--text-primary)]">
        এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <main
      className="
        min-h-screen
        px-6 md:px-16 pt-32 py-16
        bg-[var(--bg-main)]
        text-[var(--text-primary)]
        font-[Noto_Sans_Bengali]
      "
    >
      {/* TOP NAV */}
      <div className="mb-10 flex flex-wrap items-center gap-4">
        <Link
          href="/products"
          className="
            inline-flex items-center gap-2 px-4 py-2 rounded-lg
            text-sm font-semibold
            bg-[var(--bg-card)]
            border border-[var(--border-soft)]
            hover:bg-[var(--bg-soft)]
            transition
          "
        >
          ← সব পণ্য
        </Link>

        <span className="text-sm text-[var(--text-muted)]">
          ক্যাটাগরি
        </span>
      </div>

      {/* HEADER */}
      <div className="mb-14 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          {CATEGORY_NAMES[canonical]}
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          এই ক্যাটাগরির সকল তাজা পণ্য
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item) => (
          <ProductCardSimple key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}
