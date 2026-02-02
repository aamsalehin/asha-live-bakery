"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBarV2({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-10 w-full max-w-xl">
      <div
        className="flex items-center gap-3 px-5 py-3 rounded-2xl
        border backdrop-blur-md shadow-sm transition
        bg-[var(--bg-card)]
        border-[var(--border-soft)]
        focus-within:ring-2 focus-within:ring-[var(--primary)]"
      >
        <Search className="w-5 h-5 text-[var(--text-muted)]" />

        <input
          type="text"
          value={value}
          placeholder="পণ্যের নাম লিখে সার্চ করুন..."
          onChange={(e) => onChange(e.target.value)}
          className="
            w-full bg-transparent outline-none text-base
            text-[var(--text-primary)]
            placeholder:text-[var(--text-muted)]
          "
        />
      </div>
    </div>
  );
}
