import { useState, useEffect } from "react";
import { WA_LINK } from "../constants";
import Psico from "../assets/PsicoPedagoga.png";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const animClass = (delayClass) => `
    transition-all duration-700 ${delayClass} ease-out
    ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}
  `;

  return (
    <section
      id="hero"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-[6vw] pt-28 pb-16 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: `
          radial-gradient(ellipse 60% 60% at 80% 30%, rgba(242,196,206,0.45) 0%, transparent 70%),
          radial-gradient(ellipse 50% 50% at 20% 80%, rgba(198,224,216,0.35) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 50% 10%, rgba(216,208,236,0.3) 0%, transparent 70%)`,
        }}
      />

      <div className="relative">
        <div className={animClass("delay-0")}>
          <span className="inline-block bg-[#F2C4CE] text-[#8a3d4f] text-[0.75rem] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            ✨ Psicopedagogia Clínica e Institucional
          </span>
        </div>

        <h1
          className={`${animClass("delay-150")} font-['Playfair_Display',serif] text-[clamp(2.2rem,4vw,3.6rem)] leading-[1.15] mb-6 text-[#3D2F2F]`}
        >
          Psicopedagogia Clínica para Superar{" "}
          <em className="text-[#c47e8a] italic font-['Playfair_Display']">
            Dificuldades de Aprendizagem
          </em>
        </h1>

        <p
          className={`${animClass("delay-300")} text-[1.05rem] text-[#7A6060] leading-relaxed max-w-120 mb-10`}
        >
          Avaliação e intervenção psicopedagógica especializada para dislexia,
          TDAH, dificuldades de leitura, escrita e matemática. Atendimento
          presencial e online em Campo Grande - MS.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className={`${animClass("delay-450")} inline-block bg-[#c47e8a] text-white px-9 py-4 rounded-full font-medium text-base tracking-wide shadow-[0_6px_24px_rgba(196,126,138,0.35)] hover:scale-105 transition-transform`}
        >
          Agendar uma conversa →
        </a>
      </div>

      <div
        className={`${animClass("delay-200")} items-center justify-center relative hidden md:flex`}
      >
        <div className="w-[clamp(260px,38vw,460px)] aspect-square bg-linear-to-br from-[#F2C4CE] via-[#D8D0EC] to-[#C6E0D8] flex items-center justify-center shadow-[0_20px_60px_rgba(196,126,138,0.2)] animate-[morphBlob_8s_ease-in-out_infinite] overflow-hidden">
          <img
            className="w-full h-full object-cover scale-125 -translate-x-4 -translate-y-6"
            src={Psico}
            alt="Giovana Freire - Psicopedagoga especialista em avaliação psicopedagógica clínica"
            title="Psicopedagoga especialista em dificuldades de aprendizagem"
          />
        </div>
        {[
          { size: "w-20 h-20", pos: "top-[5%] right-[5%]", bg: "bg-[#FAD9C1]" },
          {
            size: "w-10 h-10",
            pos: "bottom-[10%] left-[5%]",
            bg: "bg-[#C6E0D8]",
          },
          {
            size: "w-14 h-14",
            pos: "top-[48%] -right-[2%]",
            bg: "bg-[#D8D0EC]",
          },
        ].map((d, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-55 ${d.size} ${d.pos} ${d.bg}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes morphBlob {
          0%,100% { border-radius: 60% 40% 55% 45% / 50% 55% 45% 50%; }
          33%      { border-radius: 45% 55% 40% 60% / 55% 45% 55% 45%; }
          66%      { border-radius: 55% 45% 60% 40% / 45% 60% 40% 60%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
