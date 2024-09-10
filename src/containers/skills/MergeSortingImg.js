import React, { Component } from "react";
import mergeAlgorithm from "../../img/merge-algorithm.jpg"

export default class MergeSortingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={mergeAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    )
  }
}