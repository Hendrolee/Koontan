import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import classes from "./ExpensesList.module.css";
import { useContext } from "react";
import ExpenseContext from "../store/expense-context";

const ExpensesList = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>
        {expenseCtx.expenseDetails.map((details) => (
          <ExpenseItem
            key={details.id}
            title={details.title}
            amount={details.amount}
            date={details.date}
            payee={details.payee}
            sharedWith={details.sharedWith}
          />
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
