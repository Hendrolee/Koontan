import React from "react";

const ExpenseContext = React.createContext({
  expenseDetails: [],
  onSaveExpense: (data) => {},
});

export default ExpenseContext;
