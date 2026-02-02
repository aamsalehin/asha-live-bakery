// "use client";
// import { useState } from "react";

// export default function CheckoutPage() {
//   const [step, setStep] = useState("guest"); // guest → address

//   // Sample cart summary
//   const subtotal = 230;
//   const delivery = 50;
//   const total = subtotal + delivery;

//   return (
//     <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
      
//       <h1 className="text-4xl font-bold mb-10">চেকআউট</h1>

//       <div className="grid lg:grid-cols-3 gap-10">

//         {/* LEFT SIDE */}
//         <div className="lg:col-span-2 space-y-10">

//           {/* STEP 1: Guest Mobile Number */}
//           {step === "guest" && (
//             <div className="bg-white shadow-lg p-6 rounded-2xl">
//               <h2 className="text-2xl font-bold mb-4">মোবাইল নম্বর দিন</h2>
//               <p className="text-lg mb-6 opacity-80">
//                 OTP ছাড়া শুধু নম্বর দিয়েই অর্ডার করতে পারবেন।
//               </p>

//               <input
//                 type="text"
//                 placeholder="০১XXXXXXXXX"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
//               />

//               <button
//                 onClick={() => setStep("address")}
//                 className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full font-semibold text-lg hover:bg-[#D78A69] transition"
//               >
//                 পরবর্তী ধাপ
//               </button>
//             </div>
//           )}

//           {/* STEP 2: Address + Delivery Info */}
//           {step === "address" && (
//             <div className="bg-white shadow-lg p-6 rounded-2xl space-y-6">
//               <h2 className="text-2xl font-bold mb-4">ডেলিভারি তথ্য</h2>

//               {/* Name */}
//               <div>
//                 <label className="block mb-2 font-semibold">নাম</label>
//                 <input
//                   type="text"
//                   placeholder="আপনার নাম"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3"
//                 />
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="block mb-2 font-semibold">ঠিকানা</label>
//                 <textarea
//                   placeholder="সম্পূর্ণ ঠিকানা লিখুন"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28"
//                 ></textarea>
//               </div>

//               {/* Delivery Area */}
//               <div>
//                 <label className="block mb-2 font-semibold">
//                   ডেলিভারি এরিয়া
//                 </label>
//                 <select className="w-full border border-gray-300 rounded-lg px-4 py-3">
//                   <option>সিলেট শহর</option>
//                   <option>সাবার্ব</option>
//                 </select>
//               </div>

//               {/* Payment Method */}
//               <div>
//                 <h3 className="text-xl font-bold mb-2">পেমেন্ট মেথড</h3>

//                 <div className="p-4 border rounded-lg flex items-center gap-4 bg-[var(--secondary)]">
//                   <input type="radio" defaultChecked />
//                   <span className="text-lg">ক্যাশ অন ডেলিভারি (COD)</span>
//                 </div>
//               </div>

//               <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full font-semibold text-lg hover:bg-[#D78A69] transition">
//                 অর্ডার নিশ্চিত করুন
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE — Order Summary */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 h-fit sticky top-24">
//           <h2 className="text-2xl font-bold mb-6">অর্ডার সারাংশ</h2>

//           <div className="text-lg space-y-3">
//             <div className="flex justify-between">
//               <span>সাবটোটাল:</span>
//               <span>{subtotal} BDT</span>
//             </div>

//             <div className="flex justify-between">
//               <span>ডেলিভারি চার্জ:</span>
//               <span>{delivery} BDT</span>
//             </div>

//             <hr className="my-4" />

//             <div className="flex justify-between text-xl font-bold">
//               <span>মোট:</span>
//               <span>{total} BDT</span>
//             </div>
//           </div>

//           <button
//             onClick={() => setStep(step === "guest" ? "address" : step)}
//             className="mt-6 w-full bg-[var(--primary)] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#D78A69] transition md:hidden"
//           >
//             অর্ডার নিশ্চিত করুন
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// "use client";

// import { useState } from "react";
// import { useCartStore } from "../../components/store/useCartStore";
// import Link from "next/link";

// export default function CheckoutPage() {
//   const [step, setStep] = useState("guest");

