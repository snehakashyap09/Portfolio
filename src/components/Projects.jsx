import React from 'react'
import { FaGithub,FaExternalLinkAlt } from 'react-icons/fa'
import jobProject from  "../assets/job.png"  ;
   import interview from  "../assets/prepwise.png"  ;


const projects = [
  {
    title:"CareerVista",
    duration:"Nov 2024 - Jan 2025",
    description:"CareerVista is a modern job portal designed to streamline the recruitment process for both employers and job seekers.Built with a focus on usability, performance, and clean design." ,
    image : jobProject,
    tech:["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/snehakashyap09/Job_Portal",
    live:"https://job-search-webapp.netlify.app"
  },
   {
    title:"AI InterviewPrepwise",
    duration:"March 2025 - April 2025",
    description:"Ready to master your job interviews? Join us as we build a real-time AI-driven mock interview platform with Next.js and Vapi AI, offering personalized prep sessions just for you.",
    image : interview,
     tech: ["firebase", "vapi ai", "nextjs"],
    github: "https://github.com/snehakashyap09/Interview_prep",
    live: "https://prepwisemns.vercel.app/",
  },
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20 border-b border-gray-600' id= "projects">
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
      <div className='max-w-5xl mx-auto grid  grid-cols-1 md:grid-cols-2 gap-16'>
      {projects.map((projects,index)=>(
        <div key = {index} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
         <img src={projects.image} alt={projects.title} className='rounded-lg mb-4 w-full h-48 object-cover' />
        <h3 className='text-2xl font-bold text-transparent mb-2 bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>{projects.title}</h3>
        
        <div className='flex flex-wrap mt-4 gap-2'>
         {projects.tech.map((tech,i)=>(
          <span key={i} className='bg-black border  text-white-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm md:text-lg'>
            {tech}
          </span>
         ))}
        </div>

        <p className='text-gray-400 text-xs sm:text-sm  mt-3 mb-2'>{projects.duration}</p>
        <p className='text-sm sm:text-base text-gray-300 mb-4 text-justify'>{projects.description}</p>
       

       <div className='flex flex-wrap mt-auto  gap-4'>
        <a href={projects.github} target='blank' title='github'>
          <FaGithub className='text-green-500 text-2xl hover:text-gray-400 transition ' />
        </a>
         <a href={projects.live} target='blank' title='live site'>
          <FaExternalLinkAlt className='text-green-500 text-2xl hover:text-gray-400 transition' />
        </a>
       </div>
        </div>
      ))

      }
      </div>
      </div>
      
    </div>
  )
}

export default Projects
