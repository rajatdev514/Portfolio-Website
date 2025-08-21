import "./WorkExperienceCard.scss";

const WorkExperienceCard = ({ details, isActive }) => {
  return (
    <div className={`achievement-card ${isActive ? "active" : ""}`}>
      <div className="card-header">
        <div className="achievement-icon">
          <i className="fa-solid fa-trophy"></i>
        </div>
        <div className="achievement-meta">
          <h3 className="achievement-title">{details.title}</h3>
          <div className="achievement-date">
            <i className="fa-regular fa-calendar"></i>
            {details.date}
          </div>
        </div>
      </div>

      <div className="achievement-content">
        <div className="responsibilities-list">
          {details.responsibilities.map((item, index) => (
            <div key={index} className="responsibility-item">
              <div className="item-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="item-content">
                <p>{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-footer">
        <div className="achievement-tags">
          {details.skills &&
            details.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
        </div>
        <div className="card-glow"></div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
