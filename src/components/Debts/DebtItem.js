import classes from "./DebtItem.module.css";
import Card from "../UI/Card/Card";
import DebtModal from "../UI/Modal/DebtModal";
import { Fragment, useState } from "react";

const DebtItem = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const [userHasPaid, setUserHasPaid] = useState(false);

  const expandDetailsHandler = () => {
    setDisplayModal(true);
  };

  const closeDetailsHandler = () => {
    setDisplayModal(false);
  };

  const paymentConfirmationHandler = (value) => {
    setUserHasPaid(value);
  };

  const paymentControlClasses = userHasPaid
    ? `${classes["expense-item__details"]} ${classes.paidIndicator}`
    : `${classes["expense-item__details"]}`;

  return (
    <Fragment>
      {displayModal && (
        <DebtModal
          title={props.title}
          amount={props.amount}
          date={props.date}
          payee={props.payee}
          sharedWith={props.sharedWith}
          payable={props.payable}
          onConfirm={closeDetailsHandler}
          onPaymentConfirmation={paymentConfirmationHandler}
        />
      )}
      <Card className={classes["expense-item"]}>
        <div>
          <h1>Pay</h1>
        </div>
        <div className={classes["expense-item__description"]}>
          <div className={classes["expense-item__price"]}>${props.payable}</div>
          <span
            onClick={expandDetailsHandler}
            className={paymentControlClasses}
          ></span>
        </div>
        <div className={classes["expense-payee"]}>{props.payee}</div>
      </Card>
    </Fragment>
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
