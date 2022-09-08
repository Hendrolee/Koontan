import { useState } from "react";
import ExpenseContext from "./expense-context";

const ExpenseProvider = () => {
  const [payee, setPayee] = useState("");
  const [sharedWith, setSharedWith] = useState([]);

  // const expenseContext = {
  //   title:,
  //   amount:,
  //   date:,
  //   payee: ,
  //   sharedWith:
  // };

  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
