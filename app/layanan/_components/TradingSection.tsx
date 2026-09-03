"use client";

import Card from "@/components/elements/Card";
import { motion, Variants } from "motion/react";

export default function TradingSection() {
  const tradingList = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="shrink-0"
        >
          <path d="M0 0h32v32H0z" fill="none" />
          <path
            fill="#990011"
            d="M17 27v-6h-2v4.6L5.4 16L15 6.4V11h2V5h10v8h2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h12zM5 5h8.6L5 13.6zm0 22v-8.6l8.6 8.6zm21.6-8l-3.7-3.7q-.3-.3-.6-.3h-3.5c-.6-1.6-2.3-2.4-3.8-1.8c-.9.3-1.6 1-1.8 1.9c-.5 1.6.4 3.3 2 3.7c1.5.5 3.1-.3 3.7-1.8h3l3.8 3.8c.1.1.3.2.5.2h3.9v-2zM16 17c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m8.8 6c-.4-1.2-1.5-2-2.8-2s-3 1.3-3 3s1.4 3 3 3s2.4-.8 2.8-2H30v-2zM22 25c-.5 0-1-.5-1-1s.5-1 1-1s1 .5 1 1s-.4 1-1 1m4 2h4v2h-4zm2-12h2v2h-2z"
          />
        </svg>
      ),
      description: "Tooling: Cutting Tools, Dies, Jigs dan Fixtures",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="shrink-0"
        >
          <path d="M0 0h32v32H0z" fill="none" />
          <path
            fill="#990011"
            d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"
          />
          <path
            fill="#990011"
            d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"
          />
        </svg>
      ),
      description:
        "Sparepart: Automotive, Industrial Automation & Machinery, and Mining Machinery",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="shrink-0"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#990011"
            d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3zM12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91c4.59-1.15 8-5.86 8-10.91V5z"
          />
        </svg>
      ),
      description:
        "Safety Equipment: Helmet, Gloves, Masker, Apron, Safety Shoes, Safety Goggles, EarPlug, Face Shield, Cover All, Body Harness, Reflective Vest, dll",
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="w-full text-white">
      <div className="flex flex-col items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="inline-block border-b-[3px] border-[#990011] pb-2 text-2xl md:text-3xl font-semibold text-white tracking-wide">
            Trading
          </h2>
          <p className="leading-relaxed text-base md:text-xl mt-4 text-white/90">
            Menyediakan kebutuhan sparepart, tools, dan safety equipment industri.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-4 w-full max-w-3xl"
        >
          {tradingList.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card icon={item.icon} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}