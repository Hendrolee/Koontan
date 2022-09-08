const ExpenseContext = React.createContext({
  title: "",
  amount: 0,
  date: null,
  payee: "",
  sharedWith: "",
});

export default ExpenseContext;
