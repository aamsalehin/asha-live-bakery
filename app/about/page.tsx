// "use client";

// import Image from "next/image";

// const branches = [
//   {
//     name: "শিবগঞ্জ শাখা",
//     img: "/images/branches/shibganj.jpg",
//     address: "শিবগঞ্জ, সিলেট",
//     phone: "01700-000000",
//   },
//   {
//     name: "শেখঘাট শাখা",
//     img: "/images/branches/sheikhghat.jpg",
//     address: "শেখঘাট, সিলেট",
//     phone: "01700-000001",
//   },
//   {
//     name: "মদিনা মার্কেট শাখা",
//     img: "/images/branches/madina.jpg",
//     address: "মদিনা মার্কেট, সিলেট",
//     phone: "01700-000002",
//   },
//   {
//     name: "মাবেরখানা শাখা",
//     img: "/images/branches/maberkhana.jpg",
//     address: "মাবেরখানা, সিলেট",
//     phone: "01700-000003",
//   },
//   {
//     name: "কুসুমবাগ শাখা",
//     img: "/images/branches/kusumbag.jpg",
//     address: "কুসুমবাগ, সিলেট",
//     phone: "01700-000004",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <main className="px-6 md:px-16 py-20 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">

//       {/* Hero Section */}
//       <section className="max-w-5xl mx-auto text-center mb-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">
//           আমাদের সম্পর্কে — আশা লাইভ বেকারি
//         </h1>
//         <p className="text-lg md:text-xl leading-relaxed opacity-80">
//           সিলেটের প্রথম লাইভ বেকারি হিসেবে <strong>“আশা লাইভ বেকারি”</strong> 
//           প্রতিদিন আপনাদের জন্য তাজা, স্বাস্থ্যসম্মত এবং মানসম্মত খাবার তৈরি করে।
//           আমরা বিশ্বাস করি ভালো খাবার মানুষের মুখে হাসি এনে দেয়, 
//           আর সেই হাসি পৌঁছে দিতে আমরা প্রতিদিন নিরলসভাবে কাজ করি।
//         </p>
//       </section>

//       {/* Mission Section */}
//       <section className="max-w-6xl mx-auto mb-20">
//         <div className="bg-[var(--secondary)] p-10 rounded-2xl shadow">
//           <h2 className="text-3xl font-bold mb-4 border-l-4 border-[var(--primary)] pl-4">
//             আমাদের লক্ষ্য ও প্রতিজ্ঞা
//           </h2>
//           <p className="text-lg leading-relaxed opacity-90">
//             আমরা চাই প্রতিটি পরিবার, প্রতিটি মানুষ প্রতিদিনের খাবারের তালিকায় 
//             নিরাপদ, সুস্বাদু এবং সাশ্রয়ী দামের বেকারি পণ্য যুক্ত করতে পারে। 
//             তাজা উপকরণ, আধুনিক প্রযুক্তি এবং অভিজ্ঞ শেফদের সমন্বয়ে 
//             আমরা তৈরি করি ব্রেড, কেক, প্যাটিস, কুকিজসহ আরও অনেক পণ্য।
//             <br /><br />
//             বিয়ে, জন্মদিন, পার্টি বা যেকোনো অনুষ্ঠানের জন্য আমরা 
//             বিশেষ অর্ডার গ্রহণ করি—আপনার মজার মুহূর্তগুলোকে 
//             আরও আনন্দময় করে তুলতে।
//           </p>
//         </div>
//       </section>

//       {/* Branch Section */}
//       <section className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
//           আমাদের শাখাসমূহ
//         </h2>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
//           {branches.map((branch) => (
//             <div
//               key={branch.name}
//               className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition"
//             >
//               <div className="w-full h-40 bg-[var(--secondary)] rounded-lg mb-4 overflow-hidden">
//                 <Image
//                   src={branch.img}
//                   alt={branch.name}
//                   width={400}
//                   height={300}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
//               <p className="text-lg opacity-80 mb-1">📍 {branch.address}</p>
//               <p className="text-lg font-semibold">📞 {branch.phone}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Closing Note */}
//       <section className="max-w-4xl mx-auto text-center mt-20">
//         <h2 className="text-3xl font-bold mb-4">আপনাদের ভালোবাসাই আমাদের শক্তি</h2>
//         <p className="text-lg opacity-85 leading-relaxed">
//           আমাদের প্রতিটি পণ্যের পেছনে রয়েছে আপনাদের প্রতি আন্তরিকতা ও দায়বদ্ধতা।  
//           আরও ভালো সেবা এবং সুস্বাদু খাবার নিয়ে আপনাদের পাশে থাকার প্রতিশ্রুতি নিয়ে  
//           “আশা লাইভ বেকারি” এগিয়ে চলেছে প্রতিদিন।  
//           <br /><br />
//           ধন্যবাদ আমাদের সঙ্গে থাকার জন্য।
//         </p>
//       </section>

