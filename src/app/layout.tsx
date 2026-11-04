import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = {
  title: "Giovanna Freire — Psicopedagogia com escuta e afeto",
  description: "Pedagoga e psicopedagoga em Campo Grande, MS. Avaliação cuidadosa, acompanhamento personalizado e parceria com a família no processo de aprendizagem.",
  robots: { index: true, follow: true },
  openGraph: { title: "Giovanna Freire — Aprendizagem com escuta e afeto", description: "Um olhar acolhedor e individualizado para cada criança.", locale: "pt_BR", type: "website" },
};
interface LayoutProps { children: ReactNode }
export default function Layout({ children }: LayoutProps) { return <html lang="pt-BR"><body>{children}</body></html>; }
