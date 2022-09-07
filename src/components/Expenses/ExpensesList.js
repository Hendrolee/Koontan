import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import classes from "./ExpensesList.module.css";

const ExpensesList = (props) => {
  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>
        {props.expenses.map((expense) => (
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
