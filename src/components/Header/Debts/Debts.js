import { useState } from "react";
import { useSelector } from "react-redux";
import DebtsList from "./DebtsList";

const Debts = (props) => {
  const [debtsSummary, setDebtsSummary] = useState([]);

  const expenses = useSelector((state) => state.expenses.expense);
  const arrayIsEmpty = expenses.length === 0;

  let filteredValue = [];
  console.log(expenses);

  // filter the sharedWith user
  for (let i = 0; i < expenses.length; i++) {
    let searchUser = expenses.filter(
      (expense) => expense.sharedWith[i].value === "Patrick"
    );

    if (searchUser.length !== 0) {
      filteredValue.push(searchUser);
    }
  }

  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <DebtsList value={filteredValue} />
      <button onClick={props.onCancel}>Close</button>
    </div>
  );
};

export default Debts;
