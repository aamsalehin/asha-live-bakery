"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import { useCartStore } from "../../components/store/useCartStore";

export default function NavbarV2() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const totalItems = useCartStore((state) => state.totalItems());

  /* ------------------------------------ */
  /* Load theme on mount */
  /* ------------------------------------ */
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    }
  }, []);

  /* ------------------------------------ */
  /* Toggle theme */
  /* ------------------------------------ */
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[var(--bg-main)] border-b border-[var(--border-soft)] backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Asha Live Bakery Logo"
            width={44}
            height={44}
            className="object-contain"
          />
          <span className="text-2xl font-bold font-[Noto_Serif_Bengali] text-[var(--text-primary)]">
            আশা লাইভ বেকারি
          </span>
        </Link>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          {/* 🌗 THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full bg-[var(--bg-soft)] hover:bg-[var(--bg-card)] transition"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5 text-[var(--text-primary)]" />
            ) : (
              <Sun className="w-5 h-5 text-[var(--text-primary)]" />
            )}
          </button>

          {/* MOBILE CART */}
          <Link href="/cart" className="md:hidden relative">
            <ShoppingCart className="w-7 h-7 text-[var(--text-primary)]" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--primary)] text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-[var(--text-primary)]"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-lg font-[Noto_Sans_Bengali] text-[var(--text-primary)]">

            <Link href="/" className="hover:text-[var(--primary)] transition">
              হোম
            </Link>
            <Link href="/products" className="hover:text-[var(--primary)] transition">
              পণ্যসমূহ
            </Link>
            <Link href="/about" className="hover:text-[var(--primary)] transition">
              আমাদের সম্পর্কে
            </Link>
            <Link href="/contact" className="hover:text-[var(--primary)] transition">
              যোগাযোগ
            </Link>

            {/* DESKTOP CART */}
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-7 h-7 hover:text-[var(--primary)] transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-[var(--primary)] text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-[var(--bg-main)] border-t border-[var(--border-soft)] px-6 py-4 text-lg font-[Noto_Sans_Bengali] text-[var(--text-primary)]">
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
