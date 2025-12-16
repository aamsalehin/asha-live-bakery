// "use client";
// import { BRANCHES } from "@/data/branches";

// export default function BranchReviews() {
//   return (

// <section className="bg-[var(--light-bg)] py-24">
//       <div className="max-w-6xl mx-auto px-6 md:px-0">
//         <h2 className="text-3xl font-bold mb-10 border-l-4 pl-4 border-[var(--primary)]">
//         আমাদের শাখাসমূহ
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {BRANCHES.map((branch) => (
//           <div key={branch.name} className="bg-white shadow rounded-xl p-6">
//             <h3 className="text-xl font-bold mb-2">{branch.name}</h3>
//             <p className="opacity-80">📍 {branch.address}</p>
//             <p className="font-semibold mb-4">📞 {branch.phone}</p>

//             {branch.reviewWidget ? (
//               <div>
//                 <script src="https://elfsightcdn.com/platform.js" async />
//                 <div
//                   className={branch.reviewWidget}
//                   data-elfsight-app-lazy
//                 />
//               </div>
//             ) : (
//               <p className="text-sm opacity-60 text-center">
//                 (রিভিউ শীঘ্রই যুক্ত হবে)
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { BRANCHES } from "@/data/branches";
import { FaMapMarkerAlt, FaPhoneAlt, FaStar } from "react-icons/fa";

export default function BranchReviews() {
  return (
    <section className="bg-[var(--light-bg)] py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-0">

        {/* Section Heading */}
        <h2 className="text-3xl font-bold mb-14 border-l-4 pl-4 border-[var(--primary)] text-[var(--text-dark)]">
          আমাদের শাখাসমূহ
        </h2>

        {/* Branch Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANCHES.map((branch) => (
            <div
              key={branch.name}
              className="bg-white rounded-2xl shadow-md p-8  hover:shadow-xl transition"
            >
              {/* Branch Name */}
              <h3 className="text-xl text-center font-bold mb-4">
                {branch.name}
              </h3>

              {/* Address */}
              <div className="flex items-center justify-center gap-2 text-sm opacity-80 mb-2">
                <FaMapMarkerAlt className="text-[var(--primary)]" />
                <span>{branch.address}</span>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-center gap-2 text-sm font-semibold mb-6">
                <FaPhoneAlt className="text-[var(--primary)]" />
                <span>{branch.phone}</span>
              </div>

              {/* Divider */}
              <div className="w-16 h-1 bg-[var(--secondary)] mx-auto rounded-full mb-6"></div>

              {/* Google Reviews */}
             
 {/* {branch.reviewWidget ? (
              <div>
               <script src="https://elfsightcdn.com/platform.js" async />
              <div
              className={branch.reviewWidget}
              data-elfsight-app-lazy
                />
              </div>
            ) : (
              <p className="text-sm opacity-60 text-center">
                (রিভিউ শীঘ্রই যুক্ত হবে)
              </p>
            )} */}

            {/* review end  */}


            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
