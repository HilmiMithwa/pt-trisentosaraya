import GoogleMap from "./GoogleMap";
import ContactUs from "./ContactUs";

export default function Home() {
  const contactList = [
    {
      label: "Alamat: ",
      value:
        "Kawasan Central Cikarang Industrial Park Blok K1 No.3A, Cicau, Kec. Cikarang Pusat, Kabupaten Bekasi, Jawa Barat 17530",
    },
    {
      label: "Telepon: ",
      value: "+62 21-7989671",
    },
    {
      label: "Email: ",
      value: "cs@trisentosaraya.co.id",
    },
  ];

  return (
    <section className="flex flex-col container mx-auto px-4 py-10 md:px-16 md:py-20 gap-[30px] md:gap-[80px] text-white">
      <div className="flex flex-col gap-[36px]">
        <h2 className="text-2xl font-semibold md:text-3xl text-center">
          Kontak Kami
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <div className="w-full h-full min-h-[350px] overflow-hidden rounded-md shadow-md border border-white/10">
            <GoogleMap />
          </div>

          <div className="flex flex-col gap-4 justify-between h-full">
            {contactList.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-[#990011] text-base px-6 py-5 rounded-md shadow-md hover:bg-[#80000e] transition-colors duration-200 h-full border border-white/5 text-center"
              >
                <p className="text-white/90 leading-relaxed">
                  <span className="font-bold">{item.label}</span>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <ContactUs />
      </div>
    </section>
  );
}