// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { Star, Flame, Pencil, Trash } from "lucide-react";

// export default function ItemsPage() {
//   const [items, setItems] = useState<any[]>([]);

//   const fetchItems = async () => {
//     const res = await fetch("/api/admin/products");
//     setItems(await res.json());
//   };

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const toggle = async (id: string, type: "featured" | "pod") => {
//     await fetch(`/api/admin/products/${id}/toggle`, {
//       method: "PATCH",
//       body: JSON.stringify({ type }),
//     });
//     fetchItems();
//   };

//   return (
//     <div className="space-y-6">
//       <h1 className="text-3xl font-bold">Items</h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border border-[var(--admin-card-border)]">
//           <thead className="bg-[var(--admin-sidebar-bg)] text-white">
//             <tr>
//               <th className="p-2">Image</th>
//               <th>Name</th>
//               <th>Category</th>
//               <th>Price</th>
//               <th>Unit</th>
//               <th>Featured</th>
//               <th>POD</th>
//               <th>Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {items.map(item => (
//               <tr key={item.id} className="border-t">
//                 <td className="p-2">
//                   <Image src={item.image} alt="" width={40} height={40} />
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.category.name}</td>
//                 <td>৳ {item.price}</td>
//                 <td>{item.unit}</td>

//                 <td>
//                   <button onClick={() => toggle(item.id, "featured")}>
//                     <Star
//                       className={item.featuredProduct ? "text-yellow-400" : "opacity-30"}
//                     />
//                   </button>
//                 </td>

//                 <td>
//                   <button onClick={() => toggle(item.id, "pod")}>
//                     <Flame
//                       className={item.productOfTheDay ? "text-red-500" : "opacity-30"}
//                     />
//                   </button>
//                 </td>

//                 <td className="flex gap-2">
//                   <Pencil className="cursor-pointer" />
//                   <Trash className="cursor-pointer text-red-500" />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";
// import {
//   Plus,
//   Star,
//   StarOff,
//   Sparkles,
//   Trash2,
//   Package,
// } from "lucide-react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   featuredProduct: boolean;
//   productOfTheDay: boolean;
//   category: {
//     name: string;
//   };
// }

// export default function ItemsPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [open, setOpen] = useState(false);

//   // 🔁 Fetch products
//   const fetchProducts = async () => {
//     const res = await fetch("/api/admin/products", { cache: "no-store" });
//     const data = await res.json();
//     setProducts(data);
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ⭐ Toggle feature / day
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
//     fetchProducts();
//   };

//   // 🗑 Delete
//   const remove = async (id: number) => {
//     if (!confirm("Delete this product?")) return;

//     await fetch("/api/admin/products", {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id }),
//     });

//     fetchProducts();
//   };

//   return (
//     <div className="space-y-8">
//       {/* ================= HEADER ================= */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-3xl font-bold">Items</h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="
//             flex items-center gap-2 px-4 py-2 rounded-lg
//             bg-[var(--admin-button-bg)]
//             text-[var(--admin-button-text)]
//             hover:bg-[var(--admin-button-hover)]
//             transition
//           "
//         >
//           <Plus size={18} />
//           Add Item
//         </button>
//       </div>

//       {/* ================= TABLE ================= */}
//       <div
//         className="
//           overflow-x-auto
//           bg-[var(--admin-card-bg)]
//           border border-[var(--admin-card-border)]
//           rounded-xl
//         "
//       >
//         <table className="w-full text-sm">
//           <thead className="border-b border-[var(--admin-card-border)]">
//             <tr className="text-left opacity-70">
//               <th className="px-4 py-3">Name</th>
//               <th className="px-4 py-3">Category</th>
//               <th className="px-4 py-3">Price</th>
//               <th className="px-4 py-3 text-center">Featured</th>
//               <th className="px-4 py-3 text-center">Day</th>
//               <th className="px-4 py-3 text-right">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p) => (
//               <tr
//                 key={p.id}
//                 className="
//                   border-t border-[var(--admin-card-border)]
//                   hover:bg-[var(--admin-soft-bg)]
//                   transition
//                 "
//               >
//                 <td className="px-4 py-3 font-medium flex items-center gap-2">
//                   <Package
//                     size={16}
//                     className="text-[var(--admin-accent)]"
//                   />
//                   {p.name}
//                 </td>

