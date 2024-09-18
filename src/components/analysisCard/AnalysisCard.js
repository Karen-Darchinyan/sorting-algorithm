import React, { Component } from "react";
import "./AnalysisCard.css";
import { Fade } from "react-reveal";

class AnalysisCard extends Component {
  render() {
    const analysis = this.props.analysis;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    return (
      <div
        className="analysis-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="analysis-card-logo-div">
            <img
              className="analysis-card-logo"
              src={require(`../../img/${analysis["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div className="analysis-card-stepper">
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: `${theme.headerColor}`,
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: `${theme.headerColor}`,
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="analysis-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="analysis-card-title"
                    style={{ color: theme.text }}
                  >
                    {analysis["title"]}
                  </h3>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
              >
                <div>
                  {analysis["image"] ? (
                    <img
                      src={require(`../..//img/${analysis["image"]}`)}
                      alt="Analysis"
                    />
                  ) : (
                    <div>
                      <ul>
                        {analysis["description"].map((item, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default AnalysisCard;
