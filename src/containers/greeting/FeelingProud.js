import React, { Component } from "react";
import sortingAlgorithm from "../../img/sorting-algorithm.jpg";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div style={{ display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "40px"
      }}>
        <img
          src={sortingAlgorithm}
          width="70%"
          height="auto"
          style={{ borderRadius: "12px" }}
        />
      </div>
    );
  }
}

export default FeelingProud;
