import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "@/hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {
  test("retorna quantidade de tarefas", () => {
    const { result, rerender } = renderHook(
      ({ tasks }) => useContadorDeTarefas(tasks),
      {
        initialProps: {
          tasks: [
            { id: "1", title: "A" },
            { id: "2", title: "B" },
          ],
        },
      }
    );

    expect(result.current).toBe(2);

    rerender({ tasks: [{ id: "1", title: "A" }] });
    expect(result.current).toBe(1);

    rerender({ tasks: [] });
    expect(result.current).toBe(0);
  });
});
