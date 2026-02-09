// import {
//   Star,
//   StarOff,
//   Sparkles,
//   Trash2,
// } from "lucide-react";

// export default function ProductTable({ products, onChange }) {
//   const toggle = async (id, field, value) => {
//     await fetch("/api/admin/products", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, [field]: !value }),
//     });
//     onChange();
//   };

//   const remove = async (id) => {
//     if (!confirm("Delete this product?")) return;

//     await fetch("/api/admin/products", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     onChange();
//   };

//   return (
//     <div
//       className="
//         overflow-x-auto rounded-xl
//         bg-[var(--admin-card-bg)]
//         border border-[var(--admin-card-border)]
//       "
//     >
//       <table className="w-full text-sm">
//         <thead>
//           <tr
//             className="
//               text-left
//               text-[var(--admin-muted)]
//               border-b border-[var(--admin-card-border)]
//             "
//           >
//             <th className="px-5 py-4 font-medium">Name</th>
//             <th className="px-5 py-4 font-medium">Category</th>
//             <th className="px-5 py-4 font-medium">Price</th>
//             <th className="px-5 py-4 text-center font-medium">Featured</th>
//             <th className="px-5 py-4 text-center font-medium">Day</th>
//             <th className="px-5 py-4 text-right font-medium">Actions</th>
//           </tr>
//         </thead>

//         <tbody>
//           {products.map((p) => (
//             <tr
//               key={p.id}
//               className="
//                 border-b border-[var(--admin-card-border)]
//                 hover:bg-[var(--admin-soft-bg)]
//                 transition
//               "
//             >
//               <td className="px-5 py-4 font-medium text-[var(--admin-text)]">
//                 {p.name}
//               </td>

//               <td className="px-5 py-4 text-[var(--admin-muted)]">
//                 {p.category?.name}
//               </td>

//               <td className="px-5 py-4 text-[var(--admin-text)]">
//                 ৳ {p.price}
//               </td>

//               {/* Featured */}
//               <td className="px-5 py-4 text-center">
//                 <button
//                   onClick={() =>
//                     toggle(p.id, "featuredProduct", p.featuredProduct)
//                   }
//                   className="
//                     inline-flex items-center justify-center
//                     w-9 h-9 rounded-lg
//                     hover:bg-[var(--admin-soft-bg)]
//                   "
//                 >
//                   {p.featuredProduct ? (
//                     <Star className="w-4 h-4 text-[var(--admin-accent)]" />
//                   ) : (
//                     <StarOff className="w-4 h-4 opacity-40" />
//                   )}
//                 </button>
//               </td>

//               {/* Product of the Day */}
//               <td className="px-5 py-4 text-center">
//                 <button
//                   onClick={() =>
//                     toggle(p.id, "productOfTheDay", p.productOfTheDay)
//                   }
//                   className="
//                     inline-flex items-center justify-center
//                     w-9 h-9 rounded-lg
//                     hover:bg-[var(--admin-soft-bg)]
//                   "
//                 >
//                   <Sparkles
//                     className={`w-4 h-4 ${
//                       p.productOfTheDay
//                         ? "text-[var(--admin-primary)]"
//                         : "opacity-40"
//                     }`}
//                   />
//                 </button>
//               </td>

//               {/* Actions */}
//               <td className="px-5 py-4 text-right">
//                 <button
//                   onClick={() => remove(p.id)}
//                   className="
//                     inline-flex items-center justify-center
//                     w-9 h-9 rounded-lg
//                     text-[var(--admin-danger)]
//                     hover:bg-[var(--admin-soft-bg)]
//                   "
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </td>
//             </tr>
//           ))}

//           {products.length === 0 && (
//             <tr>
//               <td
//                 colSpan={6}
//                 className="px-5 py-12 text-center text-[var(--admin-muted)]"
//               >
//                 No products found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


// "use client";

// import { Pencil, Star, StarOff, Sparkles, Trash2 } from "lucide-react";
// import AdminTable, { AdminTableColumn } from "@/app/components/admin/ui/AdminTable";

