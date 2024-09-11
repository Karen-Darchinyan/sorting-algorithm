import React, { Component } from "react";
import "./QuickSort.css";
import Header from "../../components/header/Header";
import { Fade } from "react-bootstrap";
import QuickSortingImg from "../../img/quick-sorting.jpg";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

class QuickSort extends Component {
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
                    src={QuickSortingImg}
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
                    Արագ տեսակավորում
                  </h1>
                  <p
                    className="algorithm-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Արագ տեսակավորում (անգլ.՝ quicksort) հաճախ անվանում են qsort
                    C լեզվի ստանդարտ գրադարանի իրականացման անունով։ Այն հայտնի
                    դասակարգման ալգորիթմ է, որը մշակվել է անգլիացի ինֆորմատիկ
                    Չարլզ Հոարի կողմից 1960 թվականին։ Զանգվածի տեսակավորման
                    առաջին արագ ունիվերսալ ալգորիթմն է։ n հատ տարրերի
                    տեսակավորման համար կատարում է միջինը O (n log n)
                    համեմատություն։ Ամենավատ դեպքում կատարում է O(n2)
                    համեմատություն, չնայած այսպիսի բան պատահում է հազվադեպ։
                    Quicksort-ը հաճախ ավելի արագ է գործում, քան այլ O(n log n)
                    ալգորիթմները։
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

export default QuickSort;
