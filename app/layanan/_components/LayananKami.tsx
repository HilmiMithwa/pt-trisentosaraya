"use client";
import { motion, Variants } from "motion/react";

export default function LayananKami() {
  return (
    <section className="w-full text-white">
      <div className="flex flex-col gap-[50px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-[12px] text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold md:text-3xl">Layanan Kami</h2>
          <p className="text-base md:text-xl text-gray-300 leading-relaxed">
            Sebagai perusahaan perdagangan barang dan jasa, kami berkomitmen
            menjadi mitra rantai pasok yang andal dan terpercaya, menghadirkan
            solusi pengadaan end-to-end yang efisien untuk bisnis dan instansi
            Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
