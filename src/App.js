import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

function ScrollAnimationObserver() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(
        ".animate-slide-down, .animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-fade-in-out, .animate-fade-in, .animate-bounce-in"
      )
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollAnimationObserver />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
