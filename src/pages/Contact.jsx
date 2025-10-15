import React from "react";
import ExpensiveCalc from "../useMemo/ExpensiveCalc";
import Parent from "../useCallback/Parent";

function Contact() {
  return (
    <div>
      <h1>Contact page</h1>
      {/* <ExpensiveCalc /> */}
      <Parent />
    </div>
  );
}

export default Contact;
