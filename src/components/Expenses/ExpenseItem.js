import Card from "../UI/Card";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <li>
      <Card className={classes["expense-item"]}>
        <div className={classes["expense-date"]}>
          <div className={classes["expense-date__month"]}>{month}</div>
          <div className={classes["expense-date__year"]}>{year}</div>
          <div className={classes["expense-date__day"]}>{day}</div>
        </div>
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-payee"]}>{props.payee}</div>
          <div className={classes["expense-item__price"]}>{props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
<div className="expense-date"></div>;
