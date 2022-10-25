import { useAppSelector } from "../../hooks/selector-hooks";
import DebtsList from "./DebtsList";
import Button from "../UI/Button/Button";
import { createDebt, findUserExpenses } from "../../utils/debtFilter";

const Debts = (props) => {
  const expenses = useAppSelector((state) => state.expenses.expenseItems);
  const arrayIsEmpty = expenses.length === 0;

  // filter the sharedWith user (Hardcoded)
  const userExpenses = findUserExpenses(expenses, "Patrick");
  const debtObject = createDebt(userExpenses);

  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <DebtsList value={debtObject} />
      <Button onClick={props.onCancel}>Close</Button>
    </div>
  );
};

export default Debts;

// Needs cleanup variables name

// Move filteredValue method to the store reducer?
// Then pass the selected name as a payload from this component to the
// action reducer?
