"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function ManufacturingSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-[25px] w-full text-white items-center">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-[14px] order-1 md:order-2"
      >
        <h2 className="border-l-4 md:border-l-0 md:border-r-4 border-[#990011] pl-[7px] pr-[7px] md:pr-[12px] md:pl-0 text-2xl font-semibold md:text-3xl text-left md:text-right">
          Galeri Kami
        </h2>
        <p className="leading-relaxed text-base md:text-2xl text-left md:text-right">
          Produk meliputi komponen untuk mesin otomotif, tekstil, pabrik
          makanan kaleng, mekatronik, punch & dies, jig, tools, fixture,
          laser, dll.
        </p>
      </motion.div>

      <div className="w-full flex justify-center md:justify-start order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Image
            src="/machiningImage/gambarManufacture.png"
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