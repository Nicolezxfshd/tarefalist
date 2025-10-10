import type { Task } from "@/data/tasks";

export default function ListaDeTarefas({
  tasks,
  onRemove,
}: {
  tasks: Task[];
  onRemove: (id: string) => void;
}) {
  if (tasks.length === 0) {
    return (
      <p
        aria-label="empty-list"
        className="text-slate-500 italic bg-white/60 border border-dashed border-slate-300 rounded-lg px-4 py-6 text-center"
      >
        Nenhuma tarefa no momento. Adicione a primeira!
      </p>
    );
  }
  return (
    <ul aria-label="lista-de-tarefas" className="space-y-3">
      {tasks.map((t) => (
        <li
          key={t.id}
          className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm hover:shadow transition ">
          <span className="size-2.5 rounded-full bg-emerald-500/80 group-hover:bg-emerald-500 transition" />
          <span className="text-slate-800 group-hover:text-slate-900 flex-1">{t.title}</span>
          <button
            aria-label={`remover-${t.id}`}
            onClick={() => onRemove(t.id)}
            className="px-3 py-1.5 text-sm rounded-lg border border-slate-200 text-slate-600 hover:text-red-600 hover:border-red-300 hover:bg-red-50 transition"
          >
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
