const StepCard = ({ n, icon, title, desc }) => {
  return (
    <div
      className="bg-[#FDF7F2] rounded-3xl px-[1.6rem] py-8 relative overflow-hidden transition-all duration-250
                 hover:-translate-y-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="font-['Playfair_Display',serif] text-[3.2rem] text-[#F2C4CE] leading-none mb-4">
        {n}
      </div>

      <div className="absolute top-[1.2rem] right-[1.4rem] text-[1.5rem] opacity-30">
        {icon}
      </div>

      <h3 className="text-[1rem] font-medium mb-2 text-[#3D2F2F]">{title}</h3>

      <p className="text-[0.88rem] text-[#7A6060] leading-[1.65]">{desc}</p>
    </div>
  );
};

export default StepCard;
