import { Fragment, useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/Header/Options";
import Navigation from "./components/UI/Navigation";

function App() {
  const [expensesArray, setExpensesArray] = useState([
    {
      key: Math.random().toString(),
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
        id: Math.random().toString(),
      });
      return updatedExpenses;
    });
  };

  return (
    <Fragment>
      <Navigation />
      <Options onAddExpenses={addExpensesHandler} />
      <ExpensesList expenses={expensesArray} />
    </Fragment>
  );
}

export default App;
