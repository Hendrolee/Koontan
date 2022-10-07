import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card/Card";
import classes from "./ExpensesList.module.css";
import { useSelector } from "react-redux";

const ExpensesList = () => {
  const expenses = useSelector((state) => state.expenses.expenseItems);

  console.log(expenses);
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