//                 <td className="px-4 py-3 opacity-80">
//                   {p.category?.name}
//                 </td>

//                 <td className="px-4 py-3">
//                   ৳ {p.price}
//                 </td>

//                 {/* Featured */}
//                 <td className="px-4 py-3 text-center">
//                   <button
//                     onClick={() =>
//                       toggle(p.id, "featuredProduct", p.featuredProduct)
//                     }
//                     className="p-2 rounded-lg hover:bg-[var(--admin-soft-bg)]"
//                   >
//                     {p.featuredProduct ? (
//                       <Star
//                         size={16}
//                         className="text-[var(--admin-accent)]"
//                       />
//                     ) : (
//                       <StarOff size={16} className="opacity-50" />
//                     )}
//                   </button>
//                 </td>

//                 {/* Product of the day */}
//                 <td className="px-4 py-3 text-center">
//                   <button
//                     onClick={() =>
//                       toggle(p.id, "productOfTheDay", p.productOfTheDay)
//                     }
//                     className="p-2 rounded-lg hover:bg-[var(--admin-soft-bg)]"
//                   >
//                     <Sparkles
//                       size={16}
//                       className={
//                         p.productOfTheDay
//                           ? "text-[var(--admin-primary)]"
//                           : "opacity-50"
//                       }
//                     />
//                   </button>
//                 </td>

//                 {/* Actions */}
//                 <td className="px-4 py-3 text-right">
//                   <button
//                     onClick={() => remove(p.id)}
//                     className="
//                       p-2 rounded-lg
//                       text-[var(--admin-danger)]
//                       hover:bg-[var(--admin-soft-bg)]
//                     "
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </td>
//               </tr>
//             ))}

//             {products.length === 0 && (
//               <tr>
//                 <td
//                   colSpan={6}
//                   className="px-4 py-10 text-center opacity-60"
//                 >
//                   No products found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* ================= ADD ITEM MODAL (COMING NEXT) ================= */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//           <div
//             className="
//               w-full max-w-xl rounded-xl p-6
//               bg-[var(--admin-card-bg)]
//               border border-[var(--admin-card-border)]
//             "
//           >
//             <h2 className="text-2xl font-semibold mb-4">
//               Add New Item
//             </h2>

//             <p className="opacity-70">
//               Item form will be added next.
//             </p>

//             <div className="flex justify-end pt-4">
//               <button
//                 onClick={() => setOpen(false)}
//                 className="px-4 py-2 rounded-lg border"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import ProductTable from "@/app/components/admin/items/ProductsTable";
import AddProductModal from "@/app/components/admin/items/AddProductModal";

export default function ItemsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  // 🔁 Fetch products
  const fetchProducts = async () => {
    const res = await fetch("/api/admin/products", { cache: "no-store" });
    const data = await res.json();
    setProducts(data);
  };

  // 🔁 Fetch categories
  const fetchCategories = async () => {
    const res = await fetch("/api/admin/categories", { cache: "no-store" });
    const data = await res.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <div className="space-y-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-2 text-[var(--admin-text)]">
          <Package className="text-[var(--admin-accent)]" />
          Items
        </h1>

        {/* 👉 Your modal button lives here */}
        <AddProductModal
          categories={categories}
          onSuccess={fetchProducts}
        />
      </div>

      {/* ================= TABLE ================= */}
      {/* <ProductTable
        products={products}
        onChange={fetchProducts}
      /> */}


      <ProductTable
  products={products}
  onChange={fetchProducts}
  onEdit={(product) => {
    // open edit modal with product
    console.log("edit:", product);
  }}
/>
    </div>
  );
}
