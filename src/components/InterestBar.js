import React from "react";
import "../css/InterestBar.css";
const InterestBar = props => {
  return (
    <form className="InterestBar">
      <label htmlFor="ofInterest">
        Book flight
        <input type="radio" name="ofInterest" />
        Yes
        <input type="radio" name="ofInterest" />
        No
      </label>
    </form>
  );
};

export default InterestBar;
