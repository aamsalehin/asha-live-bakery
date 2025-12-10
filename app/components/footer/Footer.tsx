'use client';
export default function Footer() {
  return (
    <footer className="bg-[var(--text-dark)] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">আশা লাইভ বেকারি</h2>
          <p className="text-sm leading-relaxed">
            তাজা ও মানসম্মত বেকারি আইটেমের নির্ভরযোগ্য ঠিকানা। প্রতিদিন লাইভ বেকিং
            এবং কাস্টম অর্ডার গ্রহণ করা হয়।
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">যোগাযোগ</h3>
          <p className="text-sm">মোবাইল: 01XXXXXXXXX</p>
          <p className="text-sm">ঠিকানা: সিলেট, বাংলাদেশ</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">কুইক লিংক</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-[var(--primary)] transition">হোম</a></li>
            <li><a href="#" className="hover:text-[var(--primary)] transition">পণ্যসমূহ</a></li>
            <li><a href="#" className="hover:text-[var(--primary)] transition">আমাদের সম্পর্কে</a></li>
            <li><a href="#" className="hover:text-[var(--primary)] transition">যোগাযোগ</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-sm opacity-80">
        © {new Date().getFullYear()} আশা লাইভ বেকারি — সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
}
