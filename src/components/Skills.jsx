import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaGithub,
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiTailwindcss, SiMysql, SiFigma, SiVercel, SiNetlify
} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    tech: [
      { name: "HTML", icon: <FaHtml5 className=" text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className=" text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className=" text-yellow-400" /> },
      { name: "React", icon: <FaReact className=" text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className=" text-teal-400" /> },
    ],
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: <FaNode className=" text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className=" text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className=" text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className=" text-blue-400" /> },
    { name: "Python", icon: <FaPython className=" text-yellow-300" /> },
    ],
  },
 
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-20 border-b border-gray-600" id = "skills">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      
<div className="max-w-5xl mx-auto grid  grid-cols-1 md:grid-cols-2 gap-16">
            {skills.map((skill, index) => (
         <div
              key={index}
              className=" bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
            <h3 className="mt-2 text-center text-2xl pb-6 font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
{skill.title}</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {skill.tech.map((tech, i) => (
                <div
                  key={i}
                  className=" text-center flex items-center gap-2  bg-black rounded-lg text-sm hover:bg-gray-700 transition p-0 md:p-2"
                >
                  <div className="h-3 w-3 md:h-6 md:w-6 pr-1">{tech.icon}</div>
                  <span className="text-sm md:text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
