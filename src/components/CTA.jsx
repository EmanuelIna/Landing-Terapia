import Reveal from "./Reveal";
import { Tag } from "../constants";

function CTA() {
  const WA_NUMBER = "67991207114";
  const WA_LINK = `https://wa.me/${WA_NUMBER}`;

  return (
    <section className="py-24 px-[6vw] bg-white text-center">
      <Reveal>
        <Tag bg="#FAD9C1" color="#8a5a30">
          Vamos conversar?
        </Tag>

        <h2 className="font-['Playfair_Display',serif] text-[clamp(1.8rem,3vw,2.6rem)] max-w-130 mx-auto mb-4 text-[#3D2F2F]">
          Avalie as Dificuldades de Aprendizagem do seu Filho - Agende uma
          Consulta
        </h2>

        <p className="text-[#7A6060] mb-8">
          Entre em contato pelo WhatsApp com a psicopedagoga clínica Giovana
          Freire para avaliar possíveis dificuldades, dislexia, TDAH ou outras
          questões de aprendizagem — sem compromisso.
        </p>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-[0.6rem] bg-[#25D366] text-white no-underline px-[2.4rem] py-4 rounded-full font-medium text-base shadow-[0_8px_28px_rgba(37,211,102,0.35)] hover:scale-105 hover:brightness-105 transition-all duration-300"
        >
          <span className="w-5.5 h-5.5 inline-block">
            <WhatsAppIcon />
          </span>
          Falar no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}

export default CTA;
