import { screen, render, fireEvent, getByTestId } from "@testing-library/react";
import ExpensesForm from "../ExpensesForm";
import selectEvent from "react-select-event";
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
      const inputElement = screen.getByTestId("form");
      expect(inputElement).toHaveFormValues({ sharedWith: "" });
    });
  });

  describe("should be able to type into input fields", () => {
    test("type title input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("title-input");
      fireEvent.change(inputElement, { target: { value: "Lunch" } });
      expect(inputElement.value).toBe("Lunch");
    });

    test("type amount input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("amount-input");
      fireEvent.change(inputElement, { target: { value: "50" } });
      expect(inputElement.value).toBe("50");
    });

    test("pick date input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("date-input");
      fireEvent.change(inputElement, { target: { value: "2020-10-10" } });
      expect(inputElement.value).toBe("2020-10-10");
    });

    test("type payee input", () => {
      render(<MockExpenseForm />);
      const inputElement = screen.getByTestId("payee-input");
      fireEvent.change(inputElement, { target: { value: "Patrick" } });
      expect(inputElement.value).toBe("Patrick");
    });

    describe("Select component", () => {
      test("should be able to pick sharedWith value", async () => {
        const { getByTestId } = render(<MockExpenseForm />);

        // select two values..
        const inputElement = await screen.findByRole("combobox");
        await selectEvent.select(inputElement, ["Patrick", "Fayola"]);
        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: ["Patrick", "Fayola"],
        });

        // add a third one
        await selectEvent.select(inputElement, "Raymond");
        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: ["Patrick", "Fayola", "Raymond"],
        });
      });

      test("should be able to pick sharedWith value by typing", async () => {
        const { getByTestId } = render(<MockExpenseForm />);

        // select one values..
        const inputElement = await screen.findByRole("combobox");
        fireEvent.change(inputElement, { target: { value: "Ray" } });
        await selectEvent.select(inputElement, "Raymond");

        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: "Raymond",
        });

        // add a second one
        fireEvent.change(inputElement, { target: { value: "Fay" } });
        await selectEvent.select(inputElement, "Fayola");
        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: ["Raymond", "Fayola"],
        });
      });

      test('should select all values when "Select all" option is picked', async () => {
        const { getByTestId } = render(<MockExpenseForm />);

        const inputElement = await screen.findByRole("combobox");
        await selectEvent.select(inputElement, "Select all");

        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: ["Patrick", "Fayola", "Raymond"],
        });
      });

      test("should be able to clear all values", async () => {
        const { getByTestId } = render(<MockExpenseForm />);

        // select all values
        const inputElement = await screen.findByRole("combobox");
        await selectEvent.select(inputElement, [
          "Patrick",
          "Fayola",
          "Raymond",
        ]);
        expect(getByTestId("form")).toHaveFormValues({
          sharedWith: ["Patrick", "Fayola", "Raymond"],
        });

        // clear all values
        await selectEvent.clearAll(inputElement);
        expect(getByTestId("form")).toHaveFormValues({ sharedWith: "" });
      });
    });
  });

  // describe('renders error messages', () => {
  //   test('title input error', async () => {
  //     render(<MockExpenseForm/>)
  //     const inputElement = screen.findByTestId('title-input')
  //     userEvent.click(inputElement)

  //   })
  // })
});
