/* Product Listing Page UI for Asha Live Bakery */
'use client';
const products = [
  { id: 1, name: 'হাফ ব্রেড', price: 50, img: '/images/products/half-bread.jpg', category: 'bread' },
  { id: 2, name: 'ফুল ব্রেড', price: 100, img: '/images/products/full-bread.jpg', category: 'bread' },
  { id: 3, name: 'বার্গার বান', price: 15, img: '/images/products/burger-bun.jpg', category: 'bun' },
  { id: 4, name: 'ক্রীম বান', price: 30, img: '/images/products/cream-bun.jpg', category: 'bun' },
  { id: 5, name: 'ফুল প্লেইন কেক', price: 180, img: '/images/products/full-cake.jpg', category: 'cake' },
  { id: 6, name: 'হাফ প্লেইন কেক', price: 90, img: '/images/products/half-cake.jpg', category: 'cake' },
  { id: 7, name: 'ড্যানিশ', price: 15, img: '/images/products/danish.jpg', category: 'hot' },
  { id: 8, name: 'প্যাটিস', price: 50, img: '/images/products/pattice.jpg', category: 'hot' },
];

export default function ProductListing() {
  return (
    <main className="px-6 md:px-16 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">পণ্যসমূহ</h1>
        <p className="text-lg opacity-80">আমাদের সকল তাজা ও মানসম্মত বেকারি আইটেম</p>
      </div>

      {/* Filter Bar */}
      <div className="mb-12 flex flex-wrap gap-4 items-center">
        <button className="px-5 py-2 rounded-lg bg-[var(--primary)] text-white font-medium shadow">
          সব পণ্য
        </button>
        <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] font-medium hover:bg-[#f1d8c2] transition">
          ব্রেড
        </button>
        <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] font-medium hover:bg-[#f1d8c2] transition">
          বান
        </button>
        <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] font-medium hover:bg-[#f1d8c2] transition">
          কেক
        </button>
        <button className="px-5 py-2 rounded-lg bg-[var(--secondary)] font-medium hover:bg-[#f1d8c2] transition">
          হট আইটেম
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition cursor-pointer"
          >
            <div className="w-full h-44 bg-[var(--secondary)] rounded-xl mb-4 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-semibold mb-1">{item.name}</h3>
            <p className="text-lg font-bold text-[var(--accent)]">{item.price} BDT</p>

            <button className="mt-4 bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition">
              কার্টে যোগ করুন
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
