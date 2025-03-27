import React from "react";
import "./GetinTouch.css";

import CVImg from "../../assets/images/GetinTouch/CVImg.png";
import MailIcon from "../../assets/images/GetinTouch/MailIcon.png";
import BehanceIcon from "../../assets/images/GetinTouch/BehanceIcon.png";
import LinkedinIcon from "../../assets/images/GetinTouch/LinkedinIcon.png";
import DribbbleIcon from "../../assets/images/GetinTouch/DribbbleIcon.png";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function GetinTouch() {
  // ANIMATION
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="GetinTouchPagesection" id="Contact">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-20">
          <div className="col-span-7">
            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h6 className="flex items-center uppercase font-bold text-[#4C7CF4] text-[22px] mt-14">
                CONTACT US
              </h6>
              <h2 className="py-2 text-3xl font-semibold mb-6">
                Looking for a designer? Let’s create impactful experiences!
              </h2>
            </motion.div>
            <motion.div
              ref={ref6}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <div className="grid grid-cols-12 gap-y-6">
                <div className="col-span-6 flex items-center text-[18px] text-white">
                  <img src={MailIcon} className="w-[40px] mr-4" alt="" />{" "}
                  ssr192031@gmail.com
                </div>
                <div className="col-span-6 flex items-center text-[18px] text-white">
                  <img src={BehanceIcon} className="w-[40px] mr-4" alt="" />{" "}
                  Behance
                </div>
                <div className="col-span-6 flex items-center text-[18px] text-white">
                  <img src={LinkedinIcon} className="w-[40px] mr-4" alt="" />{" "}
                  LinkedIn
                </div>
                <div className="col-span-6 flex items-center text-[18px] text-white">
                  <img src={DribbbleIcon} className="w-[40px] mr-4" alt="" />{" "}
                  Dribbble
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-span-5 text-right">
            <motion.div
              ref={ref6}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : 100 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <img src={CVImg} className="w-full bounce" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetinTouch;
