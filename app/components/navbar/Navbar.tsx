// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

// //         {/* Logo */}
// //         <Link href="/">
// //           <span className="text-2xl font-bold text-[var(--text-dark)] font-[Noto_Serif_Bengali]">
// //             আশা লাইভ বেকারি
// //           </span>
// //         </Link>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-[Noto_Sans_Bengali] text-lg">
// //           <Link href="/">হোম</Link>
// //           <Link href="/products">পণ্যসমূহ</Link>
// //           <Link href="/about">আমাদের সম্পর্কে</Link>
// //           <Link href="/contact">যোগাযোগ</Link>
// //           <Link
// //             href="/cart"
// //             className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg shadow hover:bg-[#D78A69] transition"
// //           >
// //             কার্ট
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <button
// //           className="md:hidden text-3xl text-[var(--text-dark)]"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? "✖" : "☰"}
// //         </button>
// //       </div>

// //       {/* Mobile Dropdown Menu */}
// //       {open && (
// //         <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
// //           <Link href="/" onClick={() => setOpen(false)}>হোম</Link>
// //           <Link href="/products" onClick={() => setOpen(false)}>পণ্যসমূহ</Link>
// //           <Link href="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
// //           <Link href="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>

// //           <Link
// //             href="/cart"
// //             className="block bg-[var(--primary)] text-white px-4 py-2 rounded-lg shadow hover:bg-[#D78A69] transition w-full text-center"
// //             onClick={() => setOpen(false)}
// //           >
// //             কার্ট
// //           </Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }


// // "use client";
// // import { useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
// //       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

// //         {/* Logo */}
// //         <Link href="/">
// //           <span className="text-2xl font-bold text-[var(--text-dark)] font-[Noto_Serif_Bengali]">
// //             আশা লাইভ বেকারি
// //           </span>
// //         </Link>

// //         {/* Desktop Menu */}
// //         <div className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-[Noto_Sans_Bengali] text-lg">
// //           <Link href="/">হোম</Link>
// //           <Link href="/products">পণ্যসমূহ</Link>
// //           <Link href="/about">আমাদের সম্পর্কে</Link>
// //           <Link href="/contact">যোগাযোগ</Link>

// //           {/* CART ICON */}
// //           <Link
// //             href="/cart"
// //             className="text-[var(--text-dark)] text-2xl hover:text-[var(--primary)] transition"
// //           >
// //             🛒
// //           </Link>
// //         </div>

// //         {/* Mobile Right Section = Cart Icon + Toggle */}
// //         <div className="md:hidden flex items-center gap-5">

// //           {/* Mobile CART ICON */}
// //           <Link
// //             href="/cart"
// //             className="text-[var(--text-dark)] text-3xl hover:text-[var(--primary)] transition"
// //           >
// //             🛒
// //           </Link>

// //           {/* Mobile Menu Button */}
// //           <button
// //             className="text-3xl text-[var(--text-dark)]"
// //             onClick={() => setOpen(!open)}
// //           >
// //             {open ? "✖" : "☰"}
// //           </button>

// //         </div>
// //       </div>

// //       {/* Mobile Dropdown Menu */}
// //       {open && (
// //         <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
// //           <Link className="block" href="/" onClick={() => setOpen(false)}>হোম</Link>
// //           <Link className="block" href="/products" onClick={() => setOpen(false)}>পণ্যসমূহ</Link>
// //           <Link className="block" href="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
// //           <Link className="block" href="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ShoppingCart } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState<boolean>(false);

//   return (
//     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* LEFT SIDE: LOGO */}
//         <Link
//           href="/"
//           className="text-2xl font-bold text-[var(--text-dark)] font-[Noto_Serif_Bengali]"
//         >
//           আশা লাইভ বেকারি
//         </Link>

//         {/* RIGHT SIDE (Cart + Toggle) */}
//         <div className="flex items-center gap-5">

//           {/* MOBILE CART ICON */}
//           <Link href="/cart" className="md:hidden">
//             <ShoppingCart className="w-7 h-7 text-[var(--text-dark)]" />
//           </Link>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-3xl text-[var(--text-dark)]"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? "✖" : "☰"}
//           </button>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-[Noto_Sans_Bengali] text-lg">
//             <Link href="/">হোম</Link>
//             <Link href="/products">পণ্যসমূহ</Link>
//             <Link href="/about">আমাদের সম্পর্কে</Link>
//             <Link href="/contact">যোগাযোগ</Link>

//             {/* DESKTOP CART ICON */}
//             <Link href="/cart">
//               <ShoppingCart className="w-7 h-7 hover:text-[var(--primary)] transition" />
//             </Link>
//           </div>

//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {open && (
//         <div className="md:hidden bg-white shadow-lg px-6 py-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
//           <div className="flex flex-col space-y-4">

//             <Link href="/" onClick={() => setOpen(false)}>হোম</Link>
//             <Link href="/products" onClick={() => setOpen(false)}>পণ্যসমূহ</Link>
//             <Link href="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
//             <Link href="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>

//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LEFT SIDE: LOGO + NAME */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Asha Live Bakery Logo"
            width={45}
            height={45}
            className="object-contain"
          />
          <span className="text-2xl font-bold text-[var(--text-dark)] font-[Noto_Serif_Bengali]">
            আশা লাইভ বেকারি
          </span>
        </Link>

        {/* RIGHT SIDE (Cart + Toggle) */}
        <div className="flex items-center gap-5">

          {/* MOBILE CART ICON */}
          <Link href="/cart" className="md:hidden">
            <ShoppingCart className="w-7 h-7 text-[var(--text-dark)]" />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-[var(--text-dark)]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-[Noto_Sans_Bengali] text-lg">
            <Link href="/">হোম</Link>
            <Link href="/products">পণ্যসমূহ</Link>
            <Link href="/about">আমাদের সম্পর্কে</Link>
            <Link href="/contact">যোগাযোগ</Link>

            {/* DESKTOP CART ICON */}
            <Link href="/cart">
              <ShoppingCart className="w-7 h-7 hover:text-[var(--primary)] transition" />
            </Link>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
          <div className="flex flex-col space-y-4">
            <Link href="/" onClick={() => setOpen(false)}>হোম</Link>
            <Link href="/products" onClick={() => setOpen(false)}>পণ্যসমূহ</Link>
            <Link href="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
