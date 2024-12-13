# Estrutura do Projeto

## Diretórios Principais

### `/src`

- **Propósito**: Raiz do código fonte
- **Subdiretórios**:
  - `/app`: Páginas e rotas (Next.js App Router)
  - `/modules`: Módulos funcionais da aplicação
  - `/shared`: Código compartilhado entre módulos

### `/src/modules`

- **Propósito**: Separação por domínios funcionais
- **Subdiretórios**:
  - `/auth`: Autenticação e autorização
    - `/components`
    - `/hooks`
    - `/services`
    - `/types`
    - `/utils`
  - `/upload`: Gerenciamento de uploads
    - `/components`
    - `/hooks`
    - `/services`
    - `/types`
    - `/utils`
  - `/user`: Gestão de usuários
    - `/components`
    - `/hooks`
    - `/services`
    - `/types`
    - `/utils`

### `/src/shared`

- **Propósito**: Código reutilizável entre módulos
- **Subdiretórios**:
  - `/components`: Componentes base reutilizáveis
    - `/ui`: Componentes básicos (Button, Input, etc)
    - `/layout`: Componentes de estrutura
    - `/data-display`: Componentes de exibição
  - `/hooks`: Hooks genéricos
  - `/services`: Serviços compartilhados
  - `/utils`: Funções utilitárias
    - `/formatters`
    - `/validators`
    - `/platform`
  - `/styles`: Estilos globais
  - `/types`: Tipos TypeScript comuns
  - `/constants`: Constantes globais
  - `/config`: Configurações da aplicação

### `/src/app`

- **Propósito**: Páginas e rotas Next.js
- **Subdiretórios**:
  - `/api`: Rotas da API
  - `/(routes)`: Rotas da aplicação
  - `/layout.tsx`: Layout principal
  - `/page.tsx`: Página inicial

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
