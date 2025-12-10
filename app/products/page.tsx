"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/Products";
import FilterBar from "../components/filterBar/FilterBar";
import SearchBar from "../components/searchBar/SearchBar";
import ProductCard from "../components/productCard/ProductCard";


export default function ProductsPage() {
  const [active, setActive] = useState("all");
  const [search, setSearch] = useState("");

  // Filter by category
  const categoryFiltered =
    active === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  // Filter by search text
  const searchFiltered = categoryFiltered.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="px-6 md:px-16 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
      
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">পণ্যসমূহ</h1>
        <p className="text-lg opacity-80">আমাদের সকল তাজা ও মানসম্মত বেকারি আইটেম</p>
      </div>

      {/* Search Bar */}
      <SearchBar value={search} onChange={(val) => setSearch(val)} />

      {/* Category Filter Buttons */}
      <FilterBar active={active} onFilter={(cat) => setActive(cat)} />

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {searchFiltered.length === 0 ? (
          <p className="text-xl opacity-80">কোনো পণ্য খুঁজে পাওয়া যায়নি।</p>
        ) : (
          searchFiltered.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>

    </main>
  );
}
