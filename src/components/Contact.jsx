import React from 'react'
import { FaEnvelope, FaMap, FaMapMarked, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20 border-gray-600' id='contact'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
      <h2 className='text-4xl text-center mb-12 font-bold'>Contact Me</h2>
      <div className='flex flex-col md:flex-row items-center md:space-x-12'>
      <div className='flex-1'>
        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
      <p>I'm open to discussing web development projects or partnership opportunities.</p>
      <div className='mb-4 mt-8'>
       <FaEnvelope className='inline-block text-green-400 mr-2' />
       <a href="mailto:snehak5679@gmail.com" className='hover:underline'>snehak5679@gmail.com</a>
      </div>
      <div className='mb-4'>
         <FaPhone className='inline-block text-green-400 mr-2' />
         <span>+91 8976452367</span>
      </div>

      <div className='mb-4'>
     <FaMapMarkedAlt className='inline-block text-green-400 mr-2' />
     <span>Street, City, Country</span>
      </div>
      </div>

      <div className='flex-1 w-full'>
         <form className='space-y-4'>
            <div>
              <label htmlFor="name" className='block mb-2'>Your Name</label>
              <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Name' />
            </div>

             <div>
              <label htmlFor="email" className='block mb-2'>Email</label>
              <input type="text" className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400' placeholder='Enter Your Email' />
            </div>

             <div>
              <label htmlFor="message" className='block mb-2'></label>
              <textarea type="text" className='w-full p-2  bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 ' rows="5" placeholder='Enter Your Message' />
            </div>
            <div className='flex justify-center md:justify-start'>
             <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white 
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </div>
         </form>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
