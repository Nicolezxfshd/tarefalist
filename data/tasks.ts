export type Task = {
  id: string;
  title: string;
};

let tasksStore: Task[] = [
  { id: "1", title: "Estudar Next.js 15" },
  { id: "2", title: "Escrever testes unitários" },
];

export async function getTasks(): Promise<Task[]> {
  // Simula uma chamada a API
  return Promise.resolve([...tasksStore]);
}

export async function addTask(title: string): Promise<Task> {
  const newTask: Task = { id: String(Date.now()), title };
  tasksStore = [newTask, ...tasksStore];
  return Promise.resolve(newTask);
}

export async function removeTask(id: string): Promise<void> {
  tasksStore = tasksStore.filter((t) => t.id !== id);
  return Promise.resolve();
}
