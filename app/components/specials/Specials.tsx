'use client';
export default function Specials() {
  return (
    <section className="py-20 px-6 md:px-16">
      <div
        className="grid md:grid-cols-2 gap-10 items-center rounded-2xl p-10 shadow-md"
        style={{ backgroundColor: 'rgba(217,83,79,0.07)' }}
      >
        <div>
          <div className="w-full h-72 bg-white rounded-xl shadow-md"></div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4 text-[var(--text-dark)]">
            আজকের স্পেশাল অফার
          </h2>
          <p className="text-lg leading-relaxed mb-6 text-[var(--text-dark)]">
            ফ্রেশ ব্রেড + ৬ প্যাক বান আজকের জন্য বিশেষ অফারে! সীমিত সময়ের জন্য।
          </p>

          <div className="flex gap-4">
            <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#D78A69] transition">
              অর্ডার করুন
            </button>
            <button className="border-2 border-[var(--primary)] text-[var(--text-dark)] px-6 py-3 rounded-lg hover:bg-[var(--secondary)] transition">
              আরও দেখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
