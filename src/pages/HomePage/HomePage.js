import React from "react";

import Header from "../../components/Header/Header";
import Hero from "../Hero/Hero";
import FeaturedWork from "../FeaturedWork/FeaturedWork";
import UxProcess from "../UxProcess/UxProcess";
import About from "../About/About";
import Skiils from "../Skiils/Skiils";
import Toolkit from "../Toolkit/Toolkit";
import Testimonial from "../Testimonial/Testimonial";
import Connect from "../Connect/Connect";
import Footer from "../../components/Footer/Footer";


function HomePage() {
  return (
    <>
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

export default HomePage;
