"use client";

interface FilterBarProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function FilterBar({ active, onFilter }: FilterBarProps) {
  const filters = [
    { key: "all", label: "সব পণ্য" },
    { key: "bread", label: "ব্রেড" },
    { key: "bun", label: "বান" },
    { key: "cake", label: "কেক" },
    { key: "hot", label: "হট আইটেম" },
  ];

  return (
    <div className="mb-12 flex flex-wrap gap-4 items-center">
      {filters.map((f) => (
        <button
          key={f.key}
          onClick={() => onFilter(f.key)}
          className={`px-5 py-2 rounded-lg font-medium transition shadow 
            ${
              active === f.key
                ? "bg-[var(--primary)] text-white"
                : "bg-[var(--secondary)] hover:bg-[#f1d8c2]"
            }
          `}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
