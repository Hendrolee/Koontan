import classes from "./DebtItem.module.css";
import Card from "../../UI/Card";
import { useSelector } from "react-redux";

const DebtItem = (props) => {
  const expenseData = useSelector((state) => state.expenses.expenseItems);
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <div>
          <h1>Pay</h1>
        </div>
        <div className={classes["expense-item__description"]}>
          <div className={classes["expense-item__price"]}>${props.payable}</div>
          <span className={classes["expense-item__details"]}></span>
        </div>
        <div className={classes["expense-payee"]}>{props.payee}</div>
      </Card>
    </li>
  );
};

export default DebtItem;

// Basic
// DebtItem shoud have onClick button to show expense's details
// Once clicked details will be shown in overlay
// Porting required

// DebtItem should have a field indicator to tell whether expense has been paid or otherwise.

// Advance
// Once debt has been paid, user can archive the debt.
// Archived debts can be accessed on another page/?
