import Link from "next/link";

export default function OrderSuccess() {
  return (
    <main className="px-6 md:px-16 py-24 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">

      {/* Centered Confirmation Box */}
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-10 text-center">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[var(--primary)] text-white flex items-center justify-center text-5xl shadow-lg">
          ✓
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          অর্ডার সফলভাবে সম্পন্ন হয়েছে!
        </h1>

        {/* Summary text */}
        <p className="text-lg opacity-80 leading-relaxed mb-6">
          ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।  
          আমাদের টিম খুব শীঘ্রই আপনার সাথে যোগাযোগ করবে এবং ডেলিভারি প্রস্তুত করবে।
        </p>

        {/* Order Info Card */}
        <div className="bg-[var(--secondary)] p-6 rounded-xl mb-8 text-left shadow-inner">
          <h3 className="text-xl font-bold mb-3">অর্ডারের তথ্য</h3>

          <p className="text-lg">
            <strong>অর্ডার আইডি:</strong> #Asha12345
          </p>
          <p className="text-lg">
            <strong>ডেলিভারি স্ট্যাটাস:</strong> প্রসেসিং
          </p>
          <p className="text-lg">
            <strong>অর্ডারের তারিখ:</strong> {new Date().toLocaleDateString("bn-BD")}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <Link
            href="/products"
            className="bg-[var(--primary)] text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-[#D78A69] transition"
          >
            আরও পণ্য দেখুন
          </Link>

          <Link
            href="/"
            className="border-2 border-[var(--primary)] text-[var(--text-dark)] px-6 py-3 rounded-xl text-lg font-semibold hover:bg-[var(--secondary)] transition"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
}
