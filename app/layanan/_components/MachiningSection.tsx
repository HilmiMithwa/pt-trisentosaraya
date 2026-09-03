"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function MachiningSection() {
  return (
    <section className="flex flex-col gap-[25px] w-full text-white grid grid-cols-1 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-[14px]"
      >
        <h2 className="border-l-4 border-[#990011] pl-[7px] text-2xl font-semibold md:text-3xl md:pl-[20px]">
          Machining
        </h2>
        <p className="leading-relaxed text-base md:text-2xl">
          Pembuatan komponen presisi menggunakan mesin milling, lathe, grinding,
          EDM.
        </p>
      </motion.div>
      <div className="w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/machiningImage/gambarMesin.jpeg"
            alt="Gambar Mesin"
            width={1600}
            height={720}
            className="w-fit h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
