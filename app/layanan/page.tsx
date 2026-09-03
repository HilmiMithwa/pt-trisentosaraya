import LayananKami from "./_components/LayananKami";
import MachiningSection from "./_components/MachiningSection";
import ManufacturingSection from "./_components/ManufacturingSection";
import TradingSection from "./_components/TradingSection";
import DesignEngineeringSection from "./_components/DesignEngineeringSection";
import OthersSection from "./_components/OthersSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col container mx-auto px-4 py-10 md:px-16 md:py-20 gap-[30px] md:gap-[100px]">
        <LayananKami />
        <MachiningSection />
        <ManufacturingSection />
        <DesignEngineeringSection />
        <TradingSection />
        <OthersSection />
      </div>
    </>
  );
}
