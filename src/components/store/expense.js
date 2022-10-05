import { createSlice } from "@reduxjs/toolkit";

const expenseIntialState = {
  expenseItems: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState: expenseIntialState,
  reducers: {
    addExpense(state, action) {
      state.expenseItems.unshift(action.payload);
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
