import React from "react";
import "../css/InputCard.css";
class InputCard extends React.Component {
  render() {
    return (
      <form className="InputCard">
        <label htmlFor="desc">Thoughts?</label>
        <textarea
          name="desc"
          rows="4"
          // cols="10"
          placeholder="Enter input here!"
        />
      </form>
    );
  }
}

export default InputCard;
