import React from "react";
import SplashImage from "./SplashImage";
import InputCard from "./InputCard";
import "../css/SplashInput.css";
import Submit from "./Submit";
const SplashInput = props => {
  return (
    <section className="SplashInput">
      <SplashImage />
      <InputCard />
    </section>
  );
};

export default SplashInput;
