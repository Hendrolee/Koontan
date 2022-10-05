import Card from "../UI/Card/Card";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
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
    </li>
  );
};

export default ExpenseItem;
