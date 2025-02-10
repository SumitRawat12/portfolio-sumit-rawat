import React from 'react'
import './Skills.css';

import aboutusshape1 from '../../assets/images/About/aboutus-shape-1.png'

import SkillsImg from '../../assets/images/Skills/Skills.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Skills() {

    // ANIMATION
    const { ref: ref4, inView: inView4 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className='SkillsPageSection' id='Skills'>
            <div className='container mx-auto'>
                <div className='mb-8'>
                    <motion.div
                        ref={ref4}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView4 ? 1 : 0, x: inView4 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <h6 className='flex items-center uppercase font-bold text-[#342ead]'>My Expertise & Skills <img className="ml-4 animate-rotateY"
                            src={aboutusshape1} alt="" /></h6>
                        <h2 className='py-4'>Crafting seamless <b className='text-[#ff6d5a]'>Digital experiences</b> with <b className='text-[#342ead]'>Cutting-edge design</b> and <b className='text-[#342ead]'>Development skills</b></h2>
                    </motion.div>
                </div>
                <motion.div
                    ref={ref4}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : -100 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
                >
                    <img className='w-full' src={SkillsImg} alt="" />
                </motion.div>
            </div>
        </section>
    )
}

export default Skills