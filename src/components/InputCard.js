import React from "react";
import "../css/InputCard.css";
import Submit from "./Submit";
class InputCard extends React.Component {
  myInput = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.myInput.current.value);
  };
  render() {
    return (
      <form className="InputCard" onSubmit={this.handleSubmit}>
        <label htmlFor="desc">Thoughts?</label>
        <textarea
          name="desc"
          rows="4"
          ref={this.myInput}
          // cols="10"
          placeholder="Enter input here!"
        />
        <Submit btnName="Submit" />
      </form>
    );
  }
}

export default InputCard;
