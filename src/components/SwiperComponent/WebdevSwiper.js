import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Optional styles
import "swiper/css/navigation"; // Optional styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import SPImg from '../../assets/images/Projects/SP.jpg'
import GCImg from '../../assets/images/Projects/GC.jpg'
import NCImg from '../../assets/images/Projects/NC.jpg'
import SOImg from '../../assets/images/Projects/SO.jpg'
import COImg from '../../assets/images/Projects/CO.jpg'
import MWImg from '../../assets/images/Projects/MW.jpg'

const WebdevSwiper = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://sarkaripariksha.com/" target="_blank">
                        <img className="w-full mb-4" src={SPImg} alt="" />
                    </a>
                    <h3>Sarkari Pariksha</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://grapossconnect.com/" target="_blank">
                        <img className="w-full mb-4" src={GCImg} alt="" />
                    </a>
                    <h3>Graposs Connect</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://naukriconnect.com/" target="_blank">
                        <img className="w-full mb-4" src={NCImg} alt="" />
                    </a>
                    <h3>Naukri Connect</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span> <span>Angular</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://shineolympiad.com/" target="_blank">
                        <img className="w-full mb-4" src={SOImg} alt="" />
                    </a>
                    <h3>Shine Olympiad</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://cscolympiad.org/" target="_blank">
                        <img className="w-full mb-4" src={COImg} alt="" />
                    </a>
                    <h3>CSC Olympiad</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
            <SwiperSlide className="py-4 px-2">
                <div className="CustomSwiperBox">
                    <a href="https://meriwebsite.in/" target="_blank">
                        <img className="w-full mb-4" src={MWImg} alt="" />
                    </a>
                    <h3>Meri Website</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default WebdevSwiper;
