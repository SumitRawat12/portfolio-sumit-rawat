import React from "react";
import "./UxProcess.css";

import EmpathizeImg from "../../assets/images/UX-Process/Empathize.png";
import DefineImg from "../../assets/images/UX-Process/Define.png";
import IdeateImg from "../../assets/images/UX-Process/Ideate.png";
import RefineImg from "../../assets/images/UX-Process/Refine.png";
import TestImg from "../../assets/images/UX-Process/Test.png";
import PrototypeImg from "../../assets/images/UX-Process/Prototype.png";
import ArrowImg from "../../assets/images/UX-Process/Arrow.png";
import ArrowLeftImg from "../../assets/images/UX-Process/ArrowLeft.png";

function UxProcess() {
  return (
    <section className="UXProcessPagesection" id="ux-process">
      <div className="HeadingSection animate-slide-left">
        <h2>
          <span>My UX Process</span>A Research-Driven, User-Centered Approach to{" "}
          <br />
          Designing <b>Impactful Products</b>
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 gap-y-[60px] mt-[80px]">
        <div className="UXProcessCardsBox animate-slide-up">
          <img src={EmpathizeImg} alt="" />
          <h4>Empathize</h4>
          <p>
            Research to understand <br /> user needs
          </p>
          <img className="ArrowImg animate-fade-in" src={ArrowImg} alt="" />
        </div>
        <div className="UXProcessCardsBox animate-slide-up">
          <img src={DefineImg} alt="" />
          <h4>Define</h4>
          <p>
            Clarify and frame <br /> core problems
          </p>
          <img className="ArrowImg ArrowImg2 animate-fade-in" src={ArrowImg} alt="" />
        </div>

        <div className="UXProcessCardsBox animate-slide-up">
          <img src={IdeateImg} alt="" />
          <h4>Ideate</h4>
          <p>
            Generate creative, <br /> practical solutions
          </p>
        </div>

        <div className="UXProcessCardsBox animate-slide-up">
          <img src={RefineImg} alt="" />
          <h4>Refine & Deliver</h4>
          <p>
            Polish, finalize, and <br /> implement designs
          </p>
          <img className="ArrowImg ArrowImg3 animate-fade-in" src={ArrowLeftImg} alt="" />
        </div>

        <div className="UXProcessCardsBox animate-slide-up">
          <img src={TestImg} alt="" />
          <h4>Test</h4>
          <p>
            Assess usability with <br /> target users
          </p>
          <img className="ArrowImg ArrowImg4 animate-fade-in" src={ArrowLeftImg} alt="" />
        </div>

        <div className="UXProcessCardsBox animate-slide-up">
          <img src={PrototypeImg} alt="" />
          <h4>Prototype</h4>
          <p>
            Design to visualize <br /> proposed ideas
          </p>
        </div>
      </div>
    </section>
  );
}

export default UxProcess;
