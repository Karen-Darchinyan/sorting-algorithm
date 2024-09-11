import React, { Component } from "react";
import "./ShellSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import ShellSortingImg from "../../img/shell-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class ShellSort extends Component {
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
                    src={ShellSortingImg}
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
                    Շելլի տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Շելլի տեսակավորումը (անգլ.՝ Shell sort) — տեսակավորման
                    ալգորիթմ, հանդիսանում է ներդրմամբ տեսակավորման
                    կատարելագործված տեսակը։ Շելլի մեթոդի գաղափարն այն է, որ իրար
                    հետ կարող են համեմատվել ոչ միայն կողք կողքի գտնվող տարրեը,
                    այլ նաև նրանք, որոնք գտնվում են իրարից որոշակի հեռավորության
                    վրա։ Այլ կերպ ասած դա հենց ներդրմամբ տեսակավորումն
                    է՝նախնական «կոպիտ» անցումներով։ Պղպջակային տեսակավորման
                    անալոգային մեթոդը կոչվում է սանրային տեսակավորում։
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

export default ShellSort;
