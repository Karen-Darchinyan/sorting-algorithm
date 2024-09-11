import React, { Component } from "react";
import "./CocktailSort.css";
import Header from "../../components/header/Header";
import CocktailSortingImg from "../../img/cocktail-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-bootstrap";

class CocktailSort extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="algorithm-main">
        <Header theme={theme} />
        <div className="basic-algorithm">
          <Fade bottom duration={2000} distance="40px">
            <div className="algorithm-main-div">
              <div className="algorithm-heading-div">
                <div className="algorithm-heading-img-div">
                  <img
                    src={CocktailSortingImg}
                    width="70%"
                    height="auto"
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="algorithm-heading-text-div">
                  <h1
                    className="algorithm-heading-text"
                    style={{ color: theme.text }}
                  >
                    Կոկտեյլային տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Կոկտեյլային տեսակավորումը հայտնի է որպես երկկողմանի
                    պղպջակների տեսակավորում, կոկտեյլային շեյկեի տեսակավորում,
                    շեյկեր տեսակավորում (որը կարող է նաև հանդիսանալ ընտրության
                    տեսակավորման տարբերակ) ripple sort, shuffle sort, shuttle
                    sort կամ happy hour sort, որոնք պղպջակային տեսակավորման
                    դասին են պատկանում և երկուսն էլ հանդիսանում են կայուն և
                    համեմատության տեսակավորման ալգորիթմներ։ Ալգորիթմը տարբերվում
                    է պղպջակային տեսակավորումից նրանով որ երկու
                    ուղղություններով, որոնցից յուրաքանչյուրը անցնում ցուցակը։
                    Այս տեսակավորման ալգորիթմը տեսականորեն ավելի դժվար է
                    իրականացնել, քան պղպջակային տեսակավորումը և լուծում է
                    պղպջակային տեսակավորման այսպես կոչված կրիաային խնդիրը։
                  </p>
                </div>
              </div>
              <div className="algorithm-about-main">
                <div className="algorithm-explanation"></div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default CocktailSort;
