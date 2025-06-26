import React from "react";
import AboutImage from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="bg-black text-white py-16 sm:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <img
            src={AboutImage}
            alt="Profile"
            className="w-56 h-56 sm:w-68 sm:h-68 lg:w-80 lg:h-80 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          />

          <div className="flex flex-col items-center lg:items-start justify-center text-center  lg:text-left md:pl-14">
            <h2 className="text-3xl text-start sm:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8 px-2 sm:px-0 text-justify">
              I'm Sneha Kumari, A MERN stack developer who loves building clean, responsive web apps. Right now, I'm diving into Next.js and TypeScript to sharpen my skills and create faster, more scalable projects. I enjoy turning ideas into interactive, user-friendly experiences. Always learning, always building — one project at a time.
            </p>
             
               
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-8 py-3 font-bold'>Check Resume</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
