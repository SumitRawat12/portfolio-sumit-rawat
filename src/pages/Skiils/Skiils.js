import React from "react";
import "./Skiils.css";

import Skills1Img from "../../assets/images/Skills/Skills1.png";
import Skills2Img from "../../assets/images/Skills/Skills2.png";
import Skills3Img from "../../assets/images/Skills/Skills3.png";
import Skills4Img from "../../assets/images/Skills/Skills4.png";
import Skills5Img from "../../assets/images/Skills/Skills5.png";
import Skills6Img from "../../assets/images/Skills/Skills6.png";
import Skills7Img from "../../assets/images/Skills/Skills7.png";
import Skills8Img from "../../assets/images/Skills/Skills8.png";
import Skills9Img from "../../assets/images/Skills/Skills9.png";
import Skills10Img from "../../assets/images/Skills/Skills10.png";

function Skiils() {
  return (
    <section className="SkillsPagesection" id="skills-&-tools">
      <div className="HeadingSection animate-slide-left">
        <h2>
          <span>Skills & Tools</span>
          Blending Strategy <b>, Design Thinking & Execution</b>
        </h2>
      </div>

      <div className="mb-[60px] SkillsFlex">
        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills1Img} alt="" />
          <h4>1. UX Research & Personas</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills2Img} alt="" />
          <h4>2. UX Design Thinking & Strategy</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills3Img} alt="" />
          <h4>3. Information Architecture</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills4Img} alt="" />
          <h4>4. Accessibility & Inclusive Design</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills5Img} alt="" />
          <h4>5. Wireframing & Prototyping</h4>
        </div>
      </div>

      <div className="SkillsFlex">
        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills6Img} alt="" />
          <h4>6. Mobile-First & Responsive Design</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills7Img} alt="" />
          <h4>7. UI Design Systems & Patterns</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills8Img} alt="" />
          <h4>8. UX Audits & Heuristic Reviews</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills9Img} alt="" />
          <h4>9. UX Writing & Microcopy</h4>
        </div>

        <div className="SkillsFlexCard animate-slide-up">
          <img src={Skills10Img} alt="" />
          <h4>10. Dev Handoff & QA Collaboration</h4>
        </div>
      </div>
    </section>
  );
}

export default Skiils;
