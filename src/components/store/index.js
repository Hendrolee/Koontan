import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./expense";

const store = configureStore({
  reducer: { expenses: expenseReducer },
});

export default store;
