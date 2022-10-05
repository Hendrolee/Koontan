import ExpensesForm from "../../Expenses/ExpensesForm";

const NewExpense = (props) => {
  return (
    <div>
      <ExpensesForm onCancel={props.onCancel} />
    </div>
  );
};

export default NewExpense;
