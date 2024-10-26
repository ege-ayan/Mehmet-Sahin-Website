"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-black/60 text-white w-full py-6 backdrop-blur-md shadow-lg fixed z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="transition duration-300 hover:opacity-90">
              OP. DR. MEHMET ŞAHİN
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <Link
              href="/about"
              className={`${
                pathname === "/about" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`${
                pathname === "/contact" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              href="/video"
              className={`${
                pathname === "/video" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              Video
            </Link>
          </li>
        </ul>

        {/* Appointment Button */}
        <div className="hidden md:block">
          <Link href="/randevu">
            <button className="bg-yellow-300 text-blue-800 py-2 px-6 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300">
              RANDEVU AL
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden bg-blue-800/90 text-white space-y-4 px-4 py-6 backdrop-blur-md">
          <li>
            <Link
              href="/about"
              onClick={() => setNavOpen(false)}
              className={`block ${
                pathname === "/about" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              Hakkımda
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setNavOpen(false)}
              className={`block ${
                pathname === "/contact" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              İletişim
            </Link>
          </li>
          <li>
            <Link
              href="/video"
              onClick={() => setNavOpen(false)}
              className={`block ${
                pathname === "/video" ? "font-bold text-yellow-300" : ""
              } hover:text-yellow-300 transition duration-300`}
            >
              Video
            </Link>
          </li>
          <li>
            <Link href="/randevu" onClick={() => setNavOpen(false)}>
              <button className="bg-yellow-300 text-blue-800 w-full py-2 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300">
                RANDEVU AL
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
