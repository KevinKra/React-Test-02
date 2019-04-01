import React from "react";
import "../css/InterestBar.css";
class InterestBar extends React.Component {
  radioYes = React.createRef();
  radioNo = React.createRef();

  handleClick = () => {
    const ofInterest = {
      radioYes: this.radioYes.current.value,
      radioNo: this.radioNo.current.value
    };
    console.log(ofInterest);
  };
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
