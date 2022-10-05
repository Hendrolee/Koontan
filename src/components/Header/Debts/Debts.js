import { useSelector } from "react-redux";
import DebtsList from "./DebtsList";
import Button from "../../UI/Button/Button";

const Debts = (props) => {
  const expenses = useSelector((state) => state.expenses.expenseItems);
  const arrayIsEmpty = expenses.length === 0;

  // filter the sharedWith user (Hardcoded)
  const filteredValue = expenses
    .filter((item) =>
      item.sharedWith.find((member) => member.value === "Patrick")
    )
    .map((filteredExpense) => {
      let numberOfUsers = filteredExpense.sharedWith.length;
      let newObject = {
        ...filteredExpense,
        payable: filteredExpense.amount / numberOfUsers,
      };
      return newObject;
    });

  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <DebtsList value={filteredValue} />
      <Button onClick={props.onCancel}>Close</Button>
    </div>
  );
};

export default Debts;

// Needs cleanup variables name

// Move filteredValue method to the store reducer?
// Then pass the selected name as a payload from this component to the
// action reducer?
