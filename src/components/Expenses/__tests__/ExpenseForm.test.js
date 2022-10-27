import { screen, render } from "@testing-library/react";
import ExpensesForm from "../ExpensesForm";
import { Provider } from "react-redux";
import store from "../../store";

const MockExpenseForm = () => {
  return (
    <Provider store={store}>
      <ExpensesForm />
    </Provider>
  );
};

describe("ExpenseForm component", () => {
  describe("renders input fields", () => {
    test("title input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("title-input");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });

    test("amount input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("amount-input");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "number");
    });

    test("date input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("date-input");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "date");
    });

    test("payee input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("payee-input");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement).toHaveAttribute("type", "text");
    });

    test("sharedWith input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByText(/shared/i);
      expect(inputElement).toBeInTheDocument();
    });
  });
});
