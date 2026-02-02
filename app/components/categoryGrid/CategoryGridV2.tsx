"use client";

import Link from "next/link";
import {
  Croissant,
  CakeSlice,
  Flame,
  Cookie,
  Sandwich
} from "lucide-react";

interface Category {
  name: string;
  slug: string;
  icon: any;
  gradient: string;
}

const categories: Category[] = [
  {
    name: "ব্রেড আইটেম",
    slug: "bread",
    icon: Sandwich,
    gradient: "from-[#E47A3A]/30 to-[#F3D7B9]/30",
  },
  {
    name: "বান আইটেম",
    slug: "bun",
    icon: Croissant,
    gradient: "from-[#C32524]/30 to-[#F06854]/30",
  },
  {
    name: "কেক",
    slug: "cake",
    icon: CakeSlice,
    gradient: "from-[#F06854]/30 to-[#FFE8D6]/30",
  },
  {
    name: "হট আইটেম",
    slug: "hot",
    icon: Flame,
    gradient: "from-[#C32524]/40 to-[#E47A3A]/30",
  },
  {
    name: "কুকিজ",
    slug: "cookies",
    icon: Cookie,
    gradient: "from-[#E47A3A]/30 to-[#C32524]/20",
  },
];

export default function CategoryGridV3() {
  return (
    <section className="relative py-24 px-6 md:px-16">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[var(--light-bg)] dark:bg-[var(--dark-bg)]" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--primary)]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Section title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[var(--text-dark)] dark:text-[var(--text-light)] border-l-4 pl-4 border-[var(--primary)]">
          সব পণ্যের ক্যাটাগরি
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {categories.map((cat) => {
            const Icon = cat.icon;

            return (
              <Link
                key={cat.slug}
                href={`/products/${cat.slug}`}
                className="group relative rounded-3xl p-8 backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/30 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${cat.gradient} opacity-0 group-hover:opacity-100 transition`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center gap-5">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/60 dark:bg-white/10 backdrop-blur-md shadow-md group-hover:scale-110 transition">
                    <Icon className="w-8 h-8 text-[var(--primary)] group-hover:text-[var(--accent)] transition" />
                  </div>

                  {/* Text */}
                  <p className="text-xl font-semibold text-[var(--text-dark)] dark:text-[var(--text-light)]">
                    {cat.name}
                  </p>

                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
