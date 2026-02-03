// "use client";
// const categories = [
//   { name: 'ব্রেড আইটেম', slug: 'bread' },
//   { name: 'বান আইটেম', slug: 'bun' },
//   { name: 'কেক', slug: 'cake' },
//   { name: 'হট আইটেম', slug: 'hot' },
//   { name: 'কুকিজ', slug: 'cookies' }
// ];

// export default function CategoryGrid() {
//   return (
//     <section className="py-20 px-6 md:px-16 bg-white">
//       <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
//         সব পণ্যের ক্যাটাগরি
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((cat) => (
//           <div
//             key={cat.slug}
//             className="bg-[var(--secondary)] p-6 rounded-xl text-center shadow hover:shadow-lg transition cursor-pointer"
//           >
//             <p className="text-xl font-semibold text-[var(--text-dark)]">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import Link from "next/link";

// interface Category {
//   name: string;
//   slug: string;
// }

// const categories: Category[] = [
//   { name: "ব্রেড আইটেম", slug: "bread" },
//   { name: "বান আইটেম", slug: "bun" },
//   { name: "কেক", slug: "cake" },
//   { name: "হট আইটেম", slug: "hot" },
//   { name: "কুকিজ", slug: "cookies" },
// ];

// export default function CategoryGrid() {
//   return (
//     <section className="py-20 px-6 md:px-16 bg-white">
//       <h2 className="text-3xl font-bold mb-10 text-[var(--text-dark)] border-l-4 pl-4 border-[var(--primary)]">
//         সব পণ্যের ক্যাটাগরি
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((cat) => (
//           <Link
//             key={cat.slug}
//             href={`/products/${cat.slug}`}
//             className="bg-[var(--secondary)] p-6 rounded-xl text-center shadow hover:shadow-lg transition cursor-pointer block"
//           >
//             <p className="text-xl font-semibold text-[var(--text-dark)]">
//               {cat.name}
//             </p>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";

interface Category {
  name: string;
  slug: string;
}

const categories: Category[] = [
  { name: "ব্রেড আইটেম", slug: "bread" },
  { name: "বান আইটেম", slug: "bun" },
  { name: "কেক", slug: "cake" },
  { name: "হট আইটেম", slug: "hot" },
  { name: "কুকিজ", slug: "cookies" },
];

export default function CategoryGrid() {
  return (
    <section
      className="
        py-20 px-6 md:px-16
        bg-[var(--bg-main)]
        text-[var(--text-primary)]
      "
    >
      <h2
        className="
          text-3xl font-bold mb-10
          border-l-4 pl-4 border-[var(--primary)]
        "
      >
        সব পণ্যের ক্যাটাগরি
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/products/${cat.slug}`}
            className="
              block p-6 rounded-xl text-center
              bg-[var(--secondary)]
              dark:bg-[var(--bg-card)]
              border border-[var(--border-soft)]
              shadow hover:shadow-lg
              transition
            "
          >
            <p className="text-xl font-semibold">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
