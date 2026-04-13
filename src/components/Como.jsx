import { steps, Tag } from "../constants";
import Reveal from "./Reveal";
import StepCard from "./StepCard";

const Como = () => {
  return (
    <section id="como" className="py-24 px-[6vw] bg-white">
      <Reveal>
        <Tag bg="#C6E0D8" color="#2e6e60">
          Como funciona
        </Tag>

        <h2 className="font-['Playfair_Display',serif] text-[clamp(1.8rem,3vw,2.6rem)] mb-3 text-[#3D2F2F]">
          Processo Completo de Avaliação Psicopedagógica
        </h2>

        <p className="text-[#7A6060] max-w-130 leading-relaxed">
          Um processo de atendimento psicopedagógico pensado com cuidado, desde
          a avaliação inicial até o plano de intervenção, para que você e seu
          filho(a) se sintam seguros em cada etapa.
        </p>
      </Reveal>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6 mt-12">
        {steps.map((s, i) => (
          <Reveal key={i} delay={i * 100}>
            <StepCard {...s} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Como;
