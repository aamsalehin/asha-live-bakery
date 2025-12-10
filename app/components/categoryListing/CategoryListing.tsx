"use client";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

interface Props {
  title: string;
  products: Product[];
}

export default function CategoryListing({ title, products }: Props) {
  return (
    <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">

      <h1 className="text-4xl font-bold mb-6 capitalize">{title}</h1>

      <p className="text-lg mb-10 opacity-70">এই ক্যাটাগরির সকল পণ্য নিচে দেখুন</p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition"
          >
            <div className="w-full h-40 bg-[var(--secondary)] rounded-xl mb-4 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
            <p className="text-lg font-bold text-[var(--accent)]">{item.price} BDT</p>

            <Link
              href={`/product/${item.id}`}
              className="mt-4 block bg-[var(--primary)] text-center text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
