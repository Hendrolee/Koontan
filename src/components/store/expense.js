import { createSlice } from "@reduxjs/toolkit";

const expenseIntialState = {
  expense: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: expenseIntialState,
  reducers: {
    addExpense(state, action) {
      state.expense.push(action.payload);
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
