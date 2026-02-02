"use client";

import { BRANCHES } from "@/data/branches";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function BranchReviewsV2() {
  return (
    <section className="py-24 bg-[var(--bg-section)]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-14 border-l-4 pl-4 border-[var(--primary)]">
          আমাদের শাখাসমূহ
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANCHES.map((branch) => (
            <div key={branch.name} className="card p-8 text-center">
              <h3 className="text-xl font-bold mb-4">{branch.name}</h3>

              <div className="flex justify-center items-center gap-2 text-sm text-[var(--text-secondary)] mb-2">
                <FaMapMarkerAlt className="text-[var(--primary)]" />
                {branch.address}
              </div>

              <div className="flex justify-center items-center gap-2 text-sm font-semibold">
                <FaPhoneAlt className="text-[var(--primary)]" />
                {branch.phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
