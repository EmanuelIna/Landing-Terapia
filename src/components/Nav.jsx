import { WA_LINK } from "../constants";

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full z-100 flex items-center justify-between px-[6vw] py-[1.1rem] bg-[#fdf7f2]/70 backdrop-blur-md border-b border-[#f2c4ce]/25 transition-colors duration-300 box-border">
      <div className="font-['Playfair_Display',serif] text-[1.2rem] text-[#3D2F2F]">
        Giovanna <span className="text-[#c47e8a] italic">Freire</span>
      </div>

      <div className="flex gap-[1.8rem] items-center">
        <div className="hidden md:flex gap-[1.8rem]">
          {[
            { name: "Como funciona", href: "#como" },
            { name: "Serviços", href: "#servicos" },
            { name: "Sobre", href: "#sobre" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#7A6060] no-underline text-[0.88rem] font-medium hover:text-[#c47e8a] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="bg-[#c47e8a] text-white no-underline text-[0.88rem] font-medium px-[1.1rem] py-[0.4rem] rounded-full hover:brightness-105 active:scale-95 transition-all"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
};

export default Nav;
