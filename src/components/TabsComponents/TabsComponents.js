import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import WebdevSwiper from "../SwiperComponent/WebdevSwiper";
import CmsSwiper from "../SwiperComponent/CmsSwiper";
import FrameworkSwiper from "../SwiperComponent/FrameworkSwiper";
import UISwiper from "../SwiperComponent/UISwiper";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TabsComponents() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // ANIMATION
    const { ref: ref5, inView: inView5 } = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <motion.div
            ref={ref5}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView5 ? 1 : 0, x: inView5 ? 0 : -100 }}
            transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
            <Box className="bg-white py-4 rounded-xl mt-4">
                {/* Tabs Navigation */}
                <motion.div
                    ref={ref5}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 100 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
                >
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Web Development" />
                        <Tab label="CMS & Themes" />
                        <Tab label="Framework & Libraries" />
                        <Tab label="UI/UX Design" />
                    </Tabs>
                </motion.div>

                <Box className="py-4 px-10">
                    <motion.div
                        ref={ref5}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        {value === 0 && <WebdevSwiper />}
                    </motion.div>
                    <motion.div
                        ref={ref5}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        {value === 1 && <CmsSwiper />}
                    </motion.div>
                    <motion.div
                        ref={ref5}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        {value === 2 && <FrameworkSwiper />}
                    </motion.div>
                    <motion.div
                        ref={ref5}
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 100 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        {value === 3 && <UISwiper />}
                    </motion.div>
                </Box>
            </Box>
        </motion.div>
    )
}

export default TabsComponents