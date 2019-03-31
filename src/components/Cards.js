import React from "react";
import Card from "./Card";
import "../css/Cards.css";

class Cards extends React.Component {
  render() {
    return (
      <article className="Cards">
        <Card />
        <Card />
        <Card />
      </article>
    );
  }
}

export default Cards;
