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
      { name: "HTML", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-400" /> },
      { name: "React", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6 text-teal-400" /> },
    ],
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: <FaNode className="h-6 w-6 text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="h-6 w-6 text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-6 w-6 text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="h-6 w-6 text-blue-400" /> },
      { name: "Python", icon: <FaPython className="h-6 w-6 text-yellow-300" /> },
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
                  className="flex items-center gap-2  bg-black rounded-lg text-sm hover:bg-gray-700 transition p-2"
                >
                  {tech.icon}
                  <span className="text-md md:text-lg">{tech.name}</span>
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
