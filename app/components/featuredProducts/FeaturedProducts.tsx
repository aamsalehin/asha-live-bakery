'use client';
const featured = [
  { name: 'হাফ ব্রেড', price: 50 },
  { name: 'বার্গার বান', price: 15 },
  { name: 'ফুল প্লেইন কেক', price: 180 },
  { name: 'ড্যানিশ', price: 15 }
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 px-6 md:px-16 bg-[var(--light-bg)]">
      <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
        জনপ্রিয় পণ্য
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {featured.map((p, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
            <div className="w-full h-40 bg-[var(--secondary)] rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-lg font-bold text-[var(--accent)] mb-4">{p.price} BDT</p>
            <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition">
              কার্টে যোগ করুন
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
