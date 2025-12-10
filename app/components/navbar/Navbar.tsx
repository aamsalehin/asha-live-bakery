"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold text-[var(--text-dark)] font-[Noto_Serif_Bengali]">
            আশা লাইভ বেকারি
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[var(--text-dark)] font-[Noto_Sans_Bengali] text-lg">
          <Link href="/">হোম</Link>
          <Link href="/products">পণ্যসমূহ</Link>
          <Link href="/about">আমাদের সম্পর্কে</Link>
          <Link href="/contact">যোগাযোগ</Link>
          <Link
            href="/cart"
            className="bg-[var(--primary)] text-white px-4 py-2 rounded-lg shadow hover:bg-[#D78A69] transition"
          >
            কার্ট
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-[var(--text-dark)]"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
          <Link href="/" onClick={() => setOpen(false)}>হোম</Link>
          <Link href="/products" onClick={() => setOpen(false)}>পণ্যসমূহ</Link>
          <Link href="/about" onClick={() => setOpen(false)}>আমাদের সম্পর্কে</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>যোগাযোগ</Link>

          <Link
            href="/cart"
            className="block bg-[var(--primary)] text-white px-4 py-2 rounded-lg shadow hover:bg-[#D78A69] transition w-full text-center"
            onClick={() => setOpen(false)}
          >
            কার্ট
          </Link>
        </div>
      )}
    </nav>
  );
}
