import React from 'react'
import './Footer.css';


import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Footer() {

    // ANIMATION
    const { ref: ref7, inView: inView7 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <footer className='FooterPage'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center'>
                    <motion.div
                        ref={ref7}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: inView7 ? 1 : 0, y: inView7 ? 0 : -100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <p className='text-[#000] text-sm font-semibold'>© 2025 Sumit Singh Rawat. All Rights Reserved.</p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer