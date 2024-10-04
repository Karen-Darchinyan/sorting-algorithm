import React, { Component } from "react";
import bubbleAlgorithm from "../../img/bubble-algorithm.jpg"
export default class BubbleSortingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div >
          <img src={bubbleAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    );
  }
}
