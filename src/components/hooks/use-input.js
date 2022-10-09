import { useState } from "react";

const useInput = (validate, data) => {
  const [enteredValue, setEnteredValue] = useState(data ? data : "");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validate(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const changeValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const changeSelectedValueHandler = (selected) => {
    setEnteredValue(selected);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeValueHandler,
    changeSelectedValueHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
