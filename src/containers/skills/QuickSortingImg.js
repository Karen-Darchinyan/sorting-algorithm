import React, { Component } from "react";
import quickAlgorithm from "../../img/quick-algorithm.jpg";

export default class QuickSortingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={quickAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    )
  }
}