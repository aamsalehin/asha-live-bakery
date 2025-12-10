'use client';
const hotItems = [
  { name: 'ড্যানিশ', price: 15 },
  { name: 'প্যাটিস', price: 50 }
];

export default function HotItems() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
        হট আইটেম
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {hotItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md flex items-center gap-6 hover:shadow-xl transition"
          >
            <div className="w-32 h-28 bg-[var(--secondary)] rounded-xl"></div>

            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-[var(--text-dark)]">{item.name}</h3>
              <p className="text-lg font-bold text-[var(--accent)]">{item.price} BDT</p>
            </div>

            <button className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-[#D78A69] transition">
              Add
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
