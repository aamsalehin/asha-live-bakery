"use client";

export default function HeroSectionV3() {
  return (
    <section className="relative overflow-hidden py-28 px-6 md:px-16">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at top left,
              var(--hero-glow-primary),
              transparent 55%
            ),
            linear-gradient(
              to bottom right,
              var(--hero-bg-from),
              var(--hero-bg-via),
              var(--hero-bg-to)
            )
          `,
        }}
      />

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute top-20 left-10 text-4xl opacity-25 animate-float">🍞</span>
        <span className="absolute top-40 right-20 text-5xl opacity-25 animate-float-delay">🥐</span>
        <span className="absolute bottom-32 left-1/4 text-4xl opacity-25 animate-float">🎂</span>
        <span className="absolute bottom-20 right-1/3 text-5xl opacity-25 animate-float-delay">🍪</span>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span
          className="inline-block mb-6 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
          style={{
            backgroundColor: "var(--hero-badge-bg)",
            color: "var(--hero-badge-text)",
          }}
        >
          🔥 সিলেটের প্রথম লাইভ বেকারি
        </span>

        {/* Gradient Heading (SAFE VERSION) */}
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          style={{
            backgroundImage: "var(--gradient-primary)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          আশা লাইভ বেকারি
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-[var(--text-primary)] opacity-90 mb-6">
          ওনো বানাই, ওনো বেছি
        </p>

        {/* Description */}
        <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          প্রতিদিন লাইভ প্রস্তুত ব্রেড, কেক, বান ও হট আইটেম।
          জন্মদিন, বিয়ে ও যেকোনো অনুষ্ঠানের অর্ডার নেওয়া হয়।
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          {/* Primary */}
          <button
            className="px-10 py-4 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.04] transition"
            style={{ background: "var(--gradient-primary)" }}
          >
            এখনই অর্ডার করুন
          </button>

          {/* Secondary */}
          <button
            className="px-10 py-4 rounded-2xl font-semibold transition backdrop-blur-md"
            style={{
              border: "2px solid var(--hero-outline)",
              color: "var(--hero-outline)",
              backgroundColor: "var(--bg-soft)",
            }}
          >
            পণ্যসমূহ দেখুন
          </button>

        </div>
      </div>

      {/* Bottom Fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: "linear-gradient(to top, var(--bg-section), transparent)",
        }}
      />
    </section>
  );
}
