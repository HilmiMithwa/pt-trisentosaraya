import PortofolioSection from "./_components/PortofolioSection";
import FacilitySection from "./_components/FacilitySection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col container mx-auto px-4 py-10 md:px-16 md:py-20 gap-[30px] md:gap-[100px]">
        <PortofolioSection />
        <FacilitySection />
      </div>
    </>
  );
}
