export const convertDateToString = (itemData) => {
  const dateObject = new Date(
    Date.parse(
      itemData.date.month + `${itemData.date.day}, ${itemData.date.year}`
    )
  );

  const stringDate = `${dateObject.getFullYear()}-${
    dateObject.getMonth() + 1
  }-${dateObject.toLocaleString("en-US", { day: "2-digit" })}`;

  return stringDate;
};

//Serialize date object to avoid non-serializable issue
export const convertDateToObject = (enteredDate) => {
  const date = new Date(enteredDate);
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  const dateObject = { day, month, year };

  return dateObject;
};
