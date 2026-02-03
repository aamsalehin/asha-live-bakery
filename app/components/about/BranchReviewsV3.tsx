"use client";

import { BRANCHES } from "@/data/branches";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function BranchReviewsV3() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 border-l-4 pl-4 border-[var(--primary)]">
            আমাদের শাখাসমূহ
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
            সিলেট জুড়ে আমাদের বিশ্বস্ত ও জনপ্রিয় শাখাগুলো
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              className="
                group relative rounded-3xl p-8
                bg-[var(--bg-card)]
                border border-[var(--border-soft)]
                shadow-[var(--shadow-soft)]
                transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
              "
            >
              {/* Gradient Top Strip */}
              <div
                className="absolute inset-x-0 top-0 h-1.5 rounded-t-3xl"
                style={{ background: "var(--gradient-primary)" }}
              />

              {/* Branch Name */}
              <h3 className="text-xl font-bold mb-6">
                {branch.name}
              </h3>

              {/* Address */}
              <div className="flex items-start gap-3 mb-4 text-sm text-[var(--text-secondary)]">
                <FaMapMarkerAlt className="text-[var(--primary)] mt-0.5 shrink-0" />
                <span>{branch.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-sm font-semibold">
                <FaPhoneAlt className="text-[var(--primary)] shrink-0" />
                <span>{branch.phone}</span>
              </div>

              {/* Hover Glow */}
              <div
                className="
                  pointer-events-none absolute inset-0 rounded-3xl
                  opacity-0 group-hover:opacity-100 transition
                "
                style={{
                  boxShadow: "0 0 0 1px var(--primary-hover)",
                }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
