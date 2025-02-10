import React from 'react'
import './Projects.css';
import aboutusshape1 from '../../assets/images/About/aboutus-shape-1.png'

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TabsComponents from '../../components/TabsComponents/TabsComponents';

function Projects() {

    // ANIMATION
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section className='ProjectsPagesection' id='Projects'>
            <div className='container mx-auto'>
                <div>
                    <motion.div
                        ref={ref5}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <h6 className='flex items-center uppercase font-bold text-[#fff]'>PROJECTS <img className="ml-4 animate-rotateY"
                            src={aboutusshape1} alt="" /></h6>
                        <h2 className='py-4'>Explore my featured work in <b className='text-[#ff6d5a]'>UI/UX Design</b> and <b className='text-[#9f9fff]'>Web Development</b></h2>
                    </motion.div>
                </div>

                <TabsComponents />
            </div>
        </section>
    )
}

export default Projects