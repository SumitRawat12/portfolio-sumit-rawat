import React, { useState } from "react";
import "./About.css";
import AboutImg from "../../assets/images/About/AboutImg.png";
import aboutusshape2 from "../../assets/images/About/aboutus-shape-2.png";

import Abouticon1 from "../../assets/images/About/Aboutme1.png";
import Abouticon2 from "../../assets/images/About/Aboutme2.png";
import Abouticon3 from "../../assets/images/About/Aboutme3.png";
import Abouticon4 from "../../assets/images/About/Aboutme4.png";

import figmaIcon from "../../assets/images/About/figma.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  // ANIMATION
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <section className="AboutSectionPage relative" id="Aboutus">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-[100px] items-start">
          <div className="col-span-5">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <img className="w-full mb-5" src={AboutImg} alt="" />
              <h5>Plugin/Tool</h5>
              {/* <img className="figmaIcon" src={figmaIcon} alt="figmaIcon" />/ */}
              <div className="ToolsBox">
                <span>🧩 Figma Tokens</span> <span>🎯 Mockuuups Studio</span>{" "}
                <span>🧑‍🎨 Iconify</span> <span>🔗 FigJam</span>
              </div>
            </motion.div>
          </div>
          <div className="col-span-7">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h6 className="flex items-center uppercase font-bold text-[#4C7CF4] text-[22px]">
                ABOUT ME
                {/* <img
                  className="ml-4 animate-rotateY"
                  src={aboutusshape1}
                  alt=""
                /> */}
              </h6>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h2 className="py-2">
                Design That Works. Experiences That Matter.
              </h2>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <p className="text-[14px] font-bold leading-[26px] tracking-[0.7px] text-[#DDDDDD] mb-6">
                Creativity isn’t a process for me — it’s instinct. Just like
                feeling the beat in music or the timing in cricket, I dive into
                UI/UX with the same flow. I’ve collaborated with some of the
                best in the industry, and I love turning complex ideas into
                clean, fast, and functional design solutions.
              </p>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="AboutExpertiseBox">
                  {/* <img src={Abouticon1} alt="Abouticon1" /> */}
                  <b>💡</b>
                  <span>
                    Rapid Ideation <br /> & Visual Storytelling
                  </span>
                </div>
                <div className="AboutExpertiseBox">
                  {/* <img src={Abouticon2} alt="Abouticon2" /> */}
                  <b>🧭</b>
                  <span>
                    UX Strategy <br /> & Interaction Design
                  </span>
                </div>
                <div className="AboutExpertiseBox">
                  {/* <img src={Abouticon3} alt="Abouticon3" /> */}
                  <b>📱</b>
                  <span>
                    Mobile-First <br /> & Responsive Design
                  </span>
                </div>
                <div className="AboutExpertiseBox">
                  {/* <img src={Abouticon4} alt="Abouticon4" /> */}
                  <b>👥</b>
                  <span>
                    Human-Centered <br /> Design Thinking
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <img
        className="ml-4 animate-rotateY absolute right-0 bottom-0"
        src={aboutusshape2}
        alt=""
      />
    </section>
  );
}

export default About;
