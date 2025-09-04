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
import DazzleBirdsWork from "../../assets/images/Featured-Work/DB-CS.jpg";
import AppinventivWork from "../../assets/images/Featured-Work/AP-CS.jpg";
import EclypseWork from "../../assets/images/Featured-Work/EF-CS.jpg";

// CASE STUDIES
import CSAudireaderWork from "../../assets/images/Featured-Work/CS/ARCS-UI.jpg";
import CSAudireaderWork2 from "../../assets/images/Featured-Work/CS/ARCS-UX.jpg";
import CSCareerlinkWork from "../../assets/images/Featured-Work/CS/CLCS.jpg";
import CSSportstrackerWork from "../../assets/images/Featured-Work/CS/FCS.jpg";
import CSGenZKartWork from "../../assets/images/Featured-Work/CS/GKCS.jpg";
import CSDazzleBirdsWork from "../../assets/images/Featured-Work/CS/DBCS.jpg";
import CSAppinventivWork from "../../assets/images/Featured-Work/CS/AICS.jpg";
import CSEclypseWork from "../../assets/images/Featured-Work/CS/EFCS.jpg";



function FeaturedWork() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const projects = [
    {
      img: AudireaderWork,
      modalImg: CSAudireaderWork,
      title: "AudiReader",
      meta: "United Kingdom · EdTech · Mobile App",
      headline: "Redefining Audiobook Learning for Kids & Parents",
      desc: "An engaging audiobook app that blends fun for kids with parental control and personalization, creating a safe and intuitive listening experience.",
      cta: "View Case Study",
    },
    {
      img: CareerlinkWork,
      modalImg: CSCareerlinkWork,
      title: "Career Link",
      meta: "India · EdTech · Web Platform",
      headline: "Connecting Students Seamlessly with Career Opportunities",
      desc: "A digital platform bridging the gap between students and recruiters, simplifying the process of exploring and applying for career paths.",
      cta: "View Case Study",
    },
    {
      img: SportstrackerWork,
      modalImg: CSSportstrackerWork,
      title: "SportsDunia",
      meta: "India · Sports · Web Platform",
      headline: "Real-Time Sports Updates with Personalized Engagement",
      desc: "A sports platform delivering live updates, insights, and a personalized fan experience through intuitive UI and fast navigation.",
      cta: "View Case Study",
    },
    {
      img: GenZKartWork,
      modalImg: CSGenZKartWork,
      title: "GenZkart",
      meta: "India · E-Commerce · Mobile App",
      headline: "Trendy Shopping Experience for the Gen Z Audience",
      desc: "Mobile-first e-commerce solution optimized for Gen Z, blending style, speed, and personalized shopping journeys.",
      cta: "View Case Study",
    },
    {
      img: DazzleBirdsWork,
      modalImg: CSDazzleBirdsWork,
      title: "Dazzlebirds",
      meta: "India · Creative Platform · Web Redesign",
      headline: "Vibrant Creative Platform with Modern Storytelling",
      desc: "A refreshed platform design bringing creativity, collaboration, and storytelling to life through an immersive visual experience.",
      cta: "View Case Study",
    },
    {
      img: AppinventivWork,
      modalImg: CSAppinventivWork,
      title: "Appinventiv",
      meta: "India · Enterprise SaaS · UX Strategy",
      headline: "Enterprise UX Strategy for Impactful Digital Products",
      desc: "An engaging audiobook app that blends fun for kids with parental control and personalization, creating a safe and intuitive listening experience.",
      cta: "View Case Study",
    },
    {
      img: EclypseWork,
      modalImg: CSEclypseWork,
      title: "Eclypse",
      meta: "India · SaaS · Professional Dashboard",
      headline: "Fast & Customizable Interface for Professionals",
      desc: "A modern dashboard solution tailored for speed, customization, and ease of use, empowering professionals to manage workflows effectively.",
      cta: "View Case Study",
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

      {projects.map((project, i) => (
        <div className="CustomSwiperBox">
          <div>
            <img
              src={project.img}
              alt={project.title}
              className="w-full object-cover"
            />
            <div>
              <h3>{project.title}</h3>
              <span>{project.meta}</span>
              <h4>{project.headline}</h4>
              <p>{project.desc}</p>
              <button
                onClick={() => {
                  setSelectedImg(project);
                  setOpen(true);
                }}>
                {project.cta} <i className="fa fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      ))}

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
              <button onClick={() => setOpen(false)}>
                <i className="fa fa-times"></i>
              </button>
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
