"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiRedux, SiFirebase } from "react-icons/si";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendSkills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 90 },
    { name: "CSS3", icon: <FaCss3Alt />, percentage: 85 },
    { name: "JavaScript", icon: <FaJsSquare />, percentage: 80 },
    { name: "React.js", icon: <FaReact />, percentage: 85 },
    { name: "Next.js", icon: <SiNextdotjs />, percentage: 85 },
    { name: "Redux", icon: <SiRedux />, percentage: 70 },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs />, percentage: 85 },
    { name: "Express.js", icon: <FaNodeJs />, percentage: 80 },
    { name: "MongoDB", icon: <SiMongodb />, percentage: 75 },
    { name: "Firebase", icon: <SiFirebase />, percentage: 80 },
  ];

  const skills = activeTab === "frontend" ? frontendSkills : backendSkills;

  return (
    <motion.div 
      className="bg-[#1e1f21] w-[90%] h-auto mx-auto rounded-3xl mt-10 p-6 md:p-10 text-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-4xl md:text-5xl font-semibold mt-6 md:mt-9 font-sans">
        My <span className="text-[#61dff5]">Skills</span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mt-6 md:mt-8">
        Take a peek into my toolkit that crafts my web development journey.
      </p>

      <div className="flex justify-center mt-10 md:mt-12 space-x-4 md:space-x-6">
        {["frontend", "backend"].map((tab) => (
          <motion.button
            key={tab}
            className={`text-sm md:text-lg px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#61dff5] text-black font-bold shadow-lg"
                : "bg-gray-900 border-[#61dff5] text-[#61dff5]"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab === "frontend" ? "Front-End" : "Back-End"}
          </motion.button>
        ))}
      </div>

      <motion.div 
        key={activeTab} 
        className="flex flex-wrap justify-center gap-6 md:gap-8 mt-10 h-auto md:h-72"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center mb-10 md:mb-32 w-20 md:w-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            

            <motion.div 
              className="text-5xl md:text-6xl mt-10 text-[#61dff5]"
              whileHover={{ y: -10, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {skill.icon}
            </motion.div>
            <span className="text-base md:text-lg font-medium mt-1">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mb-16 md:mb-24 space-x-3 md:space-x-4">
        {["frontend", "backend"].map((tab) => (
          <motion.div
            key={tab}
            className={`w-2 h-2 md:w-2 md:h-2 mb-8 rounded-full transition-all ${
              activeTab === tab ? "bg-[#61dff5] w-5 md:w-6" : "bg-gray-500"
            }`}
            whileHover={{ scale: 1.3 }}
          ></motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
