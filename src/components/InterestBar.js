import React from "react";
import "../css/InterestBar.css";
class InterestBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  radioYes = React.createRef();
  radioNo = React.createRef();
  handleClick() {
    console.log(this.radioYes.current.value);
    console.log(this.radioNo.current.value);
  }
  //not sure how to select unique values when there are two onclick
  render() {
    return (
      <form className="InterestBar" onClick={this.handleClick}>
        <label htmlFor="ofInterest">
          Book flight
          <input
            type="radio"
            name="ofInterest"
            value="yes"
            ref={this.radioYes}
          />
          Yes
          <input type="radio" name="ofInterest" value="no" ref={this.radioNo} />
          No
        </label>
      </form>
    );
  }
}

export default InterestBar;
