import React from "react";
import "./Projects.css";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TabsComponents from "../../components/TabsComponents/TabsComponents";

function Projects() {
  // ANIMATION
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  return (
    <section className="ProjectsPagesection" id="Projects">
      <div className="container mx-auto">
        <div>
          <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : -100 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
          >
            <h6 className="font-bold text-[#4C7CF4] text-center text-[22px]">
              LATEST PORTFOLIO
              {/* <img className="ml-4 animate-rotateY" src={aboutusshape1} alt="" /> */}
            </h6>
            <h2 className="">Designs That Work. Experiences That Wow</h2>
            <p className="text-[14px] font-bold leading-[26px] tracking-[0.7px] text-[#DDDDDD] py-4 text-center">
            Designing meaningful UI/UX that connects users, solves problems, <br /> and builds success.
            </p>
          </motion.div>
        </div>

        <TabsComponents />
      </div>
    </section>
  );
}

export default Projects;
