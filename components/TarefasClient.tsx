"use client";

import { useState } from "react";
import type { Task } from "@/data/tasks";
import { addTask, removeTask } from "@/data/tasks";
import NovaTarefa from "@/components/NovaTarefa";
import ListaDeTarefas from "@/components/ListaDeTarefas";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

export default function TarefasClient({ initialTasks }: { initialTasks: Task[] }) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const total = useContadorDeTarefas(tasks);

  async function handleAdd(title: string) {
    // Simula chamada e atualiza estado local
    const created = await addTask(title);
    setTasks((prev) => [created, ...prev]);
  }

  async function handleRemove(id: string) {
    await removeTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur px-6 py-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">
          Tarefas <span className="text-slate-400">({total})</span>
        </h2>
      </div>
      <NovaTarefa onAdd={handleAdd} />
      <ListaDeTarefas tasks={tasks} onRemove={handleRemove} />
    </section>
  );
}
