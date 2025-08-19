import React from "react";
import "./About.css";

import AvatarImg from "../../assets/images/Avatar.png";


function About() {

  return (
    <section className="AboutPageSection animate-fade-in" id="about-me">
      <div className="AboutBox">
        <p>With <b>6+ years</b> in <b>UX and Product Design</b>, I craft <b>impactful, user-centric solutions</b> through <b>research, strategy, and collaboration</b> — delivering <b>measurable results</b> for industries like aviation, eCommerce, and enterprise systems. My focus: <b>outcomes, not just interfaces</b>.</p>

        <img src={AvatarImg} alt="" />
        <h4>Sumit Singh Rawat</h4>
        <h6>Product Designer</h6>
      </div>
    </section>
  );
}

export default About;
