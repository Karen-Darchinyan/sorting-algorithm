import React, { Component } from "react";
import "./InsertionSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import InsertionSortingImg from "../../img/insertion-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class InsertionSort extends Component {
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
                    src={InsertionSortingImg}
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
                    Ներդրմամբ տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Ներդրմամբ տեսակավորումը պարզ տեսակավորման ալգորիթմ է, որը
                    ստեղծում է վերջնական սորտավորված զանգված կամ ցանկ։ Այն
                    այդքան էֆեկտիվ չէ մեծ ցանկերի համար, տվյալ ալգորիթմը
                    տեսակավորումը, կույտային ավելի դանդաղ է աշխատում
                    տեսակավորումը կամ միաձուլման քան արագ տեսակավորումը։
                    Այնուամենայնիվ մուտքային սորտավորումը ունի իր
                    առավելությունները, որոնցից են՝ <br />• Պարզ ռեալիզացումը,
                    Ջոն Բենթլին՝ համակարգչային գիտնակնը, ներկայացնում է երեք
                    տողով C լեզվով։ <br />
                    •Էֆեկտիվ փոքր տվյալների սահմաններում <br />
                    •Գործնականում ավելի էֆեկտիվ է քան ուրիշ քառակուսային
                    ալգորիթմեր (Օ(n2))՝ ընտրանքային տեսակավորում կամ պղպջակային
                    տեսակավորում <br />• Այն կարող է տեսակավորել շարքը, դրա
                    տեսակավորման ընթացքում <br />• Այն չի պահանջում ժամանակավոր
                    հիշողության տիրույթ նույնիսկ ստեկում
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

export default InsertionSort;
