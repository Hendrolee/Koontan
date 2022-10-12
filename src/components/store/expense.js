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
    replaceExpense(state, action) {
      const id = action.payload.id;
      const onEditItem = state.expenseItems.find((item) => item.id === id);
      state.expenseItems.splice(
        state.expenseItems.indexOf(onEditItem),
        1,
        action.payload
      );
    },
  },
});

export const expenseActions = expenseSlice.actions;
export default expenseSlice.reducer;