//   // ✔ Get cart and totals from Zustand
//   const cart = useCartStore((state) => state.cart);

//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.qty,
//     0
//   );

//   const delivery = cart.length > 0 ? 50 : 0;
//   const total = subtotal + delivery;

//   return (
//     <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
      
//       <h1 className="text-4xl font-bold mb-10">চেকআউট</h1>

//       {cart.length === 0 && (
//         <div className="text-center text-xl py-20">
//           আপনার কার্ট খালি।  
//           <Link href="/products" className="text-[var(--primary)] underline ml-2">
//             পণ্যসমূহ দেখুন
//           </Link>
//         </div>
//       )}

//       <div className="grid lg:grid-cols-3 gap-10">

//         {/* LEFT SIDE */}
//         <div className="lg:col-span-2 space-y-10">

//           {/* STEP 1 */}
//           {step === "guest" && (
//             <div className="bg-white shadow-lg p-6 rounded-2xl">
//               <h2 className="text-2xl font-bold mb-4">মোবাইল নম্বর দিন</h2>

//               <p className="text-lg mb-6 opacity-80">
//                 OTP ছাড়া শুধু নম্বর দিয়েই অর্ডার করতে পারবেন।
//               </p>

//               <input
//                 type="text"
//                 placeholder="০১XXXXXXXXX"
//                 className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
//               />

//               <button
//                 onClick={() => setStep("address")}
//                 className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#D78A69] transition"
//               >
//                 পরবর্তী ধাপ
//               </button>
//             </div>
//           )}

//           {/* STEP 2 */}
//           {step === "address" && (
//             <div className="bg-white shadow-lg p-6 rounded-2xl space-y-6">
//               <h2 className="text-2xl font-bold mb-4">ডেলিভারি তথ্য</h2>

//               {/* Name */}
//               <div>
//                 <label className="block mb-2 font-semibold">নাম</label>
//                 <input
//                   type="text"
//                   placeholder="আপনার নাম"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3"
//                 />
//               </div>

//               {/* Address */}
//               <div>
//                 <label className="block mb-2 font-semibold">ঠিকানা</label>
//                 <textarea
//                   placeholder="সম্পূর্ণ ঠিকানা লিখুন"
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28"
//                 ></textarea>
//               </div>

//               {/* Payment */}
//               <div>
//                 <h3 className="text-xl font-bold mb-2">পেমেন্ট মেথড</h3>

//                 <div className="p-4 border rounded-lg flex items-center gap-4 bg-[var(--secondary)]">
//                   <input type="radio" defaultChecked />
//                   <span className="text-lg">ক্যাশ অন ডেলিভারি (COD)</span>
//                 </div>
//               </div>

//               <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#D78A69] transition">
//                 অর্ডার নিশ্চিত করুন
//               </button>
//             </div>
//           )}
//         </div>

//         {/* RIGHT SIDE — SUMMARY */}
//         <div className="bg-white shadow-lg rounded-2xl p-6 h-fit sticky top-24">

//           <h2 className="text-2xl font-bold mb-6">অর্ডার সারাংশ</h2>

//           <div className="text-lg space-y-3">

//             <div className="flex justify-between">
//               <span>সাবটোটাল:</span>
//               <span>{subtotal} BDT</span>
//             </div>

//             <div className="flex justify-between">
//               <span>ডেলিভারি চার্জ:</span>
//               <span>{delivery} BDT</span>
//             </div>

//             <hr className="my-4" />

//             <div className="flex justify-between text-xl font-bold">
//               <span>মোট:</span>
//               <span>{total} BDT</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }



//dynamic checkout page 


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useCartStore } from "../store/useCartStore";

// export default function CheckoutPage() {
//   const router = useRouter();

//   const cart = useCartStore((state) => state.cart);
//   const subtotal = useCartStore((state) => state.subtotal()); // ✅ FIX
//   const clearCart = useCartStore((state) => state.clearCart); // ✅ EXISTS

//   const deliveryCharge = cart.length > 0 ? 50 : 0;
//   const total = subtotal + deliveryCharge;

