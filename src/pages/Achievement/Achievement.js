import React from 'react'
import './Achievement.css';

import Achievementbg from '../../assets/images/Achievement/bg.jpg'
import mob from '../../assets/images/Achievement/mob.png'
import web from '../../assets/images/Achievement/web.png'
import webcode from '../../assets/images/Achievement/webcode.png'
import aboutusshape1 from '../../assets/images/About/aboutus-shape-1.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



function Achievement() {

    // ANIMATION
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold: 0.3 });


    return (
        <section className='AchievementPagesection' id='Achievement'>
            <div className='AchievementbgImg' style={{ backgroundImage: `url('${Achievementbg}')` }}></div>
            <div className='container mx-auto'>
                <div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <h6 className='flex items-center uppercase font-bold text-[#342ead]'>My Journey in Design & Development <img className="ml-4 animate-rotateY"
                            src={aboutusshape1} alt="" /></h6>
                        <h2 className='py-4'>Blending <b className='text-[#ff6d5a]'>Creativity & Code</b> to Build Seamless <b className='text-[#342ead]'>Digital Experiences</b></h2>
                    </motion.div>
                </div>

                <div className='flex gap-6 mt-10'>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <div className='AchievementBox'>
                            <div className='circleshape'>
                                <img src={webcode} alt="" />
                            </div>
                            <h6>15+ PROJECTS</h6>
                            <h4>Website Development and Design</h4>
                            <p>I specialize in website development and design using ReactJS, Angular, NextJS, and WordPress. I create responsive, user-friendly, and visually appealing websites tailored to business needs.</p>
                            <div className='flex'>
                                <span className='bg-[#ff6d5a] block py-1 w-full'></span>
                                <span className='bg-[#342ead] block py-1 w-full'></span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <div className='AchievementBox'>
                            <div className='circleshape'>
                                <img className='!w-1/2' src={mob} alt="" />
                            </div>
                            <h6>20+ PROJECTS</h6>
                            <h4>Mobile UI/UX Design</h4>
                            <p>I specialize in Mobile UI/UX Design using Figma. I have designed intuitive and engaging app interfaces for platforms like SATS, AirAsia, and Hero Atul, ensuring seamless user experiences.</p>
                            <div className='flex'>
                                <span className='bg-[#ff6d5a] block py-1 w-full'></span>
                                <span className='bg-[#342ead] block py-1 w-full'></span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref3}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: inView3 ? 1 : 0, x: inView3 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <div className='AchievementBox'>
                            <div className='circleshape'>
                                <img src={web} alt="" />
                            </div>
                            <h6>15+ PROJECTS</h6>
                            <h4>Website UI/UX Design</h4>
                            <p>I specialize in Website UI/UX Design using Figma. I have created landing pages, login pages, and dashboard designs, ensuring user-friendly and visually appealing interfaces.</p>
                            <div className='flex'>
                                <span className='bg-[#ff6d5a] block py-1 w-full'></span>
                                <span className='bg-[#342ead] block py-1 w-full'></span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Achievement