"use client";

import { useState, ChangeEvent } from "react";

export default function OtpLogin() {
  const [step, setStep] = useState<"mobile" | "otp">("mobile");
  const [mobile, setMobile] = useState<string>("");
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  // handle OTP input change
  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // accept only digits

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);
  };

  return (
    <main className="px-6 md:px-16 py-24 bg-white text-[var(--text-dark)] font-[Noto_Sans_Bengali]">
      <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-10">

        {/* Step 1 — Enter Mobile Number */}
        {step === "mobile" && (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">লগইন করুন</h1>
            <p className="text-lg text-center opacity-80 mb-6">
              আপনার মোবাইল নাম্বার দিন। আমরা একটি OTP পাঠাবো।
            </p>

            <input
              type="text"
              placeholder="০১XXXXXXXXX"
              value={mobile}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg mb-6"
            />

            <button
              onClick={() => setStep("otp")}
              className="w-full bg-[var(--primary)] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#D78A69] transition"
            >
              OTP পাঠান
            </button>
          </>
        )}

        {/* Step 2 — OTP Input */}
        {step === "otp" && (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">
              OTP ভেরিফাই করুন
            </h1>

            <p className="text-center opacity-80 mb-4">
              যাচাইকরণের কোডটি পাঠানো হয়েছে:
              <strong className="text-[var(--primary)]"> {mobile}</strong>
            </p>

            {/* OTP Boxes */}
            <div className="flex justify-between mb-8">
              {[0, 1, 2, 3].map((i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={otp[i]}
                  onChange={(e) => handleOtpChange(e.target.value, i)}
                  className="w-16 h-16 text-center text-2xl border border-gray-300 rounded-xl focus:border-[var(--primary)] focus:outline-none"
                />
              ))}
            </div>

            {/* Buttons */}
            <button
              className="w-full bg-[var(--primary)] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#D78A69] transition mb-4"
            >
              ভেরিফাই করুন
            </button>

            <button
              onClick={() => setStep("mobile")}
              className="w-full text-[var(--primary)] underline text-lg"
            >
              মোবাইল নম্বর পরিবর্তন করুন
            </button>
          </>
        )}
      </div>
    </main>
  );
}
