"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
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
    <div
      className="
        relative rounded-3xl p-10 md:p-14
        bg-[var(--bg-card)]
        border border-[var(--border-soft)]
        shadow-[var(--shadow-soft)]
      "
    >
      <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">
        যোগাযোগ করুন
      </h2>

      <form onSubmit={handleSubmit} className="grid gap-6">

        <input
          name="name"
          placeholder="আপনার নাম"
          value={formData.name}
          onChange={handleChange}
          className="
            w-full px-5 py-4 rounded-xl
            bg-[var(--bg-section)]
            border border-[var(--border-soft)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
          required
        />

        <input
          name="phone"
          placeholder="০১XXXXXXXXX"
          value={formData.phone}
          onChange={handleChange}
          className="
            w-full px-5 py-4 rounded-xl
            bg-[var(--bg-section)]
            border border-[var(--border-soft)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
          required
        />

        <textarea
          name="message"
          placeholder="আপনার বার্তা লিখুন"
          value={formData.message}
          onChange={handleChange}
          className="
            w-full h-36 px-5 py-4 rounded-xl resize-none
            bg-[var(--bg-section)]
            border border-[var(--border-soft)]
            focus:outline-none focus:ring-2 focus:ring-[var(--primary)]
          "
          required
        />

        <button
          type="submit"
          className="
            mt-4 inline-flex items-center justify-center gap-3
            px-10 py-4 rounded-2xl
            text-white font-semibold text-lg
            shadow-lg hover:shadow-xl hover:scale-[1.02] transition
          "
          style={{ background: "var(--gradient-primary)" }}
        >
          <Send className="w-5 h-5" />
          পাঠান
        </button>
      </form>
    </div>
  );
}
