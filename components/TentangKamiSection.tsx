"use client";

import { motion } from "motion/react";

export default function TentangKamiSection() {
  return (
    <>
      <section className="w-full text-white">
        <div className="flex flex-col gap-[14px] md:grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full flex items-center"
          >
            <h2 className="border-l-4 border-[#990011] pl-[7px] text-2xl font-semibold md:text-3xl md:pl-[20px]">
              Tentang Kami
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full text-left md:text-right"
          >
            <p className="leading-relaxed text-xl md:text-2xl">
              PT Trisentosa Raya Esolusi adalah perusahaan Perseroan yang
              bergerak dibidang perdagangan (pengadaan barang dan jasa).
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}