import HeroSection from "./HeroSection"
import GallerySection from "./GallerySection"
import { getGalleryItems } from "@/lib/getGallery"

export default function Home() {
  const galleryItems = getGalleryItems();
  console.log(galleryItems);
  return (
    <>
      <HeroSection />
      <GallerySection initialItems={galleryItems} />
    </>
  );
}