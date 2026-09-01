"use client";

import Image from "next/image";
import { motion, Variants } from "motion/react";

export default function PartnersSection() {
  const partners = [
    {
      name: "Kementerian Kelautan dan Perikanan",
      logo: "/logoPartners/kelautan.png",
    },
    {
      name: "Adyawinsa Group",
      logo: "/logoPartners/adyawinsa.png",
    },
    {
      name: "Siloam Hospitals",
      logo: "/logoPartners/siloam.png",
    },
  ];


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-10 md:gap-14">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center"
        >
          <div className="inline-block relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-wide pb-2">
              Partners
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[3px] w-full bg-[#990011] rounded-full origin-left"
            />
          </div>
        </motion.div>

        <div className="w-full bg-white rounded-[4px] px-6 py-12 md:px-16 md:py-20 shadow-md">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center justify-items-center"
          >
            {/* Partner 1 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center gap-4 max-w-[280px] cursor-pointer"
            >
              <div className="relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] flex items-center justify-center">
                <Image
                  src={partners[0].logo}
                  alt={partners[0].name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-black text-lg md:text-xl font-medium leading-snug">
                {partners[0].name}
              </p>
            </motion.div>

            {/* Partner 2 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center gap-4 max-w-[280px] cursor-pointer"
            >
              <div className="relative w-[140px] h-[70px] md:w-[180px] md:h-[90px] flex items-center justify-center">
                <Image
                  src={partners[1].logo}
                  alt={partners[1].name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-black text-lg md:text-xl font-medium leading-snug">
                {partners[1].name}
              </p>
            </motion.div>

            {/* Partner 3 */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center gap-4 max-w-[280px] md:col-span-2 cursor-pointer"
            >
              <div className="relative w-[130px] h-[65px] md:w-[160px] md:h-[80px] flex items-center justify-center">
                <Image
                  src={partners[2].logo}
                  alt={partners[2].name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-black text-lg md:text-xl font-medium leading-snug">
                {partners[2].name}
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}