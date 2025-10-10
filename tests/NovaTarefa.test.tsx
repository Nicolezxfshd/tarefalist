import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "@/components/NovaTarefa";

describe("<NovaTarefa />", () => {
  test("desabilita botão quando input está vazio", () => {
    const onAdd = jest.fn();
    render(<NovaTarefa onAdd={onAdd} />);

    const button = screen.getByRole("button", { name: /adicionar/i });
    expect(button).toBeDisabled();
  });

  test("habilita botão ao digitar e envia chamada onAdd", () => {
    const onAdd = jest.fn();
    render(<NovaTarefa onAdd={onAdd} />);

    const input = screen.getByLabelText("input-tarefa");
    const button = screen.getByRole("button", { name: /adicionar/i });

    fireEvent.change(input, { target: { value: "Nova tarefa" } });
    expect(button).not.toBeDisabled();

    fireEvent.click(button);
    expect(onAdd).toHaveBeenCalledWith("Nova tarefa");
    // após submit volta a ficar desabilitado
    expect(button).toBeDisabled();
  });

  test("não envia se apenas espaços em branco", () => {
    const onAdd = jest.fn();
    render(<NovaTarefa onAdd={onAdd} />);

    const input = screen.getByLabelText("input-tarefa");
    const button = screen.getByRole("button", { name: /adicionar/i });

    fireEvent.change(input, { target: { value: "   " } });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onAdd).not.toHaveBeenCalled();
  });
});
