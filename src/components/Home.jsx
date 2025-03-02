import React, { useState,useEffect } from "react";
import { faA, faPaperPlane, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from "aos";
import "aos/dist/aos.css";
import Body from "./Body";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Page3 from "./Service";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    AOS.init();})

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
      setMenuOpen(false); 
    }
  };

  return (
    <div className="bg-black w-full text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-opacity-50 mt-3 backdrop-blur-md h-[65px] flex justify-between items-center px-6 sm:px-10 z-50">
        <div className="flex items-center space-x-2 ml-3 sm:ml-[70px] font-bold p-4">
          <FontAwesomeIcon className="text-white text-3xl" icon={faA} />
          <FontAwesomeIcon className="text-[#61dff5] text-xl" icon={faPaperPlane} />
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden mr-5">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon className="text-white text-2xl" icon={menuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`sm:mr-[200px] ${menuOpen ? "absolute top-16 right-5 bg-black p-5 rounded-md shadow-md" : "hidden"} sm:flex`}>
          <ul  className="flex sm:flex-row flex-col gap-5 sm:gap-9 font-semibold text-[#61dff5] sm:p-3 uppercase">
            {["Home", "About", "Skills", "Projects", "Contact"].map((section) => (
              <li
              data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
                key={section}
                onClick={() => scrollToSection(section)}
                className="cursor-pointer px-4 py-2 transition-all duration-300 hover:bg-[#61dff5] hover:text-black rounded"
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-[65px] flex-grow">
        <div id="Home">
          <Body />
        </div>
        <div id="About">
          <About />
        </div>
        <div >
          <Page3/>
        </div>

        <div id="Skills">
          <Skills />
        </div>
        <div id="Projects">
          <Projects />
        </div>
        <div id="Contact">
          <Contact />
        </div>

        <div className="h-21 text-center">
          <p className="text-gray-500 font-normal mt-7 text-lg">
            © Arshida 2025. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
