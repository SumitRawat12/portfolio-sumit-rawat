import React, { useState, useEffect } from "react";
import "./Intro.css";
import { Link as ScrollLink } from "react-scroll";

import IntroPic from "../../assets/images/Intro/IntroPic.png";
import UIText from "../../assets/images/Intro/UIText.png";

import gmailiIcon from "../../assets/images/Intro/gmail.png";
import linkedinIcon from "../../assets/images/Intro/linkedin.png";
import behanceIcon from "../../assets/images/Intro/behance.png";
import dribbleIcon from "../../assets/images/Intro/dribble.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Intro() {
  // ANIMATION
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isOpen, setIsOpen] = useState(false);

  const titles = ["UI/UX Designer", "Interaction Designer", "Design Thinker", "Product Experience Creator" ];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = isDeleting ? 50 : 100;

  useEffect(() => {
    const currentWord = titles[index];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <section className="IntroSectionPage" id="Intro">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-8 text-left">
            <div className="IntroLeftAside">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : -100 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
              >
                <h6>Hi, I'm</h6>
                <h2>Sumit Singh Rawat - </h2>
                <h3>
                  {text}
                  <span className="blinking-cursor">|</span>
                </h3>
                <p>
                  I take <b>raw ideas</b> and turn them into{" "}
                  <b>smooth, user-friendly digital experiences</b> that people{" "}
                  <b>love to use</b>.
                </p>

                  <a className="bg-blue-500 text-white px-4 py-2 rounded ResumeBtn" href="/Sumit_Singh_Rawat_UIUX_Resume.pdf" download>
                      Download Resume</a>
                <ScrollLink
                  to="Projects"
                  smooth={true}
                  duration={500}
                  offset={-50}
                  className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="ViewMyWorkBtn">View my work</button>
                </ScrollLink>

                <h5>Find me on</h5>
                <a href="mailto:ssr192031@gmail.com">
                  <img src={gmailiIcon} alt="gmailiIcon" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sumit-singh-rawat-b21593243/"
                >
                  <img src={linkedinIcon} alt="linkedinIcon" />
                </a>
                <a target="_blank" href="https://www.behance.net/sumitrawat53">
                  <img src={behanceIcon} alt="behanceIcon" />
                </a>
                <a
                  target="_blank"
                  href="https://dribbble.com/UIuxdesigner-Sumit"
                >
                  <img src={dribbleIcon} alt="dribbleIcon" />
                </a>
              </motion.div>
            </div>
          </div>

          <div className="col-span-4 text-right">
            <ul className="IntroRightAside">
              <li>
                <motion.div
                  ref={ref1}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                  transition={{ duration: 1, type: "spring", stiffness: 50 }}
                >
                  <img src={IntroPic} alt="IntroPic" />
                  <img className="bounce" src={UIText} alt="UIText" />
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
