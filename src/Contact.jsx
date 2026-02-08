import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Card */}
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-xl">

        <h1 className="text-3xl font-bold text-center text-green-400">
          Contact Me
        </h1>
        <p className="text-center text-gray-400 mt-2 mb-6">
          Let's work together! Send me a message.
        </p>

        {/* FORM WITH FORMSPREE */}
        <form 
          action="https://formspree.io/f/xojnqbqe" 
          method="POST" 
          className="space-y-4"
        >
          <div>
            <label className="block text-gray-300 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your message..."
              required
              className="w-full px-4 py-2 rounded-md bg-gray-700 text-white outline-none focus:ring-2 focus:ring-green-400 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 bg-slate-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-blue-600 hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>

        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-600/30 transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Bottom Menu */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900 px-6 py-3 rounded-full shadow-lg flex space-x-6 border border-gray-700">
        <i className="fas fa-house text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/")}></i>
        <i className="fas fa-user text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/about")}></i>
        <i className="fas fa-desktop text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/projects")}></i>
        <i className="fas fa-code text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/skills")}></i>
        <i className="fas fa-envelope text-xl cursor-pointer hover:text-blue-500" onClick={() => navigate("/contact")}></i>
      </div>

    </div>
  );
};

export default Contact;