// type ProductRow = {
//   id: number;
//   name: string;
//   price: number;
//   unit: string;
//   featuredProduct: boolean;
//   productOfTheDay: boolean;
//   category?: { name: string } | null;
// };

// type Props = {
//   products: ProductRow[];
//   onChange: () => void;
//   onEdit?: (product: ProductRow) => void; // ✅ for edit modal later
// };

// export default function ProductTable({ products, onChange, onEdit }: Props) {
//   const toggle = async (
//     id: number,
//     field: "featuredProduct" | "productOfTheDay",
//     value: boolean
//   ) => {
//     await fetch("/api/admin/products", {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id, [field]: !value }),
//     });
//     onChange();
//   };

//   const remove = async (id: number) => {
//     if (!confirm("Delete this product?")) return;

//     await fetch("/api/admin/products", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });
//     onChange();
//   };

//   const columns: AdminTableColumn<ProductRow>[] = [
//     {
//       key: "name",
//       header: "Name",
//       render: (p) => (
//         <span className="font-medium">{p.name}</span>
//       ),
//     },
//     {
//       key: "category",
//       header: "Category",
//       render: (p) => (
//         <span className="text-[var(--admin-muted)]">
//           {p.category?.name || "-"}
//         </span>
//       ),
//     },
//     {
//       key: "price",
//       header: "Price",
//       render: (p) => <span>৳ {p.price}</span>,
//     },
//     {
//       key: "unit",
//       header: "Unit",
//       render: (p) => (
//         <span className="text-[var(--admin-muted)]">{p.unit}</span>
//       ),
//     },
//     {
//       key: "featured",
//       header: "Featured",
//       align: "center",
//       render: (p) => (
//         <button
//           onClick={() => toggle(p.id, "featuredProduct", p.featuredProduct)}
//           className="
//             inline-flex items-center justify-center
//             w-8 h-8 rounded-lg
//             hover:bg-[var(--admin-soft-bg)]
//           "
//           title="Toggle Featured"
//         >
//           {p.featuredProduct ? (
//             <Star className="w-4 h-4 text-[var(--admin-accent)]" />
//           ) : (
//             <StarOff className="w-4 h-4 opacity-40" />
//           )}
//         </button>
//       ),
//     },
//     {
//       key: "day",
//       header: "Day",
//       align: "center",
//       render: (p) => (
//         <button
//           onClick={() => toggle(p.id, "productOfTheDay", p.productOfTheDay)}
//           className="
//             inline-flex items-center justify-center
//             w-8 h-8 rounded-lg
//             hover:bg-[var(--admin-soft-bg)]
//           "
//           title="Toggle Product of the Day"
//         >
//           <Sparkles
//             className={`w-4 h-4 ${
//               p.productOfTheDay ? "text-[var(--admin-primary)]" : "opacity-40"
//             }`}
//           />
//         </button>
//       ),
//     },
//     {
//       key: "actions",
//       header: "Actions",
//       align: "right",
//       render: (p) => (
//         <div className="inline-flex items-center gap-1 justify-end">
//           <button
//             onClick={() => onEdit?.(p)}
//             className="
//               inline-flex items-center justify-center
//               w-8 h-8 rounded-lg
//               hover:bg-[var(--admin-soft-bg)]
//               text-[var(--admin-text)]
//             "
//             title="Edit"
//             type="button"
//           >
//             <Pencil className="w-4 h-4" />
//           </button>

//           <button
//             onClick={() => remove(p.id)}
//             className="
//               inline-flex items-center justify-center
//               w-8 h-8 rounded-lg
//               hover:bg-[var(--admin-soft-bg)]
//               text-[var(--admin-danger)]
//             "
//             title="Delete"
//             type="button"
//           >
//             <Trash2 className="w-4 h-4" />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   return (
//     <AdminTable
//       columns={columns}
//       rows={products}
//       emptyText="No products found"
//       rowKey={(row) => row.id}
//     />
//   );
// }


