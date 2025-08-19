import React from "react";
import "./Toolkit.css";

import Toolkit1Img from "../../assets/images/Toolkit/Toolkit1.png";
import Toolkit2Img from "../../assets/images/Toolkit/Toolkit2.png";
import Toolkit3Img from "../../assets/images/Toolkit/Toolkit3.png";
import Toolkit4Img from "../../assets/images/Toolkit/Toolkit4.png";
import Toolkit5Img from "../../assets/images/Toolkit/Toolkit5.png";

function Toolkit() {
  return (
    <section className="ToolkitPagesection" id="skills-&-tools">
      <div className="HeadingSection animate-slide-left">
        <h2>
          <span>Design Toolkit</span>
          Strategic Blend of Design Thinking,{" "}
          <b>
            {" "}
            Creative Execution <br /> & Tool Mastery
          </b>
        </h2>
      </div>

      <div className="mb-[40px] ToolkitFlex">
        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Figma</h4>
          <img src={Toolkit1Img} alt="" />
          <p>UI/UX design, prototyping and interactive flows</p>
        </div>

        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Google Forms</h4>
          <img src={Toolkit2Img} alt="" />
          <p>User research & feedback collection</p>
        </div>

        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Zeplin</h4>
          <img src={Toolkit3Img} alt="" />
          <p>Collaboration, documentation & handoff</p>
        </div>

        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Figma Dev Mode</h4>
          <img src={Toolkit1Img} alt="" />
          <p>Developer-ready specs & assets</p>
        </div>
      </div>

      <div className="!justify-center gap-[50px] ToolkitFlex">
        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Photoshop</h4>
          <img src={Toolkit4Img} alt="" />
          <p>Image optimization with quality &  compression</p>
        </div>
        <div className="ToolkiFlexCard animate-slide-up">
          <h4>Canva</h4>
          <img src={Toolkit5Img} alt="" />
          <p>Fast, clean layouts for marketing & social visuals</p>
        </div>
      </div>
    </section>
  );
}

export default Toolkit;
