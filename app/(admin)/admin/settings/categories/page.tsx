// "use client";

// import { useEffect, useState } from "react";
// import { Trash2, Folder } from "lucide-react";

// interface Category {
//   id: number;
//   name: string;
// }

// export default function CategoriesPage() {
//   const [categories, setCategories] = useState<Category[]>([]);

//   const fetchCategories = async () => {
//     const res = await fetch("/api/admin/categories", { cache: "no-store" });
//     setCategories(await res.json());
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const remove = async (id: number) => {
//     if (!confirm("Delete this category?")) return;

//     await fetch("/api/admin/categories", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });

//     fetchCategories();
//   };

//   return (
//     <div className="space-y-8">
//       <h1 className="text-3xl font-bold">Categories</h1>

//       <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {categories.map((c) => (
//           <div
//             key={c.id}
//             className="
//               bg-[var(--admin-card-bg)]
//               border border-[var(--admin-card-border)]
//               rounded-xl p-5
//               flex items-center justify-between
//             "
//           >
//             <div className="flex items-center gap-2">
//               <Folder className="text-[var(--admin-accent)]" />
//               <span className="font-medium">{c.name}</span>
//             </div>

//             <button
//               onClick={() => remove(c.id)}
//               className="
//                 p-2 rounded-lg
//                 text-[var(--admin-danger)]
//                 hover:bg-[var(--admin-soft-bg)]
//               "
//             >
//               <Trash2 size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { Trash2, Folder, Plus } from "lucide-react";
import AddCategoryModal from "@/app/components/admin/items/AddCategoryModal";

interface Category {
  id: number;
  name: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchCategories = async () => {
    const res = await fetch("/api/admin/categories", { cache: "no-store" });
    setCategories(await res.json());
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const remove = async (id: number) => {
    if (!confirm("Delete this category?")) return;

    await fetch("/api/admin/categories", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    fetchCategories();
  };

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>

        {/* ✅ Add Category Button (Modal owns button) */}
        <AddCategoryModal onSuccess={fetchCategories} />
      </div>

      {/* ================= CATEGORY GRID ================= */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((c) => (
          <div
            key={c.id}
            className="
              bg-[var(--admin-card-bg)]
              border border-[var(--admin-card-border)]
              rounded-xl p-5
              flex items-center justify-between
            "
          >
            <div className="flex items-center gap-2">
              <Folder className="text-[var(--admin-accent)]" />
              <span className="font-medium">{c.name}</span>
            </div>

            <button
              onClick={() => remove(c.id)}
              className="
                p-2 rounded-lg
                text-[var(--admin-danger)]
                hover:bg-[var(--admin-soft-bg)]
              "
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}

        {categories.length === 0 && (
          <p className="opacity-60">No categories found</p>
        )}
      </div>
    </div>
  );
}

