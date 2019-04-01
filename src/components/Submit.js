import React from "react";
import "../css/Submit.css";
class Submit extends React.Component {
  render() {
    return (
      <button type="submit" className="Submit">
        {this.props.btnName}
      </button>
    );
  }
}

export default Submit;
