import { useState } from "react";

import Debts from "./Debts/Debts";
import classes from "../Header/Options.module.css";
import NewExpense from "./NewExpense/NewExpense";

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
          <button onClick={startEditingDebtsHandler}>Debts</button>
          <button onClick={startEditingExpenseHandler}>Add Expense</button>
        </div>
      )}
      {isEditingExpense && !isEditingDebts && (
        <NewExpense
          onAddExpense={props.onAddExpenses}
          onCancel={stopEditingExpenseHandler}
        />
      )}
      {isEditingDebts && !isEditingExpense && (
        <Debts onCancel={stopEditingDebtsHandler} />
      )}
    </div>
  );
};

export default Options;
