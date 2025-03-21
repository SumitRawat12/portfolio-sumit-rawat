import React from "react";

const AnimatedButton = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button onClick={scrollToContact} className="relative overflow-hidden bg-[#ff6d5a] text-white font-bold py-2 w-[80px] rounded group py-6 px-16">
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-0 group-hover:-translate-y-full">
                Hire Me
            </span>
            <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
                Hire Me
            </span>
        </button>
    );
};

export default AnimatedButton;