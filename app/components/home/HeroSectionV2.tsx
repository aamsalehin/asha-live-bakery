"use client";

import Image from "next/image";

export default function HeroSectionV2() {
  return (
    <section className="relative overflow-hidden py-24 px-6 md:px-16">

      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom right,
            var(--hero-bg-from),
            var(--hero-bg-via),
            var(--hero-bg-to)
          )`,
        }}
      />

      {/* Decorative Glow */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--hero-glow-primary)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "var(--hero-glow-accent)" }}
      />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span
            className="inline-block mb-4 px-4 py-1 rounded-full font-semibold text-sm"
            style={{
              backgroundColor: "var(--hero-badge-bg)",
              color: "var(--hero-badge-text)",
            }}
          >
            সিলেটের প্রথম লাইভ বেকারি
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-[var(--text-dark)]">
            আশা লাইভ বেকারি
          </h1>

          <p className="text-xl mb-6 text-[var(--text-dark)] opacity-90">
            ওনো বানাই, ওনো বেছি
          </p>

          <p className="text-lg mb-10 leading-relaxed text-[var(--text-dark)] opacity-80">
            প্রতিদিন তাজা ও মানসম্মত বেকারি আইটেম লাইভ প্রস্তুত ও পরিবেশন করা হয়।
            জন্মদিন, বিয়ে ও যেকোনো অনুষ্ঠানের অর্ডার নেওয়া হয়।
          </p>

          <div className="flex flex-wrap gap-4">
            {/* PRIMARY CTA */}
            <button
              className="px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
              style={{
                background: `linear-gradient(
                  to right,
                  var(--hero-btn-gradient-from),
                  var(--hero-btn-gradient-to)
                )`,
              }}
            >
              এখনই অর্ডার করুন
            </button>

            {/* SECONDARY CTA */}
            <button
              className="px-8 py-4 rounded-xl font-semibold transition"
              style={{
                border: "2px solid var(--hero-outline)",
                color: "var(--hero-outline)",
              }}
            >
              পণ্যসমূহ দেখুন
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-3xl blur-2xl"
            style={{
              background: `linear-gradient(
                to top right,
                var(--hero-btn-gradient-from),
                var(--hero-btn-gradient-to)
              )`,
              opacity: 0.25,
            }}
          />

          <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl bg-[var(--card-bg)]">
            <Image
              src="/images/hero.jpg"
              alt="Asha Live Bakery"
              width={900}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
