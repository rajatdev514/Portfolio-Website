import { motion, useInView } from "framer-motion";
import "./Contact.scss";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n8da365", "template_skpf3qc", formRef.current, {
        publicKey: "-oay8RuWXR7nzb07B",
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textcontainer" variants={variants}>
        <motion.h1 variants={variants}>Lets Connect </motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>rajatmahajan.tech@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Pune, Maharashtra, India</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Contact</h2>
          <span>+91 9822964723</span>
        </motion.div>
        <motion.div className="social">
          <a href="https://www.instagram.com/__rajatt_/">
            <img className="insta-icon" src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/rajatdev514">
            <img className="github-icon" src="/github1.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rajat-mahajan-074b13229/">
            <img className="linkedin-icon" src="/linkedin.png" alt="" />
          </a>
        </motion.div>
      </motion.div>
      <div className="formcontainer">
        <motion.div
          className="phonesvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 24 24">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M19.89,3.25H4.11a2,2,0,0,0-2,2v9.06a2,2,0,0,0,2,2H5.75l2.31,4a.85.85,0,0,0,1.48,0l2.32-4h8a2,2,0,0,0,2-2V5.25A2,2,0,0,0,19.89,3.25Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;

// j7ngq7ApM36IRe
