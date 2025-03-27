import React, { useState, useEffect } from "react";
import "./Header.css";

import MenuBar from "../../assets/images/Header/MenuBar.png";

import MyAvatarIcon from "../../assets/images/Header/MyAvatar.png";


import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="HeaderSection fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-2 items-center">
          <div className="col-span-10">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
            >
              <h4 className="text-white text-lg font-bold">
                SSR | SUMIT SINGH RAWAT
              </h4>
            </motion.div>
          </div>

          <div className="col-span-2">
            <div className="flex justify-end">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 50 }}
              >
                <img
                  className="w-[30px] cursor-pointer"
                  src={MenuBar}
                  alt=""
                  onClick={() => setIsOpen(true)}
                />
              </motion.div>
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="FixedSidebar"
            >
              <div className="Sidebarheader">
                <i className="fa fa-angle-left" onClick={() => setIsOpen(false)}></i>
                <img src={MyAvatarIcon} alt="MyAvatarIcon" />
                <h4>
                  Sumit Singh Rawat <span>UI/UX Designer</span>
                </h4>
              </div>
              <ul>
                <li>
                  <ScrollLink
                    to="Intro"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Aboutus"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Projects"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Portfolio
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Skills"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Skills
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Achievement"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Experience
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    to="Contact"
                    smooth={true}
                    duration={1000}
                    offset={-50}
                    className="cursor-pointer text-xl font-semibold text-blue-500 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
