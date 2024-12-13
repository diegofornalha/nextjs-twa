# Estrutura do Projeto

## Diretório `/src`

- **Propósito**: Raiz do código fonte
- **Subdiretórios**:
  - `/@types`: Definições de tipos TypeScript (env.d.ts)
  - `/app`: Páginas e rotas Next.js
    - `layout.tsx`: Layout principal
    - `page.tsx`: Página inicial
  - `/components`: Componentes reutilizáveis
    - `/ui`: Componentes base (Button.tsx)
  - `/constants`: Constantes globais (config.ts)
  - `/hooks`: Hooks personalizados (useLocalStorage.ts)
  - `/modules`: Módulos funcionais
    - `/upload`: Módulo de upload
      - `/components`: Upload.tsx
      - `/services`: uploadService.ts
  - `/shared`: Código compartilhado
    - `/components/ui`: Componentes base (Button.tsx)
  - `/styles`: Estilos globais (globals.css)

### Organização de Tipos

- `/@types`: Contém definições globais de tipos
  - `env.d.ts`: Tipos para variáveis de ambiente
- Tipos específicos junto aos seus módulos

### `/modules/upload`

- **Propósito**: Funcionalidade de upload
- **Arquivos**:
  - `/components/Upload.tsx`: Componente de upload
  - `/services/uploadService.ts`: Serviço de upload

### `/shared`

- **Propósito**: Código reutilizável
- **Subdiretórios**:
  - `/components/ui`: Componentes base
    - `Button.tsx`: Componente de botão
  - `/services`: Serviços compartilhados

### `/app`

- **Propósito**: Páginas e rotas Next.js
- **Arquivos**:
  - `layout.tsx`: Layout principal da aplicação
  - `page.tsx`: Página inicial

## Boas Práticas

### Organização de Arquivos

- Um componente por arquivo
- Nomes claros e descritivos
- Agrupamento por funcionalidade
- Manter hierarquia plana quando possível
- Tipos próximos ao código que os utiliza

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
