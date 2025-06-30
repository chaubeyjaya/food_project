// app/success/page.js
"use client";
import React from "react";
import Link from "next/link";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">🎉 Booking Confirmed!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Thank you for booking a table with us. We look forward to serving you!
        </p>
        <Link
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
