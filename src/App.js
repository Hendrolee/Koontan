import { Fragment, useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/Header/Options";
import Navigation from "./components/UI/Navigation";

function App() {
  const [expensesArray, setExpensesArray] = useState([
    {
      id: Math.random().toString(),
      title: "Groceries",
      amount: `$${22}`,
      date: new Date(),
      payee: "Hendro",
    },
  ]);

  const addExpensesHandler = (data) => {
    setExpensesArray((prevExpenses) => {
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
    <Fragment>
      <Navigation />
      <Options onAddExpenses={addExpensesHandler} />
      <ExpensesList expenses={expensesArray} />;
    </Fragment>
  );
}

export default App;
