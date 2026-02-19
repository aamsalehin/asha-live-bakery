// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Product } from "@/data/Products";

// interface Props {
//   product: Product;
// }

// export default function RamadanProductCard({ product }: Props) {
//   return (
//     <motion.div
//       whileHover={{ y: -6 }}
//       transition={{ type: "spring", stiffness: 200 }}
//       className="
//         group
//         bg-white dark:bg-[var(--bg-section)]
//         rounded-2xl
//         shadow-sm hover:shadow-2xl
//         transition-all duration-300
//         overflow-hidden
//         border border-neutral-100 dark:border-neutral-800
//       "
//     >
//       {/* Image Area */}
//       <div className="relative h-56 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        
//         {/* Ramadan Badge */}
//         <div
//           className="
//             absolute top-4 left-4
//             bg-[var(--primary)]
//             text-white text-xs
//             px-3 py-1 rounded-full
//             tracking-wide
//             shadow-md
//           "
//         >
//           রমজান স্পেশাল
//         </div>

//         <img
//           src={product.img}
//           alt={product.name}
//           className="
//             h-36 object-contain
//             transition-transform duration-500
//             group-hover:scale-110
//           "
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 text-center">

//         {/* Product Name */}
//         <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 tracking-wide">
//           {product.name}
//         </h3>

//         {/* Short Description */}
//         <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
//           {product.description}
//         </p>

//         {/* Price */}
//         <p className="text-xl font-bold text-[var(--primary)] mb-6">
//           ৳ {product.price}
//         </p>

//         {/* Button */}
//         <Link href={`/product/${product.id}`}>
//           <button
//             className="
//               w-full
//               border border-[var(--primary)]
//               text-[var(--primary)]
//               py-2.5 rounded-xl
//               text-sm font-medium
//               tracking-wide
//               hover:bg-[var(--primary)]
//               hover:text-white
//               transition-all duration-300
//               cursor-pointer
//             "
//           >
//             বিস্তারিত দেখুন
//           </button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }


// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Product } from "@/data/Products";

// interface Props {
//   product: Product;
// }

// export default function RamadanProductCard({ product }: Props) {
//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 200 }}
//       className="
//         group
//         relative
//         bg-[#111112]
//         rounded-2xl
//         overflow-hidden
//         border border-yellow-500/20
//         hover:border-yellow-400/60
//         transition-all duration-300
//         shadow-lg hover:shadow-yellow-500/10
//       "
//     >
//       {/* Subtle Glow */}
//       <div className="absolute inset-0 bg-yellow-500 opacity-0 group-hover:opacity-5 transition duration-500 blur-2xl"></div>

//       {/* Image Area */}
//       <div className="relative h-52 flex items-center justify-center bg-black/40">

//         {/* Floating Ramadan Badge */}
//         <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-600 text-black text-[10px] px-3 py-1 rounded-full font-semibold shadow-md">
//           Ramadan Special
//         </div>

//         <img
//           src={product.img}
//           alt={product.name}
//           className="h-32 object-contain transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 text-center relative z-10">

//         <h3 className="text-lg font-semibold text-yellow-400 mb-3 tracking-wide">
//           {product.name}
//         </h3>

//         <p className="text-sm text-neutral-400 mb-5 line-clamp-2">
//           {product.description}
//         </p>

//         <p className="text-xl font-bold text-yellow-300 mb-6">
//           ৳ {product.price}
//         </p>

//         <Link href={`/product/${product.id}`}>
//           <button className="
//             w-full
//             border border-yellow-400
//             text-yellow-400
//             py-2.5 rounded-full
//             text-sm font-medium
//             hover:bg-yellow-400
//             hover:text-black
//             transition-all duration-300
//           ">
//             বিস্তারিত দেখুন
//           </button>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import { useCartStore } from "../store/useCartStore";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   img: string;
//   description?: string;
//   badge?: string;
// }

// export default function RamadanProductCard({
//   product,
// }: {
//   product: Product;
// }) {
//   const router = useRouter();
//   const addToCart = useCartStore((state) => state.addToCart);
//   const [adding, setAdding] = useState(false);

//   const handleAdd = (e: React.MouseEvent) => {
//     e.stopPropagation(); // prevent navigation
//     addToCart(product.id, 1);
//     setAdding(true);
//     setTimeout(() => setAdding(false), 900);
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -8 }}
//       transition={{ type: "spring", stiffness: 200 }}
//       onClick={() => router.push(`/product/${product.id}`)}
//       className="
//         group relative cursor-pointer
//         bg-gradient-to-b from-[#141414] to-[#0b0b0c]
//         rounded-3xl
//         overflow-hidden
//         border border-yellow-500/20
//         hover:border-yellow-400/60
//         shadow-xl hover:shadow-yellow-500/10
//         transition-all duration-300
//       "
//     >
//       {/* Hover Glow */}
//       <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-yellow-400 blur-2xl transition duration-500"></div>

//       {/* Image */}
//       <div className="relative h-52 flex items-center justify-center bg-black/40 overflow-hidden">

