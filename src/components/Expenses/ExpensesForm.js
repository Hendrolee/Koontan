// import { useState } from "react";

import classes from "./ExpensesForm.module.css";
import Card from "../UI/Card";
import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const ExpensesForm = (props) => {
  const {
    value: enteredTitle,
    isValid: titleIsValid,
    hasError: titleHasError,
    changeValueHandler: changeTitleHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);

  const {
    value: enteredAmount,
    isValid: amountIsValid,
    hasError: amountHasError,
    changeValueHandler: changeAmountHandler,
    inputBlurHandler: amountBlurHandler,
    reset: resetAmount,
  } = useInput(isNotEmpty);

  const {
    value: enteredDate,
    isValid: dateIsValid,
    hasError: dateHasError,
    changeValueHandler: changeDateHandler,
    inputBlurHandler: dateBlurHandler,
    reset: resetDate,
  } = useInput(isNotEmpty);

  const {
    value: enteredPayee,
    isValid: payeeIsValid,
    hasError: payeeHasError,
    changeValueHandler: changePayeeHandler,
    inputBlurHandler: payeeBlurHandler,
    reset: resetPayee,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (titleIsValid && amountIsValid && dateIsValid && payeeIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const recordDetails = {
      title: enteredTitle,
      amount: `$${+enteredAmount}`,
      date: new Date(enteredDate),
      payee: enteredPayee,
    };
    props.onSaveExpenseData(recordDetails);
    resetTitle();
    resetAmount();
    resetDate();
    resetPayee();
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

        <div>
          <label htmlFor="sharedWith">Shared With</label>
          <input
            type="checkbox"
            id="sharedWith"
            value={enteredPayee}
            onChange={changePayeeHandler}
            onBlur={payeeBlurHandler}
          />
          {payeeHasError && (
            <p className={classes["error-text"]}>Please enter payee's name!</p>
          )}
        </div>

        <div className={classes.actions}>
          <button className={classes.button}>Add</button>
          <button className={classes.button} onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default ExpensesForm;
