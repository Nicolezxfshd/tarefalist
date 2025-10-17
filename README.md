## Lista de Tarefas (Next.js 15 + App Router + TypeScript)

  Aplicação simples para listar, adicionar e remover tarefas, com foco em componentes reutilizáveis, Server Components, hooks personalizados e testes unitários usando Jest e Testing Library.

### Funcionalidades
- Exibir lista de tarefas vinda de um arquivo simulado (como se fosse uma API) em `data/tasks.ts`.
- Adicionar novas tarefas via formulário controlado (`components/NovaTarefa.tsx`).
- Remover tarefas individualmente na lista (`components/ListaDeTarefas.tsx`).
 - Contar tarefas com hook personalizado `useContadorDeTarefas`.

### Testes
```bash
npm test
# ou
npm run test:watch
```

### Build de produção
```bash
npm run build
npm start
```

### CI/CD (GitHub Actions)
- **CI**: ao dar push ou abrir PR para `main`, o workflow em `.github/workflows/ci.yml` roda:
  - Instalação (`npm ci`)
  - Lint (`npm run lint`)
  - Testes (`npm run test`)
  - Build (`npm run build`)
- **CD (GitHub Pages)**: ao dar push na `main`, o workflow `.github/workflows/deploy-pages.yml` compila, exporta estático (`npm run export`) e publica o conteúdo de `out/` no GitHub Pages.

#### Publicação
1) No repositório do GitHub, em Settings → Pages, selecione "Build and deployment: GitHub Actions".
2) O deploy gera uma URL pública. Atualize abaixo quando disponível.

- **URL publicado**: https://<seu_usuario>.github.io/<seu_repositorio>/

Observações:
- `next.config.ts` está configurado com `output: "export"` e `images.unoptimized = true` para export estático.
- Se o projeto estiver em uma URL do tipo `/<repositorio>`, configure `basePath`/`assetPrefix` se necessário (ver comentários no `next.config.ts`).

### Publicação no GitHub
1) Crie um repositório vazio no GitHub (anote a URL SSH/HTTPS).
2) No diretório do projeto, execute:
```bash
git init
git add -A
git commit -m "feat: tarefas com Next.js 15, hooks e testes"
git branch -M main
git remote add origin <URL_DO_SEU_REPO>
```

### Observações
- O data fetching da página usa Server Components. Interatividade (adicionar/remover) ocorre no cliente.
- Os testes não dependem de API externa; dados são simulados e módulos são mockados quando necessário.
