// import Text from './Text';
import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
// import Parallaxx from "./components/parallax/Parallaxx";
import Projects from "./components/projects/Projects";
import WorkExperience from "./components/workexperience/WorkExperience";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="About"><Parallaxx type="about" /></section> */}
      <section>
        <About />
      </section>
      <section>
        <WorkExperience />
      </section>
      {/* <section id="Projects"><Parallaxx type="projects" /></section> */}
      <Projects type="projects" />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Text /> */}
    </div>
  );
};

export default App;
