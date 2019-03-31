import React from "react";
import "../css/Card.css";
import InterestBar from "./InterestBar";

const Card = props => {
  return (
    <div className="Card">
      <header className="Card-header">
        <h1>The Beautiful city of {props.city}</h1>
      </header>
      <section className="Card-paragraphs">
        <p>Belize is known for its wonderful {props.attraction}</p>
        <p>The ideal time to visit is in {props.season}.</p>
      </section>
      <footer>
        <InterestBar />
      </footer>
    </div>
  );
};

// class Card extends React.Component {
//   render() {
//     return (
//       <div className="Card">
//         <header className="Card-header">
//           <h1>The Beautiful city of Belize</h1>
//         </header>
//         <section>
//           <p>Belize is known for its wonderful prop</p>
//           <p>The ideal time to visit is in prop</p>
//         </section>
//       </div>
//     );
//   }
// }
export default Card;
