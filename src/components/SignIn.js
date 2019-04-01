import React from "react";
import Submit from "./Submit";
import { getFunName } from "../helpers";
import "../css/SignIn.css";
class SignIn extends React.Component {
  myInput = React.createRef();
  goToMain = e => {
    e.preventDefault();
    const inputValue = this.myInput.current.value;
    this.props.history.push(`/store/${inputValue}`);
  };
  render() {
    return (
      <div className="SignInContainer">
        <form className="SignIn" onSubmit={this.goToMain}>
          <label htmlFor="signInInput">
            <input
              type="text"
              name="signInInput"
              ref={this.myInput}
              defaultValue={getFunName()}
            />
          </label>
          <Submit btnName="Log In" />
        </form>
      </div>
    );
  }
}

export default SignIn;
