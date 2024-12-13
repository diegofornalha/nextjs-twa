# Estrutura do Projeto

## Diretórios Principais

### `/src`

Raiz do código fonte do projeto

### `/src/app`

- **Propósito**: Páginas e rotas da aplicação (App Router do Next.js)
- **Conteúdo**:
  - `layout.tsx`: Layout principal da aplicação
  - `page.tsx`: Página inicial
  - `(routes)/`: Subdiretórios para diferentes rotas
  - `error.tsx`: Componente de tratamento de erros
  - `loading.tsx`: Componente de loading global

### `/src/components`

- **Propósito**: Componentes reutilizáveis da interface
- **Subdiretórios**:
  - `/ui`: Componentes básicos de UI (botões, inputs, cards)
  - `/layout`: Componentes de estrutura (header, footer, sidebar)
  - `/forms`: Componentes relacionados a formulários
  - `/modals`: Componentes de modais e diálogos
  - `/data-display`: Componentes para exibição de dados (tabelas, listas)

### `/src/hooks`

- **Propósito**: Custom hooks reutilizáveis
- **Conteúdo**:
  - Hooks para gerenciamento de estado
  - Hooks para lógica de negócio
  - Hooks para interações com APIs

### `/src/services`

- **Propósito**: Serviços e integrações
- **Conteúdo**:
  - Chamadas de API
  - Serviços de autenticação
  - Integrações com terceiros

### `/src/utils`

- **Propósito**: Funções utilitárias
- **Subdiretórios**:
  - `/formatters`: Funções de formatação
  - `/validators`: Funções de validação
  - `/helpers`: Funções auxiliares gerais

### `/src/types`

- **Propósito**: Tipos TypeScript compartilhados
- **Conteúdo**:
  - Interfaces
  - Types
  - Enums

### `/src/constants`

- **Propósito**: Constantes e configurações
- **Conteúdo**:
  - Valores fixos
  - Configurações
  - Textos estáticos

### `/src/styles`

- **Propósito**: Estilos globais e temas
- **Conteúdo**:
  - Configurações do Tailwind
  - Variáveis CSS globais
  - Temas e tokens de design

### `/src/context`

- **Propósito**: Contextos do React
- **Conteúdo**:
  - Providers
  - Store global
  - Gerenciamento de estado compartilhado

## Arquivos de Configuração

### Na Raiz

- `next.config.js`: Configuração do Next.js
- `tailwind.config.ts`: Configuração do Tailwind CSS
- `tsconfig.json`: Configuração do TypeScript
- `.env.example`: Template para variáveis de ambiente
- `.gitignore`: Arquivos ignorados pelo Git

## Boas Práticas

### Organização de Arquivos

- Um componente por arquivo
- Nomes claros e descritivos
- Agrupamento por funcionalidade
- Manter hierarquia plana quando possível

### Importações

- Usar paths absolutos
- Evitar importações circulares
- Agrupar imports por tipo

### Escalabilidade

- Estrutura preparada para crescimento
- Fácil adição de novos módulos
- Separação clara de responsabilidades
- Baixo acoplamento entre módulos

### Colaboração

- Áreas bem definidas para diferentes equipes
- Redução de conflitos de merge
- Documentação clara de responsabilidades
- Padrões consistentes em todo projeto
