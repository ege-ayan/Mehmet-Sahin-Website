import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function AddressCard() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-900 text-white rounded-lg shadow-lg p-6">
      <div className="text-center">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">
          Özel Koru Hastanesi
        </h2>
        <p className="text-lg lg:text-xl mb-4">
          Kızılay Mah. 1450. Sok. No:13 06510
          <br />
          Çukurambar Çankaya, ANKARA
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xl lg:text-2xl">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>444 6 662</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@koruhospital.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
