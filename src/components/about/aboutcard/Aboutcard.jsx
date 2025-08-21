import "./Skillscard.scss";

const AboutCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={() => onClick()}
    >
      <div className="card-inner">
        <div className="skill-icon">
          <img src={iconUrl} alt={title} />
        </div>
        <div className="card-content">
          <h3 className="skill-title">{title}</h3>
          <div className="skill-indicator">
            <div className="indicator-dot"></div>
            <span className="indicator-text">
              {isActive ? "Active" : "View Skills"}
            </span>
          </div>
        </div>
      </div>
      <div className="card-glow"></div>
    </div>
  );
};

export default AboutCard;
