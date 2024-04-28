import React, { useState } from 'react'
import './About.scss'
import { SKILLS } from '../../utils/data'
import Aboutcard from './aboutcard/Aboutcard'
import AboutCardInfo from './aboutcardinfo/AboutCardInfo'

const About = () => {

    const [selectedSkill, setSelectedSkills] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkills(data);
    };

  return (
    <div className="skills-container">
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills"></div>
                {SKILLS.map((item) => (
                    <Aboutcard 
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => {
                        handleSelectSkill(item);
                    }}
                    />
                ))}
            <div className="skills-info">
                <AboutCardInfo 
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
                />
            </div>
        </div>
    </div>
  )
}

export default About