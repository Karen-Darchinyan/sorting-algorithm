import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import AnalysisAccordion from "../../containers/analysisAccordion/AnalysisAccordion.js";
import "./Analysis.css";
import { analysis } from "../../portfolio.js";
import { Fade } from "react-reveal";
import analysisSortingImg from "../../img/analysis-sorting-img.jpg"


class Analysis extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="analysis-main">
        <Header theme={theme} />
        <div className="basic-analysis">
          <Fade bottom duration={2000} distance="40px">
            <div className="analysis-heading-div">
              <div className="analysis-heading-img-div">
                <img src={analysisSortingImg} width="80%"
                     height="auto"
                     style={{ borderRadius: "12px" }}/>
              </div>
              <div className="analysis-heading-text-div">
                <h1
                  className="analysis-heading-text"
                  style={{ color: theme.text }}
                >
                  {analysis.title}
                </h1>
                <p
                  className="analysis-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {analysis["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <AnalysisAccordion sections={analysis["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Analysis;
