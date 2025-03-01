"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiMysql, SiRedux, SiFirebase, SiGraphql } from "react-icons/si";

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
    // { name: "MySQL", icon: <SiMysql />, percentage: 70 },
    // { name: "GraphQL", icon: <SiGraphql />, percentage: 65 },
    { name: "Firebase", icon: <SiFirebase />, percentage: 80 },
  ];

  const skills = activeTab === "frontend" ? frontendSkills : backendSkills;

  return (
    <motion.div 
      className="bg-[#38393a] w-[90%] h-auto mx-auto rounded-3xl mt-10 p-10 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <h1 className="text-5xl font-semibold font-sans">
        My <span className="text-[#f5d061]">Skills</span>
      </h1>
      <p className="text-gray-400 text-xl mt-4">
        Take a peek into my toolkit that crafts my web development journey.
      </p>

      {/* Buttons */}
      <div className="flex justify-center mt-8 space-x-6">
        <button
          className={`text-lg px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === "frontend"
              ? "bg-[#f5d061] text-black font-bold shadow-lg"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("frontend")}
        >
          Front-End
        </button>

        <button
          className={`text-lg px-6 py-2 rounded-full transition-all duration-300 ${
            activeTab === "backend"
              ? "bg-[#f5d061] text-black font-bold shadow-lg"
              : "bg-gray-700 text-gray-300"
          }`}
          onClick={() => setActiveTab("backend")}
        >
          Back-End
        </button>
      </div>

      {/* Skills Content with Progress Circles */}
      <motion.div 
        key={activeTab} 
        className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10"
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="relative w-32 h-32">
              {/* Background Circle */}
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" strokeWidth="5" stroke="#444" fill="none" />
              </svg>
              {/* Progress Circle */}
              <svg className="absolute w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  strokeWidth="2" // Reduced thickness
                  stroke="#f5d061"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - (skill.percentage / 100) * 251.2}
                  initial={{ strokeDashoffset: 251.2 }}
                  whileInView={{ strokeDashoffset: 251.2 - (skill.percentage / 100) * 251.2 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </svg>
              {/* Percentage Text */}
              <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                {skill.percentage}%
              </div>
            </div>
            {/* Skill Icon & Name */}
            <div className="flex items-center mt-2 text-lg font-medium">
              <span className="text-3xl mr-2 text-gray-400">{skill.icon}</span>
              {skill.name}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-15 space-x-4">
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            activeTab === "frontend" ? "bg-[#f5d061] w-6" : "bg-gray-500"
          }`}
        ></div>
        <div
          className={`w-2 h-2 rounded-full transition-all ${
            activeTab === "backend" ? "bg-[#f5d061] w-6" : "bg-gray-500"
          }`}
        ></div>
      </div>
    </motion.div>
  );
};

export default Skills;
