import React from "react";
import "./Connect.css";

import Connect1Img from "../../assets/images/Connect/Connect1.png";
import Connect2Img from "../../assets/images/Connect/Connect2.png";
import Connect3Img from "../../assets/images/Connect/Connect3.png";
import UpRightImg from "../../assets/images/Connect/up-right.png";
import WhiteUpRightImg from "../../assets/images/Connect/white-up-right.png";

function Connect() {
  const phone = "917530889280";
  const email = "ssr192031@gmail.com";

  const handleClick = (type) => {
    if (type === "chat") {
      const msg =
        "Hello, I’m reaching out to connect and explore opportunities in Product & UI/UX Design.";
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }

    if (type === "mail") {
      const subject = "Product & UI/UX Design Collaboration";
      const body =
        "Hello, I’d like to discuss potential opportunities with you.";
      const url = `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(url, "_self");
    }

    if (type === "call") {
      const url = `tel:${phone}`;
      window.open(url, "_self");
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Sumit_Rawat_Product_UIUX_Designer_Resume.pdf";
    link.download = "Sumit_Rawat_Product_UIUX_Designer_Resume.pdf";
    link.click();
  };

  return (
    <section className="ConnectPagesection" id="connect">
      <div className="HeadingSection animate-fade-in">
        <h2>
          <span>let’s connect</span>
          Explore my work, share ideas, or discuss opportunities. You can also
          view and download <b>My Resume</b>
        </h2>
      </div>

      <div className="ConnectFlex">
        <div className="ConnectFlexCard animate-slide-left">
          <img src={Connect1Img} alt="" />
          <h4>Chat Now</h4>
          <p>Let’s talk on WhatsApp</p>
          <button onClick={() => handleClick("chat")}>
            Chat
            <img src={UpRightImg} alt="" />
          </button>
        </div>

        <div className="ConnectFlexCard animate-slide-up">
          <img src={Connect2Img} alt="" />
          <h4>Email Us</h4>
          <p>Send a quick email</p>
          <button onClick={() => handleClick("mail")}>
            Mail
            <img src={UpRightImg} alt="" />
          </button>
        </div>

        <div className="ConnectFlexCard animate-slide-right">
          <img src={Connect3Img} alt="" />
          <h4>Call or text us</h4>
          <p>from your phone</p>
          <button onClick={() => handleClick("call")}>
            Call
            <img src={UpRightImg} alt="" />
          </button>
        </div>
      </div>

      <div className="d-block text-center mt-[80px] animate-slide-up">
        <button onClick={handleDownload} className="DownloadResumeBtn">
          Download Resume
          <img src={WhiteUpRightImg} alt="" />
        </button>
      </div>
    </section>
  );
}

export default Connect;
