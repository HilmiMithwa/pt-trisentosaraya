

import HeroSection from "@/components/HeroSection";
import TentangKamiSection from "@/components/TentangKamiSection";
import VisiDanMisiSection from "@/components/VisiDanMisiSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col container mx-auto px-4 py-10 md:px-16 md:py-20 gap-[30px] md:gap-[100px]">
        <TentangKamiSection />
        <VisiDanMisiSection />
      </div>
      
    </>
  );
}