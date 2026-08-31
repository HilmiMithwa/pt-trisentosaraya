"use client";
import tre_logo from "../public/tre_logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", path: "/" },
    { name: "Portofolio & Fasilitas", path: "/portofolio-fasilitas" },
    { name: "Layanan", path: "/layanan" },
    { name: "Galeri", path: "/galeri" },
  ];

  return (
    <>
      <nav className="flex justify-between">
        <div className="flex">
          {/* hamburger button buat yg mobile dulu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col gap-1.5 lg:hidden cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>

          {isOpen && (
            <div>
              <ul>
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Image src={tre_logo} alt="tre logo" className="w-[88px]" />
        </div>
        <button>
            Kontak
        </button>
      </nav>
    </>
  );
}
