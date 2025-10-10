"use client";

import { useState, FormEvent } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function NovaTarefa({ onAdd }: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) return; // validação simples
    onAdd(trimmed);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="form-nova-tarefa"
      className="flex gap-3 mb-6"
    >
      <input
        aria-label="input-tarefa"
        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white/90 text-slate-900 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition"
        placeholder="Digite uma nova tarefa..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        aria-label="btn-adicionar"
        className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow hover:from-blue-500 hover:to-indigo-500 active:scale-[.98] disabled:opacity-50 disabled:cursor-not-allowed transition"
        disabled={!title.trim()}
      >
        Adicionar
      </button>
    </form>
  );
}
