"use client";

import { MapPin, Phone } from "lucide-react";

type Branch = {
  name: string;
  address: string;
  phone: string;
};

export default function BranchCard({ branch }: { branch: Branch }) {
  return (
    <div
      className="
        group relative rounded-2xl p-6
        bg-[var(--bg-card)]
        border border-[var(--border-soft)]
        shadow-[var(--shadow-soft)]
        transition
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)]">
        {branch.name}
      </h3>

      <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)] mb-2">
        <MapPin className="w-4 h-4 text-[var(--primary)] mt-0.5" />
        <span>{branch.address}</span>
      </div>

      <div className="flex items-center gap-3 text-sm font-semibold text-[var(--text-primary)]">
        <Phone className="w-4 h-4 text-[var(--primary)]" />
        <span>{branch.phone}</span>
      </div>
    </div>
  );
}
