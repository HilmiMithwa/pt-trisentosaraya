"use client";

import { motion, Variants } from "motion/react";

export default function PortofolioSection() {
  const portofolioList = [
    {
      id: 1,
      client: "Astra Oto Part (AoP)",
      scope:
        "Mass Production Component kendaraan Roda Dua (As Standard Motor, Shockbreaker Depan, Per CVT, dll)",
    },
    {
      id: 2,
      client: "PT. FSCM Manufacturing Indonesia",
      scope:
        "Mass Production Component Filter Kendaraan Roda 2 & 4 (Tube, Spring, Expander, Paper Filter, Dll)",
    },
    {
      id: 3,
      client: "PT. TOA Galva Industry",
      scope: "Mass Production Component Speaker (Plate TC, SC, Bracket U)",
    },
    {
      id: 4,
      client: "PT. Harraito Maju Mapan",
      scope: "Mass Production Component Spring 1.2mm",
    },
    {
      id: 5,
      client: "PT. Nadi Lambang Teknologi Indonesia",
      scope: "Mass Production Vacuum Tray (Alat Kesehatan)",
    },
    {
      id: 6,
      client: "PT. Adyawinsa Plastik Industry",
      scope: "Fabrikasi & Maintenance Meja QC & Trolley",
    },
    {
      id: 7,
      client: "PT. WKS  Pupuk Kujang Cikampek",
      scope:
        "Fabrikasi Pin Tablet Pupuk, Pengadaan Perangkat & Instalasi Videotron, HT/Communication",
    },
    {
      id: 8,
      client: "PT. Borneo Alumina Indonesia",
      scope: "Pengadaan Safety Tools (APD) & Spare Part",
    },
    {
      id: 9,
      client: "PT. Indonesia Chemical Alumina",
      scope: "Pengadaan Safety Tools (APD) & Spare Part",
    },
    {
      id: 10,
      client: "Kementerian Kelautan dan Perikanan (KKP)",
      scope: "Fabrikasi dan Pengadaan Alat Timbangan System Integration",
    },
    {
      id: 11,
      client: "Kementerian Pendidikan Dasar dan Menengah (KEMDIKDASMEN)",
      scope:
        "Pengadaan Jaringan Listrik Pusat Perbukuan, Sewa Penggunaan Genset & Penggantian Kabel Four-Core/Tufur",
    },
    {
      id: 12,
      client: "SKK Migas",
      scope:
        "Instalasi dan Maintenance Kabel Jaringan untuk CCTV & Access Control, Renovasi Ruang Kerja (Flooring & Furniture), Pengadaan Alat komunikasi",
    },
    {
      id: 13,
      client: "PT. KINDEN Indonesia",
      scope: "Pengadaan Safety Tools (APD), Fabrikasi & Spare Part",
    },
    {
      id: 14,
      client: "PT. INOAC Polytechno Indonesia",
      scope: "Pengadaan Safety Tools (APD)",
    },
    {
      id: 15,
      client: "PT. Kajima Indonesia",
      scope: "Pengadaan Safety Tools (APD)",
    },
    {
      id: 16,
      client: "PT. Artha Kreasi Utama (AKU)",
      scope: "Pengadaan Alat komunikasi (Digital Terminal radio)",
    },
    {
      id: 17,
      client: "PT. Toyota Tsusho System Indonesia",
      scope: "Pengadaan Alat komunikasi (Digital Terminal radio) & Paket Data",
    },
    {
      id: 18,
      client: "Petrochina Jabung Ltd.",
      scope: "Maintenance Alat Komunikasi (ODU)",
    },
    {
      id: 19,
      client: "PT. Garuda Utama Persada",
      scope: "Pengadaan Alat komunikasi (Digital Terminal radio) & Paket Data",
    },
  ];


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <>
      <section className="w-full text-white">
        <div className="flex flex-col gap-[50px]">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-[12px] text-center max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-semibold md:text-3xl">
              Portofolio Kami
            </h2>
            <p className="text-base md:text-xl  leading-relaxed">
              Setiap proyek adalah pembuktian atas dedikasi kami dalam
              menghadirkan solusi operasional yang responsif dan terukur. Kami
              bangga telah dipercaya oleh berbagai instansi dan perusahaan dalam
              menyalurkan produk berkualitas serta layanan profesional yang
              mendorong pertumbuhan bisnis secara berkelanjutan.
            </p>
          </motion.div>

          <div className="flex flex-col gap-[24px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="border-l-4 border-[#990011] pl-[7px] text-2xl font-semibold md:text-3xl md:pl-[20px]">
                Klien Kami dan Portofolio Produk
              </h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2"
            >
              {portofolioList.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  className="bg-[#1C1C1E] border border-white/10 p-5 rounded-[4px] flex flex-col justify-between gap-2 hover:border-[#990011] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[#990011] font-semibold text-lg">
                      {item.id}.
                    </span>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        {item.client}
                      </h3>
                      <p className="text-base text-gray-400 mt-1 leading-normal">
                        {item.scope}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          

        </div>
      </section>
    </>
  );
}