//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);

//   const placeOrder = async () => {
//     if (!phone || !address) {
//       alert("মোবাইল নম্বর ও ঠিকানা আবশ্যক");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("আপনার কার্ট খালি");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           phone,
//           name,
//           address,
//           items: cart,
//           subtotal,
//           deliveryCharge,
//           total,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.orderId) {
//         throw new Error("Order failed");
//       }

//       clearCart();
//       router.push(`/order-success?orderId=${data.orderId}`);
//     } catch (error) {
//       alert("❌ অর্ডার সম্পন্ন করা যায়নি");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
//       <h1 className="text-4xl font-bold mb-10">চেকআউট</h1>

//       <input
//         placeholder="মোবাইল নম্বর"
//         className="w-full mb-4 border p-3 rounded-lg"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />

//       <input
//         placeholder="নাম (ঐচ্ছিক)"
//         className="w-full mb-4 border p-3 rounded-lg"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <textarea
//         placeholder="ঠিকানা"
//         className="w-full mb-6 border p-3 rounded-lg h-28"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//       />

//       <div className="mb-6 text-lg space-y-2">
//         <div className="flex justify-between">
//           <span>সাবটোটাল</span>
//           <span>{subtotal} টাকা</span>
//         </div>
//         <div className="flex justify-between">
//           <span>ডেলিভারি চার্জ</span>
//           <span>{deliveryCharge} টাকা</span>
//         </div>
//         <div className="flex justify-between font-bold text-xl">
//           <span>মোট</span>
//           <span>{total} টাকা</span>
//         </div>
//       </div>

//       <button
//         onClick={placeOrder}
//         disabled={loading}
//         className="bg-[var(--primary)] text-white py-4 rounded-xl w-full text-lg font-semibold hover:bg-[#D78A69] transition disabled:opacity-60"
//       >
//         {loading ? "অর্ডার হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
//       </button>
//     </main>
//   );
// }




// dynamic version updated 


// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useCartStore } from "../store/useCartStore";

// export default function CheckoutPage() {
//   const router = useRouter();

//   // ---- Zustand ----
//   const cart = useCartStore((state) => state.cart);
//   const subtotal = useCartStore((state) => state.subtotal());
//   const clearCart = useCartStore((state) => state.clearCart);

//   const delivery = cart.length > 0 ? 50 : 0;
//   const total = subtotal + delivery;

//   // ---- UI State ----
//   const [step, setStep] = useState<"guest" | "address">("guest");
//   const [phone, setPhone] = useState("");
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ---- Order Submit ----
//   const placeOrder = async () => {
//     if (!phone || !address) {
//       alert("মোবাইল নম্বর ও ঠিকানা আবশ্যক");
//       return;
//     }

//     if (cart.length === 0) {
//       alert("আপনার কার্ট খালি");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await fetch("/api/order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           phone,
//           name,
//           address,
//           items: cart,
//           subtotal,
//           deliveryCharge: delivery,
//           total,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok || !data.orderId) {
//         throw new Error("Order failed");
//       }

//       clearCart();
//       router.push(`/order-success?orderId=${data.orderId}`);
//     } catch (err) {
//       alert("❌ অর্ডার সম্পন্ন করা যায়নি, আবার চেষ্টা করুন");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <main className="px-6 md:px-16 py-24 bg-white font-[Noto_Sans_Bengali] text-[var(--text-dark)]">
//       <h1 className="text-4xl font-bold mb-10">চেকআউট</h1>

//       {/* EMPTY CART */}
//       {cart.length === 0 && (
//         <div className="text-center text-xl py-20">
//           আপনার কার্ট খালি।
//           <Link
//             href="/products"
//             className="text-[var(--primary)] underline ml-2"
//           >
//             পণ্যসমূহ দেখুন
//           </Link>
//         </div>
//       )}

//       {cart.length > 0 && (
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* LEFT */}
//           <div className="lg:col-span-2 space-y-10">
//             {/* STEP 1 */}
//             {step === "guest" && (
//               <div className="bg-white shadow-lg p-6 rounded-2xl">
//                 <h2 className="text-2xl font-bold mb-4">
//                   মোবাইল নম্বর দিন
//                 </h2>

