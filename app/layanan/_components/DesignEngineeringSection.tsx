"use client";
import { motion } from "motion/react";

export default function DesignEngineeringSection() {
  return (
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
            Design Engineering
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
            Rancang bangun mesin sesuai kebutuhan pelanggan, termasuk factory
            piping, conveyor, jig & fixture untuk line process, dan re-drawing
            parts
          </p>
        </motion.div>
      </div>
    </section>
  );
}
