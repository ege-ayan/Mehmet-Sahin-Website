"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // State to manage navbar visibility
  const [showNavbar, setShowNavbar] = useState(true);

  // Ref to store previous scroll position
  const prevScrollPos = useRef(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos.current > currentScrollPos) {
        // User is scrolling up
        setShowNavbar(true);
      } else {
        // User is scrolling down
        setShowNavbar(false);
      }

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => {
    return pathname === path ? "text-yellow-300 font-bold" : "text-white";
  };

  return (
    <nav
      className={`w-full bg-black/70 z-50 border-b border-b-[#343434] transition-transform duration-300 backdrop-blur-md py-3 shadow-lg ${
        showNavbar ? "fixed top-0 translate-y-0" : "absolute -translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center h-20 px-5">
        {/* Logo that links to the home page */}
        <Link href="/">
          <div className="flex flex-col items-center cursor-pointer">
            <span className=" text-2xl md:text-3xl font-bold text-white transition duration-300 hover:opacity-90">
              OP. DR. MEHMET ŞAHİN
            </span>
            <div className="border-t-2 border-blue-300 mt-1 w-full" />
            <span className="text-xs md:text-sm text-blue-300 mt-1">
              KATARAKT VE REFRAKTİF CERRAHİSİ (EXCIMER LASER)
            </span>
          </div>
        </Link>

        {/* Hamburger Menu Icon (Visible on small screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-white w-8 h-8" />
            ) : (
              <FiMenu className="text-white w-8 h-8" />
            )}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex justify-around text-white gap-12 font-semibold ">
          <div className="text-center">
            <Link
              href="/about"
              className={`transition-all duration-300 ease-in-out hover:text-yellow-300 ${isActive(
                "/about"
              )}`}
            >
              HAKKIMDA
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className={`transition-all duration-300 ease-in-out hover:text-yellow-300 ${isActive(
                "/contact"
              )}`}
            >
              İLETİŞİM
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className={`transition-all duration-300 ease-in-out hover:text-yellow-300 ${isActive(
                "/gallery"
              )}`}
            >
              GALERİ
            </Link>
          </div>
        </div>

        {/* Appointment Button for larger screens */}
        <Link
          href="/randevu"
          className="hidden md:flex rounded-[40px] px-5 py-3 text-center transition-all duration-300 ease-in-out hover:scale-105"
          style={{
            background:
              "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)",
          }}
        >
          <p className="font-semibold text-sm text-white">RANDEVU AL</p>
        </Link>
      </div>

      {/* Mobile Menu (Visible when open) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden text-white border-t-2 border-t-[#323232]`}
        style={{ backgroundColor: "hsla(0, 0%, 9%, 0.4)" }}
      >
        <div className="flex flex-col items-center gap-5 py-5">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-yellow-300 ${isActive(
              "/about"
            )}`}
          >
            Hakkımda
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-yellow-300 ${isActive(
              "/contact"
            )}`}
          >
            İletişim
          </Link>
          <Link
            href="/video"
            onClick={() => setIsOpen(false)}
            className={`transition-all duration-300 ease-in-out hover:font-bold hover:text-yellow-300 ${isActive(
              "/video"
            )}`}
          >
            Video
          </Link>

          <Link
            href="/randevu"
            onClick={() => setIsOpen(false)}
            className="rounded-[40px] px-5 py-3 text-center transition-all duration-300 ease-in-out"
            style={{
              background:
                "linear-gradient(225deg, #FBB040 14.89%, #F15A29 85.85%)",
            }}
          >
            <p className="font-semibold text-sm text-white">RANDEVU AL</p>
          </Link>
        </div>
      </div>
    </nav>
  );
}
