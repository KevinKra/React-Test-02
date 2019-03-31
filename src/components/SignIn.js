import React from "react";
import Submit from "./Submit";
import "../css/SignIn.css";
const SignIn = () => {
  return (
    <div className="SignInContainer">
      <form className="SignIn">
        <label htmlFor="signInInput">
          <input
            type="text"
            name="signInInput"
            placeholder="Please sign in..."
          />
        </label>
        <Submit btnName="Log In" />
      </form>
    </div>
  );
};

export default SignIn;
