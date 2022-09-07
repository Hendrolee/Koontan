import classes from "./Navigation.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header-content"]}>
        <h2 className={classes.title}>Koontan</h2>
      </div>
    </div>
  );
};

export default Header;
