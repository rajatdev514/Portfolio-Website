import { useRef } from "react";
import "./Projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    img: "/portfolio1.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam minus ipsum molestiae eligendi dolores id repudiandae nisi incidunt enim labore modi possimus praesentium repellat, vitae blanditiis autem neque corporis molestias!",
  },
  {
    id: 2,
    title: "HOD Portfolio Website",
    img: "/portfolio2.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam minus ipsum molestiae eligendi dolores id repudiandae nisi incidunt enim labore modi possimus praesentium repellat, vitae blanditiis autem neque corporis molestias!",
  },
  {
    id: 3,
    title: "Herbal Med Online",
    img: "/portfolio3.jpg",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam minus ipsum molestiae eligendi dolores id repudiandae nisi incidunt enim labore modi possimus praesentium repellat, vitae blanditiis autem neque corporis molestias!",
  },
  {
    id: 4,
    title: "Dynamic Weather Application",
    img: "/portfolio4.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam minus ipsum molestiae eligendi dolores id repudiandae nisi incidunt enim labore modi possimus praesentium repellat, vitae blanditiis autem neque corporis molestias!",
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
