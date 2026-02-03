"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  ShoppingBag,
  Clock,
  Cake,
  Flame,
  Truck,
  Phone,
} from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  icon: React.ElementType;
};

const FAQS: FAQItem[] = [
  {
    question: "আপনাদের বেকারি কি সত্যিই লাইভ বেকিং করে?",
    answer:
      "হ্যাঁ। আশা লাইভ বেকারিতে প্রতিদিন লাইভ ওভেনে বেকিং করা হয়। কোনো সংরক্ষিত বা পুরনো পণ্য বিক্রি করা হয় না।",
    icon: Flame,
  },
  {
    question: "আপনাদের কোন কোন পণ্য সবচেয়ে জনপ্রিয়?",
    answer:
      "আমাদের ব্রেড, বান, কেক এবং হট আইটেম যেমন প্যাটিস ও ড্যানিশ গ্রাহকদের মধ্যে সবচেয়ে জনপ্রিয়।",
    icon: Cake,
  },
  {
    question: "অনলাইনে কীভাবে অর্ডার করবো?",
    answer:
      "পণ্য পেজ থেকে পছন্দের আইটেম কার্টে যোগ করুন, এরপর চেকআউট করে মোবাইল নম্বর ও ঠিকানা দিন। খুব সহজ!",
    icon: ShoppingBag,
  },
  {
    question: "অর্ডার করতে কি অ্যাকাউন্ট খুলতে হয়?",
    answer:
      "না। আমাদের ওয়েবসাইটে অর্ডার করতে কোনো অ্যাকাউন্ট বা লগইন প্রয়োজন নেই।",
    icon: HelpCircle,
  },
  {
    question: "ডেলিভারি কত সময়ের মধ্যে পাওয়া যায়?",
    answer:
      "সাধারণত অর্ডার কনফার্ম হওয়ার ১–২ ঘণ্টার মধ্যে ডেলিভারি দেওয়া হয় (এলাকা ভেদে সময় পরিবর্তিত হতে পারে)।",
    icon: Clock,
  },
  {
    question: "ডেলিভারি চার্জ কত?",
    answer:
      "বর্তমানে আমাদের ডেলিভারি চার্জ মাত্র ৫০ টাকা।",
    icon: Truck,
  },
  {
    question: "কাস্টম কেক অর্ডার করা যাবে কি?",
    answer:
      "হ্যাঁ। জন্মদিন, বিয়ে ও বিশেষ অনুষ্ঠানের জন্য কাস্টম কেক অর্ডার নেওয়া হয়।",
    icon: Cake,
  },
  {
    question: "কোনো সমস্যায় কার সাথে যোগাযোগ করবো?",
    answer:
      "যোগাযোগ পেজে দেওয়া নম্বরে কল করুন অথবা সরাসরি নিকটস্থ শাখায় যোগাযোগ করুন।",
    icon: Phone,
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-6 md:px-16 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[var(--bg-section)] dark:bg-[var(--bg-section)]" />

      {/* GLOW */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-[var(--primary)]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--accent)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-5xl mx-auto">

         {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 border-l-4 pl-4 border-[var(--primary)]">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-[var(--text-secondary)] text-lg">
           আশা লাইভ বেকারি সম্পর্কে আপনার সাধারণ প্রশ্নের উত্তর
          </p>
        </div>

        {/* HEADER
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary)]">
            প্রায়শই জিজ্ঞাসিত প্রশ্ন
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            আশা লাইভ বেকারি সম্পর্কে আপনার সাধারণ প্রশ্নের উত্তর
          </p>
        </div> */}

        {/* FAQ LIST */}
        <div className="space-y-5">
          {FAQS.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="
                  rounded-2xl
                  glass-surface-strong
                  backdrop-blur-xl
                  border border-white/40 dark:border-white/10
                  shadow-lg
                  transition
                "
              >
                {/* QUESTION */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center gap-4 p-6 text-left"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center
                    bg-[var(--primary)]/15 text-[var(--primary)]">
                    <Icon size={20} />
                  </div>

                  <span className="flex-1 text-lg font-semibold text-[var(--text-primary)]">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`w-6 h-6 text-[var(--text-muted)] transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden px-6 pb-6">
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
