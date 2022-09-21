import { useState } from "react";
import { useSelector } from "react-redux";
import DebtsList from "./DebtsList";

const Debts = (props) => {
  const [debtsSummary, setDebtsSummary] = useState([]);

  const expenses = useSelector((state) => state.expenses.expense);
  const arrayIsEmpty = expenses.length === 0;

  let filteredValue = [];

  // filter the sharedWith user (Hardcoded)
  const filteredValueTest = expenses.filter((user) =>
    user.sharedWith.find((individual) => individual.value === "Patrick")
  );

  console.log(filteredValueTest);

  //Calculate payable

  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <DebtsList value={filteredValueTest} />
      <button onClick={props.onCancel}>Close</button>
    </div>
  );
};

export default Debts;
