import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { Provider } from "react-redux";
import ExpensesForm from "../../../Expenses/ExpensesForm";
import store from "../../../store";
import Debts from "../../../Debts/Debts";

const MockOptions = () => {
  return (
    <Provider store={store}>
      <Options>
        <Debts />
        <ExpensesForm />
      </Options>
    </Provider>
  );
};

describe("Options component", () => {
  describe("Visual representation", () => {
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
      const buttonElement = screen.getByRole("button", {
        name: "Add Expenses",
      });
      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe("Buttons functionality", () => {
    test('renders ExpensesForm when "Add Expenses" button is clicked', async () => {
      render(<MockOptions />);

      const buttonElement = await screen.findByRole("button", {
        name: "Add Expenses",
      });
      userEvent.click(buttonElement);

      const formElement = screen.getByRole("form");

      expect(formElement).toBeInTheDocument();
    });

    test('renders DebtsList when "Debts" button is clicked', async () => {
      render(<MockOptions />);

      const buttonElement = await screen.findByRole("button", {
        name: "Debts",
      });
      userEvent.click(buttonElement);

      const debtsElement = screen.getByText(/clean of debts/i);

      expect(debtsElement).toBeInTheDocument();
    });
  });
});
