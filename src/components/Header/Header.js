import React, { useState, useEffect } from "react";
import './Header.css';
import Logo from '../../assets/images/wLogo.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedButton from "../AnimatedButton/AnimatedButton";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // ANIMATION
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <header
            id="Header"
            className={`HeaderSection fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-[#09072e] shadow-lg text-white"
                : "bg-transparent text-black"
                }`}
        >
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-3">
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -10 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <img className={`w-[100px] transition-all duration-300 ${isScrolled
                                ? "w-[80px]"
                                : ""
                                }`} src={Logo} alt="" />
                        </motion.div>
                    </div>

                    <div className="col-span-6">
                        <div className="flex justify-center items-center">
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -10 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <ul className="flex gap-10">
                                    <li><a href="#Header" className="hover:text-[#bfbfbf] transition-all duration-300 text-[#ff6d5a] text-md text-white font-bold rounded-full">Home</a></li>
                                    <li><a href="#Aboutus" className="hover:text-[#ff6d5a] transition-all duration-300 text-md text-[#bfbfbf] font-medium rounded-full">About Us</a></li>
                                    <li><a href="" className="hover:text-[#ff6d5a] transition-all duration-300 text-md text-[#bfbfbf] font-medium rounded-full">Home</a></li>
                                    <li><a href="" className="hover:text-[#ff6d5a] transition-all duration-300 text-md text-[#bfbfbf] font-medium rounded-full">Home</a></li>
                                    <li><a href="" className="hover:text-[#ff6d5a] transition-all duration-300 text-md text-[#bfbfbf] font-medium rounded-full">Home</a></li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <div className="flex justify-end">
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : -10 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <AnimatedButton />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
