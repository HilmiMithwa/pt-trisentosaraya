import Card from "./elements/Card";

export default function VisiDanMisiSection() {
  const misi = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 48 48"
        >
          <path d="M0 0h48v48H0z" fill="none" />
          <path
            fill="#901"
            fillRule="evenodd"
            d="M19.411.532a19 19 0 0 1 1.651-.075c.583 0 1.145.031 1.652.075a3.4 3.4 0 0 1 2.289 1.156c8.725 1.609 15.907 8.94 16.27 17.903l4.108 5.23a4.94 4.94 0 0 1 1.056 3.053c0 1.945-1.15 3.77-3.037 4.51c-.732.288-1.634.626-2.542.92l-.917 6.131a4.44 4.44 0 0 1-5.02 3.744l-2.15-.308v2.59a2 2 0 0 1-4 0v-4.897a2 2 0 0 1 2.283-1.98l4.435.636a.44.44 0 0 0 .496-.376l1.105-7.388a2 2 0 0 1 1.463-1.637c1.068-.284 2.347-.75 3.384-1.158c.278-.109.5-.4.5-.787a.94.94 0 0 0-.2-.583l-4.523-5.755a2 2 0 0 1-.428-1.235c0-6.554-4.847-12.359-11.334-14.279c.016.925.027 2.011.027 3.268c0 .933-.006 2.448-.015 3.442a8.837 8.837 0 0 1-1.71 15.59c2.481 2.156 5.631 3.469 8.559 3.469a2 2 0 1 1 0 4c-4.989 0-10.029-2.685-13.287-6.595a2 2 0 0 1-.292-.47a8.837 8.837 0 0 1-3.072-15.994a411 411 0 0 1-.016-3.442q.002-1.749.024-3.067C9.922 8.377 5.437 14.303 5.437 21.27c0 6.043 3.357 11.736 8.197 4.427a2 2 0 0 1 1.028 1.748v8.015a2 2 0 0 1-4 0v-6.884C5.075 34.963 1.437 28.277 1.437 21.27c0-9.5 6.658-17.44 15.561-19.433A3.4 3.4 0 0 1 19.411.532"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "Memberikan kepuasan yang menyeluruh kepada pelanggan dan semua pihak yang berkepentingan dengan perusahaan.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#901"
            d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"
          />
        </svg>
      ),
      description:
        "Meningkatkan kerjasama dengan berbagai pihak untuk memastikan kebutuhan pelanggan terpenuhi dengan produk berkualitas tinggi.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="#901"
            fillRule="evenodd"
            d="M13.614 2.31a.75.75 0 0 1 .456.69v6.998H18a.75.75 0 0 1 .653 1.12l-.492.87a35.8 35.8 0 0 1-7.05 8.842l-.796.725A.75.75 0 0 1 9.06 21v-6.939H5a.75.75 0 0 1-.653-1.119a35.8 35.8 0 0 1 6.675-8.773l1.778-1.71a.75.75 0 0 1 .814-.149m-7.33 10.251H9.81a.75.75 0 0 1 .75.75v5.983a34.3 34.3 0 0 0 6.153-7.796H13.32a.75.75 0 0 1-.75-.75V4.762l-.508.488a34.3 34.3 0 0 0-5.777 7.311"
            clipRule="evenodd"
          />
        </svg>
      ),
      description:
        "Menyediakan layanan yang cepat, tepat waktu, dapat dipercaya, diandalkan, dan bermutu tinggi.",
    },
  ];

  return (
    <>
      <section className="w-full text-white">
        <div className="flex flex-col gap-[32px]">
          <div className="w-full text-center">
            <h2 className="inline-block border-b-4 border-[#990011] pb-2 text-2xl md:text-3xl font-semibold text-white tracking-wide">
              Visi dan Misi
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full">
            <div className="px-[20px] py-[24px] md:px-[42px] bg-[#990011] flex items-center rounded-[2px] shadow-md">
              <p className="text-lg md:text-xl font-normal leading-relaxed text-white">
                Kami berkomitmen untuk memberikan kepuasan maksimal kepada semua
                pelanggan kami. Kepuasan ini merupakan perwujudan dan landasan
                bagi kami dalam menyediakan produk dan layanan berkualitas
                tinggi yang sangat penting dan utama bagi para klien kami, guna
                mencapai kepuasan yang terjamin.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-[24px]">
              <p className="text-base text-center md:text-right  md:text-lg">
                Untuk meningkatkan kualitas produk dan layanan kepada seluruh
                klien kami yang sangat berharga, kami menerapkan misi perusahaan
                yang meliputi:
              </p>

              <div className="flex flex-col gap-[22px] justify-between flex-1">
                {misi.map((item, index) => (
                  <div key={index} className="flex-1 flex">
                    <Card icon={item.icon} description={item.description} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
