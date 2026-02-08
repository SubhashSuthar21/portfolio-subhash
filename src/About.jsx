import React from "react";
import { useNavigate } from "react-router-dom";
import rtuLogo from "./assets/rtu-logo.png";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-20 relative">

      {/* Header with RTU Logo */}
      <div className="flex items-center gap-4 mb-10">
        <img
          src={rtuLogo}
          alt="Rajasthan Technical University Logo"
          className="w-16 h-16 object-contain bg-white rounded-full p-2 shadow-md"
        />
        <h2 className="text-4xl font-bold text-green-600">
          About Me
        </h2>
      </div>

      {/* About Content */}
      <ul className="text-gray-300 text-lg leading-relaxed max-w-4xl list-disc pl-6 space-y-4">
        <li>
          I am <strong>Subhash Suthar</strong>, a final-year{" "}
          <strong>B.Tech student in Electronics and Communication Engineering</strong>{" "}
          from <strong>Rajasthan Technical University (RTU), Kota</strong>, with a strong
          academic background in digital systems and electronics.
        </li>

        <li>
          I have hands-on experience in{" "}
          <strong>Python, Digital System Design, Verilog, and SystemVerilog</strong>,
          gained through coursework and practical, project-oriented learning.
        </li>

        <li>
          I have completed internships at{" "}
          <strong>Analyser Instrument Co. Pvt. Ltd.</strong> and{" "}
          <strong>Kota Super Thermal Power Plant</strong>, where I gained exposure to
          industrial instrumentation, calibration techniques, and control systems
          used in large-scale power plants.
        </li>

        <li>
          My project experience includes developing a{" "}
          <strong>Sudoku Puzzle Generator and Solver</strong> using Python, as well as
          working on{" "}
          <strong>Serial Communication Protocol Verification</strong> (UART, SPI,
          and I²C) using SystemVerilog.
        </li>

        <li>
          I secured a{" "}
          <strong>Runner-up position in Robo-Rush at JECRC</strong>, demonstrating
          teamwork, analytical thinking, and hands-on problem-solving skills.
        </li>

        <li>
          I am a disciplined and motivated learner with good communication skills,
          focused on continuous improvement and applying engineering concepts to
          real-world problems.
        </li>

        <li>
          My goal is to build a career as a professional engineer by contributing
          to reliable, efficient, and impactful technology solutions.
        </li>
      </ul>

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

export default About;
