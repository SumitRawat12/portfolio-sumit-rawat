import React from "react";
import "./Skills.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import SkillUXIcon from "../../assets/images/Skills/SkillUX.png";
import SkillUIIcon from "../../assets/images/Skills/SkillUI.png";
import SkillToolIcon from "../../assets/images/Skills/SkillTool.png";

function Skills() {
  // ANIMATION
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="SkillsPageSection" id="Skills">
      <div className="container mx-auto">
        <div className="mb-8">
          <motion.div
            ref={ref4}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -100 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <div className="flex items-center justify-between">
              <div className="w-full">
                <h6 className="flex items-center uppercase font-bold text-[#4C7CF4] text-[22px]">
                  MY SKILLS & EXPERTISE
                </h6>
                <h2 className="py-4">
                  Skills & Expertise – Crafting <br /> Meaningful Experiences
                </h2>
              </div>

              <p className="text-[14px] font-bold leading-[26px] tracking-[0.7px] text-[#DDDDDD] text-right">
                Combining design, strategy, and technology to create
                user-friendly and visually engaging digital experiences.
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : -100 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <ul>
            <li>
              <h4>
                <img className="flip" src={SkillUXIcon} alt="SkiilUXicon" /> UX Skills
              </h4>
              <hr />
              <p>
                <span>User Research</span> <span>Data-Driven Design</span>{" "}
                <span>UX Strategy</span> <span>Prototyping</span>{" "}
                <span>Wireframing</span> <span>Information Architecture</span>
              </p>
            </li>
            <li>
              <h4>
                <img className="flip" src={SkillUIIcon} alt="SkiilUIIcon" /> UI Skills
              </h4>
              <hr />
              <p>
                <span>UI Motion Design</span> <span>Visual Storytelling</span>{" "}
                <span>Design Systems</span> <span>Microinteractions</span>{" "}
                <span>Interaction Design</span>{" "}
                <span>Scalable UI Frameworks</span>{" "}
                <span>Dark & Light Mode UI</span>
              </p>
            </li>
            <li>
              <h4>
                <img className="flip" src={SkillToolIcon} alt="SkiilToolIcon" /> Tools
              </h4>
              <hr />
              <p>
                <span>Figma</span>
              </p>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
