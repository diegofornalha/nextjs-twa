# Estrutura do Projeto

## Diretórios Principais

```plaintext
.
├── .next/                  # Build do Next.js (ignorado no git)
├── node_modules/          # Dependências (ignorado no git)
├── public/                # Assets estáticos
└── src/                   # Código fonte da aplicação
```

## Arquivos de Configuração

```plaintext
.
├── .cursorrules          # Regras do cursor
├── .cursorignore        # Arquivos ignorados pelo cursor
├── .gitignore           # Arquivos ignorados pelo Git
├── eslint.config.mjs    # Configuração do ESLint
├── next.config.js       # Configuração principal do Next.js
├── next.config.ts       # Tipos da configuração do Next.js
├── next-env.d.ts        # Declarações de tipos do Next.js
├── package.json         # Manifesto do projeto
├── package-lock.json    # Versões exatas das dependências
├── postcss.config.mjs   # Configuração do PostCSS
├── README.md           # Documentação principal
├── tailwind.config.ts  # Configuração do Tailwind CSS
└── tsconfig.json       # Configura��ão do TypeScript
```

## Explicação dos Arquivos

### Configuração do Projeto

- `package.json`: Manifesto do projeto e suas dependências
- `package-lock.json`: Versões exatas das dependências
- `tsconfig.json`: Configuração do TypeScript
- `README.md`: Documentação do projeto

### Next.js

- `next.config.js`: Configuração do Next.js
- `next.config.ts`: Tipos para configuração do Next.js
- `next-env.d.ts`: Tipos globais do Next.js

### Estilização

- `postcss.config.mjs`: Configuração do PostCSS
- `tailwind.config.ts`: Configuração do Tailwind CSS

### Linting e Formatação

- `eslint.config.mjs`: Regras de linting
- `.cursorrules`: Configuração do cursor
- `.cursorignore`: Arquivos ignorados pelo cursor

### Controle de Versão

- `.gitignore`: Arquivos e pastas ignorados pelo Git

## Observações

- Todos estes arquivos devem permanecer na raiz do projeto
- Não mover para subpastas para manter compatibilidade
- Código fonte da aplicação deve ficar em `src/`
- Assets estáticos devem ficar em `public/`
