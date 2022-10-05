import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
