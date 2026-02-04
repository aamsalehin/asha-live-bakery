"use client";

import { Store, MapPin, Cpu, Calendar } from "lucide-react";

const timeline = [
  {
    year: "নভেম্বর, ২০২৩",
    text: "শিবগঞ্জ থেকে আশা লাইভ বেকারির যাত্রা শুরু",
    icon: Store,
  },
  {
    year: "ফেব্রুয়ারি, ২০২৪",
    text: "মানুষের ভালোবাসায় নতুন দুইটি শাখা উদ্বোধন",
    icon: MapPin,
  },
  {
    year: "মার্চ, ২০২৪",
    text: "আধুনিক প্রযুক্তি সংযোজন ও উৎপাদন উন্নয়ন",
    icon: Cpu,
  },
  {
    year: "বর্তমান",
    text: "সিলেট জুড়ে সফলভাবে ৫টি শাখা পরিচালনা",
    icon: Calendar,
  },
];

export default function AboutTimelineV3() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 bg-[var(--bg-main)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-20 border-l-4 pl-4 border-[var(--primary)]">
          আমাদের যাত্রার গল্প
        </h2>

        {/* Timeline wrapper */}
        <div className="relative">

          {/* center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] 
            bg-gradient-to-b from-transparent via-[var(--primary)]/40 to-transparent 
            hidden md:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-center 
                    ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                >
                  {/* CARD */}
                  <div
                    className={`w-full md:w-[46%] rounded-3xl p-8
                      bg-[var(--bg-card)]
                      border border-[var(--border-soft)]
                      shadow-[var(--shadow-soft)]
                      backdrop-blur-xl
                      hover:-translate-y-1 hover:shadow-xl transition`}
                  >
                    <h3 className="text-xl font-bold mb-2 text-[var(--text-primary)]">
                      {item.year}
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  {/* ICON DOT */}
                  <div className="absolute md:static md:mx-8 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Icon size={22} className="text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
