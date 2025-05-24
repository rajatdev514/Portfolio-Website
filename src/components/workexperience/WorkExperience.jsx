import React, { useRef } from "react";
import "./WorkExperience.scss";
import { WORK_EXPERIENCE } from "../../utils/data";
import WorkExperienceCard from "./workexperiencecard/WorkExperienceCard";
import Slider from "react-slick";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <div className="experience-container">
      <h5 className="work">Acedemic Achievements</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>

        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">
            <i className="fa-solid fa-chevron-left"></i>
          </span>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <WorkExperienceCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkExperience;
