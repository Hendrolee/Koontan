import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  return (
    <div className={classes["expense-date"]}>
      <div className={classes["expense-date__month"]}>{props.date.month}</div>
      <div className={classes["expense-date__year"]}>{props.date.year}</div>
      <div className={classes["expense-date__day"]}>{props.date.day}</div>
    </div>
  );
};

export default ExpenseDate;
