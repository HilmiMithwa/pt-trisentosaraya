"use client";

import { useState } from "react";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    msg: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("Nama Lengkap"),
      email: formData.get("Email"),
      subject: formData.get("Subjek"),
      message: formData.get("Pesan"),
    };

    try {
      const response = await fetch("/api/kontak", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: "success", msg: "Pesan berhasil terkirim!" });
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus({
          type: "error",
          msg: result.error || "Gagal mengirim pesan.",
        });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Terjadi kesalahan koneksi." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 mt-6">
      <div className="text-center w-full">
        <h2 className="inline-block border-b-[3px] border-[#990011] pb-2 text-2xl md:text-3xl font-semibold text-white tracking-wide">
          Kirim Pesan
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-2xl md:max-w-4xl mx-auto w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base font-medium text-white">
              Nama Lengkap:
            </label>
            <input
              type="text"
              id="name"
              name="Nama Lengkap"
              required
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
              required
              className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011]"
            />
          </div>
        </div>

        {/* Row 2: Subjek */}
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

        {/* Row 3: Pesan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-base font-medium text-white">
            Pesan:
          </label>
          <textarea
            id="message"
            name="Pesan"
            rows={8}
            required
            className="w-full border border-[#990011] bg-transparent px-3 py-2.5 rounded-[2px] text-white focus:outline-none focus:ring-1 focus:ring-[#990011] resize-none"
          />
        </div>

        {/* Notifikasi Status */}
        {status && (
          <p
            className={`text-center text-sm font-medium ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.msg}
          </p>
        )}

        <div className="flex justify-center mt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#990011] text-white py-2.5 px-10 rounded-[2px] font-medium hover:bg-[#990011]/80 transition-colors text-base cursor-pointer disabled:opacity-50"
          >
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </div>
      </form>
    </div>
  );
}