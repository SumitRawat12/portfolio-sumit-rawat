import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FeaturedWork.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay } from "swiper/modules";

// COVER IMAGES
import AudireaderWork from "../../assets/images/Featured-Work/ARUI-CS.jpg";
import AudireaderWork2 from "../../assets/images/Featured-Work/ARUX-CS.jpg";
import CareerlinkWork from "../../assets/images/Featured-Work/CL-CS.jpg";
import SportstrackerWork from "../../assets/images/Featured-Work/SD-CS.jpg";
import GenZKartWork from "../../assets/images/Featured-Work/GK-CS.jpg";
import AppinventivWork from "../../assets/images/Featured-Work/AP-CS.jpg";
import EclypseWork from "../../assets/images/Featured-Work/EF-CS.jpg";

// CASE STUDIES
import CSAudireaderWork from "../../assets/images/Featured-Work/CS/ARCS-UI.jpg";
import CSAudireaderWork2 from "../../assets/images/Featured-Work/CS/ARCS-UX.jpg";
import CSCareerlinkWork from "../../assets/images/Featured-Work/CS/CLCS.jpg";
import CSSportstrackerWork from "../../assets/images/Featured-Work/CS/FCS.jpg";
import CSGenZKartWork from "../../assets/images/Featured-Work/CS/GKCS.jpg";
import CSAppinventivWork from "../../assets/images/Featured-Work/CS/AICS.jpg";
import CSEclypseWork from "../../assets/images/Featured-Work/CS/EFCS.jpg";

function FeaturedWork() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      img: AudireaderWork,
      modalImg: CSAudireaderWork,
      title: "Audireader - 01",
      desc: "Accessible UI improving readability and overall user comfort.",
    },
    {
      img: AudireaderWork2,
      modalImg: CSAudireaderWork2,
      title: "Audireader - 02",
      desc: "Simplified navigation enabling faster onboarding and smoother flow.",
    },
    {
      img: CareerlinkWork,
      modalImg: CSCareerlinkWork,
      title: "Career Link",
      desc: "Platform connecting students seamlessly with career opportunities.",
    },
    {
      img: SportstrackerWork,
      modalImg: CSSportstrackerWork,
      title: "SportsDunia",
      desc: "Real-time sports updates with engaging, personalized UI.",
    },
    {
      img: GenZKartWork,
      modalImg: CSGenZKartWork,
      title: "GenZkart",
      desc: "Trendy e-commerce optimized for mobile-first Gen Z shoppers.",
    },
    {
      img: AppinventivWork,
      modalImg: CSAppinventivWork,
      title: "Appinventiv",
      desc: "Enterprise UX strategy showcasing impactful end-to-end product UI.",
    },
    {
      img: EclypseWork,
      modalImg: CSEclypseWork,
      title: "Eclypse",
      desc: "Fast, customizable interface designed for professional UX.",
    },
  ];

  return (
    <section className="FeaturedSectionPage" id="featured-work">
      <div className="HeadingSection animate-slide-up">
        <h2>
          <span>Featured Work</span>
          Crafting Experiences That Deliver <b>Measurable Impact</b>
        </h2>
      </div>

      <Swiper
        className="h-[650px]"
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i} className="py-4 px-2">
            <div className="CustomSwiperBox">
              <img
                src={project.img}
                alt={project.title}
                className="w-full object-cover"
              />
              <h3
                onClick={() => {
                  setSelectedImg(project);
                  setOpen(true);
                }}
              >
                <span>{project.title}</span>
                {project.desc}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal */}
      <AnimatePresence>
        {open && selectedImg && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-end justify-center z-[999] ModalSection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-t-2xl p-4 w-full ModalSectionBox"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.3 }}
            >
              
              <button
                onClick={() => setOpen(false)}
              ><i className="fa fa-times"></i></button>
              <img
                src={selectedImg.modalImg}
                alt={selectedImg.title}
                className="rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default FeaturedWork;
