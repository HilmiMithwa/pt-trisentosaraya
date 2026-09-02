"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function FacilitySection() {
  const facilityList = [
    {
      id: 1,
      image: "/fasilitasImage/cncmiling.png",
      label: "CNC Milling",
      size: "Capability 1000 x 550 x 550 mm",
    },
    {
      id: 2,
      image: "/fasilitasImage/cncedm.png",
      label: "CNC EDM",
      size: "Capability 400 x 300 mm",
    },
    {
      id: 3,
      image: "/fasilitasImage/manualmiLling.png",
      label: "Manual Milling",
      size: "Capability 400 × 300 mm",
    },
    {
      id: 4,
      image: "/fasilitasImage/cnclathe.png",
      label: "CNC Lathe",
      size: "Chuck 6 Inci",
    },
    {
      id: 5,
      image: "/fasilitasImage/manuallathe.png",
      label: "Manual Lathe",
      size: "Chuck 10 inci",
    },
    {
      id: 6,
      image: "/fasilitasImage/mesingrinding.png",
      label: "Mesin Grinding",
      size: "160 × 1460 mm",
    },
    {
        id: 7,
        image: "/fasilitasImage/mesinhydraulic.png",
        label: "Mesin Hydraulic",
        size: "Kapasitas 120 Ton"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full text-white">
      <div className="flex flex-col gap-[40px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-[12px] text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Fasilitas Kami</h2>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Didukung oleh infrastruktur modern dan mesin berteknologi presisi
            tinggi, fasilitas produksi kami dirancang untuk memenuhi standar
            industri yang ketat. Setiap peralatan dan alur kerja diintegrasikan
            dengan kontrol kualitas menyeluruh demi memastikan efisiensi
            operasional serta keandalan produk yang konsisten bagi seluruh mitra
            bisnis kami.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {facilityList.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="relative w-full h-[260px] md:h-[368px] rounded-[2px] overflow-hidden group cursor-pointer border border-white/10"
            >
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white tracking-wide">
                  {item.label}
                </h3>
                <p className="text-base md:text-lg text-white/90 font-light mt-1">
                  {item.size}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}