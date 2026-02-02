"use client";

export default function AboutHeroV2() {
  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, var(--bg-section), var(--bg-main))",
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <span className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-semibold"
          style={{
            backgroundColor: "var(--hero-badge-bg)",
            color: "var(--hero-badge-text)",
          }}
        >
          আমাদের গল্প
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          আশা লাইভ বেকারি
        </h1>

        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
          তাজা, মানসম্মত ও লাইভ বেকিং অভিজ্ঞতা — সিলেটের মানুষের ভালোবাসায় গড়া।
        </p>
      </div>
    </section>
  );
}