//                 <p className="text-lg mb-6 opacity-80">
//                   OTP ছাড়া শুধু নম্বর দিয়েই অর্ডার করতে পারবেন।
//                 </p>

//                 <input
//                   type="text"
//                   placeholder="০১XXXXXXXXX"
//                   value={phone}
//                   onChange={(e) => setPhone(e.target.value)}
//                   className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4"
//                 />

//                 <button
//                   onClick={() => setStep("address")}
//                   className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#D78A69] transition"
//                 >
//                   পরবর্তী ধাপ
//                 </button>
//               </div>
//             )}

//             {/* STEP 2 */}
//             {step === "address" && (
//               <div className="bg-white shadow-lg p-6 rounded-2xl space-y-6">
//                 <h2 className="text-2xl font-bold mb-4">
//                   ডেলিভারি তথ্য
//                 </h2>

//                 {/* Name */}
//                 <div>
//                   <label className="block mb-2 font-semibold">
//                     নাম
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="আপনার নাম"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3"
//                   />
//                 </div>

//                 {/* Address */}
//                 <div>
//                   <label className="block mb-2 font-semibold">
//                     ঠিকানা
//                   </label>
//                   <textarea
//                     placeholder="সম্পূর্ণ ঠিকানা লিখুন"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-3 h-28"
//                   />
//                 </div>

//                 {/* Payment */}
//                 <div>
//                   <h3 className="text-xl font-bold mb-2">
//                     পেমেন্ট মেথড
//                   </h3>
//                   <div className="p-4 border rounded-lg flex items-center gap-4 bg-[var(--secondary)]">
//                     <input type="radio" checked readOnly />
//                     <span className="text-lg">
//                       ক্যাশ অন ডেলিভারি (COD)
//                     </span>
//                   </div>
//                 </div>

//                 <button
//                   onClick={placeOrder}
//                   disabled={loading}
//                   className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg w-full text-lg font-semibold hover:bg-[#D78A69] transition disabled:opacity-60"
//                 >
//                   {loading ? "অর্ডার হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* RIGHT — SUMMARY */}
//           <div className="bg-white shadow-lg rounded-2xl p-6 h-fit sticky top-24">
//             <h2 className="text-2xl font-bold mb-6">
//               অর্ডার সারাংশ
//             </h2>

//             <div className="text-lg space-y-3">
//               <div className="flex justify-between">
//                 <span>সাবটোটাল:</span>
//                 <span>{subtotal} টাকা</span>
//               </div>

//               <div className="flex justify-between">
//                 <span>ডেলিভারি চার্জ:</span>
//                 <span>{delivery} টাকা</span>
//               </div>

//               <hr className="my-4" />

//               <div className="flex justify-between text-xl font-bold">
//                 <span>মোট:</span>
//                 <span>{total} টাকা</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }



"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCartStore } from "../store/useCartStore";

