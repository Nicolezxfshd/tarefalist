import { useMemo } from "react";
import type { Task } from "@/data/tasks";

export function useContadorDeTarefas(tasks: Task[]) {
  const total = useMemo(() => tasks.length, [tasks]);
  return total;
}
