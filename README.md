# Miguel Inácio — Developer

Portfólio pessoal de Miguel Inácio, desenvolvido com **Next.js** e um stack moderno, com export estático para GitHub Pages.

## Stack

- **Next.js** (App Router) — renderização e export estático
- **React** — interface
- **TypeScript** — tipagem e segurança
- **Tailwind CSS** v4 — estilização utilitária (config CSS-first)
- **Framer Motion** — animações e transições
- **lucide-react** — ícones
- Fontes auto-hospedadas (Poppins + Great Vibes)

## Estrutura

```
│── app/
│     layout.tsx
│     page.tsx
│     not-found.tsx
│     globals.css
│── components/
│     Navbar.tsx
│     Marquee.tsx
│     Reveal.tsx
│     Projects.tsx
│     Contact.tsx
│     icons.tsx
│     techs.ts
│── public/
│     assets/icons/
│     assets/fonts/
│     manifest.json
│     robots.txt
│     sitemap.xml
│── .github/workflows/deploy.yml
```

## Comandos

```bash
npm install     # instala dependências
npm run dev     # servidor de desenvolvimento
npm run build   # gera o build estático (pasta out/)
```

## Publicação

Deploy automático via GitHub Actions: ao dar push na branch `master`, o workflow constrói o site e publica na GitHub Pages. Nenhum comando manual é necessário.

## Seções

Hero, marquee de tecnologias, Sobre, Processo, Projetos, CTA e Contato. Tema escuro com destaque azul, cards arredondados e tipografia Poppins.