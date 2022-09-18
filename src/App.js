import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/Header/Options";
import Navigation from "./components/UI/Navigation";

import ExpenseProvider from "./components/store/ExpenseProvider";
import ExpenseContext from "./components/store/expense-context";

function App() {
  return (
    <ExpenseProvider>
      <Navigation />
      <Options />
      <ExpensesList />;
    </ExpenseProvider>
  );
}

export default App;
