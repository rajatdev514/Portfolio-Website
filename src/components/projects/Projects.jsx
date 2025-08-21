import { useRef, useState } from "react";
import "./Projects.scss";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Happenin' - Event Management Platform",
    img: "/portfolio1.png",
    demoLink: "https://happeninfrontend.onrender.com/",
    githubLink: "https://github.com/prafulla231/Happenin/tree/main",
    desc: "Built personal portfolio website showcasing proficiency in ReactJS and diverse libraries for a dynamic online presence.",
    tech: ["Angular", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
  },
  {
    id: 2,
    title: "TechNova Softwares - Enterprise Web Application",
    img: "/portfolio2.png",
    demoLink: "https://technovasoftware.com/",
    githubLink: "https://github.com/rajatdev514/Industry-Project",
    desc: "Developed a responsive MERN stack website for TechNova Software featuring multiple sections and tabs, along with robust login and registration functionality for both users and admins.",
    tech: ["MERN", "Authentication", "Responsive Design"],
    category: "Enterprise",
  },
  {
    id: 3,
    title: "Expense Tracker Pro",
    img: "/portfolio3.png",
    demoLink: "https://expense-trackerpro.netlify.app/",
    githubLink: "https://github.com/rajatdev514/Expense-Tracker",
    desc: "Full-stack Expense Tracker web application built with React and Firebase that allows users to securely log in, add and manage their income and expense entries, visualize spending through interactive charts.",
    tech: ["React", "Firebase", "Chart.js", "PDF Generation"],
    category: "Web App",
  },
  {
    id: 4,
    title: "Dynamic Weather Application",
    img: "/portfolio4.png",
    demoLink: "https://www.demo-link-one.com",
    githubLink: "https://github.com/rajatdev514/Dynamic-Weather-application",
    desc: "Developed a dynamic weather application leveraging Node.js and API integration for accurate real-time weather forecasts of various locations.",
    tech: ["Node.js", "API Integration", "Weather APIs"],
    category: "API Integration",
  },
];

const Single = ({ item, index }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const handleDemoClick = (link) => {
    window.open(link, "_blank");
  };

  const handleCodeClick = (link) => {
    window.open(link, "_blank");
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    hover: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section>
      <motion.div className="container" style={{ opacity, scale }}>
        <motion.div
          className="wrapper"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <motion.div
            className="imagecontainer"
            variants={imageVariants}
            whileHover="hover"
          >
            <div className="image-wrapper">
              <img src={item.img} alt={item.title} />
              <motion.div
                className="image-overlay"
                variants={overlayVariants}
                initial={{ opacity: 0 }}
                whileHover="hover"
              >
                <div className="overlay-content">
                  <span className="category-badge">{item.category}</span>
                  <div className="tech-stack">
                    {item.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="textcontainer" style={{ y }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
              <div className="title-section">
                <h2>{item.title}</h2>
                <div className="project-number">0{item.id}</div>
              </div>

              <p className="description">{item.desc}</p>

              <div className="tech-list">
                {item.tech.map((tech, idx) => (
                  <motion.span
                    key={idx}
                    className="tech-item"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: index * 0.2 + 0.5 + idx * 0.1,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="button-group">
                <motion.button
                  className="demo-btn primary"
                  onClick={() => handleDemoClick(item.demoLink)}
                  whileHover={{ scale: 1.05, backgroundColor: "#7dd3fc" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="btn-text">Live Demo</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      d="M7 17L17 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M7 7h10v10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </motion.svg>
                </motion.button>

                <motion.button
                  className="demo-btn secondary"
                  onClick={() => handleCodeClick(item.githubLink)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  View Code
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
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
      <motion.div className="progress">
        <motion.h1
          className="projects"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Featured Projects
        </motion.h1>
      </motion.div>

      <div className="projects-grid">
        {items.map((item, index) => (
          <Single item={item} key={item.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
