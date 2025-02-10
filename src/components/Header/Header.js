import React, { useState, useEffect } from "react";
import './Header.css';
import Logo from '../../assets/images/wLogo.png';
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Intro");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll("section[id]");
            let currentSection = "Intro";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 80;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`HeaderSection fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#09072e] shadow-lg text-white" : "bg-transparent text-black"
                }`}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-2">
                        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring", stiffness: 50 }}>
                            <img className={`w-[100px] transition-all duration-300 ${isScrolled ? "w-[80px]" : ""}`} src={Logo} alt="Logo" />
                        </motion.div>
                    </div>

                    <div className="col-span-8">
                        <div className="flex justify-center items-center">
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring", stiffness: 50 }}>
                                <ul className="flex gap-10">
                                    {[
                                        { id: "Intro", label: "Home" },
                                        { id: "Aboutus", label: "About Me" },
                                        { id: "Achievement", label: "Achievement" },
                                        { id: "Skills", label: "My Skills" },
                                        { id: "Projects", label: "My Projects" },
                                        { id: "Contact", label: "Contact Me" },
                                    ].map((item) => (
                                        <li key={item.id}>
                                            <ScrollLink
                                                to={item.id}
                                                smooth={true}
                                                duration={500}
                                                spy={true}
                                                offset={-80}
                                                className={`hover:text-[#ff6d5a] transition-all duration-300 text-md font-medium rounded-full cursor-pointer ${activeSection === item.id ? "text-[#ff6d5a] font-bold" : "text-[#bfbfbf]"
                                                    }`}
                                            >
                                                {item.label}
                                            </ScrollLink>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="flex justify-end">
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, type: "spring", stiffness: 50 }}>
                                <ScrollLink
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80}
                                    className={`hover:text-[#ff6d5a] transition-all duration-300 text-md font-medium rounded-full cursor-pointer`}
                                >
                                    <AnimatedButton />
                                </ScrollLink>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
