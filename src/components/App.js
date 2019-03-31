import React from "react";
import "../css/App.css";
import Cards from "./Cards";
import SplashInput from "./SplashInput";
class App extends React.Component {
  render() {
    return (
      <div className="travel-agency">
        <div className="splash-page">
          <header tagline="Travel to Exotic Locations" />
        </div>
        <div className="App-components">
          <Cards />
          <SplashInput />
        </div>
      </div>
    );
  }
}

export default App;