export default function CheckoutPage() {
  const router = useRouter();

  // ---- Zustand ----
  const cart = useCartStore((state) => state.cart);
  const subtotal = useCartStore((state) => state.subtotal());
  const clearCart = useCartStore((state) => state.clearCart);

  const delivery = cart.length > 0 ? 50 : 0;
  const total = subtotal + delivery;

  // ---- UI State ----
  const [step, setStep] = useState<"guest" | "address">("guest");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // ---- Order Submit ----
  const placeOrder = async () => {
    if (!phone || !address) {
      alert("মোবাইল নম্বর ও ঠিকানা আবশ্যক");
      return;
    }

    if (cart.length === 0) {
      alert("আপনার কার্ট খালি");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          name,
          address,
          items: cart,
          subtotal,
          deliveryCharge: delivery,
          total,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.orderId) {
        throw new Error("Order failed");
      }

      clearCart();
      router.push(`/order-success?orderId=${data.orderId}`);
    } catch {
      alert("❌ অর্ডার সম্পন্ন করা যায়নি, আবার চেষ্টা করুন");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="px-6 md:px-16 py-24
      landing-bg
      text-[var(--text-primary)]
      font-[Noto_Sans_Bengali]"
    >
      <h1 className="text-4xl font-bold mb-10">চেকআউট</h1>

      {/* EMPTY CART */}
      {cart.length === 0 && (
        <div className="text-center text-xl py-20 text-[var(--text-muted)]">
          আপনার কার্ট খালি।
          <Link
            href="/products"
            className="text-[var(--primary)] underline ml-2"
          >
            পণ্যসমূহ দেখুন
          </Link>
        </div>
      )}

      {cart.length > 0 && (
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-10">

            {/* STEP 1 */}
            {step === "guest" && (
              <div
                className="p-6 rounded-2xl
                bg-[var(--bg-card)]
                border border-[var(--border-soft)]
                shadow-[var(--shadow-soft)]"
              >
                <h2 className="text-2xl font-bold mb-4">
                  মোবাইল নম্বর দিন
                </h2>

                <p className="text-lg mb-6 text-[var(--text-secondary)]">
                  OTP ছাড়া শুধু নম্বর দিয়েই অর্ডার করতে পারবেন।
                </p>

                <input
                  type="text"
                  placeholder="০১XXXXXXXXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg px-4 py-3 mb-4
                  bg-[var(--bg-main)]
                  border border-[var(--border-soft)]
                  focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />

                <button
                  onClick={() => setStep("address")}
                  className="w-full px-6 py-3 rounded-lg text-lg font-semibold text-white
                  bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                  hover:opacity-95 transition"
                >
                  পরবর্তী ধাপ
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === "address" && (
              <div
                className="p-6 rounded-2xl space-y-6
                bg-[var(--bg-card)]
                border border-[var(--border-soft)]
                shadow-[var(--shadow-soft)]"
              >
                <h2 className="text-2xl font-bold">
                  ডেলিভারি তথ্য
                </h2>

                {/* Name */}
                <div>
                  <label className="block mb-2 font-semibold">
                    নাম
                  </label>
                  <input
                    type="text"
                    placeholder="আপনার নাম"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg px-4 py-3
                    bg-[var(--bg-main)]
                    border border-[var(--border-soft)]"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block mb-2 font-semibold">
                    ঠিকানা
                  </label>
                  <textarea
                    placeholder="সম্পূর্ণ ঠিকানা লিখুন"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full rounded-lg px-4 py-3 h-28
                    bg-[var(--bg-main)]
                    border border-[var(--border-soft)]"
                  />
                </div>

                {/* Payment */}
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    পেমেন্ট মেথড
                  </h3>
                  <div
                    className="p-4 rounded-lg flex items-center gap-4
                    bg-[var(--bg-soft)]
                    border border-[var(--border-soft)]"
                  >
                    <input type="radio" checked readOnly />
                    <span className="text-lg">
                      ক্যাশ অন ডেলিভারি (COD)
                    </span>
                  </div>
                </div>

                <button
                  onClick={placeOrder}
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-lg text-lg font-semibold text-white
                  bg-gradient-to-r from-[var(--accent)] to-[var(--primary)]
                  hover:opacity-95 transition disabled:opacity-60"
                >
                  {loading ? "অর্ডার হচ্ছে..." : "অর্ডার নিশ্চিত করুন"}
                </button>
              </div>
            )}
          </div>

          {/* RIGHT — SUMMARY */}
          <div
            className="p-6 rounded-2xl h-fit sticky top-24
            bg-[var(--bg-card)]
            border border-[var(--border-soft)]
            shadow-[var(--shadow-soft)]"
          >
            <h2 className="text-2xl font-bold mb-6">
              অর্ডার সারাংশ
            </h2>

            <div className="text-lg space-y-3">
              <div className="flex justify-between">
                <span>সাবটোটাল</span>
                <span>{subtotal} টাকা</span>
              </div>

              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ</span>
                <span>{delivery} টাকা</span>
              </div>

              <hr className="my-4 border-[var(--border-soft)]" />

              <div className="flex justify-between text-xl font-bold">
                <span>মোট</span>
                <span>{total} টাকা</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
