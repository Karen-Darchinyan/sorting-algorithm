import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import ShellSortingImg from "./ShellSortingImg";
import MergeSortingImg from "./MergeSortingImg";
import QuickSortingImg from "./QuickSortingImg";

function GetSkillSvg(props) {
  if (props.fileName === "bubbleSort")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "cocktailSort")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "insertionSort")
    return <CloudInfraImg theme={props.theme} />;
  else if (props.fileName === "shellSort")
    return <ShellSortingImg theme={props.theme} />;
  else if (props.fileName === "mergeSort")
    return <MergeSortingImg theme={props.theme} />;
  else if (props.fileName === "quickSort")
    return <QuickSortingImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                    <a href={skill.href} rel="noopener noreferrer" className="skills-heading" style={{ color: theme.text, textDecoration: "none" }}>
                      {skill.title}
                    </a>
                </Fade>
                {/*<Fade right duration={1500}>*/}
                {/*  <SoftwareSkill logos={skill.softwareSkills} />*/}
                {/*</Fade>*/}
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
