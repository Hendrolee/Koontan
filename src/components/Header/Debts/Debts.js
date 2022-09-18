import { useContext, useState } from "react";
// import ExpensesList from "../../Expenses/ExpensesList";
import DebtsList from "./DebtsList";
import ExpenseContext from "../../store/expense-context";

const Debts = (props) => {
  const [debtsSummary, setDebtsSummary] = useState([]);

  const expenseCtx = useContext(ExpenseContext);
  const arrayIsEmpty = expenseCtx.expenseDetails.length === 0;

  let filteredValue = [];
  for (let i = 0; i < expenseCtx.expenseDetails.length; i++) {
    let searchUser = expenseCtx.expenseDetails.filter(
      (expense) => expense.sharedWith[i].value === "Patrick"
    );

    if (searchUser.length !== 0) {
      filteredValue.push(searchUser);
    }
    console.log(filteredValue);
  }

  // Filter based on person
  // const filteredSharedWith = expenseCtx.expenseDetails[0].sharedWith[0].value;

  // console.log(expenseCtx.expenseDetails[0].sharedWith[0]);
  // console.log(filteredSharedWith);
  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <DebtsList value={filteredValue} />
      <button onClick={props.onCancel}>Close</button>
    </div>
  );
};

export default Debts;
