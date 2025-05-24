import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    img: "/portfolio1.jpg",
    demoLink: "https://rajatmahajan-tech.netlify.app/",
    desc: "Built personal portfolio website showcasing proficiency in ReactJS and diverse libraries for a dynamic online presence.",
  },
  {
    id: 2,
    title: "Industry Project",
    img: "/portfolio1.png",
    demoLink: "https://technovasoftware.com/",
    desc: "Developed a responsive MERN stack website for TechNova Software featuring multiple sections and tabs, along with robust login and registration functionality for both users and admins. This platform ensures secure access and seamless navigation, enhancing user experience and engagement.",
  },
  {
    id: 3,
    title: "Expense Tracker Pro",
    img: "/expense3.png",
    demoLink: "https://expense-trackerpro.netlify.app/",
    desc: "full-stack Expense Tracker web application built with React and Firebase that allows users to securely log in, add and manage their income and expense entries, visualize spending by category through interactive pie charts, and download their financial data as PDFs. It features real-time data synchronization, form validation, toast notifications, and a responsive UI for a smooth user experience across devices..",
  },
  {
    id: 4,
    title: "Dynamic Weather Application",
    img: "/portfolio4.png",
    demoLink: "https://www.demo-link-one.com",
    desc: "Developed a dynamic weather application leveraging Node.js and API integration for accurate real-time weather forecasts of various locations.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const handleDemoClick = (link) => {
    window.open(link, "_blank"); // Redirect to the provided link
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>

          <motion.div className="textcontainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
              className="see-demo"
              onClick={() => handleDemoClick(item.demoLink)} // Corrected here
            >
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
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
        <h1 className="projects">Projects</h1>
        <motion.div style={{ scaleX }} className="progressbar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
