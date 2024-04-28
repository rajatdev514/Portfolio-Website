import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
        {/* <Sidebar /> */}
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rajat Mahajan
        </motion.span>
        <div className="social">
          <a href="#About">About</a>
          <a href="#Projects">Projects</a>
          <a href="#Contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
