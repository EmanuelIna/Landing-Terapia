import { servicos, Tag } from "../constants";
import Reveal from "./Reveal";
import ServicoCard from "./ServicoCard";

const Servicos = () => {
  return (
    <section id="servicos" className="py-24 px-[6vw] bg-[#FDF7F2]">
      <Reveal>
        <Tag bg="#D8D0EC" color="#5a4a8a">
          Serviços & Dificuldades
        </Tag>

        <h2 className="font-['Playfair_Display',serif] text-[clamp(1.8rem,3vw,2.6rem)] mb-3 text-[#3D2F2F]">
          Avaliação e Intervenção para Dificuldades de Aprendizagem
        </h2>

        <p className="text-[#7A6060] max-w-130 leading-relaxed">
          Atendimento psicopedagógico especializado para dislexia, TDAH,
          dificuldades de leitura, escrita, matemática e ansiedade escolar, com
          base científica e olhar humanizado.
        </p>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[1.4rem] mt-12">
        {servicos.map((s, i) => (
          <Reveal key={i} delay={i * 80}>
            <ServicoCard {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Servicos;
