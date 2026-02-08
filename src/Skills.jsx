import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaMicrochip,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiFirebase,
  SiExpress,
  SiGraphql,
} from "react-icons/si";

const skills = [
  // 💻 Software / Web
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Redux Toolkit", icon: <SiRedux /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "GraphQL", icon: <SiGraphql /> },

  // ⚡ ECE / Core
  { name: "Digital System Design (DSD)", icon: <FaMicrochip /> },
  { name: "Verilog HDL", icon: <FaMicrochip /> },
  { name: "SystemVerilog (SV)", icon: <FaMicrochip /> },
];

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-16">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-blue-400">
        My Skills
      </h1>
      <p className="text-center text-gray-400 mt-2 mb-12">
        Software Development & ECE Technologies
      </p>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-white/95
              rounded-xl
              flex flex-col items-center justify-center
              p-5
              shadow-md
              hover:shadow-blue-500/30
              hover:-translate-y-1
              transition-all duration-300
              cursor-pointer
            "
          >
            <div className="text-2xl text-blue-600 mb-2">
              {skill.icon}
            </div>
            <p className="text-gray-800 text-sm font-semibold text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Floating Menu */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 px-6 py-3 rounded-full shadow-lg flex space-x-6 border border-gray-700">
        <i
          className="fas fa-house text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/")}
        ></i>

        <i
          className="fas fa-user text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/about")}
        ></i>

        <i
          className="fas fa-desktop text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/projects")}
        ></i>

        <i
          className="fas fa-code text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/skills")}
        ></i>

        <i
          className="fas fa-envelope text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/contact")}
        ></i>
      </div>
    </div>
  );
};

export default Skills;
