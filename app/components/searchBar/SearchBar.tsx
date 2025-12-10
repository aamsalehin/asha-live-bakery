"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="mb-10 w-full max-w-lg">
      <input
        type="text"
        value={value}
        placeholder="পণ্যের নাম লিখে সার্চ করুন..."
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full px-5 py-3 text-lg rounded-lg border border-[var(--secondary)]
          focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          bg-white shadow-sm
        "
      />
    </div>
  );
}
