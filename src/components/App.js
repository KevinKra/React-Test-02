import React from "react";
import "../css/App.css";
import Cards from "./Cards";
import SplashImage from "./SplashImage";
class App extends React.Component {
  render() {
    return (
      <div className="travel-agency">
        <div className="splash-page">
          <header tagline="Travel to Exotic Locations" />
        </div>
        <div className="App-components">
          <Cards />
          <SplashImage />
        </div>
      </div>
    );
  }
}

export default App;
