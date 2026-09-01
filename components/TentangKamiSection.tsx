"use client";

export default function TentangKamiSection() {
  return (
    <>
      <section>
        <div className="flex flex-col gap-[14px] md:grid md:grid-cols-2">
          <div className="w-full flex items-center">
            <h2 className="border-l-4 border-[#990011] pl-[7px] text-2xl font-semibold md:text-3xl md:pl-[20px]">
              Tentang Kami
            </h2>
          </div>
          <div className="w-full text-left md:text-right">
            <p className="leading-relaxed text-xl md:text-2xl">
              PT Trisentosa Raya Esolusi adalah perusahaan Perseroan yang
              bergerak dibidang perdagangan (pengadaan barang dan jasa).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
