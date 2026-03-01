const ServicoCard = ({ icon, title, desc }) => {
  return (
    <div
      className="bg-white rounded-[20px] p-[1.8rem] border-[1.5px] border-transparent transition-all duration-250
                 hover:border-[#F2C4CE] hover:-translate-y-1 
                 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(196,126,138,0.15)]"
    >
      <div className="text-[2rem] mb-[0.9rem]">{icon}</div>

      <h3 className="text-[0.97rem] font-medium mb-2 text-[#3D2F2F]">
        {title}
      </h3>

      <p className="text-[0.87rem] text-[#7A6060] leading-[1.65]">{desc}</p>
    </div>
  );
};

export default ServicoCard;
