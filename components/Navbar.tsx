"use client";

import { motion, AnimatePresence, Variants } from "motion/react";
import tre_logo from "../public/tre_logo.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Beranda", href: "/" },
    { name: "Portofolio & Fasilitas", href: "/portofolio-fasilitas" },
    { name: "Layanan", href: "/layanan" },
    { name: "Galeri", href: "/galeri" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.25, ease: "easeInOut" },
        opacity: { duration: 0.15 },
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -12 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.25, ease: "easeOut" } 
    },
    exit: { opacity: 0, y: -8 },
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="flex items-center justify-between px-6 py-4 md:px-[48px] md:py-[24px] container mx-auto">

        <div className="flex items-center gap-3">

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center gap-1.5 lg:hidden cursor-pointer p-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-[#990011] transition-transform duration-300 origin-center ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#990011] transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-[#990011] transition-transform duration-300 origin-center ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </motion.button>

          <Link href="/" className="flex items-center">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Image src={tre_logo} alt="tre logo" className="w-[88px] h-auto md:w-[88px]" priority />
            </motion.div>
          </Link>
        </div>


        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-xl text-black hover:text-[#990011] transition-colors group py-1"
            >
              {item.name}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-[#990011] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>


        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/kontak"
            className="inline-block bg-[#990011] text-white px-[30px] py-[3px] rounded-[2px] font-medium hover:bg-[#990011]/80 transition-colors text-xl md:text-base md:px-[40px] md:py-[5px]"
          >
            Kontak
          </Link>
        </motion.div>
      </nav>


      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="overflow-hidden lg:hidden bg-[#1C1C1E]/95 backdrop-blur-xl border-b border-white/10 absolute top-full left-0 w-full"
          >
            <ul className="flex flex-col gap-3 px-6 py-5">
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-light text-white/90 hover:text-white transition-colors block py-2 border-b border-white/5"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}