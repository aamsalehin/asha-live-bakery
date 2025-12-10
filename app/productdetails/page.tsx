/* Product Details Page UI for Asha Live Bakery */
'use client';
const product = {
  id: 1,
  name: 'ফুল প্লেইন কেক',
  price: 180,
  img: '/images/products/full-cake.jpg',
  description:
    'তাজা উপকরণ দিয়ে তৈরি আমাদের ফুল প্লেইন কেক অত্যন্ত নরম, মোলায়েম এবং সুস্বাদু। জন্মদিন, গিফট বা যেকোনো অনুষ্ঠানের জন্য উপযুক্ত।',
  ingredients: ['ময়দা', 'ডিম', 'চিনি', 'বাটার', 'ভ্যানিলা'],
};

export default function ProductDetails() {
  return (
    <main className="px-6 md:px-20 py-16 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Product Image */}
        <div>
          <div className="w-full h-96 bg-[var(--secondary)] rounded-2xl shadow-md overflow-hidden">
            <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-[var(--accent)] mb-6">{product.price} BDT</p>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-6">{product.description}</p>

          {/* Ingredients */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">উপকরণ:</h3>
            <ul className="list-disc list-inside space-y-1 text-lg">
              {product.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <button className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition">-</button>
            <span className="text-xl font-semibold">1</span>
            <button className="w-10 h-10 bg-[var(--secondary)] rounded-lg text-2xl font-bold hover:bg-[#e8d2bc] transition">+</button>
          </div>

          {/* Add to cart */}
          <button className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#D78A69] transition w-full md:w-auto">
            কার্টে যোগ করুন
          </button>
        </div>
      </div>

      {/* Related Products Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">সম্পর্কিত আরও পণ্য</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition cursor-pointer">
              <div className="w-full h-40 bg-[var(--secondary)] rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-1">সাম্পল পণ্য</h3>
              <p className="text-lg font-bold text-[var(--accent)]">100 BDT</p>
              <button className="mt-4 bg-[var(--primary)] text-white px-4 py-2 rounded-lg w-full hover:bg-[#D78A69] transition">
                দেখুন
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}