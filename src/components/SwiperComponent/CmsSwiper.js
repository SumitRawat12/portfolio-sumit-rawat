import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Optional styles
import "swiper/css/navigation"; // Optional styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import SPImg from '../../assets/images/Projects/SP.jpg'

const CmsSwiper = () => {
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
                    <a href="https://sarkaripariksha.com/" target="_blank">
                        <img className="w-full mb-4" src={SPImg} alt="" />
                    </a>
                    <h3>Sarkari Pariksha</h3>
                    <p>Designed and developed a responsive website using:</p>
                    <span>HTML5</span> <span>CSS</span> <span>JS</span> <span>Bootstrap</span>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default CmsSwiper;
