import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Optional styles
import "swiper/css/navigation"; // Optional styles
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// UI
import UIPortfolioImg1 from "../../assets/images/Projects/UI/Portfolio1.png";
import UIPortfolioImg2 from "../../assets/images/Projects/UI/Portfolio2.png";
import UIPortfolioImg3 from "../../assets/images/Projects/UI/Portfolio3.png";

import behanceIcon from "../../assets/images/Intro/behance.png";
import dribbleIcon from "../../assets/images/Intro/dribble.png";

const VisualDesignSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 2 },
      }}
    >
      <SwiperSlide className="py-4 px-2">
        <div className="CustomSwiperBox">
          <img className="w-full mb-4" src={UIPortfolioImg1} alt="" />
          <h4>Education App UI – Aesthetic & User-Friendly Design</h4>
          <div className="flex justify-between align-middle">
            <span>Figma</span>
            <ul>
              <li className="mr-6">View design →</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.behance.net/gallery/221390951/AudiReader-Audiobook-Management-Recording-App"
                >
                  <img src={behanceIcon} alt="behanceIcon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://dribbble.com/shots/25806800-AudiReader-Audiobook-Management-Recording-Applications"
                >
                  <img src={dribbleIcon} alt="dribbleIcon" />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="py-4 px-2">
        <div className="CustomSwiperBox">
          <img className="w-full mb-4" src={UIPortfolioImg2} alt="" />
          <h4>Sarkari Exam Prep UI – Clean & Engaging</h4>
          <div className="flex justify-between align-middle">
            <div>
              <span className="mr-2">Figma</span>
              <span>Web Design</span>
            </div>
            {/* <ul>
              <li className="mr-6">View design →</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.behance.net/gallery/221390951/AudiReader-Audiobook-Management-Recording-App"
                >
                  <img src={behanceIcon} alt="behanceIcon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://dribbble.com/shots/25806800-AudiReader-Audiobook-Management-Recording-Applications"
                >
                  <img src={dribbleIcon} alt="dribbleIcon" />{" "}
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="py-4 px-2">
        <div className="CustomSwiperBox">
          <img className="w-full mb-4" src={UIPortfolioImg3} alt="" />
          <h4>Job Portal UI – Modern, Intuitive & User-Friendly</h4>
          <div className="flex justify-between align-middle">
            <div>
              <span className="mr-2">Figma</span>
              <span className="mr-2">Web Design</span>
              <span>Angular</span>
            </div>
            {/* <ul>
              <li className="mr-6">View design →</li>
              <li>
                <a
                  target="_blank"
                  href="https://www.behance.net/gallery/221390951/AudiReader-Audiobook-Management-Recording-App"
                >
                  <img src={behanceIcon} alt="behanceIcon" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://dribbble.com/shots/25806800-AudiReader-Audiobook-Management-Recording-Applications"
                >
                  <img src={dribbleIcon} alt="dribbleIcon" />{" "}
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default VisualDesignSwiper;