//     </main>
//   );
// }



"use client";

import { BRANCHES } from "@/data/branches";
import Image from "next/image";
import { useState } from "react";

// Branch Info
const branches = [
  {
    name: "শিবগঞ্জ শাখা",
    img: "/images/branches/shibganj.jpg",
    address: "শিবগঞ্জ, সিলেট",
    phone: "01700-000000",
    map: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.326862179043!2d91.8900937754783!3d24.89524947790655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055001b860f47%3A0x4d9c004096141729!2sAsha%20Live%20Bakery%20(Shibganj%20Branch)!5e1!3m2!1sen!2suk!4v1765328783207!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"`, // Replace with real map link
  },
  {
    name: "শেখঘাট শাখা",
    img: "/images/branches/sheikhghat.jpg",
    address: "শেখঘাট, সিলেট",
    phone: "01700-000001",
    map: "https://www.google.com/maps/embed?pb=!1m18!....",
  },
  {
    name: "মদিনা মার্কেট শাখা",
    img: "/images/branches/madina.jpg",
    address: "মদিনা মার্কেট, সিলেট",
    phone: "01700-000002",
    map: "https://www.google.com/maps/embed?pb=!1m18!....",
  },
  {
    name: "মাবেরখানা শাখা",
    img: "/images/branches/maberkhana.jpg",
    address: "মাবেরখানা, সিলেট",
    phone: "01700-000003",
    map: "https://www.google.com/maps/embed?pb=!1m18!....",
  },
  {
    name: "কুসুমবাগ শাখা",
    img: "/images/branches/kusumbag.jpg",
    address: "কুসুমবাগ, সিলেট",
    phone: "01700-000004",
    map: "https://www.google.com/maps/embed?pb=!1m18!....",
  },
];

// Team Members
const team = [
  {
    name: "কাজী রিজভানুল আহাদ",
    role: "প্রতিষ্ঠাতা",
    img: "/images/team/kazi.jpg",
  },
  {
    name: "এ এ এম সালেহিন চৌধুরী",
    role: "প্রতিষ্ঠাতা",
    img: "/images/team/salehin.jpg",
  },
  {
    name: "তামিম চৌধুরী",
    role: "প্রতিষ্ঠাতা",
    img: "/images/team/tamim.jpg",
  },
];

// Gallery Images
const gallery = [
  "/images/gallery/g1.jpg",
  "/images/gallery/g2.jpg",
  "/images/gallery/g3.jpg",
  "/images/gallery/g4.jpg",
  "/images/gallery/g5.jpg",
];

