import DebtItem from "./DebtItem";
import classes from "./DebtsList.module.css";
import Card from "../../UI/Card";

const DebtsList = (props) => {
  return (
    <Card className={classes.expenses}>
      <ul className={classes["expenses-list"]}>
        {props.value.map((details) => (
          <DebtItem
            key={details.id}
            title={details.title}
            amount={details.amount}
            date={details.date}
            payee={details.payee}
            sharedWith={details.sharedWith}
            payable={details.payable}
          />
        ))}
      </ul>
    </Card>
  );
};

export default DebtsList;
