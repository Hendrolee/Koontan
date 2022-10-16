import { Fragment, useState } from "react";
import Card from "../UI/Card/Card";
import ExpenseModal from "../UI/Modal/ExpenseModal";
import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

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
        <ExpenseModal id={props.id} onCancel={stopEditingExpenseHandler} />
      )}
      <Card
        onClick={startEditingExpenseHandler}
        className={classes["expense-item"]}
      >
        <ExpenseDate date={props.date} />
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
