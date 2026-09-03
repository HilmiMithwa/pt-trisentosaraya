import GoogleMap from "./GoogleMap";

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

        <div className="flex flex-col gap-8 mt-6">
          <div className="text-center w-full">
            <h2 className="inline-block border-b-[3px] border-[#990011] pb-2 text-2xl md:text-3xl font-semibold text-white tracking-wide">
              Kirim Pesan
            </h2>
          </div>

          <form className="flex flex-col gap-5 max-w-xl mx-auto w-full">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-base font-medium text-white">
                Nama Lengkap:
              </label>
              <input
                type="text"
                id="name"
                name="Nama Lengkap"
                className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-base font-medium text-white">
                Email Anda:
              </label>
              <input
                type="email"
                id="email"
                name="Email"
                className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-base font-medium text-white">
                Subjek:
              </label>
              <input
                type="text"
                id="subject"
                name="Subjek"
                className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-base font-medium text-white">
                Pesan:
              </label>
              <textarea
                id="message"
                name="Pesan"
                rows={8}
                className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011] resize-none"
              />
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="bg-[#990011] text-white py-2.5 px-10 rounded-[2px] font-medium hover:bg-[#990011]/80 transition-colors text-base cursor-pointer"
              >
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}