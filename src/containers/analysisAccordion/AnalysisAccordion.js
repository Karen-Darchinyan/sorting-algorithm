import React, { Component } from "react";
import AnalysisCard from "../../components/analysisCard/AnalysisCard.js";
import "./AnalysisAccordion.css";
import { Accordion, Panel } from "baseui/accordion";

class AnalysisAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="analysis-accord">
        <Accordion>
          {this.props.sections.map((section) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={section["title"]}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid`,
                      borderRadius: `5px`,
                      borderColor: `${theme.headerColor}`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                      color: `${theme.text}`,
                      ":hover": {
                        color: `${theme.secondaryText}`,
                      },
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                  {section["analysiss"].map((analysis,index) => {
                  return (
                    <AnalysisCard index={index} totalCards={section["analysiss"].length} analysis={analysis} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

export default AnalysisAccordion;