//         {/* Badge */}
//         {product.badge && (
//           <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-300 to-yellow-600 text-black text-[10px] px-3 py-1 rounded-full font-semibold shadow-md">
//             {product.badge}
//           </div>
//         )}

//         <img
//           src={product.img}
//           alt={product.name}
//           className="h-32 object-contain transition-transform duration-500 group-hover:scale-110"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-6 text-center relative z-10">

//         <h3 className="text-lg font-semibold text-yellow-400 mb-2 tracking-wide">
//           {product.name}
//         </h3>

//         {product.description && (
//           <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
//             {product.description}
//           </p>
//         )}

//         <p className="text-xl font-bold text-yellow-300 mb-6">
//           ৳ {product.price}
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col gap-3">

//           {/* View Details */}
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               router.push(`/product/${product.id}`);
//             }}
//             className="
//               w-full
//               border border-yellow-400
//               text-yellow-400
//               py-2.5 rounded-full
//               text-sm font-medium
//               hover:bg-yellow-400
//               hover:text-black
//               transition-all duration-300
//             "
//           >
//             বিস্তারিত দেখুন
//           </button>

//           {/* Add To Cart */}
//           <button
//             onClick={handleAdd}
//             className="
//               w-full
//               inline-flex items-center justify-center gap-2
//               bg-yellow-500
//               hover:bg-yellow-400
//               text-black
//               py-2.5 rounded-full
//               text-sm font-semibold
//               transition-all duration-300
//               shadow-md
//             "
//           >
//             <ShoppingCart className="w-4 h-4" />
//             {adding ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
//           </button>

//         </div>
//       </div>
//     </motion.div>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { ShoppingCart } from "lucide-react";
// import { useCartStore } from "../store/useCartStore";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   img: string;
// }

// export default function RamadanProductCard({
//   product,
// }: {
//   product: Product;
// }) {
//   const router = useRouter();
//   const addToCart = useCartStore((state) => state.addToCart);
//   const [adding, setAdding] = useState(false);

//   const handleAdd = (e: React.MouseEvent) => {
//     e.stopPropagation();
//     addToCart(product.id, 1);
//     setAdding(true);
//     setTimeout(() => setAdding(false), 800);
//   };

//   return (
//     <div
//       onClick={() => router.push(`/product/${product.id}`)}
//       className="
//         group cursor-pointer
//         bg-[#111112]
//         rounded-2xl
//         p-4
//         border border-yellow-500/20
//         hover:border-yellow-400/60
//         transition-all duration-300
//       "
//     >
//       {/* Image */}
//       <div className="h-28 flex items-center justify-center mb-4">
//         <img
//           src={product.img}
//           alt={product.name}
//           className="h-20 object-contain transition-transform duration-300 group-hover:scale-105"
//         />
//       </div>

//       {/* Name */}
//       <h3 className="text-sm font-semibold text-yellow-400 text-center mb-1 line-clamp-1">
//         {product.name}
//       </h3>

//       {/* Price */}
//       <p className="text-sm text-yellow-300 text-center mb-4 font-bold">
//         ৳ {product.price}
//       </p>

//       {/* Add To Cart */}
//       <button
//         onClick={handleAdd}
//         className="
//           w-full
//           flex items-center justify-center gap-2
//           bg-yellow-500
//           hover:bg-yellow-400
//           text-black
//           py-2 rounded-full
//           text-xs font-semibold
//           transition-all duration-300
//         "
//       >
//         <ShoppingCart className="w-3 h-3" />
//         {adding ? "যোগ হয়েছে ✓" : ""}
//       </button>
//     </div>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../store/useCartStore";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
}

export default function RamadanProductCard({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();
  const addToCart = useCartStore((state) => state.addToCart);
  const [adding, setAdding] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product.id, 1);
    setAdding(true);
    setTimeout(() => setAdding(false), 800);
  };

  return (
    <div
      onClick={() => router.push(`/product/${product.id}`)}
      className="
        group cursor-pointer
        bg-[#1C100D]
        rounded-2xl
        p-4
        border border-yellow-500/15
        hover:border-yellow-400/40
        transition-all duration-300
        hover:shadow-[0_10px_30px_rgba(255,215,0,0.08)]
      "
    >
      {/* Image */}
      <div className="h-28 flex items-center justify-center mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="h-20 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h3 className="text-sm font-semibold text-yellow-400 text-center mb-1 line-clamp-1">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-sm text-yellow-300 text-center mb-4 font-bold">
        ৳ {product.price}
      </p>

      {/* Add To Cart */}
      <button
        onClick={handleAdd}
        className="
          w-full
          flex items-center justify-center gap-2
          bg-yellow-500
          hover:bg-yellow-400
          text-black
          py-2 rounded-full
          text-xs font-semibold
          transition-all duration-300
          active:scale-95
        "
      >
        <ShoppingCart className="w-3 h-3" />
        {adding ? "যোগ হয়েছে ✓" : "কার্টে যোগ করুন"}
      </button>
    </div>
  );
}
