"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function OthersSection() {
  const othersList = [
    {
      title: "Security System",
      image: "/OthersSectionImage/security.png",
    },
    {
      title: "Communication",
      image: "/OthersSectionImage/communication.png",
    },
    {
      title: "VideoTron",
      image: "/OthersSectionImage/videotron.png",
    },
    {
      title: "Mechanical, Electrical & Plumbing (MEP)",
      image: "/OthersSectionImage/electrical.png",
    },
    {
      title: "Maintenance",
      image: "/OthersSectionImage/maintenance.png",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full text-white">
      <div className="flex flex-col gap-8">
        <div className="flex justify-end w-full">
          <h2 className="inline-block border-r-4 border-[#990011] pr-3 text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Others
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {othersList.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative w-full aspect-[656/368] overflow-hidden rounded-sm cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#990011]/50 via-[#990011]/20 to-transparent flex items-end p-5">
                <h3 className="text-white font-semibold text-lg md:text-xl">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}