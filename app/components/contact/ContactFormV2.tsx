"use client";

import { useState } from "react";
import { Send, User, Phone, MessageSquare } from "lucide-react";

export default function ContactFormV2() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ আপনার বার্তা পাঠানো হয়েছে!");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <section
      className="
        relative rounded-3xl p-10 md:p-14
        shadow-[var(--shadow-soft)]
        border border-[var(--border-soft)]
      "
      style={{ backgroundColor: "var(--bg-main)" }}
    >
      <h2 className="text-3xl font-bold mb-2 text-[var(--text-primary)]">
        যোগাযোগ করুন
      </h2>

      <p className="mb-10 text-sm text-[var(--text-secondary)]">
        অর্ডার বা যেকোনো প্রশ্নের জন্য নিচের ফর্ম পূরণ করুন
      </p>

      <form onSubmit={handleSubmit} className="grid gap-6">

        {/* NAME */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
          <input
            name="name"
            placeholder="আপনার নাম"
            value={formData.name}
            onChange={handleChange}
            className="
              w-full pl-12 pr-5 py-4 rounded-xl
              bg-[var(--bg-main)]
              text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              border border-[var(--border-soft)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
              transition
            "
            required
          />
        </div>

        {/* PHONE */}
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
          <input
            name="phone"
            placeholder="০১XXXXXXXXX"
            value={formData.phone}
            onChange={handleChange}
            className="
              w-full pl-12 pr-5 py-4 rounded-xl
              bg-[var(--bg-main)]
              text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              border border-[var(--border-soft)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
              transition
            "
            required
          />
        </div>

        {/* MESSAGE */}
        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[var(--text-muted)]" />
          <textarea
            name="message"
            placeholder="আপনার বার্তা লিখুন"
            value={formData.message}
            onChange={handleChange}
            className="
              w-full h-36 pl-12 pr-5 py-4 rounded-xl resize-none
              bg-[var(--bg-main)]
              text-[var(--text-primary)]
              placeholder:text-[var(--text-muted)]
              border border-[var(--border-soft)]
              focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
              transition
            "
            required
          />
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="
            mt-4 inline-flex items-center justify-center gap-3
            px-10 py-4 rounded-2xl
            text-white font-semibold text-lg
            shadow-lg hover:shadow-xl hover:scale-[1.03]
            transition
          "
          style={{ background: "var(--gradient-primary)" }}
        >
          <Send className="w-5 h-5" />
          পাঠান
        </button>

      </form>
    </section>
  );
}
