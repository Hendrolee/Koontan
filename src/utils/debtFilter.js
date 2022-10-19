export const findUserExpenses = (expenses, userName) => {
  const userExpenses = expenses.filter((item) =>
    item.sharedWith.find((member) => member.value === userName)
  );
  return userExpenses;
};

export const calculateDebt = (userExpenses) => {
  const numberOfUsers = userExpenses.sharedWith.length;
  const amount = userExpenses.amount / numberOfUsers.toFixed(2);
  return amount;
};

export const createDebt = (userExpenses) => {
  const debtObject = userExpenses.map((item) => {
    const newObject = { ...item, payable: calculateDebt(item) };
    return newObject;
  });
  return debtObject;
};
