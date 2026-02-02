"use client";

import Link from "next/link";

export default function AboutSectionV2() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[var(--light-bg)] dark:bg-[var(--dark-bg)]">
      
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT VISUAL PANEL */}
        <div className="relative">
          <div
            className="glass-surface p-10 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-4 text-[var(--accent)]">
              সিলেটের প্রথম লাইভ বেকারি
            </h3>

            <p className="text-lg leading-relaxed opacity-90">
              প্রতিদিন লাইভ ওভেনে প্রস্তুত করা হয় আমাদের সব পণ্য।
              কোন সংরক্ষিত খাবার নয় — সরাসরি তাজা ও স্বাস্থ্যসম্মত।
            </p>

            {/* Decorative divider */}
            <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            আশা লাইভ বেকারির সম্পর্কে
          </h2>

          <p className="text-lg leading-relaxed mb-8 opacity-85">
            আমরা প্রতিদিন হাতে বানাই তাজা বেকারি পণ্য এবং সর্বোচ্চ মান বজায় রাখি।
            জন্মদিন, বিয়ে ও বিশেষ অনুষ্ঠানের জন্য কাস্টম কেক এবং বড় অর্ডার
            গ্রহণ করা হয়। আমাদের লক্ষ্য—সততা, স্বাদ ও মানের মাধ্যমে মানুষের
            আস্থা অর্জন।
          </p>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center
                px-8 py-4 rounded-xl font-semibold
                bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                text-white shadow-lg hover:shadow-xl hover:scale-[1.03] transition"
            >
              আরও জানুন
            </Link>

            <Link
              href="/products"
              className="inline-flex items-center justify-center
                px-8 py-4 rounded-xl font-semibold
                border-2 border-[var(--primary)]
                hover:bg-[var(--secondary)] dark:hover:bg-white/10 transition"
            >
              পণ্যসমূহ দেখুন
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
