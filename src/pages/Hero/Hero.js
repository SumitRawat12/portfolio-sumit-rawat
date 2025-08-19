import React, { useState, useEffect } from "react";
import "./Hero.css";

import Quote from "../../assets/images/quote-up 1.png";
import HeroImg from "../../assets/images/Hero.png";
import RightArrow from "../../assets/images/up-right.png";

function Hero() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="IntroSectionPage" id="home">
      <div className="IntroOneBox animate-slide-left">
        <img src={Quote} alt="" />
        <p>
          Helping startups & enterprises turn complex workflows into seamless
          user journeys
        </p>
      </div>

      <div className="IntroTwoBox animate-slide-up">
        <div>
          <img src={HeroImg} alt="" />
          <div className="BulrbgCta">
            <button
              onClick={() => handleScroll("featured-work")}
              className="flex items-center bg-[#fd853a] border-[0.5px] border-[#f2f4f7] px-4 py-2 rounded-lg"
            >
              Portfolio <img src={RightArrow} alt="" className="ml-2" />
            </button>
            <button
              onClick={() => handleScroll("connect")}>Hire Me
            </button>
          </div>
        </div>
      </div>

      <div className="IntroThreeBox animate-slide-right">
        <p>
          <span>6+ Years</span>
          in Product & UI/UX Design
        </p>
        <p>
          <span>40+ Projects</span>
          Successfully Delivered
        </p>
        <p>
          <span>95%</span>
          Client Satisfaction Rate
        </p>
      </div>
    </section>
  );
}

export default Hero;
