"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white w-full py-10">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">OP. DR. MEHMET ŞAHİN</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition duration-300"
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-gray-300 transition duration-300"
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              href="/video"
              className="hover:text-gray-300 transition duration-300"
            >
              Video
            </Link>
          </li>
        </ul>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <Link href="/randevu">
            <button className="bg-black text-white py-2 px-6 rounded-xl hover:bg-gray-800 transition duration-300">
              RANDEVU AL
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden  text-white space-y-4 px-4 py-6">
          <li>
            <Link
              href="/about"
              onClick={() => setNavOpen(false)}
              className="block hover:text-gray-300 transition duration-300"
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setNavOpen(false)}
              className="block hover:text-gray-300 transition duration-300"
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              href="/video"
              onClick={() => setNavOpen(false)}
              className="block hover:text-gray-300 transition duration-300"
            >
              Video
            </Link>
          </li>
          <li>
            <Link href="/randevu" onClick={() => setNavOpen(false)}>
              <button className="bg-black text-white w-full py-2 rounded-xl hover:bg-gray-800 transition duration-300">
                RANDEVU AL
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
