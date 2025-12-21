// "use client";

// import Link from "next/link";
// import { useSearchParams } from "next/navigation";

// export default function OrderSuccessPage() {
//   const searchParams = useSearchParams();
//   const orderId = searchParams.get("orderId");

//   return (
//     <main className="py-32 text-center bg-[var(--light-bg)] font-[Noto_Sans_Bengali]">
//       <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-10">
//         <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
//           🎉 অর্ডার সফল!
//         </h1>

//         <p className="mb-6 opacity-80">
//           আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।
//         </p>

//         {orderId && (
//           <p className="font-semibold mb-6">
//             অর্ডার আইডি: {orderId}
//           </p>
//         )}

//         <Link
//           href="/"
//           className="inline-block bg-[var(--primary)] text-white px-8 py-3 rounded-xl"
//         >
//           হোম পেজে ফিরে যান
//         </Link>
//       </div>
//     </main>
//   );
// }
