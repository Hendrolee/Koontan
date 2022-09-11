import ExpensesForm from "../../Expenses/ExpensesForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div>
      <ExpensesForm onCancel={props.onCancel} />
    </div>
  );
};

export default NewExpense;
