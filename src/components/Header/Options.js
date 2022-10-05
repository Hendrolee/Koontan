import { useState } from "react";

import Debts from "./Debts/Debts";
import classes from "../Header/Options.module.css";
import Button from "../UI/Button/Button";
import ExpensesForm from "../Expenses/ExpensesForm";

const Options = (props) => {
  const [isEditingExpense, setIsEditingExpense] = useState(false);
  const [isEditingDebts, setIsEditingDebts] = useState(false);

  const startEditingExpenseHandler = () => {
    setIsEditingExpense(true);
  };

  const stopEditingExpenseHandler = () => {
    setIsEditingExpense(false);
  };

  const startEditingDebtsHandler = () => {
    setIsEditingDebts(true);
  };

  const stopEditingDebtsHandler = () => {
    setIsEditingDebts(false);
  };

  return (
    <div className={classes.form}>
      {!isEditingExpense && !isEditingDebts && (
        <div>
          <Button onClick={startEditingDebtsHandler}>Debts</Button>
          <Button onClick={startEditingExpenseHandler}>Add Expenses</Button>
        </div>
      )}
      {isEditingExpense && !isEditingDebts && (
        <ExpensesForm onCancel={stopEditingExpenseHandler} />
      )}
      {isEditingDebts && !isEditingExpense && (
        <Debts onCancel={stopEditingDebtsHandler} />
      )}
    </div>
  );
};

export default Options;
