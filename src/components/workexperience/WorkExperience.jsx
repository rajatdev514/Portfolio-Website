import { useRef, useState } from "react";
import "./WorkExperience.scss";
import { ACADEMIC_ACHIEVEMENTS } from "../../utils/data";
import WorkExperienceCard from "./workexperiencecard/WorkExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className="achievements-container">
      <div className="achievements-header">
        <div className="header-content">
          <div className="title-section">
            <h2 className="section-title">Academic Achievements</h2>
          </div>

          <div className="navigation-controls">
            <div className="slide-counter">
              <span className="current">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span className="separator">/</span>
              <span className="total">
                {String(ACADEMIC_ACHIEVEMENTS.length).padStart(2, "0")}
              </span>
            </div>

            <div className="nav-arrows">
              <button className="nav-arrow nav-left" onClick={slideLeft}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="nav-arrow nav-right" onClick={slideRight}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="achievements-content">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings}>
            {ACADEMIC_ACHIEVEMENTS.map((achievement, index) => (
              <WorkExperienceCard
                key={achievement.title}
                details={achievement}
                isActive={index === currentSlide}
              />
            ))}
          </Slider>
        </div>

        <div className="progress-indicators">
          {ACADEMIC_ACHIEVEMENTS.map((_, index) => (
            <div
              key={index}
              className={`progress-dot ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
