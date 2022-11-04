import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpensesForm from "../ExpensesForm";
import selectEvent from "react-select-event";
import { Provider } from "react-redux";
import store from "../../store";
import Options from "../../layout/Content/Options";

const MockExpenseForm = (props) => {
  return (
    <Provider onSubmit={props.onSubmit} store={store}>
      <ExpensesForm onSubmit={props.onSubmit} />
    </Provider>
  );
};

const RenderWithOptions = () => {
  return (
    <Provider store={store}>
      <Options>
        <ExpensesForm />
      </Options>
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

  describe("renders error messages", () => {
    test("title input error", async () => {
      render(<MockExpenseForm />);
      const inputElement = await screen.findByTestId("title-input");
      fireEvent.blur(inputElement);

      const outputElement = screen.getByTestId("title-error");
      expect(outputElement).toBeInTheDocument();
    });

    test("amount input error", async () => {
      render(<MockExpenseForm />);
      const inputElement = await screen.findByTestId("amount-input");
      fireEvent.blur(inputElement);

      const outputElement = screen.getByTestId("amount-error");
      expect(outputElement).toBeInTheDocument();
    });

    test("date input error", async () => {
      render(<MockExpenseForm />);
      const inputElement = await screen.findByTestId("date-input");
      fireEvent.blur(inputElement);

      const outputElement = screen.getByTestId("date-error");
      expect(outputElement).toBeInTheDocument();
    });

    test("payee input error", async () => {
      render(<MockExpenseForm />);
      const inputElement = await screen.findByTestId("payee-input");
      fireEvent.blur(inputElement);

      const outputElement = screen.getByTestId("payee-error");
      expect(outputElement).toBeInTheDocument();
    });

    test("sharedWith input error", async () => {
      render(<MockExpenseForm />);
      const inputElement = await screen.findByRole("combobox");
      fireEvent.blur(inputElement);

      const outputElement = screen.getByTestId("sharedWith-error");
      expect(outputElement).toBeInTheDocument();
    });
  });

  describe("buttons", () => {
    test('renders "Add" button', () => {
      render(<MockExpenseForm />);

      const buttonElement = screen.getByRole("button", { name: "Add" });
      expect(buttonElement).toBeInTheDocument();
    });

    test('renders "Cancel" button', () => {
      render(<MockExpenseForm />);

      const buttonElement = screen.getByRole("button", { name: "Cancel" });
      expect(buttonElement).toBeInTheDocument();
    });

    describe("form submission", () => {
      test('clicking "Cancel" button should close the form', async () => {
        render(<RenderWithOptions />);

        // Click to open the form
        const addExpenseButtonElement = await screen.findByRole("button", {
          name: "Add Expenses",
        });
        userEvent.click(addExpenseButtonElement);

        // Click cancel button to close the form
        const buttonElement = await screen.findByRole("button", {
          name: "Cancel",
        });
        userEvent.click(buttonElement);

        const inputElement = screen.queryByTestId("form");
        expect(inputElement).toBe(null);
      });

      test("should clear all input fields when submitted", async () => {
        render(<MockExpenseForm />);

        const titleInputElement = screen.getByTestId("title-input");
        fireEvent.change(titleInputElement, { target: { value: "Lunch" } });

        const amountInputElement = screen.getByTestId("amount-input");
        fireEvent.change(amountInputElement, { target: { value: "50" } });

        const dateInputElement = screen.getByTestId("date-input");
        fireEvent.change(dateInputElement, { target: { value: "2020-10-10" } });

        const payeeInputElement = screen.getByTestId("payee-input");
        fireEvent.change(payeeInputElement, { target: { value: "Patrick" } });

        const selectInputElement = await screen.findByRole("combobox");
        await selectEvent.select(selectInputElement, ["Patrick", "Fayola"]);

        const formElement = screen.queryByTestId("form");
        fireEvent.submit(formElement);
        expect(formElement).toHaveFormValues({
          title: "",
          amount: null,
          date: "",
          payee: "",
          sharedWith: "",
        });
      });

      // test("should submit form when all fields are filled", async () => {
      //   const onSubmit = jest.fn();
      //   render(<MockExpenseForm onSubmit={onSubmit} />);

      //   const titleInputElement = screen.getByTestId("title-input");
      //   fireEvent.change(titleInputElement, { target: { value: "Lunch" } });

      //   const amountInputElement = screen.getByTestId("amount-input");
      //   fireEvent.change(amountInputElement, { target: { value: "50" } });

      //   const dateInputElement = screen.getByTestId("date-input");
      //   fireEvent.change(dateInputElement, { target: { value: "2020-10-10" } });

      //   const payeeInputElement = screen.getByTestId("payee-input");
      //   fireEvent.change(payeeInputElement, { target: { value: "Patrick" } });

      //   const selectInputElement = await screen.findByRole("combobox");
      //   await selectEvent.select(selectInputElement, ["Patrick", "Fayola"]);

      //   const addButtonElement = await screen.findByRole("button", {
      //     name: /add/i,
      //   });
      //   fireEvent.click(addButtonElement);

      //   expect(onSubmit).toHaveBeenCalled();
      // });
    });
  });
});

// implement beforeEach, before each test, we attempt to open the form by clicking add expenses
