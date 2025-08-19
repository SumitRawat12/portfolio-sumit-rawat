import React from "react";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import MaleImg from "../../assets/images/Testimonial/Male.png";
import FemaleImg from "../../assets/images/Testimonial/Female.png";

function Testimonial() {
  return (
    <section className="TestimonialPagesection" id="skills-&-tools">
      <Swiper
        className="h-[450px]"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={2}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
        }}
      >
        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “Working with Sumit was smooth from start to finish. He understood
              our requirements clearly and delivered a design that was both
              intuitive and scalable.”
            </p>
            <img src={MaleImg} alt="" />
            <h4>Ravindra Singh</h4>
            <h6>Project Manager</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “The best part about collaborating with Sumit was his ability to
              simplify complex problems into clean, user-friendly solutions. Our
              product felt much more approachable after his redesign.”
            </p>
            <img src={FemaleImg} alt="" />
            <h4>Shruti Chauhan</h4>
            <h6>Manager - Brand Designer</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “Sumit consistently delivered high-quality work on time. His
              designs not only looked great but also solved real usability
              issues for our users.”
            </p>
            <img src={MaleImg} alt="" />
            <h4>Dev Kapoor</h4>
            <h6>Marketing Designer</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “He quickly aligned with our product vision and translated it into
              a modern, professional interface that impressed both stakeholders
              and customers.”
            </p>
            <img src={FemaleImg} alt="" />
            <h4>Bhavya Raj</h4>
            <h6>Ui Ux Designer</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “Sumit has a strong eye for detail and a user-first mindset. Every
              design decision he made helped improve the overall experience for
              our customers.”
            </p>
            <img src={FemaleImg} alt="" />
            <h4>Marian Lipsich</h4>
            <h6>Sr. Creative Art Director</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “We were impressed by how proactive Sumit was throughout the
              project. He anticipated challenges early and provided thoughtful
              design solutions.”
            </p>
            <img src={FemaleImg} alt="" />
            <h4>Carolina Adel</h4>
            <h6>UX Designer</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “His process was clear and structured. From research to final
              delivery, everything felt well-organized, and the outcome was
              exactly what our team needed.”
            </p>
            <img src={MaleImg} alt="" />
            <h4>Vishesh Vishnu</h4>
            <h6>Ui/UX Analyst</h6>
          </div>
        </SwiperSlide>

        <SwiperSlide className="py-4 px-2">
          <div className="TestimonialBox">
            <p>
              “Sumit’s designs struck the right balance between creativity and
              business needs. The final product not only looked polished but
              also performed better with users.”
            </p>
            <img src={MaleImg} alt="" />
            <h4>Sanjay Bijlani</h4>
            <h6>Product Designer</h6>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonial;
