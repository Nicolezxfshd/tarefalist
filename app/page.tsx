import { getTasks } from "@/data/tasks";
import TarefasClient from "@/components/TarefasClient";

export const dynamic = "force-static";

export default async function Home() {
  const tasks = await getTasks();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-6 text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
        Lista de Tarefas
      </h1>
      <TarefasClient initialTasks={tasks} />
    </main>
  );
}
