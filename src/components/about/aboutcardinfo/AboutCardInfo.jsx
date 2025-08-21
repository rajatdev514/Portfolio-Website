import "./Aboutcardinfo.scss";

const AboutCardInfo = ({ heading, skills }) => {
  return (
    <div className="skills-info-card">
      <div className="card-header">
        <div className="header-icon">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="header-content">
          <h3 className="card-title">{heading}</h3>
          <p className="card-subtitle">Skills & Technologies</p>
        </div>
      </div>

      <div className="skills-info-content">
        <div className="skills-grid">
          {skills.map((item, index) => (
            <div key={`skill-${index}`} className="skill-item">
              <div className="skill-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <span className="skill-name">{item.skill}</span>
              <div className="skill-progress">
                <div className="progress-bar"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCardInfo;
