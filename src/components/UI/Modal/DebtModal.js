import { Fragment } from "react";
import ReactDOM from "react-dom";

import Button from "../Button/Button";
import Card from "../Card/Card";
import Backdrop from "../Backdrop/Backdrop";
import classes from "./DebtModal.module.css";

const ModalOverlay = (props) => {
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const date = `${day} ${month} ${year}`;

  const members = props.sharedWith.map((person) => person.value).join(", ");

  console.log(props.date);
  const confirmedPayment = (event) => {
    if (event.target.value === "true") {
      props.onPaymentConfirmation(true);
    } else {
      props.onPaymentConfirmation(false);
    }
    props.onConfirm();
  };

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Have you paid?</h2>
      </header>
      <div className={classes.content}>
        <ul>
          <li>{`Item: ${props.title}`}</li>
          <li>{`Total Amount: $${props.amount}`}</li>
          <li>{`Date: ${date}`}</li>
          <li>{`Shared With: ${members}`}</li>
          <li>{`Payee: ${props.payee}`}</li>
        </ul>
      </div>
      <footer className={classes.actions}>
        <Button onClick={confirmedPayment} value={true}>
          Yes
        </Button>
        <Button onClick={confirmedPayment} value={false}>
          No
        </Button>
      </footer>
    </Card>
  );
};

const DebtModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          amount={props.amount}
          date={props.date}
          payee={props.payee}
          sharedWith={props.sharedWith}
          payable={props.payable}
          onConfirm={props.onConfirm}
          onPaymentConfirmation={props.onPaymentConfirmation}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default DebtModal;
