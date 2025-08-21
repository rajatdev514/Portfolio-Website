import { useState } from "react";
import "./About.scss";
import { SKILLS } from "../../utils/data";
import AboutCard from "../about/aboutcard/Aboutcard";
import AboutCardInfo from "./aboutcardinfo/AboutCardInfo";

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };

  return (
    <section className="skills-container">
      <div className="section-header">
        <div className="header-content">
          <h2 className="section-title">Technical Proficiency</h2>
        </div>
      </div>

      <div className="skills-content">
        <div className="skills-grid">
          {SKILLS.map((item) => (
            <AboutCard
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item);
              }}
            />
          ))}
        </div>

        <div className="skills-info">
          <AboutCardInfo
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>

      <div className="background-elements">
        <div className="bg-blur bg-blur-1"></div>
        <div className="bg-blur bg-blur-2"></div>
      </div>
    </section>
  );
};

export default About;
