"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const [showNavbar, setShowNavbar] = useState(true);

  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos.current > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return pathname === path ? "text-blue-400 font-bold" : "text-white";
  };

  return (
    <nav
      className={`w-full bg-black/70 z-50 border-b border-b-[#343434] transition-transform duration-300 backdrop-blur-lg py-3 shadow-lg ${
        showNavbar ? "fixed top-0 translate-y-0" : "absolute -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        <Link href="/">
          <div className="flex flex-col items-center cursor-pointer">
            <span className=" text-2xl lg:text-3xl font-bold text-white transition duration-300 hover:opacity-90">
              OP. DR. MEHMET ŞAHİN
            </span>
            <div className="border-t-2 border-blue-300 mt-1 w-full" />
            <span className="text-xs lg:text-sm text-blue-300 mt-1">
              KATARAKT VE REFRAKTİF CERRAHİSİ (EXCIMER LASER)
            </span>
          </div>
        </Link>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-white w-8 h-8" />
            ) : (
              <FiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        <div className="hidden lg:flex justify-around text-white gap-12 font-semibold ">
          <div className="text-center">
            <Link
              href="/about"
              className={`transition-all duration-300 ease-in-out hover:text-blue-400 ${isActive(
                "/about"
              )}`}
            >
              HAKKIMDA
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className={`transition-all duration-300 ease-in-out hover:text-blue-400 ${isActive(
                "/contact"
              )}`}
            >
              İLETİŞİM
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className={`transition-all duration-300 ease-in-out hover:text-blue-400  ${isActive(
                "/gallery"
              )}`}
            >
              GALERİ
            </Link>
          </div>
        </div>

        <Link
          href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
          target="_blank"
          onClick={() => setIsOpen(false)}
          className="hidden lg:flex rounded-[40px] px-5 py-3 text-center transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            background:
              "linear-gradient(225deg, #3B82F6 14.89%, #1E40AF 85.85%)", // Blue gradient
          }}
        >
          <p className="font-semibold text-sm text-white">RANDEVU AL</p>
        </Link>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } lg:hidden text-white border-t-2 border-t-[#323232]`}
        style={{ backgroundColor: "hsla(0, 0%, 9%, 0.4)" }}
      >
        <div className="flex flex-col items-center gap-5 py-5">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-blue-400 ${isActive(
              "/about"
            )}`}
          >
            Hakkılga
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-blue-400 ${isActive(
              "/contact"
            )}`}
          >
            İletişim
          </Link>
          <Link
            href="/video"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-blue-950 ${isActive(
              "/video"
            )}`}
          >
            Video
          </Link>

          <Link
            href="https://www.doktortakvimi.com/mehmet-sahin-2/goz-hastaliklari/ankara"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="rounded-[40px] px-5 py-3 text-center transition-all duration-300 ease-in-out"
            style={{
              background:
                "linear-gradient(225deg, #3B82F6 14.89%, #1E40AF 85.85%)", // Blue gradient
            }}
          >
            <p className="font-semibold text-sm text-white">RANDEVU AL</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
