import { WA_LINK } from "../constants";

const FloatingWA = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Enviar mensagem pelo WhatsApp para Giovana Freire - Psicopedagoga"
      title="Clique para conversar com a psicopedagoga Giovana Freire no WhatsApp - Avaliação psicopedagógica clínica"
      className="fixed bottom-8 right-8 z-999 w-15 h-15 rounded-full bg-[#25D366] flex items-center justify-center no-underline transition-transform duration-200 hover:scale-[1.12] p-3.5 group animate-[waPulse_2.5s_ease-in-out_infinite] hover:animate-none"
    >
      <span className="absolute right-18 bg-white text-[#3D2F2F] text-[0.8rem] font-medium px-[0.9rem] py-[0.45rem] rounded-lg whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.12)] opacity-0 pointer-events-none transition-opacity duration-200 group-hover:opacity-100">
        Falar no WhatsApp 💬
      </span>

      <WhatsAppIcon />
    </a>
  );
};

export default FloatingWA;
