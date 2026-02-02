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

export default function AboutTimelineV2() {
  return (
    <section className="py-24 ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-14 border-l-4 pl-4 border-[var(--primary)]">
          আমাদের যাত্রার গল্প
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                className="card p-6 text-center hover:scale-[1.02] transition"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ background: "var(--gradient-primary)" }}>
                  <Icon className="text-white" size={22} />
                </div>

                <h3 className="text-lg font-bold mb-1">{item.year}</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