"use client";

import { Pencil, Star, StarOff, Trash2, Flame, FlameKindling } from "lucide-react";
import AdminTable, { AdminTableColumn } from "@/app/components/admin/ui/AdminTable";

type ProductRow = {
  id: number;
  name: string;
  price: number;
  unit: string;
  featuredProduct: boolean;
  productOfTheDay: boolean;
  category?: { name: string } | null;
};

type Props = {
  products: ProductRow[];
  onChange: () => void;
  onEdit?: (product: ProductRow) => void;
};

export default function ProductTable({ products, onChange, onEdit }: Props) {
  const toggle = async (id: number, field: "featuredProduct" | "productOfTheDay") => {
    await fetch("/api/admin/products/toggle", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, field }),
    });

    onChange();
  };

  const remove = async (id: number) => {
    if (!confirm("Delete this product?")) return;

    await fetch("/api/admin/products", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    onChange();
  };

  const columns: AdminTableColumn<ProductRow>[] = [
    {
      key: "name",
      header: "Name",
      render: (p) => <span className="font-medium">{p.name}</span>,
    },
    {
      key: "category",
      header: "Category",
      render: (p) => (
        <span className="text-[var(--admin-muted)]">{p.category?.name || "-"}</span>
      ),
    },
    {
      key: "price",
      header: "Price",
      render: (p) => <span>৳ {p.price}</span>,
    },
    {
      key: "unit",
      header: "Unit",
      render: (p) => <span className="text-[var(--admin-muted)]">{p.unit}</span>,
    },

    // ✅ Featured (more visual)
    {
      key: "featured",
      header: "Featured",
      align: "center",
      render: (p) => (
        <button
          onClick={() => toggle(p.id, "featuredProduct")}
          className="
            inline-flex items-center justify-center
            w-8 h-8 rounded-lg
            hover:bg-[var(--admin-soft-bg)]
            transition
          "
          title={p.featuredProduct ? "Remove Featured" : "Make Featured"}
          type="button"
        >
          {p.featuredProduct ? (
            <Star className="w-5 h-5 text-[var(--admin-accent)] fill-[var(--admin-accent)]" />
          ) : (
            <StarOff className="w-5 h-5 opacity-50" />
          )}
        </button>
      ),
    },

    // ✅ Product of the day (better than sparkles)
    {
      key: "day",
      header: "Day",
      align: "center",
      render: (p) => (
        <button
          onClick={() => toggle(p.id, "productOfTheDay")}
          className="
            inline-flex items-center justify-center
            w-8 h-8 rounded-lg
            hover:bg-[var(--admin-soft-bg)]
            transition
          "
          title={p.productOfTheDay ? "Remove Product of the Day" : "Make Product of the Day"}
          type="button"
        >
          {p.productOfTheDay ? (
            <Flame className="w-5 h-5 text-[var(--admin-primary)]" />
          ) : (
            <FlameKindling className="w-5 h-5 opacity-50" />
          )}
        </button>
      ),
    },

    {
      key: "actions",
      header: "Actions",
      align: "right",
      render: (p) => (
        <div className="inline-flex items-center gap-1 justify-end">
          <button
            onClick={() => onEdit?.(p)}
            className="
              inline-flex items-center justify-center
              w-8 h-8 rounded-lg
              hover:bg-[var(--admin-soft-bg)]
              text-[var(--admin-text)]
            "
            title="Edit"
            type="button"
          >
            <Pencil className="w-4 h-4" />
          </button>

          <button
            onClick={() => remove(p.id)}
            className="
              inline-flex items-center justify-center
              w-8 h-8 rounded-lg
              hover:bg-[var(--admin-soft-bg)]
              text-[var(--admin-danger)]
            "
            title="Delete"
            type="button"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <AdminTable
      columns={columns}
      rows={products}
      emptyText="No products found"
      rowKey={(row) => row.id}
    />
  );
}
