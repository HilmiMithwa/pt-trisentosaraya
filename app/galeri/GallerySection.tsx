"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { GalleryItem } from "@/lib/getGallery";

interface GallerySectionProps {
  initialItems: GalleryItem[];
}

export default function GallerySection({ initialItems }: GallerySectionProps) {
  const categories = [
    "Semua",
    "Jig and Mold",
    "Fabrication",
    "Precision Part",
    "Part Automotif & electronic",
    "Stamping & CNC part",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredItems =
    selectedCategory === "Semua"
      ? initialItems
      : initialItems.filter((item) => item.category === selectedCategory);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  return (
    <main className="w-full min-h-screen bg-[#0f0f0f] text-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-[2px] text-sm md:text-base font-medium transition-all duration-200 border ${
                selectedCategory === category
                  ? "bg-[#990011] text-white border-[#990011] shadow-md"
                  : "bg-white/5 text-white/70 border-white/10 hover:border-[#990011]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative w-full aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-[#1a1a1a] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
