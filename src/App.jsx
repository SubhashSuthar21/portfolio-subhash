import React, { useEffect, useState } from "react";
import profile from "./assets/profile.png";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const text = "Subhash Suthar";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 80 : 150;

    const timer = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayText(text.slice(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText(text.slice(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting]);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="px-6 md:px-12 py-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold cursor-pointer">Portfolio</h1>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>



        {/* Desktop Menu */}
       <ul className="hidden md:flex space-x-8 items-center">
  <li onClick={() => navigate("/")} className="hover:text-blue-400 cursor-pointer">Home</li>
  <li onClick={() => navigate("/about")} className="hover:text-blue-400 cursor-pointer">About Me</li>
  <li onClick={() => navigate("/projects")} className="hover:text-blue-400 cursor-pointer">Projects</li>

  {/* Services disabled */}
  <li className="hover:text-blue-400 cursor-pointer">
    Services
  </li>
</ul>


        {/* Desktop Contact Button */}
        <button
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Contact Me
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 bg-gray-800 rounded-xl p-6 text-center">
          <ul className="space-y-4">
            <li onClick={() => {navigate("/"); setMenuOpen(false);}} className="hover:text-blue-400 cursor-pointer">Home</li>
            <li onClick={() => {navigate("/about"); setMenuOpen(false);}} className="hover:text-blue-400 cursor-pointer">About Me</li>
            <li onClick={() => {navigate("/projects"); setMenuOpen(false);}} className="hover:text-blue-400 cursor-pointer">Projects</li>
            <li onClick={() => {navigate("/services"); setMenuOpen(false);}} className="hover:text-blue-400 cursor-pointer">Services</li>
            <button
              onClick={() => {navigate("/contact"); setMenuOpen(false);}}
              className="mt-4 bg-blue-500 px-5 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Contact Me
            </button>
          </ul>
        </div>
      )}
    </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 mt-16">

        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hey, I'm <br /> a{" "}
            <span className="text-blue-500">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="mt-6 text-gray-300">
           Hi! I’m an Electronics and Communication Engineering (ECE) student with a strong interest in both hardware and software, passionate about building efficient, user-friendly, and scalable tech solutions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

             {/*hire me */}
      <button className="animate-btn">
  Hire Me →
  <style>{`
    .animate-btn{
      background:#3b82f6;
      color:white;
      padding:12px 24px;
      border-radius:10px;
      font-weight:600;
      transition:0.3s ease;
    }
    .animate-btn:hover{
      background:#2563eb;
      transform:translateY(-6px) scale(1.05);
      box-shadow:0 10px 25px rgba(59,130,246,0.5);
    }
  `}</style>
</button>


            <a href="/Subhash_Resume.pdf" download>
              <button className="btn3">Resume</button>
            </a>

          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="https://github.com/SubhashSuthar21" target="_blank" rel="noreferrer">
              <i className="fab fa-github hover:text-blue-400 transition"></i>
            </a>
            <a href="https://www.linkedin.com/in/subhash-suthar-b394b0274" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin hover:text-blue-400 transition"></i>
            </a>
            <a href="https://www.instagram.com/subhash_suthar_21" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram hover:text-pink-400 transition"></i>
            </a>
            <a href="https://twitter.com/SubhashSuthar21" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter hover:text-sky-400 transition"></i>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 flex justify-center md:justify-end md:mr-10 lg:mr-40">
          <div className="rounded-full border-4 border-blue-500 p-2 shadow-[0_0_40px_blue]">
            <img
              src={profile}
              alt="Profile"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Bottom Floating Menu */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-900 px-6 py-3 rounded-full shadow-lg flex space-x-6 border border-gray-700">

        <i className="fas fa-house text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/")}></i>

        <i className="fas fa-user text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/about")}></i>

        <i className="fas fa-desktop text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/projects")}></i>

        <i className="fas fa-code text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/skills")}></i>

        

        <i className="fas fa-envelope text-xl cursor-pointer hover:text-blue-500 transition"
          onClick={() => navigate("/contact")}></i>

      </div>

    </div>
  );
}

export default App;
