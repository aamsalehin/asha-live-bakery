"use client";

export default function HeroSectionPlain() {
  return (
    <section
      className="
        py-24 px-6 md:px-16
        bg-[var(--secondary)]
        dark:bg-[var(--bg-section)]
      "
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
          আশা লাইভ বেকারি
        </h1>

        {/* Tagline */}
        <p className="text-xl mb-6 text-[var(--text-secondary)]">
          সিলেটের সর্বপ্রথম লাইভ বেকারি
        </p>

        {/* Description */}
        <p className="text-lg mb-10 leading-relaxed text-[var(--text-secondary)]">
          ওনো বানাই, ওনো বেছি — প্রতিদিন তাজা ও মানসম্মত বেকারি আইটেম
          উৎপাদন ও পরিবেশন করা হয়। বিভিন্ন অনুষ্ঠানের অর্ডার নেওয়া হয়।
        </p>

        {/* CTA */}
        <button
          className="
            bg-[var(--primary)]
            hover:bg-[var(--primary-hover)]
            text-white
            px-8 py-4 rounded-xl
            text-lg font-semibold
            shadow-md hover:shadow-lg
            transition
          "
        >
          এখনই অর্ডার করুন
        </button>

      </div>
    </section>
  );
}
