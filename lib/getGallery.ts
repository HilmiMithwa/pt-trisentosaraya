import fs from "fs";
import path from "path";

export interface GalleryItem {
  id: number;
  category: string;
  title: string;
  image: string;
}


const categoryMap: Record<string, string> = {
  jigMold: "Jig and Mold",
  fabrication: "Fabrication",
  precision: "Precision Part",
  automotif: "Part Automotif & electronic",
  stamping: "Stamping & CNC part",
};

export function getGalleryItems(): GalleryItem[] {

  const galleryDir = path.join(process.cwd(), "public/galeri");
  let items: GalleryItem[] = [];
  let idCounter = 1;

  if (!fs.existsSync(galleryDir)) return items;

  const categories = fs.readdirSync(galleryDir);

  categories.forEach((folder) => {
    const categoryPath = path.join(galleryDir, folder);

    if (fs.statSync(categoryPath).isDirectory()) {
      const files = fs.readdirSync(categoryPath);

      files.forEach((file) => {
        if (/\.(jpg|jpeg|png|webp|svg)$/i.test(file)) {

          const title = file
            .replace(/\.[^/.]+$/, "")
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

          items.push({
            id: idCounter++,
            category: categoryMap[folder] || folder,
            title: title,
            image: `/galeri/${folder}/${file}`, 
          });
        }
      });
    }
  });

  return items;
}