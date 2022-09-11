import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/Header/Options";
import Navigation from "./components/UI/Navigation";

import ExpenseProvider from "./components/store/ExpenseProvider";
import ExpenseContext from "./components/store/expense-context";

function App() {
  // const [expensesArray, setExpensesArray] = useState([
  //   {
  //     id: Math.random().toString(),
  //     title: "Groceries",
  //     amount: `$${22}`,
  //     date: new Date(),
  //     payee: "Hendro",
  //   },
  // ]);

  // const addExpensesHandler = (data) => {
  //   setExpensesArray((prevExpenses) => {
  //     const updatedExpenses = [...prevExpenses];
  //     updatedExpenses.unshift({
  //       title: data.title,
  //       amount: data.amount,
  //       date: data.date,
  //       payee: data.payee,
  //       sharedWith: data.sharedWith,
  //       id: Math.random().toString(),
  //     });
  //     return updatedExpenses;
  //   });
  // };

  return (
    <ExpenseProvider>
      <Navigation />
      <Options />
      <ExpensesList />;
    </ExpenseProvider>
  );
}

export default App;
