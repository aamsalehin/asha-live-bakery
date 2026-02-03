"use client";

import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function FooterV2() {
  return (
    <footer
      className="relative"
      style={{ background: "var(--footer-bg)" }}
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-20 grid md:grid-cols-3 gap-12">
        
        {/* BRAND */}
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--footer-text)" }}
          >
            আশা লাইভ বেকারি
          </h3>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--footer-muted)" }}
          >
            তাজা ও মানসম্মত বেকারি আইটেমের নির্ভরযোগ্য ঠিকানা।
            প্রতিদিন লাইভ বেকিং এবং কাস্টম অর্ডার গ্রহণ করা হয়।
          </p>

          <div className="mt-4 w-14 h-1 rounded-full bg-gradient-to-r from-orange-500 to-red-500" />
        </div>

        {/* CONTACT */}
        <div>
          <h4
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--footer-text)" }}
          >
            যোগাযোগ
          </h4>

          <ul className="space-y-4 text-sm" style={{ color: "var(--footer-muted)" }}>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-orange-400" />
              +880 1740-372692
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-orange-400" />
              সিলেট, বাংলাদেশ
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-orange-400" />
              প্রতিদিন সকাল ৭টা – রাত ১২টা
            </li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h4
            className="text-xl font-semibold mb-6"
            style={{ color: "var(--footer-text)" }}
          >
            কুইক লিংক
          </h4>

          <ul className="space-y-3 text-sm">
            {[
              { label: "হোম", href: "/" },
              { label: "পণ্যসমূহ", href: "/products" },
              { label: "আমাদের সম্পর্কে", href: "/about" },
              { label: "যোগাযোগ", href: "/contact" },
              { label: "কার্ট", href: "/cart" },
            ].map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:translate-x-1 inline-block transition"
                  style={{ color: "var(--footer-muted)" }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        className="relative text-center py-6 text-sm border-t"
        style={{
          color: "var(--footer-muted)",
          borderColor: "var(--footer-border)",
        }}
      >
        © {new Date().getFullYear()} আশা লাইভ বেকারি — সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
