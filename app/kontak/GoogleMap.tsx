interface GoogleMapProps {
  embedUrl?: string;
}

export default function GoogleMap({ embedUrl }: GoogleMapProps) {
  const mapSrc =
    embedUrl ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.634940661445!2d107.15205307571047!3d-6.372524293617678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699bd400000001%3A0x2bcc93286f0d7469!2sPT.%20TRISENTOSA%20RAYA%20ESOLUSI!5e1!3m2!1sid!2sid!4v1788355075656!5m2!1sid!2sid";

  return (
    <div className="w-full h-[230px] md:h-[450px] rounded-[4px] overflow-hidden border border-white/10 shadow-md">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}