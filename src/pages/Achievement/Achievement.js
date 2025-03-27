import React from "react";
import "./Achievement.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import JobIcon from "../../assets/images/Achievement/JobIcon.png";
import EducationIcon from "../../assets/images/Achievement/EducationIcon.png";
import circleDotIcon from "../../assets/images/Achievement/circleDot.png";

function Achievement() {
  // ANIMATION
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="AchievementPagesection" id="Achievement">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-6 text-left">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h2>
                <img src={JobIcon} alt="" /> My Experience
              </h2>

              <ul>
                <li>
                  <span>
                    <img src={circleDotIcon} className="blink" alt="" /> 2023 - 2025
                  </span>
                  <h4>SR. UI/UX DESIGNER | FRONTEND DEVELOPER</h4>
                  <h5>Maxworth Electronic Systems Pvt. Ltd.</h5>
                </li>
                <li>
                  <span>
                    <img src={circleDotIcon} className="blink" alt="" /> 2017 - 2023
                  </span>
                  <h4>SR. WEB DESIGNER | UI/UX DESIGNER</h4>
                  <h5>Graposs Edutech Private Limited</h5>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="col-span-6 text-left">
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h2>
                <img src={EducationIcon} alt="" /> My Education
              </h2>

              <ul>
                <li>
                  <span>
                    <img src={circleDotIcon} className="blink" alt="" /> 2023 - Present
                  </span>
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <h5>Manipal University Jaipur</h5>
                </li>
                <li>
                  <span>
                    <img src={circleDotIcon} className="blink" alt="" /> 2015 - 2017
                  </span>
                  <h4>Information Technology (IT)</h4>
                  <h5>Industrial Training Institute (ITI)</h5>
                </li>
                <li>
                  <span>
                    <img src={circleDotIcon} className="blink" alt="" /> 2014 - 2015
                  </span>
                  <h4>12th Grade (Commerce)</h4>
                  <h5>Govt. Boys Senior Secondary School</h5>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
