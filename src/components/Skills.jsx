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
      { name: "HTML", icon: <FaHtml5 className="h-5 w-5 text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="h-5 w-5 text-blue-500" /> },
      { name: "JavaScript", icon: <FaJs className="h-5 w-5 text-yellow-400" /> },
      { name: "React", icon: <FaReact className="h-5 w-5 text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="h-5 w-5 text-teal-400" /> },
    ],
  },
  {
    title: "Backend",
    tech: [
      { name: "Node.js", icon: <FaNode className="h-5 w-5 text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="h-5 w-5 text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="h-5 w-5 text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="h-5 w-5 text-blue-400" /> },
      { name: "Python", icon: <FaPython className="h-5 w-5text-yellow-300" /> },
    ],
  },
 {
    title: "Others",
    tech: [
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
      { name: "Netlify", icon: <SiNetlify className="text-blue-400" /> },
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-16 px-4 " id = "skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>
      
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
         <div
              key={index}
              className="bg-gray-800 pt-6 px-6 pb-10 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
            <h3 className="mt-2 text-2xl pb-6 font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
{skill.title}</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {skill.tech.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1 bg-black rounded-full text-sm hover:bg-gray-700 transition"
                >
                  {tech.icon}
                  <span className="text-sm md:text-lg">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
