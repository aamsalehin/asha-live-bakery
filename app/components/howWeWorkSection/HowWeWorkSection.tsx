"use client";

import { Flame, ShoppingBag, Truck, Smile } from "lucide-react";

const steps = [
  {
    title: "লাইভ বেকিং",
    desc: "প্রতিদিন আমাদের বেকারিতে লাইভ ওভেনে তাজা ব্রেড, বান, কেক ও হট আইটেম প্রস্তুত করা হয়।",
    icon: Flame,
  },
  {
    title: "অর্ডার করুন",
    desc: "দোকানে এসে অথবা অনলাইনে সহজেই আপনার পছন্দের পণ্য অর্ডার করতে পারবেন।",
    icon: ShoppingBag,
  },
  {
    title: "দ্রুত ডেলিভারি",
    desc: "অর্ডার কনফার্ম হলে নির্দিষ্ট সময়ের মধ্যেই পণ্য পৌঁছে দেওয়া হয়।",
    icon: Truck,
  },
  {
    title: "সুখী গ্রাহক",
    desc: "তাজা স্বাদ, মানসম্মত পণ্য ও ভালো ব্যবহারের মাধ্যমে গ্রাহকের সন্তুষ্টিই আমাদের লক্ষ্য।",
    icon: Smile,
  },
];

export default function HowWeWorkSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 border-l-4 pl-4 border-[var(--primary)]">
            আমরা যেভাবে কাজ করি
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            সততা, স্বাদ এবং তাজা খাবারের প্রতিশ্রুতি নিয়েই আমাদের প্রতিদিনের কাজ।
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-2xl
                  bg-[var(--bg-section)]
                  border border-[var(--border-soft)]
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition
                "
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-sm font-bold text-[var(--text-muted)]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    w-14 h-14 mb-6 rounded-xl
                    flex items-center justify-center
                    bg-[var(--secondary)]
                    group-hover:bg-[var(--primary)]
                    transition
                  "
                >
                  <Icon className="w-7 h-7 text-[var(--primary)] group-hover:text-white transition" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-primary)]">
                  {step.title}
                </h3>

                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
