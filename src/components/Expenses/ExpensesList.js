import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card/Card";
import classes from "./ExpensesList.module.css";
import { useAppSelector } from "../../hooks/selector-hooks";

const ExpensesList = () => {
  const expenses = useAppSelector((state) => state.expenses.expenseItems);
  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            payee={expense.payee}
            sharedWith={expense.sharedWith}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
