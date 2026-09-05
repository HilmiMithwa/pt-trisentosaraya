"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function HeroSection() {
  const heroSectionImage = [
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
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl font-medium md:text-3xl"
          >
            Galeri dan Produk Kami
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl leading-relaxed md:text-2xl"
          >
            Eksplorasi ragam solusi unggulan yang kami rancang khusus untuk
            memenuhi kebutuhan spesifik Anda. Berbekal standar kualitas tinggi
            dan fokus pada performa terdepan, kami menghadirkan produk yang siap
            mendukung keberhasilan serta efisiensi operasional Anda.
          </motion.p>
        </div>
      </section>
    </>
  );
}
