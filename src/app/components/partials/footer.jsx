import React from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaGlobe,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Özel Koru Hastanesi</h2>
          <p className="text-base">
            Kızılay Mah. 1450. Sok. No:13 06510
            <br />
            Çukurambar Çankaya, ANKARA
          </p>
        </div>

        <div className="flex flex-col gap-4 text-lg md:ml-8">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaPhoneAlt />
            <span>0312 911 77 77</span>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaEnvelope />
            <Link
              href="mailto:mehmet_sahintr@yahoo.com"
              className="hover:underline"
            >
              mehmet_sahintr@yahoo.com
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaInstagram />
            <Link
              href="https://www.instagram.com/dr.mehmet.sahin"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              dr.mehmet.sahin
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaCalendarAlt />
            <Link
              href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Doktor Takvimi
            </Link>
          </div>
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <FaGlobe />
            <Link
              href="https://www.doktorsitesi.com/op-dr-mehmet-sahin/goz-hastaliklari/ankara"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Doktor Sitesi
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-700 mt-8 pt-4">
        <p className="text-center text-white text-sm">
          © {new Date().getFullYear()} Mehmet Şahin. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
}
