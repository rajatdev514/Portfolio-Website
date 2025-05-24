import "./Hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbutton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "100%", // Start just off the right side of the screen
  },
  animate: {
    x: "-100%", // End just off the left side of the screen
    transition: {
      duration: 20, // Duration of the scrolling
      repeat: Infinity, // Repeat infinitely
      ease: "linear", // Ensure a constant speed
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="name" variants={textVariants}>
            RAJAT MAHAJAN
          </motion.h1>
          <motion.h1 variants={textVariants}>Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a
              href="https://drive.google.com/file/d/1Jk5jqyFYjP3mDYvN2t0UdNP115i_e8RN/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="button-link" // Add a class for styling
            >
              <motion.button variants={textVariants} className="button">
                Resume
              </motion.button>
            </a>
            <a href="#Contact">
              <motion.button variants={textVariants} className="button">
                Contact Me
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        style={{
          display: "inline-block", // Keep the text inline
        }}
      >
        Full Stack Developer
      </motion.div>
    </div>
  );
};

export default Hero;
