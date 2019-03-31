import React from "react";
import "../css/Submit.css";
const Submit = ({ btnName }) => {
  return (
    <button type="submit" className="Submit">
      {btnName}
    </button>
  );
};

export default Submit;
