import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaGlobe } from "react-icons/fa";

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
        <div className="flex flex-col items-center justify-center gap-4 text-xl lg:text-2xl">
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>444 6 662</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a
              href="mailto:mehmet_sahintr@yahoo.com"
              className="hover:underline"
            >
              mehmet_sahintr@yahoo.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram />
            <a
              href="https://www.instagram.com/dr.mehmet.sahin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              dr.mehmet.sahin
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <a
              href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Doktor Takvimi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
