"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-[var(--secondary)] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left text block */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-dark)]">
            আশা লাইভ বেকারি
          </h1>

          <p className="text-xl text-[var(--text-dark)] mb-6">
            সিলেটের সর্বপ্রথম লাইভ বেকারি
          </p>

          <p className="text-lg text-[var(--text-dark)] mb-8 leading-relaxed">
            ওনো বানাই, ওনো বেছি — প্রতিদিন তাজা ও মানসম্মত বেকারি আইটেম
            উৎপাদন ও পরিবেশন করা হয়। বিভিন্ন অনুষ্ঠানের অর্ডার নেওয়া হয়।
          </p>

          <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#D78A69] transition">
            এখনই অর্ডার করুন
          </button>
        </div>

        {/* Right hero image */}
        <div>
          <div className="w-full h-80 bg-white rounded-2xl shadow-md overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Asha Live Bakery Hero Image"
              width={800}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
