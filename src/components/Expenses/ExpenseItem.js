import { Fragment, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./ExpenseItem.module.css";
import ExpensesForm from "./ExpensesForm";

const ExpenseItem = (props) => {
  const [isEditingExpense, setIsEditingExpense] = useState(false);
  const startEditingExpenseHandler = () => {
    setIsEditingExpense(true);
  };
  const stopEditingExpenseHandler = () => {
    setIsEditingExpense(false);
  };

  return (
    <Fragment>
      {isEditingExpense && (
        <ExpensesForm onCancel={stopEditingExpenseHandler} />
      )}
      <Card
        onClick={startEditingExpenseHandler}
        className={classes["expense-item"]}
      >
        <div className={classes["expense-date"]}>
          <div className={classes["expense-date__month"]}>
            {props.date.month}
          </div>
          <div className={classes["expense-date__year"]}>{props.date.year}</div>
          <div className={classes["expense-date__day"]}>{props.date.day}</div>
        </div>
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-payee"]}>{props.payee}</div>
          <div className={classes["expense-item__price"]}>${props.amount}</div>
        </div>
      </Card>
    </Fragment>
  );
};

export default ExpenseItem;
