// "use client";

// import { useState } from "react";
// import { PRODUCTS } from "@/data/Products";
// import FilterBar from "../../components/filterBar/FilterBar";
// import SearchBar from "../../components/searchBar/SearchBar";
// import ProductCard from "../../components/productCard/ProductCard";


// export default function ProductsPage() {
//   const [active, setActive] = useState("all");
//   const [search, setSearch] = useState("");

//   // Filter by category
//   const categoryFiltered =
//     active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

//   // Filter by search text
//   const searchFiltered = categoryFiltered.filter((p) =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <main className="px-6 pt-30 md:px-16 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
      
//       {/* Header */}
//       <div className="mb-10">
//         <h1 className="text-4xl font-bold mb-2">পণ্যসমূহ</h1>
//         <p className="text-lg opacity-80">আমাদের সকল তাজা ও মানসম্মত বেকারি আইটেম</p>
//       </div>

//       {/* Search Bar */}
//       <SearchBar value={search} onChange={(val) => setSearch(val)} />

//       {/* Category Filter Buttons */}
//       <FilterBar active={active} onFilter={(cat) => setActive(cat)} />

//       {/* Product Cards */}
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {searchFiltered.length === 0 ? (
//           <p className="text-xl opacity-80">কোনো পণ্য খুঁজে পাওয়া যায়নি।</p>
//         ) : (
//           searchFiltered.map((item) => <ProductCard key={item.id} product={item} />)
//         )}
//       </div>

//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/Products";

import SearchBarV2 from "../../components/searchBar/SearchBarV2";
import FilterBarV2 from "../../components/filterBar/FilterBarV2";
import ProductCardV5 from "../../components/productCard/ProductCardV5";

export default function ProductsPage() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  // Category filter
  const categoryFiltered =
    active === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === active);

  // Search filter
  const searchFiltered = categoryFiltered.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Product counts for FilterBarV2
  const counts = {
    all: PRODUCTS.length,
    bread: PRODUCTS.filter(p => p.category === "bread").length,
    bun: PRODUCTS.filter(p => p.category === "bun").length,
    cake: PRODUCTS.filter(p => p.category === "cake").length,
    hot: PRODUCTS.filter(p => p.category === "hot").length,
  };

  return (
    <main
      className="min-h-screen px-6 pt-32 md:px-16 py-16
      landing-bg
      text-[var(--text-primary)]
      font-[Noto_Sans_Bengali]"
    >
      {/* PAGE HEADER */}
      <div className="mb-12 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          পণ্যসমূহ
        </h1>
        <p className="text-lg text-[var(--text-secondary)]">
          আমাদের সকল তাজা ও মানসম্মত বেকারি আইটেম
        </p>
      </div>

      {/* SEARCH */}
      <SearchBarV2 value={search} onChange={setSearch} />

      {/* FILTER */}
      <FilterBarV2
        active={active}
        onFilter={setActive}
        counts={counts}
      />

      {/* PRODUCTS GRID */}
      {searchFiltered.length === 0 ? (
        <div className="mt-20 text-center">
          <p className="text-xl text-[var(--text-muted)]">
            😔 কোনো পণ্য খুঁজে পাওয়া যায়নি
          </p>
        </div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {searchFiltered.map((item) => (
            <ProductCardV5 key={item.id} product={item} />
          ))}
        </div>
      )}
    </main>
  );
}
