# Ignite Feed

Ignite Feed é uma aplicação web desenvolvida com Next.js e TypeScript, que simula um feed de publicações semelhante a redes sociais. O projeto faz parte do bootcamp Ignite da Rocketseat.

## Funcionalidades
- Visualização de posts em um feed
- Interface moderna e responsiva
- Componentização utilizando React
- Utilização de hooks customizados
- Estilização com CSS global e componentes estilizados

## Tecnologias Utilizadas
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.io/) para gerenciamento de pacotes
- CSS Modules

## Estrutura do Projeto
```
ignite-feed/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ignite-feed.tsx
│   ├── theme-provider.tsx
│   └── ui/
│       └── ...
├── hooks/
│   └── ...
├── lib/
│   └── utils.ts
├── public/
│   └── ... (imagens)
├── styles/
│   └── globals.css
├── package.json
├── tsconfig.json
└── README.md
```

## Como rodar o projeto

1. Instale as dependências:
   ```bash
   pnpm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   pnpm dev
   ```
3. Acesse `http://localhost:3000` no seu navegador.

## Sobre
Este projeto foi desenvolvido para fins de estudo e prática de conceitos modernos de desenvolvimento front-end.

---

Feito com 💜 por Ana Siqueira
