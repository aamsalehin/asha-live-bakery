// "use client";

// import { BRANCHES } from "@/data/branches";
// import { useState } from "react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert("আপনার বার্তা পাঠানো হয়েছে! আমরা শীঘ্রই আপনাকে যোগাযোগ করব।");
//   };

//   return (
//     <main className="px-6 md:px-16 py-20 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">

//       {/* ------------------ PAGE HEADER ------------------ */}
//       <section className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
//         <p className="text-lg md:text-xl opacity-80">
//           আপনার যেকোনো জিজ্ঞাসা, অর্ডার বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
//         </p>
//       </section>

//       {/* ------------------ TWO COLUMN LAYOUT ------------------ */}
//       <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* -------- LEFT SIDE: ALL BRANCH INFO -------- */}
//         <div>
//           <h2 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">
//             আমাদের শাখাসমূহ
//           </h2>

//           <div className="space-y-6">
//             {BRANCHES.map((branch) => (
//               <div
//                 key={branch.name}
//                 className="p-6 bg-[var(--secondary)] rounded-xl shadow"
//               >
//                 <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
//                 <p className="opacity-80 mb-1">📍 {branch.address}</p>
//                 <p className="font-semibold">📞 {branch.phone}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* -------- RIGHT SIDE: CONTACT FORM -------- */}
//         <div>
//           <div className="bg-white p-10 rounded-2xl shadow">
//             <h2 className="text-3xl font-bold mb-6 border-l-4 pl-4 border-[var(--primary)]">
//               যোগাযোগ ফর্ম
//             </h2>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Name */}
//               <div>
//                 <label className="block mb-2 font-semibold">নাম</label>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="আপনার নাম"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block mb-2 font-semibold">মোবাইল নম্বর</label>
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="০১XXXXXXXXX"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
//                 />
//               </div>

//               {/* Message */}
//               <div>
//                 <label className="block mb-2 font-semibold">বার্তা</label>
//                 <textarea
//                   name="message"
//                   placeholder="আপনার বার্তা লিখুন"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg h-32"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="bg-[var(--primary)] text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#D78A69] transition w-full"
//               >
//                 পাঠান
//               </button>
//             </form>
//           </div>
//         </div>

//       </section>
//     </main>
//   );
// }

"use client";

import { BRANCHES } from "@/data/branches";
import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import PageHero from "@/app/components/pageHero/PageHero";

export default function ContactPage() {
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
    <main
      className="min-h-screen"
      style={{
        background: `
          radial-gradient(circle at top left, var(--hero-glow-primary), transparent 55%),
          linear-gradient(
            to bottom right,
            var(--hero-bg-from),
            var(--hero-bg-via),
            var(--hero-bg-to)
          )
        `,
      }}
    >
      {/* CONTENT */}
      <PageHero
  badge="যোগাযোগ"
  title="আমাদের সাথে যোগাযোগ করুন"
  subtitle="অর্ডার, প্রশ্ন বা পরামর্শের জন্য আমরা সবসময় প্রস্তুত।"
  icons={["📞", "📍", "💬"]}
/>
      <section className="py-24 ">

        {/* HEADER */}
       

        {/* GRID */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14">

          {/* BRANCHES */}
          <div>
            <h2 className="text-2xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">
              আমাদের শাখাসমূহ
            </h2>

            <div className="space-y-6">
              {BRANCHES.map((branch) => (
                <div
                  key={branch.name}
                  className="
                    bg-[var(--bg-card)]
                    border border-[var(--border-soft)]
                    rounded-2xl p-6
                    shadow-[var(--shadow-soft)]
                    hover:-translate-y-1 hover:shadow-xl transition
                  "
                >
                  <h3 className="text-xl font-bold mb-3">{branch.name}</h3>

                  <div className="flex gap-3 text-sm text-[var(--text-secondary)] mb-2">
                    <MapPin className="w-4 h-4 text-[var(--primary)] mt-0.5" />
                    <span>{branch.address}</span>
                  </div>

                  <div className="flex gap-3 text-sm font-semibold">
                    <Phone className="w-4 h-4 text-[var(--primary)]" />
                    <span>{branch.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div>
            <div className="glass rounded-3xl p-10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)]">
                যোগাযোগ ফর্ম
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  name="name"
                  placeholder="আপনার নাম"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[var(--bg-section)] border border-[var(--border-soft)]"
                  required
                />

                <input
                  name="phone"
                  placeholder="০১XXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl bg-[var(--bg-section)] border border-[var(--border-soft)]"
                  required
                />

                <textarea
                  name="message"
                  placeholder="আপনার বার্তা লিখুন"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 px-5 py-3 rounded-xl bg-[var(--bg-section)] border border-[var(--border-soft)] resize-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg hover:scale-[1.02] transition"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <Send className="w-5 h-5" />
                  পাঠান
                </button>

              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
