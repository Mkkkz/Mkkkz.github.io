# Miguel Inácio — Developer

Portfólio pessoal de Miguel Inácio, desenvolvido com **Next.js** e **React**, com export estático para GitHub Pages.

## Stack

- Next.js (App Router)
- React
- CSS puro (sem framework de estilo)
- Fontes auto-hospedadas (Poppins + Great Vibes)

## Estrutura

```
│── app/
│     layout.js
│     page.js
│     not-found.js
│     globals.css
│── components/
│     Navbar.js
│     Marquee.js
│     Reveal.js
│     Projects.js
│     Contact.js
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

O deploy é automático via GitHub Actions: ao dar push na branch `master`, o workflow constrói o site e publica na GitHub Pages. Nenhum comando manual é necessário.

## Seções

Hero, marquee de tecnologias, Sobre, Processo, Projetos, CTA e Contato. Tema escuro com destaque azul, cards arredondados e tipografia Poppins.