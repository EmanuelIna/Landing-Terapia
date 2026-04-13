import { badges, Tag } from "../constants";
import Reveal from "./Reveal";

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="py-24 px-[6vw] bg-linear-to-br from-[#fce8ed] via-[#ede8f7] to-[#ddf0ea]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-20 items-center">
        <Reveal className="flex justify-center">
          <div className="w-70 h-70 rounded-full bg-linear-to-br from-[#F2C4CE] to-[#D8D0EC] flex items-center justify-center text-[5.5rem] shadow-[0_20px_60px_rgba(196,126,138,0.3)]">
            👩‍⚕️
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Tag bg="#F2C4CE" color="#8a3d4f">
            Sobre mim
          </Tag>

          <h2 className="font-['Playfair_Display',serif] text-[clamp(1.8rem,3vw,2.6rem)] mb-[1.1rem] text-[#3D2F2F]">
            Olá, sou a Giovana Freire - Psicopedagoga Clínica
          </h2>

          {[
            "Sou psicopedagoga clínica especializada em avaliação psicopedagógica e intervenção para crianças com dificuldades de aprendizagem. Acredito que por trás de toda dificuldade de leitura, escrita, matemática ou TDAH existe um potencial esperando para ser descoberto.",
            "Com uma abordagem acolhedora e baseada em evidências neuropsicopedagógicas, trabalho junto à criança e sua família para transformar o processo de aprendizagem, superando desafios como dislexia e discalculia, em uma experiência positiva e significativa.",
            "Atendo presencialmente em Campo Grande - MS e online, adaptando o formato e as estratégias de atendimento às necessidades específicas de cada família. Realizo avaliação neuropsicopedagógica completa e acompanhamento contínuo.",
          ].map((p, i) => (
            <p
              key={i}
              className="color-[#7A6060] text-[#7A6060] leading-[1.8] mb-[0.9rem] text-[0.97rem]"
            >
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-[0.6rem] mt-[1.4rem]">
            {badges.map((b, i) => (
              <span
                key={i}
                className="bg-white/70 backdrop-blur-xs border border-white/80 rounded-full px-4 py-[0.4rem] text-[0.8rem] font-medium text-[#3D2F2F]"
              >
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Sobre;
