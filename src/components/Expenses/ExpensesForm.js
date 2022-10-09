import { components } from "react-select";
import { useDispatch } from "react-redux";
import MySelect from "./MySelect";
import classes from "./ExpensesForm.module.css";
import Card from "../UI/Card/Card";
import useInput from "../hooks/use-input";
import { expenseActions } from "../store/expense";
import Button from "../UI/Button/Button";

const isNotEmpty = (value) => value.length !== 0;

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const ExpensesForm = (props) => {
  const onEditItem = { ...props.itemData };
  let onEditItemDate = "";

  if (Object.keys(onEditItem).length !== 0) {
    const stringToIntDate = new Date(
      Date.parse(
        onEditItem.date.month +
          `${onEditItem.date.day}, ${onEditItem.date.year}`
      )
    );

    onEditItemDate = `${stringToIntDate.getFullYear()}-${
      stringToIntDate.getMonth() + 1
    }-${stringToIntDate.toLocaleString("en-US", { day: "2-digit" })}`;
  }

  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    changeValueHandler: changeTitleHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty, onEditItem.title);

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    changeValueHandler: changeAmountHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput(isNotEmpty, onEditItem.amount);

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateHasError,
    changeValueHandler: changeDateHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty, onEditItemDate);

  const {
    value: enteredPayee,
    isValid: payeeIsValid,
    hasError: payeeHasError,
    changeValueHandler: changePayeeHandler,
    inputBlurHandler: payeeBlurHandler,
    reset: resetPayee,
  } = useInput(isNotEmpty, onEditItem.payee);

  const {
    value: selectedOption,
    isValid: selectedOptionIsValid,
    hasError: selectedOptionHasError,
    changeSelectedValueHandler: addUserOnChangeHandler,
    inputBlurHandler: selectedOptionBlurHandler,
    reset: resetSelectedOption,
  } = useInput(isNotEmpty, onEditItem.sharedWith);

  let formIsValid = false;
  if (
    titleIsValid &&
    amountIsValid &&
    dateIsValid &&
    payeeIsValid &&
    selectedOptionIsValid
  ) {
    formIsValid = true;
  }

  const dispatch = useDispatch();

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const date = new Date(enteredDate);
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getFullYear();
    const transformedDate = { day, month, year };

    const recordDetails = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: transformedDate,
      payee: enteredPayee,
      sharedWith: selectedOption,
      id: Math.random().toString(),
    };

    dispatch(expenseActions.addExpense(recordDetails));

    resetTitle();
    resetAmount();
    resetDate();
    resetPayee();
    resetSelectedOption();
  };

  const titleControlClasses = titleHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const amountControlClasses = amountHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const dateControlClasses = dateHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const payeeControlClasses = payeeHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const selectedOptionClasses = selectedOptionHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  //Hardcoded users option
  const options = [
    { value: "Patrick", label: "Patrick" },
    { value: "Fayola", label: "Fayola" },
    { value: "Raymond", label: "Raymond" },
  ];

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={titleControlClasses}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={changeTitleHandler}
            onBlur={titleBlurHandler}
          />
          {titleHasError && (
            <p className={classes["error-text"]}>Please enter a title!</p>
          )}
        </div>

        <div className={amountControlClasses}>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            value={enteredAmount}
            onChange={changeAmountHandler}
            onBlur={amountBlurHandler}
          />
          {amountHasError && (
            <p className={classes["error-text"]}>Please enter an amount!</p>
          )}
        </div>

        <div className={dateControlClasses}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={enteredDate}
            onChange={changeDateHandler}
            onBlur={dateBlurHandler}
          />
          {dateHasError && (
            <p className={classes["error-text"]}>Please enter a date!</p>
          )}
        </div>

        <div className={payeeControlClasses}>
          <label htmlFor="payee">Payee</label>
          <input
            type="text"
            id="payee"
            value={enteredPayee}
            onChange={changePayeeHandler}
            onBlur={payeeBlurHandler}
          />
          {payeeHasError && (
            <p className={classes["error-text"]}>Please enter payee's name!</p>
          )}
        </div>

        <div className={selectedOptionClasses}>
          <MySelect
            options={options}
            isMulti
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            components={{ Option }}
            onChange={addUserOnChangeHandler}
            onBlur={selectedOptionBlurHandler}
            allowSelectAll={true}
            value={selectedOption}
            placeholder="Shared with..."
          />
          {selectedOptionHasError && (
            <p className={classes["error-text"]}>Please select users name!</p>
          )}
        </div>

        <div className={classes.actions}>
          <Button type="submit">Add</Button>
          <Button onClick={props.onCancel}>Cancel</Button>
        </div>
      </form>
    </Card>
  );
};

export default ExpensesForm;
