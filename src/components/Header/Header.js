import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
// import WNLogo from "../../assets/images/white-wLogo.png";
// import WBar from "../../assets/images/white-Bar.png";


import NLogo from "../../assets/images/NLogo.png";
import Bar from "../../assets/images/Bar.png";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const navRefs = useRef([]);

  const menuItems = [
    "Home",
    "Featured Work",
    "UX Process",
    "About Me",
    "Skills & Tools",
    "Connect",
  ];

  useEffect(() => {
    if (navRefs.current[activeIndex]) {
      const el = navRefs.current[activeIndex];
      setSliderStyle({
        width: el.offsetWidth + "px",
        left: el.offsetLeft + "px",
      });
    }
  }, [activeIndex]);

  // 🔹 Scroll Spy Effect
  useEffect(() => {
    const handleScroll = () => {
      let currentIndex = 0;
      menuItems.forEach((item, idx) => {
        const sectionId = item.replace(/\s+/g, "-").toLowerCase();
        const sectionEl = document.getElementById(sectionId);
        if (sectionEl) {
          const rect = sectionEl.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentIndex = idx;
          }
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="HeaderSection animate-slide-down">
        <div
          style={{ position: "relative" }}
          className="w-full flex justify-center"
        >
          <ul className="Navbar" style={{ position: "relative" }}>
            {menuItems.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                ref={(el) => (navRefs.current[idx] = el)}
                onClick={() => {
                  const sectionId = item.replace(/\s+/g, "-").toLowerCase();
                  const sectionEl = document.getElementById(sectionId);
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={activeIndex === idx ? "active" : ""}
              >
                {item}
              </li>
            ))}

            <div className="NavIntroFlex">
              <img src={Logo} alt="" />
              <h6>
                <span>Product Designer</span>
                Sumit Rawat
              </h6>
            </div>

            {menuItems.slice(3).map((item, idx) => (
              <li
                key={idx + 3}
                ref={(el) => (navRefs.current[idx + 3] = el)}
                onClick={() => {
                  const sectionId = item.replace(/\s+/g, "-").toLowerCase();
                  const sectionEl = document.getElementById(sectionId);
                  if (sectionEl) {
                    sectionEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={activeIndex === idx + 3 ? "active" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
          <span className="slider-bar" style={{ ...sliderStyle }} />
        </div>
      </header>

      <header className="MobileHeader">
        <img className="NewLogo" src={NLogo} alt="" />
        <img className="NewBar" src={Bar} alt="" />
      </header>
    </>
  );
}

export default Header;
