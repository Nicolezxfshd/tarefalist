import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

jest.mock("@/data/tasks", () => ({
  getTasks: jest.fn().mockResolvedValue([
    { id: "1", title: "Estudar Next.js 15" },
    { id: "2", title: "Escrever testes unitários" },
  ]),
}));

describe("Página inicial (Server Component)", () => {
  test("renderiza título e lista de tarefas (dados simulados)", async () => {
    const ui = await Home();
    render(ui);

    expect(
      screen.getByRole("heading", { name: /lista de tarefas/i })
    ).toBeInTheDocument();

    const list = screen.getByLabelText("lista-de-tarefas");
    expect(list).toBeInTheDocument();
    expect(list.querySelectorAll("li").length).toBe(2);
  });
});
