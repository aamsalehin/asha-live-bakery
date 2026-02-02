"use client";

interface FilterBarProps {
  active: string;
  onFilter: (category: string) => void;
  counts: Record<string, number>;
}

export default function FilterBarV2({
  active,
  onFilter,
  counts,
}: FilterBarProps) {
  const filters = [
    { key: "all", label: "সব পণ্য", icon: "🧺" },
    { key: "bread", label: "ব্রেড", icon: "🍞" },
    { key: "bun", label: "বান", icon: "🥐" },
    { key: "cake", label: "কেক", icon: "🎂" },
    { key: "hot", label: "হট আইটেম", icon: "🔥" },
  ];

  return (
    <div className="mb-12 flex flex-wrap gap-3 items-center">
      {filters.map((f) => {
        const isActive = active === f.key;

        return (
          <button
            key={f.key}
            onClick={() => onFilter(f.key)}
            className={`
              group flex items-center gap-2
              px-5 py-2 rounded-full text-sm font-medium
              transition-all duration-300
              border
              ${
                isActive
                  ? "text-white shadow-lg"
                  : "text-[var(--text-primary)]"
              }
            `}
            style={{
              background: isActive
                ? "var(--gradient-primary)"
                : "var(--bg-card)",
              borderColor: isActive
                ? "transparent"
                : "var(--border-soft)",
            }}
          >
            {/* ICON */}
            <span
              className={`
                text-lg transition-transform
                ${isActive ? "scale-110" : "group-hover:scale-110"}
              `}
            >
              {f.icon}
            </span>

            {/* LABEL */}
            <span>{f.label}</span>

            {/* COUNT */}
            <span
              className={`
                ml-1 px-2 py-[2px] rounded-full text-xs font-semibold
                ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[var(--bg-soft)] text-[var(--text-muted)]"
                }
              `}
            >
              {counts[f.key] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
