import React from 'react'
import './Intro.css'
import IntroPic from '../../assets/images/Intro/IntroPic.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Intro() {

    // ANIMATION
    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold: 0.5 });

    return (
        <div className='IntroSectionPage' id='Intro'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-2'>
                    <div className='col-span-4'>
                        <ul>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='list-disc text-[#ff6d5a] text-2xl w-[90%] py-2 w-[60%] font-bold mb-10'>Frontend Developer
                                    <span className='block text-[#7a7a7a] text-lg'>| Sr. UI Designer</span>
                                </li>
                            </motion.div>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='list-disc text-[#7a7a7a] text-lg w-[90%] py-2 w-[60%] font-bold mb-20'>Say hello to
                                    <span className='block text-[#ffffff] text-[18px]'>ssr192031@gmail.com</span>
                                </li>
                            </motion.div>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='flex gap-6 text-xl'>
                                    <a href="" className='transition-all duration-300 text-[#4a44ad] hover:text-[#ff6d5a]'>
                                        <i class="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="" className='transition-all duration-300 text-[#4a44ad] hover:text-[#ff6d5a]'>
                                        <i class="fab fa-instagram"></i>
                                    </a>
                                    <a href="" className='transition-all duration-300 text-[#4a44ad] hover:text-[#ff6d5a]'>
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sumit-singh-rawat-b21593243/" target='_blank' className='transition-all duration-300 text-[#4a44ad] hover:text-[#ff6d5a]'>
                                        <i class="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </motion.div>
                        </ul>
                    </div>

                    <div className='col-span-4 flex align-center justify-center'>
                        <motion.div
                            ref={ref1}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <img className='w-[90%] mx-auto' src={IntroPic} alt="" />
                            <p className='text-center text-[#ffffff] font-extrabold text-5xl mt-[-20px]'>
                                SUMIT SINGH <br /> RAWAT</p>
                        </motion.div>
                    </div>

                    <div className='col-span-4 text-right'>
                        <ul>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='text-[#ffffff] text-4xl w-full py-2 font-bold mb-10'>100%
                                    <span className='block text-[#979797] text-[18px]'>Client Satisfaction</span>
                                </li>
                            </motion.div>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='text-[#ffffff] text-4xl w-full py-2 font-bold mb-10'>60+
                                    <span className='block text-[#979797] text-[18px]'>Project Done</span>
                                </li>
                            </motion.div>
                            <motion.div
                                ref={ref1}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: inView1 ? 1 : 0, x: inView1 ? 0 : 100 }}
                                transition={{ duration: 1, type: "spring", stiffness: 50 }}
                            >
                                <li className='text-[#ffffff] text-4xl w-full py-2 font-bold'>7+
                                    <span className='block text-[#979797] text-[18px]'>Years Experience</span>
                                </li>
                            </motion.div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro