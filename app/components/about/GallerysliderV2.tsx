"use client";

import Image from "next/image";
import { useState } from "react";

const gallery = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
];

export default function GallerySliderV2() {
  const [slide, setSlide] = useState(0);

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
          গ্যালারি
        </h2>

        <div className="relative h-120 rounded-2xl overflow-hidden shadow-lg">
          <Image src={gallery[slide]} alt="" fill className="object-cover" />

          <button
            onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass px-3 py-2 rounded-full"
          >
            ←
          </button>

          <button
            onClick={() => setSlide((slide + 1) % gallery.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass px-3 py-2 rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
