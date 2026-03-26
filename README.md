# Redação Nota Mil — Linktree

Landing mobile-first estilo Linktree para a marca **Redação Nota Mil**, com foco em matrículas, cursos e contato.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) + TypeScript  
- [Tailwind CSS](https://tailwindcss.com/)  
- [shadcn/ui](https://ui.shadcn.com/) (componentes base)  
- [Framer Motion](https://www.framer.com/motion/)  
- [Lucide React](https://lucide.dev/) (ícones de interface)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

Projeto no painel: [litletreeredas-w93p](https://vercel.com/naredacaonota1000-2663s-projects/litletreeredas-w93p) · URL: [litletreeredas-w93p.vercel.app](https://litletreeredas-w93p.vercel.app)

1. **Conectar o GitHub:** no projeto Vercel → **Settings** → **Git** → **Connect Git Repository** → escolha `joaodiasft/litletreeredas`, branch **main**.
2. **Root directory:** raiz do repositório (`.`).
3. O arquivo `vercel.json` define `framework: "nextjs"` para a Vercel reconhecer o app como Next.js (o build continua sendo o padrão otimizado da plataforma).
4. Cada `git push` na `main` dispara deploy de produção; PRs geram previews.

Deploy manual (CLI), após `npx vercel login`:

```bash
npx vercel link --project litletreeredas-w93p --team naredacaonota1000-2663s-projects --yes
npx vercel --prod
```

## Paleta

| Token        | Hex       |
| ------------ | --------- |
| Rosa bailarina | `#F7A1B5` |
| Rosa forte (CTA) | `#F26D8A` |
| Preto premium | `#0B0B0D` |
| Cinza texto | `#5B5B63` |
| Cinza fundo | `#F6F6F8` |

A imagem de perfil em uso está em `public/profile.png` — substitua pelo arquivo oficial quando disponível.

## Licença

Projeto privado — todos os direitos reservados à Redação Nota Mil.
