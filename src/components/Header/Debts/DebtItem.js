import classes from "./DebtItem.module.css";
import Card from "../../UI/Card";

const DebtItem = (props) => {
  return (
    <li>
      <Card className={classes["expense-item"]}>
        <div className={classes["expense-item__description"]}>
          <h2>{props.title}</h2>
          <div className={classes["expense-payee"]}>{props.payee}</div>
          <div className={classes["expense-item__price"]}>${props.payable}</div>
        </div>
      </Card>
    </li>
  );
};

export default DebtItem;
