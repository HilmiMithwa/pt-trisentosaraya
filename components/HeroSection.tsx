"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function HeroSection() {
  const heroSectionImage = [
    "/homePageImage/heroSectionImage/image1.jpeg",
    "/homePageImage/heroSectionImage/image2.jpeg",
    "/homePageImage/heroSectionImage/image3.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroSectionImage.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [heroSectionImage.length]);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-black">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroSectionImage[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              fill
              priority
              className="object-cover min-h-screen brightness-20"
            />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex flex-col md:items-center md:justify-center h-full md:text-center text-white px-6 pt-16 gap-[14px] md:pt-0 max-w-4xl mx-auto">
          <motion.h1 className="text-xl md:text-3xl">PT Trisentosa Raya Esolusi</motion.h1>
          <motion.p className="text-3xl font-medium leading-relaxed md:text-4xl">
            Memenuhi kebutuhan pelanggan dengan jasa dan produk berkualitas.
          </motion.p>
          <div className="flex gap-[16px]">
            <div className="bg-[#990011] flex px-[26px] py-[12px] gap-[2px] rounded-[2px]">
              <button className="text-base ">Layanan Kami</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 text-white font-medium">
                <span>Lihat Portofolio</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path
                    fill="none"
                    stroke="#990011"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="m8 4l8 8l-8 8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
