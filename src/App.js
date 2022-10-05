import { Fragment } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/Header/Options";
import Navigation from "./components/UI/Navigation";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Options />
      <ExpensesList />;
    </Fragment>
  );
}

export default App;
