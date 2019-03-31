import React from "react";
import "../css/App.css";
import Cards from "./Cards";
class App extends React.Component {
  render() {
    return (
      <div className="travel-agency">
        <div className="splash-page">
          <header tagline="Travel to Exotic Locations" />
        </div>
        <div>
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    );
  }
}

export default App;
