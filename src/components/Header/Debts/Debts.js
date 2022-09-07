import { useState } from "react";

const Debts = (props) => {
  const [debtsSummary, setDebtsSummary] = useState([]);

  const arrayIsEmpty = debtsSummary.length === 0;

  return (
    <div>
      {arrayIsEmpty && <p>You are clean of debts!</p>}
      <button onClick={props.onCancel}>Close</button>
    </div>
  );
};

export default Debts;
