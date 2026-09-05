"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

export default function GallerySection() {
  const galleryCarousel = [
    "/homePageImage/automaticCarouselHome/image1.png",
    "/homePageImage/automaticCarouselHome/image2.png",
    "/homePageImage/automaticCarouselHome/image3.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryCarousel.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [galleryCarousel.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryCarousel.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryCarousel.length);
  };

  return (
    <>
      <section className="w-full text-white">
        <div className="flex flex-col gap-[32px]">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-4 md:gap-8 w-full">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-xl max-w-[500px] md:text-lg"
            >
              Bukti nyata dedikasi dan kualitas kami dalam menghadirkan solusi
              pengadaan barang serta jasa terpercaya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex justify-start md:justify-end"
            >
              <h2 className="border-l-4 md:border-l-0 md:border-r-4 border-[#990011] pl-[7px] pr-[7px] md:pr-[12px] md:pl-0 text-2xl font-semibold md:text-3xl text-left md:text-right">
                Galeri Kami
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#990011] flex items-center px-[60px] py-[3px] rounded-[4px] md:px-[196px] md:py-[10px] cursor-pointer"
            >
              <Link href="/galeri">
                <span className="text-xl">Lihat Semua</span>
              </Link>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col items-center gap-6 mt-4"
          >
            <div className="relative w-full max-w-[850px] flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-12 z-10 p-2 text-[#990011] hover:scale-110 transition-transform cursor-pointer"
                aria-label="Previous Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-8 h-8 md:w-10 md:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <div className="w-full h-[250px] sm:h-[350px] md:h-[420px] relative overflow-hidden rounded-[2px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={galleryCarousel[currentIndex]}
                      alt={`Gallery image ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-12 z-10 p-2 text-[#990011] hover:scale-110 transition-transform cursor-pointer"
                aria-label="Next Slide"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={4}
                  stroke="currentColor"
                  className="w-8 h-8 md:w-10 md:h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-3">
              {galleryCarousel.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === index
                      ? "w-3 bg-[#990011]"
                      : "w-3 bg-white/80 hover:bg-white"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
