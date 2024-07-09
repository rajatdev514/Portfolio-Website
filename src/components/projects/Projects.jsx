import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    img: "/portfolio1.jpg",
    desc: "Innovatively built personal portfolio website showcasing proficiency in ReactJS and diverse libraries for a dynamic online presence.",
  },
  {
    id: 2,
    title: "HOD Portfolio Website",
    img: "/portfolio2.png",
    desc: "Developed and designed a dynamic portfolio website for the Head of IT Department utilizing React.js and various libraries.",
  },
  {
    id: 3,
    title: "Herbal Med Online",
    img: "/portfolio3.jpg",
    desc: "Contributed to the development and integration of frontend elements, components and APIs as well as co-authored a published research paper detailing the project's innovations.",
  },
  {
    id: 4,
    title: "Dynamic Weather Application",
    img: "/portfolio4.png",
    desc: "Developed a dynamic weather application leveraging Node.js and API integration for accurate real-time weather forecasts of various locations.",
  },
];

const Single = ({ item }) => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]
      });

      const y = useTransform(scrollYProgress, [0, 1], [-100,100]);

  return <section >
        <div className="container">
            <div className="wrapper">
                <div className="imagecontainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
            
            <motion.div className="textcontainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>;
};

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
