'use client';
export default function AboutSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        <div>
          <div className="w-full h-80 bg-[var(--secondary)] rounded-2xl shadow-lg"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[var(--text-dark)] mb-4">
            আশা লাইভ বেকারির সম্পর্কে
          </h2>

          <p className="text-lg leading-relaxed text-[var(--text-dark)] mb-6">
            আমরা প্রতিদিন হাতে বানাই তাজা পণ্য এবং মান বজায় রাখি। বিশেষ অনুষ্ঠানের
            কাস্টম কেক এবং বড় অর্ডার গ্রহন করা হয়। আমাদের লক্ষ্য সেরা মানের
            খাবার মানুষের কাছে পৌঁছে দেওয়া।
          </p>

          <button className="border-2 border-[var(--primary)] text-[var(--text-dark)] px-6 py-3 rounded-lg hover:bg-[var(--secondary)] transition">
            আরও জানুন
          </button>
        </div>
      </div>
    </section>
  );
}
