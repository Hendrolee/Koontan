import { Fragment } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import Options from "./components/layout/Content/Options";
import MainHeader from "./components/layout/Header/MainHeader";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Options />
      <ExpensesList />;
    </Fragment>
  );
}

export default App;
