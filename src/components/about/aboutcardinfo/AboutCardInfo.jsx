import React from "react";
import "./Aboutcardinfo.scss";

const AboutCardInfo = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <h6>{heading}</h6>

      <div className="skills-info-content">
        <div className="skills-tags">
          {skills.map((item, index) => (
            <div key={`skill-${index}`} className="skill-tag">
              {item.skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCardInfo;
