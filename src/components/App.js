import React from "react";
import "../css/App.css";
import Card from "./Card";
class App extends React.Component {
  render() {
    return (
      <div className="travel-agency">
        <div className="splash-page">
          <header tagline="Travel to Exotic Locations" />
        </div>
        <div>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
