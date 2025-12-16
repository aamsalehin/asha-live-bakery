"use client";
import Image from "next/image";
import { useState } from "react";

const gallery = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
];

export default function GallerySlider() {
  const [slide, setSlide] = useState(0);

  return (

     <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-0">
      <h2 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">
        গ্যালারি
      </h2>

      <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
        <Image src={gallery[slide]} alt="" fill className="object-cover" />

        <button onClick={() => setSlide((slide - 1 + gallery.length) % gallery.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full">
          ←
        </button>

        <button onClick={() => setSlide((slide + 1) % gallery.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full">
          →
        </button>
      </div>
      </div>
    </section>

    
  );
}
