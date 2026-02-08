import React from "react";
import { useNavigate } from "react-router-dom";

// ✅ IMPORT IMAGES FROM ASSETS
import sudokraftImg from "./assets/sudokraft.png";
import serialProtocolImg from "./assets/serial-protocol.png";

function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Sudokraft – Sudoku Puzzle Generator & Solver",
      description:
        "A Python-based Sudoku puzzle generator and solver developed using recursive backtracking. Implements constraint validation for rows, columns, and 3×3 subgrids, unique puzzle generation with varying difficulty levels, object-oriented design, and optimized recursive pruning techniques.",
      image: sudokraftImg,
      link: "#",
    },
    {
      title: "Serial Protocol Verification (UART, SPI, I2C)",
      description:
        "Built automated self-checking SystemVerilog testbenches to verify timing accuracy and data integrity of UART, SPI, and I2C protocols using assertions, scoreboards, and error injection techniques.",
      image: serialProtocolImg,
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-20 relative">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-green-500 text-center mb-14">
        Projects
      </h2>

      {/* Project Cards */}
      <div className="grid gap-12 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition duration-300"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <button
                onClick={() => window.open(project.link, "_blank")}
                className="bg-gray-800 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700 transition"
              >
                🚀 View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 px-6 py-3 rounded-full shadow-lg flex space-x-6 border border-gray-700">
        <i className="fas fa-house text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/")}></i>
        <i className="fas fa-user text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/about")}></i>
        <i className="fas fa-desktop text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/projects")}></i>
        <i className="fas fa-code text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/skills")}></i>
       <i
  className="fas fa-envelope text-xl cursor-pointer hover:text-blue-500 transition"
  onClick={() => navigate("/contact")}
></i>

      </div>

    </div>
  );
}

export default Projects;
