import React from "react";
import "../css/Card.css";

const Card = props => {
  return (
    <div className="Card">
      <header className="Card-header">
        <h1>The Beautiful city of {props.city}</h1>
      </header>
      <section>
        <p>Belize is known for its wonderful {props.attraction}</p>
        <p>The ideal time to visit is in {props.season}.</p>
      </section>
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
