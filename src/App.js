import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero/Hero";
import FeaturedWork from "./pages/FeaturedWork/FeaturedWork";
import UxProcess from "./pages/UxProcess/UxProcess";
import About from "./pages/About/About";
import Skiils from "./pages/Skiils/Skiils";
import Toolkit from "./pages/Toolkit/Toolkit";
import Testimonial from "./pages/Testimonial/Testimonial";
import Connect from "./pages/Connect/Connect";
import Footer from "./components/Footer/Footer";
import Comingsoon from "./components/ComingSoon/ComingSoon";

function App() {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // only once
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(
      ".animate-slide-down, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-fade-in-out, .animate-fade-in, .animate-bounce-in"
    ).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* <Comingsoon /> */}
      <Header />
      <Hero />
      <FeaturedWork />
      <UxProcess />
      <About />
      <Skiils />
      <Toolkit />
      <Testimonial />
      <Connect />
      <Footer />
    </>
  );
}

export default App;
