import React, { useState } from 'react'
import './About.css'
import AboutImg from '../../assets/images/About/AboutImg.png'
import aboutusshape1 from '../../assets/images/About/aboutus-shape-1.png'
import aboutusshape2 from '../../assets/images/About/aboutus-shape-2.png'


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {

    // ANIMATION
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className='AboutSectionPage relative' id='Aboutus'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-[100px] items-start'>
                    <div className='col-span-5 relative'>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : -100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <img className='w-full' src={AboutImg} alt="" />
                        </motion.div>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <div className='flex items-center absolute bottom-[50px] right-0 bg-white pr-8 border-solid border-gray-400 border py-2 px-2 rounded-xl'>
                                <span className='text-2xl mr-2'>😍</span>
                                <h3>
                                    <span className='block text-[#ff6d5a] font-bold text-xl'>25+</span>
                                    <span className='block text-gray-800 font-bold'>Happy Clients</span>
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                    <div className='col-span-7 py-10'>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <h6 className='flex items-center uppercase font-bold text-[#342ead]'>About Me <img className="ml-4 animate-rotateY"
                                src={aboutusshape1} alt="" /></h6>
                        </motion.div>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <h2 className='py-4'>Why you <b className='text-[#ff6d5a]'>hire me</b> for your <b className='text-[#342ead]'>next project?</b></h2>
                        </motion.div>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, x: inView2 ? 0 : 50 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <p className='text-[15px] leading-[26px]'>I am a Frontend Developer and UI Designer with 7+ years of experience in creating clean, user-friendly,
                                and visually appealing web and app designs. Skilled in HTML5, CSS3, JavaScript, ReactJS, Bootstrap,
                                and Tailwind, I focus on making designs that are both functional and easy to use.
                            </p>
                        </motion.div>
                        <motion.div
                            ref={ref2}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <hr className='my-4' />
                            <ul className='flex gap-10'>
                                <li className='text-center text-sm font-bold text-gray-800'>
                                    <span className='block text-[#342ead] text-4xl font-bold mb-1'>100%</span>
                                    CLIENT SATISFACTION
                                </li>
                                <li className='text-center text-sm font-bold text-gray-800'>
                                    <span className='block text-[#342ead] text-4xl font-bold mb-1'>60+</span>
                                    PROJECTS DONE
                                </li>
                                <li className='text-center text-sm font-bold text-gray-800'>
                                    <span className='block text-[#342ead] text-4xl font-bold mb-1'>7+</span>
                                    YEARS OF EXPERIENCE
                                </li>
                            </ul></motion.div>
                    </div>
                </div>
            </div>
            <img className="ml-4 animate-rotateY absolute right-0 bottom-0" src={aboutusshape2} alt="" />
        </section>
    )
}

export default About