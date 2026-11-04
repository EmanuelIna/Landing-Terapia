# Giovanna Freire — Aprendizagem com escuta e afeto

Landing page de psicopedagogia em Next.js App Router, React, TypeScript estrito, Tailwind CSS, Lucide e Radix Accordion.

## Identidade visual

A identidade fornecida para este projeto é aplicada exclusivamente à landing:

- Creme `#FAF6EE`: fundo principal.
- Grafite `#3B3B47`: títulos e textos.
- Verde Mente `#8DB36A`: ícones e destaques.
- Rosa Afeto `#E0607A`: detalhes pontuais.
- Verde-água `#6FA89C`: todos os CTAs, com texto escuro para legibilidade.
- Areia `#E8D3BD`: apoio e retratos.
- Fraunces nos títulos e Nunito nos textos, servidas localmente em WOFF2 com `font-display: swap`. Licenças OFL incluídas em `public/therapy/fonts`.

Assinatura tipográfica com ícone de apoio; o documento de referência descreve uma logo, mas não inclui o arquivo gráfico original. A foto é a mesma do repositório anterior, preservada em `public/therapy/giovanna-freire.png`.

## Executar e validar

```powershell
npm.cmd ci
npm.cmd run dev
npm.cmd run typecheck
npm.cmd run build
npm.cmd start
```

Prévia padrão: http://127.0.0.1:3000. Build e desenvolvimento usam Webpack por compatibilidade com o ambiente Windows de desenvolvimento. A rota inicial é pré-renderizada.

## Conteúdo e contatos

Personalize `src/components/therapy/config.ts`:

- WhatsApp: `5567991042727`, preservado do repositório e normalizado com DDI 55.
- Instagram: `https://www.instagram.com/psico.giovannafreire/`, informado pelo responsável.
- Serviços, etapas, FAQ, imagem e avaliações.

O site não coleta dados clínicos, não envia formulários e não carrega widgets externos. Os CTAs abrem uma conversa no WhatsApp; a mensagem só é enviada pelo visitante. Não há promessas de resultado, notas do Google ou depoimentos inventados. O componente aceita avaliações reais autorizadas em `therapy.reviews`; enquanto não forem fornecidas, apresenta os princípios de parceria entre família, escola e criança.

## Componentes e integração com o portfólio

- `therapy-page.tsx`: Hero, serviços, etapas, sobre, confiança, contato e rodapé.
- `therapy-header.tsx`: marca, navegação e menu móvel acessível.
- `therapy-faq.tsx`: perguntas frequentes com Radix.
- `therapy.module.css`: estilos e tokens isolados; nenhuma dependência dos estilos visuais do portfólio.

O portfólio de Emanuel integra a mesma implementação em `/projetos/giovanna-freire`, com um link de retorno no rodapé. No workspace do portfólio, `node scripts/sync-therapy.mjs` sincroniza os componentes e os recursos para este checkout. A prévia integrada usa `noindex` para evitar duplicar a página profissional nos buscadores; a versão independente permite indexação.

## Migração e publicação

O projeto foi migrado de Vite/JS para Next.js/TypeScript conforme as diretrizes do workspace. A foto e os contatos foram preservados; o código anterior continua no histórico Git.

Na Vercel, use o preset **Next.js** e deixe o diretório de saída no padrão do framework. Remova uma eventual configuração manual de saída `dist` e o comando Vite nas configurações do projeto antes de publicar esta versão. A atualização foi preparada em branch para revisão, sem disparar uma alteração intencional na produção de `main`.
