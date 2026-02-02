"use client";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  icons?: string[];
}

export default function PageHero({
  badge,
  title,
  subtitle,
  icons = [],
}: PageHeroProps) {
  return (
   <section className="relative py-24 px-6 md:px-16 ">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[var(--light-bg)] dark:bg-[var(--dark-bg)]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--primary)]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/20 blur-3xl rounded-full" /> 

      {/* Floating Icons */}
        {icons.length > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {icons.map((icon, i) => (
            <span
              key={i}
              className={`absolute text-4xl opacity-20 animate-float ${
                i % 2 === 0 ? "top-20 left-16" : "bottom-24 right-20"
              }`}
              style={{ animationDelay: `${i * 0.8}s` }}
            >
              {icon}
            </span>
          ))}
        </div>
      )}
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">

        {badge && (
          <span
            className="inline-block mb-5 px-5 py-2 rounded-full text-sm font-semibold tracking-wide"
            style={{
              backgroundColor: "var(--hero-badge-bg)",
              color: "var(--hero-badge-text)",
            }}
          >
            {badge}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
