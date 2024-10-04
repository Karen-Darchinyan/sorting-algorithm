import React, { Component } from "react";
import cocktailAlgorithm from "../../img/cocktail֊algorithm.jpg";

export default class CocktailSortingImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        <img src={cocktailAlgorithm} width="80%" height="auto" style={{ borderRadius: '12px' }}/>
      </div>
    );
  }
}
