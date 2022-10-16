import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

describe("Options component", () => {
  test("renders 2 (two) buttons", () => {
    render(<Options />);
    const buttonElements = screen.getAllByRole("button");
    expect(buttonElements.length).toBe(2);
  });

  test('renders "Debts" button', () => {
    render(<Options />);
    const buttonElement = screen.getByRole("button", { name: "Debts" });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders "Add Expenses" button', () => {
    render(<Options />);
    const buttonElement = screen.getByRole("button", { name: "Add Expenses" });
    expect(buttonElement).toBeInTheDocument();
  });
});
