import { useState } from "react";
import ExpenseContext from "./expense-context";

const ExpenseProvider = (props) => {
  const [expenseState, setExpenseState] = useState([]);

  const saveExpenseHandler = (data) => {
    setExpenseState((prevExpenses) => {
      const updatedExpenses = [...prevExpenses];
      updatedExpenses.unshift({
        title: data.title,
        amount: data.amount,
        date: data.date,
        payee: data.payee,
        sharedWith: data.sharedWith,
        id: Math.random().toString(),
      });
      return updatedExpenses;
    });
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenseDetails: expenseState,
        onSaveExpense: saveExpenseHandler,
      }}
    >
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
