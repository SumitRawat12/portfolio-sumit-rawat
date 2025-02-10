import React from 'react'
import './GetinTouch.css';

import Achievementbg from '../../assets/images/Achievement/bg.jpg'
import Img5 from '../../assets/images/GetinTouch/img5.png'
import mailImg from '../../assets/images/GetinTouch/img1.png'
import callImg from '../../assets/images/GetinTouch/img2.png'
import addImg from '../../assets/images/GetinTouch/img3.png'
import linkdinImg from '../../assets/images/GetinTouch/img4.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function GetinTouch() {

    // ANIMATION
    const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className='GetinTouchPagesection' id='Contact'>
            <div className='GetinTouchbgImg' style={{ backgroundImage: `url('${Achievementbg}')` }}></div>
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between items-center'>
                    <div>
                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <h2 className='text-3xl font-semibold mb-6'>Get in Touch</h2>
                        </motion.div>
                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <ul className='flex gap-4 mb-5'>
                                <li className='flex items-center font-semibold text-[#343434] text-sm'><img className='w-[14%] mr-2' src={mailImg} alt="" />  ssr192031@gmail.com</li>
                                <li className='flex items-center font-semibold text-[#343434] text-sm'><img className='w-[9%] mr-2' src={callImg} alt="" />  +91 7530889280, +91 8700055129</li>
                            </ul>
                        </motion.div>
                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <ul className='mb-10'>
                                <li className='flex items-center font-semibold text-[#343434] text-sm'><img className='w-[5%] mr-2' src={addImg} alt="" />  Dwarka Sector-19, New Delhi - 110071</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <h3 className='text-xl font-semibold mb-4'>LinkedIn Profile</h3>
                        </motion.div>
                        <motion.div
                            ref={ref6}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 100 }}
                            transition={{ duration: 1, type: "spring", stiffness: 50 }}
                        >
                            <ul>
                                <li className='flex items-center font-semibold text-[#343434] text-sm'>
                                    <a className='w-[6%] LinkedInimg' href="https://www.linkedin.com/in/sumit-singh-rawat-b21593243/" target='_blank'><img className='w-full mr-2' src={linkdinImg} alt="" /></a>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                    <motion.div
                        className='w-[36%]'
                        ref={ref6}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: inView6 ? 1 : 0, x: inView6 ? 0 : 100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <img src={Img5} className='w-full' alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default GetinTouch