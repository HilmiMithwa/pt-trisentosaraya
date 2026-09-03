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
    <section className="flex flex-col container mx-auto px-4 py-10 md:px-16 md:py-20 gap-[30px] md:gap-[100px] text-white">
      <div className="flex flex-col gap-[36px]">
        <h2 className="text-2xl font-semibold md:text-3xl text-center">
          Kontak Kami
        </h2>

        <div>
          <GoogleMap />
        </div>

        <div className="grid grid-cols-1 gap-4 items-stretch">
          {contactList.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#990011] text-base px-[20px] py-[10px]"
            >
              <p className="font-bold pr-[8px]">{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

        <ContactUs />

        
      </div>
    </section>
  );
}