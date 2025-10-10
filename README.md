## Lista de Tarefas (Next.js 15 + App Router + TypeScript)

Aplicação simples para listar, adicionar e remover tarefas, com foco em componentes reutilizáveis, Server Components, hooks personalizados e testes unitários usando Jest e Testing Library.

### Funcionalidades
- Exibir lista de tarefas vinda de um arquivo simulado (como se fosse uma API) em `data/tasks.ts`.
- Adicionar novas tarefas via formulário controlado (`components/NovaTarefa.tsx`).
- Remover tarefas individualmente na lista (`components/ListaDeTarefas.tsx`).
- Contar tarefas com hook personalizado `useContadorDeTarefas`.
- Testes unitários de componentes, hook e página.

### Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Jest + Testing Library (jsdom)
- Tailwind CSS (classes utilitárias)

### Estrutura
- `app/page.tsx` (Server Component): carrega tarefas com `getTasks()` e renderiza `TarefasClient`.
- `components/TarefasClient.tsx` (Client): gerencia estado local, usa o hook e compõe a UI.
- `components/NovaTarefa.tsx` (Client): formulário de adição.
- `components/ListaDeTarefas.tsx` (Client): lista com botão de remover.
- `hooks/useContadorDeTarefas.ts`: retorna total de tarefas.
- `data/tasks.ts`: dados simulados (`getTasks`, `addTask`, `removeTask`).
- `tests/`: `NovaTarefa.test.tsx`, `useContadorDeTarefas.test.ts`, `page.test.tsx`.

### Requisitos
- Node 18+ (recomendado 20+)

### Instalação
```bash
npm install
```

### Executar em desenvolvimento
```bash
npm run dev
# http://localhost:3000
```

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

### Publicação no GitHub
1) Crie um repositório vazio no GitHub (anote a URL SSH/HTTPS).
2) No diretório do projeto, execute:
```bash
git init
git add -A
git commit -m "feat: tarefas com Next.js 15, hooks e testes"
git branch -M main
git remote add origin <URL_DO_SEU_REPO>
git push -u origin main
```

### Observações
- O data fetching da página usa Server Components. Interatividade (adicionar/remover) ocorre no cliente.
- Os testes não dependem de API externa; dados são simulados e módulos são mockados quando necessário.
