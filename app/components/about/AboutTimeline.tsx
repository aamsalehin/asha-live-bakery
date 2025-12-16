// export default function AboutTimeline() {
//   return (
//     <section className="bg-white py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-0">
//         <h2 className="text-3xl font-bold mb-12 border-l-4 pl-4 border-[var(--primary)]">
//         আমাদের যাত্রার গল্প
//       </h2>

//       <div className="relative">
//         <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[var(--primary)]/30 rounded-full" />

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
//           {[
//             { year: "২০১৫", text: "শিবগঞ্জ থেকে আমাদের যাত্রা শুরু" },
//             { year: "২০১৮", text: "নতুন দুইটি শাখা উদ্বোধন" },
//             { year: "২০২২", text: "আধুনিক প্রযুক্তি সংযোজন" },
//             { year: "বর্তমান", text: "সিলেট জুড়ে ৫টি শাখা" },
//           ].map((item) => (
//             <div key={item.year} className="relative">
//               <div className="hidden md:flex justify-center">
//                 <div className="w-8 h-8 bg-[var(--primary)] rounded-full shadow-lg z-10" />
//               </div>

//               <div className="mt-6 md:mt-10 bg-[var(--secondary)] p-6 rounded-xl shadow">
//                 <h3 className="text-xl font-semibold mb-2">{item.year}</h3>
//                 <p className="opacity-85">{item.text}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       </div>
//     </section>
//   );
// }




// "use client";

// import { Calendar, Store, Cpu, MapPin } from "lucide-react";

// const TIMELINE = [
//   {
//     year: "২০১৫",
//     text: "শিবগঞ্জ থেকে আমাদের যাত্রা শুরু",
//     icon: Store,
//   },
//   {
//     year: "২০১৮",
//     text: "নতুন দুইটি শাখা উদ্বোধন",
//     icon: MapPin,
//   },
//   {
//     year: "২০২২",
//     text: "আধুনিক প্রযুক্তি সংযোজন",
//     icon: Cpu,
//   },
//   {
//     year: "বর্তমান",
//     text: "সিলেট জুড়ে ৫টি শাখা",
//     icon: Calendar,
//   },
// ];

// export default function AboutTimeline() {
//   return (
//     <section className="bg-[var(--light-bg)] py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-0">
//         <h2 className="text-3xl font-bold mb-50 border-l-4 pl-4 border-[var(--primary)]">
//           আমাদের যাত্রার গল্প
//         </h2>

//         {/* Timeline Wrapper */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[var(--primary)]/20" />

//           {/* Timeline Items */}
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-16 text-center">

//             {TIMELINE.map((item, index) => {
//               const Icon = item.icon;
//               const isTop = index % 2 === 0;

//               return (
//                 <div key={item.year} className="relative flex flex-col items-center">

//                   {/* Card (top or bottom) */}
//                   <div
//                     className={`bg-white p-6 rounded-2xl shadow-md max-w-xs transition
//                     ${isTop ? "md:-translate-y-24" : "md:translate-y-24"}`}
//                   >
//                     <h3 className="text-xl font-bold mb-2">{item.year}</h3>
//                     <p className="opacity-80 leading-relaxed">{item.text}</p>
//                   </div>

//                   {/* Connector */}
//                   <div className="hidden md:block w-[2px] h-10 bg-[var(--primary)]/30 my-3" />

//                   {/* Icon Node */}
//                   <div className="w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg z-10">
//                     <Icon size={22} />
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Store, MapPin, Cpu, Calendar } from "lucide-react";

const timeline = [
  {
    year: "২০১৫",
    text: "শিবগঞ্জ থেকে আশা লাইভ বেকারির যাত্রা শুরু",
    icon: Store,
  },
  {
    year: "২০১৮",
    text: "মানুষের ভালোবাসায় নতুন দুইটি শাখা উদ্বোধন",
    icon: MapPin,
  },
  {
    year: "২০২২",
    text: "আধুনিক প্রযুক্তি সংযোজন ও উৎপাদন উন্নয়ন",
    icon: Cpu,
  },
  {
    year: "বর্তমান",
    text: "সিলেট জুড়ে সফলভাবে ৫টি শাখা পরিচালনা",
    icon: Calendar,
  },
];

export default function AboutTimeline() {
  return (
    <section className="bg-white py-28 md:pb-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 md:mb-50 border-l-4 pl-4 border-[var(--primary)]">
          আমাদের যাত্রার গল্প
        </h2>

        {/* Timeline */}
        <div className="relative hidden md:block">

          {/* Center Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-[var(--primary)]/30" />

          <div className="grid grid-cols-4 gap-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isTop = index % 2 === 0;

              return (
                <div key={item.year} className="relative flex flex-col items-center">

                  {/* TOP CARD */}
                  {isTop && (
                    <div className="bg-white px-6 py-5 rounded-2xl shadow-md text-center w-64 -translate-y-32">
                      <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  )}

                  {/* ICON */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-[var(--primary)] text-white rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* BOTTOM CARD */}
                  {!isTop && (
                    <div className="bg-white px-6 py-5 rounded-2xl shadow-md text-center w-64 translate-y-32">
                      <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.text}</p>
                    </div>
                  )}

                </div>
              );
            })}
          </div>
        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden space-y-10">
          {timeline.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{item.year}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
