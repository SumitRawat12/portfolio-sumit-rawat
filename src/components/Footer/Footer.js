import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="FooterPagesection animate-slide-up">
      <h6>© 2025 Sumit Singh Rawat. All rights reserved.</h6>
      <h4>Thank you for visiting my portfolio </h4>

      <div className="FooterFlex">
        <div>
          <a
            href="https://www.linkedin.com/in/sumit-singh-rawat-b21593243/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ssr192031@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/SumitRawat12/portfolio-sumit-rawat"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.behance.net/sumitrawat-uiux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Behance
          </a>
        </div>

        <h5>
          Design & Development by <b>Sumit Singh Rawat</b>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
