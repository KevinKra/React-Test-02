import React from "react";
import "../css/Card.css";
class Card extends React.Component {
  render() {
    return React.createElement("div", { class: "card-main" }, [
      React.createElement("p", {}, "hello"),
      React.createElement("p", {}, "Is it me you're looking for?")
    ]);
  }
}
export default Card;
