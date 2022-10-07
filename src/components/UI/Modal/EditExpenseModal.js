import ReactDOM from "react-dom";
import { Fragment } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Card from "../Card/Card";
import ExpensesForm from "../../Expenses/ExpensesForm";
import classes from "./EditExpenseModal.module.css";
import { useSelector } from "react-redux";

// Change modal name, both debt and expense
const ModalOverlay = (props) => {
  const expenses = useSelector((state) =>
    state.expenses.expenseItems.find((item) => item.id === props.id)
  );

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>Edit Expense</h2>
      </header>
      <div className={classes.content}>
        <ExpensesForm onCancel={props.onCancel} />
      </div>
      <footer className={classes.actions}></footer>
    </Card>
  );
};

const EditExpenseModal = (props) => {
  console.log(props.id);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay id={props.id} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default EditExpenseModal;
