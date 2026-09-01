interface CardProps {
  icon: React.ReactNode;
  description: string;
}

export default function Card({ icon, description }: CardProps) {
  return (
    <div className="bg-[#990011] text-white flex items-center rounded-[2px] py-[10px] pl-[11px] pr-[12px] gap-5 h-full w-full">
      <div className="bg-[#101820] p-2 rounded-[4px] flex items-center justify-center shrink-0 w-[50px] h-[50px]">
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-xs md:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}