import React, { Component } from "react";
import insertionAlgorithm from "../../img/insertion-algoritm.jpg"

export default class InsertionSortingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={insertionAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    );
  }
}
