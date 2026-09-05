"use client";
import tre_logo from "../public/tre_logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navList = [
    { name: "Beranda", href: "/" },
    { name: "Portofolio & Fasilitas", href: "/portofolio-fasilitas" },
    { name: "Layanan", href: "/layanan" },
    { name: "Galeri", href: "/galeri" },
  ];

  return (
    <footer className="bg-[#990011] text-white">
      <div className="px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="flex flex-col gap-[14px]">
          <div className="flex flex-col gap-[14px]">
            <Image src={tre_logo} alt="tre_logo" className="w-[88px]" />
            <p className="text-xl font-medium">PT TRISENTOSA RAYA ESOLUSI</p>
          </div>
          <h2 className="text-2xl font-regular">Navigasi</h2>
          <ul className="flex flex-col gap-[10px] text-sm">
            {navList.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="underline">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl">Kontak Kami</h2>
          <p className="text-sm leading-relaxed">
            Kawasan Central Cikarang Industrial Park Blok K1 No.3A, Cicau, Kec.
            Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530
          </p>

        
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-sm">+6281285982399</span>
          </div>

          
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
            </span>
            <span className="text-sm">cs@trisentosaraya.co.id</span>
          </div>

          
          <div className="flex flex-col gap-3">
            <p className="font-medium text-sm">Connect with Us</p>
            <div className="flex items-center gap-2">
              {/* X */}
              <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-[#101820] text-[#990011] flex items-center justify-center hover:bg-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      
      <div className="border-t border-white/30 mx-6"></div>
      <div className="py-4 text-center text-xs">
        <p>© Hak Cipta PT. TRISENTOSA RAYA ESOLUSI Semua Hak Dilindungi Undang-Undang</p>
      </div>
    </footer>
  );
}