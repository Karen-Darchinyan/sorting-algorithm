import React, { Component } from "react";
import "./MergeSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import MergeSortingImg from "../../img/merge-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class MergeSort extends Component {
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
                    src={MergeSortingImg}
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
                    Միաձուլման տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Միաձուլման տեսակավորում O(n log n), համեմատման վրա հիմնված
                    տեսակավորման ալգորիթմ է։ Կատարման մեծ մասն արտադրում է
                    ստաբիլ տեսակավորում, որը նշանակում է, որ կատարումը
                    պաշտպանում է մուտքի հրամանը տեսակավորված ելքի հավասար
                    էլեմենտներից։ Դա անջատ և նվաճված ալգորիթմ է։ Միաձուլումը
                    հայտնաբերվել է 1945 թ.- ին Ջոն վոն Նյումանի կողմից:
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

export default MergeSort;
