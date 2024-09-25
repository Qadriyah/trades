import React from "react";
import { Kaushan_Script } from "next/font/google";
import Link from "next/link";

const KaushanScript = Kaushan_Script({
  subsets: ["latin"],
  display: "swap",
  style: "normal",
  weight: "400",
});

const CheckoutSuccess = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className={`${KaushanScript.className} text-7xl`}>Thank you</div>
      <div className={`${KaushanScript.className} text-7xl`}>
        For your order!
      </div>
      <div className="text-2xl my-10">
        Your support for our business is very much appreciated
      </div>
      <div>
        <Link
          href="/"
          className="hover:text-blue-600 underline hover:font-bold"
        >
          Back to shopping
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
