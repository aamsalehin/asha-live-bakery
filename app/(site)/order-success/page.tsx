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

// import Link from "next/link";

// type OrderSuccessPageProps = {
//   searchParams: Promise<{
//     orderId?: string;
//   }>;
// };

// export default async function OrderSuccessPage({
//   searchParams,
// }: OrderSuccessPageProps) {
//   const { orderId } = await searchParams;

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



import Link from "next/link";

type OrderSuccessPageProps = {
  searchParams: Promise<{
    orderId?: string;
  }>;
};

export default async function OrderSuccessPage({
  searchParams,
}: OrderSuccessPageProps) {
  const { orderId } = await searchParams;

  return (
    <main
      className="py-32 text-center
      bg-[var(--bg-main)]
      text-[var(--text-primary)]
      font-[Noto_Sans_Bengali]"
    >
      <div
        className="max-w-xl mx-auto p-10 rounded-2xl
        bg-[var(--bg-card)]
        border border-[var(--border-soft)]
        shadow-[var(--shadow-soft)]"
      >
        <h1 className="text-4xl font-bold text-[var(--primary)] mb-4">
          🎉 অর্ডার সফল!
        </h1>

        <p className="mb-6 text-[var(--text-secondary)]">
          আপনার অর্ডার সফলভাবে গ্রহণ করা হয়েছে।
        </p>

        {orderId && (
          <p className="font-semibold mb-6">
            অর্ডার আইডি:{" "}
            <span className="text-[var(--accent)]">
              {orderId}
            </span>
          </p>
        )}

        <Link
          href="/"
          className="
            inline-block px-8 py-3 rounded-xl font-semibold text-white
            bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
            hover:opacity-95 transition
          "
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    </main>
  );
}
