import React from "react";
import Card from "./Card";
import "../css/Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <article className="Cards">
        <Card city="Morocco" attraction="caves" season="early Fall" />
        <Card city="Budapest" attraction="hiking" season="late Spring" />
        <Card city="Boulder" attraction="skiing" season="Winter" />
      </article>
    );
  }
}

export default Cards;
