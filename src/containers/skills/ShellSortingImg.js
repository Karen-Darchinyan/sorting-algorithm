import React, { Component } from "react";
import shellAlgorithm from "../../img/shell-algorithm.jpg"

export default class ShellSortingImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        <img src={shellAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    )
  }
}