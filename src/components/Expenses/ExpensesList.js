import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import classes from "./ExpensesList.module.css";
import { useSelector } from "react-redux";

const ExpensesList = () => {
  const expenses = useSelector((state) => state.expenses.expense);

  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            payee={expense.payee}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
