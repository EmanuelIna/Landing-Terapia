/* eslint-disable react-refresh/only-export-components */
export const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="white" width="100%" height="100%">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const badges = [
  "🎓 Graduada em Pedagogia",
  "📚 Especialista em Psicopedagogia",
  "🧠 Avaliação Neuropsicopedagógica",
  "💻 Atendimento Online",
  "🏠 Atendimento Presencial",
];

export const steps = [
  {
    n: "01",
    icon: "💬",
    title: "Primeiro contato",
    desc: "Entre em contato pelo WhatsApp. Conversamos sobre as dificuldades observadas e tiramos todas as suas dúvidas.",
  },
  {
    n: "02",
    icon: "🔍",
    title: "Avaliação inicial",
    desc: "Realizamos uma avaliação psicopedagógica completa para entender o perfil de aprendizagem da criança.",
  },
  {
    n: "03",
    icon: "📋",
    title: "Plano personalizado",
    desc: "Com base na avaliação, criamos um plano de intervenção único, pensado especificamente para cada criança.",
  },
  {
    n: "04",
    icon: "🌱",
    title: "Acompanhamento",
    desc: "Sessões regulares e acompanhamento próximo com a família para garantir evolução contínua e saudável.",
  },
];

export const WA_NUMBER = "67991207114";

export const WA_LINK = `https://wa.me/${WA_NUMBER}`;

export const servicos = [
  {
    icon: "📖",
    title: "Dificuldades de Leitura e Escrita",
    desc: "Avaliação e intervenção para crianças com dificuldades na alfabetização, leitura e produção de texto.",
  },
  {
    icon: "🔢",
    title: "Dificuldades em Matemática",
    desc: "Apoio para crianças com dificuldades no raciocínio lógico-matemático e compreensão numérica.",
  },
  {
    icon: "🧩",
    title: "Dislexia e Discalculia",
    desc: "Identificação e acompanhamento de transtornos específicos de aprendizagem com estratégias eficazes.",
  },
  {
    icon: "🎯",
    title: "TDAH e Atenção",
    desc: "Suporte para crianças com dificuldades de concentração, impulsividade e organização do aprendizado.",
  },
  {
    icon: "😰",
    title: "Ansiedade Escolar",
    desc: "Trabalho com bloqueios emocionais que interferem no desempenho e bem-estar na escola.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Orientação para Pais",
    desc: "Suporte e estratégias para que a família possa contribuir no processo de aprendizagem em casa.",
  },
];

export const Tag = ({ children, bg, color }) => (
  <span
    className="inline-block px-4 py-1.5 rounded-full text-[0.75rem] font-semibold tracking-widest uppercase mb-6"
    style={{ backgroundColor: bg, color: color }} // Mantemos o style aqui pois as cores vêm por props dinâmicas
  >
    {children}
  </span>
);
const index = () => {
  return <div>index</div>;
};

export default index;