export default function AboutPage() {
  const [slide, setSlide] = useState(0);

  // next & previous slide
  const nextSlide = () => setSlide((prev) => (prev + 1) % gallery.length);
  const prevSlide = () =>
    setSlide((prev) => (prev - 1 + gallery.length) % gallery.length);

  return (
    <main className="px-6 md:px-16 py-20 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">

      {/* ------------------ HERO SECTION ------------------ */}
      <section className="max-w-5xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          আমাদের সম্পর্কে — আশা লাইভ বেকারি
        </h1>
        <p className="text-lg md:text-xl opacity-80 leading-relaxed">
          সিলেটের প্রথম লাইভ বেকারি হিসেবে আমরা প্রতিদিন আপনাদের জন্য তাজা,
          স্বাস্থ্যসম্মত এবং সুস্বাদু পণ্য তৈরি করে থাকি।
        </p>
      </section>

      {/* ------------------ TIMELINE SECTION ------------------ */}
     {/* ------------------ HORIZONTAL TIMELINE SECTION ------------------ */}
<section className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-bold mb-12 border-l-4 pl-4 border-[var(--primary)]">
    আমাদের যাত্রার গল্প
  </h2>

  {/* Timeline Container */}
  <div className="relative">

    {/* Center Horizontal Line */}
    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--primary)]/30 rounded-full"></div>

    {/* Timeline Items */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">

      {/* ITEM 1 */}
      <div className="relative">
        {/* Dot */}
        <div className="hidden md:flex justify-center">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full shadow-lg z-10"></div>
        </div>

        {/* Content */}
        <div className="mt-6 md:mt-10 bg-[var(--secondary)] p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">২০১৫</h3>
          <p className="opacity-85 leading-relaxed">
            শিবগঞ্জ থেকে আমাদের যাত্রা শুরু — মানসম্মত পণ্য সরবরাহের প্রতিজ্ঞা।
          </p>
        </div>
      </div>

      {/* ITEM 2 */}
      <div className="relative">
        <div className="hidden md:flex justify-center">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full shadow-lg z-10"></div>
        </div>

        <div className="mt-6 md:mt-10 bg-[var(--secondary)] p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">২০১৮</h3>
          <p className="opacity-85 leading-relaxed">
            আরও দুইটি নতুন শাখা — মানুষের ভালোবাসায় আমাদের অগ্রযাত্রা।
          </p>
        </div>
      </div>

      {/* ITEM 3 */}
      <div className="relative">
        <div className="hidden md:flex justify-center">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full shadow-lg z-10"></div>
        </div>

        <div className="mt-6 md:mt-10 bg-[var(--secondary)] p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">২০২২</h3>
          <p className="opacity-85 leading-relaxed">
            আধুনিক প্রযুক্তি ও নিরাপদ উৎপাদন—গুণগত মান আরও বৃদ্ধি।
          </p>
        </div>
      </div>

      {/* ITEM 4 */}
      <div className="relative">
        <div className="hidden md:flex justify-center">
          <div className="w-8 h-8 bg-[var(--primary)] rounded-full shadow-lg z-10"></div>
        </div>

        <div className="mt-6 md:mt-10 bg-[var(--secondary)] p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">বর্তমান</h3>
          <p className="opacity-85 leading-relaxed">
            সিলেটের ৫টি শাখায় প্রতিদিন তাজা বেকারি পণ্যের নিশ্চয়তা।
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


     

      {/* ------------------ BRANCHES WITH MAP ------------------ */}
     {/* ------------------ BRANCHES WITH GOOGLE REVIEWS ------------------ */}
<section className="max-w-6xl mx-auto mb-20">
  <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
    আমাদের শাখাসমূহ
  </h2>

  {/* Responsive Grid: 1 → 2 → 4 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {BRANCHES.map((branch) => (
      <div
        key={branch.name}
        className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
      >
        {/* Branch Image */}
        {/* <div className="w-full h-40 mb-4 rounded-lg overflow-hidden">
          <Image
            src={branch.img}
            alt={branch.name}
            width={500}
            height={350}
            className="w-full h-full object-cover"
          />
        </div> */}

        {/* Branch Info */}
        <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
        <p className="opacity-80 mb-1">📍 {branch.address}</p>
        <p className="font-semibold mb-4">📞 {branch.phone}</p>

        {/* If Widget ID Exists → Show Google Reviews */}
        {branch.reviewWidget ? (
          <div className="mt-4">
            <script src="https://elfsightcdn.com/platform.js" async></script>
            <div className={branch.reviewWidget} data-elfsight-app-lazy></div>
          </div>
        ) : (
          <div className="text-sm opacity-60 mt-4 text-center">
            (এই শাখার গুগল রিভিউ শীঘ্রই যুক্ত করা হবে)
          </div>
        )}
      </div>
    ))}
  </div>
</section>




       {/* ------------------ TEAM SECTION ------------------ */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
          আমাদের টিম
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-full h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="opacity-80">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ GALLERY SLIDER ------------------ */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-bold mb-8 border-l-4 pl-4 border-[var(--primary)] text-left">
          গ্যালারি
        </h2>

        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={gallery[slide]}
            alt="Gallery Image"
            fill
            className="object-cover"
          />

          {/* Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
          >
            ←
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full shadow"
          >
            →
          </button>
        </div>
      </section>


      {/* ------------------ CLOSING NOTE ------------------ */}
      <section className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">আপনাদের ভালোবাসাই আমাদের শক্তি</h2>
        <p className="text-lg opacity-85 leading-relaxed">
          প্রতিদিন আমরা আরও ভালো সেবা দেওয়ার চেষ্টা করি,  
          এবং আপনাদের আস্থা ও সন্তুষ্টিই আমাদের এগিয়ে যাওয়ার প্রধান অনুপ্রেরণা।
        </p>
      </section>

    </main>
  );
}
