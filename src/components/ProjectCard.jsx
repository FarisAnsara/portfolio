import React from 'react'
import Subsubtitle from './Subsubtitle'
import BodyText from './BodyText'
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectCard = ( {title, image, description, url_target=null} ) => {
  return (
    <div className="relative group rounded-[15%] bg-black overflow-hidden shadow-lg h-auto w-[90%]">
        <img
            src={image}
            alt={title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className='absolute inset-x-0 top-0'>
              <Subsubtitle subtitle={title} className='w-full text-white p-6 pb-0'/>
            </div>
            {/* <div className='absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 p-6' > */}
            <div className='absolute right-0 bottom-0 p-6' >
              {/* <div className=' bg-cyan-900 rounded-full p-3'> 
                <BodyText bodyText='Learn More' className='w-full text-white' />
              </div> */}
              <div className='bg-cyan-900 rounded-full p-3'>
                <a href={`https://github.com/FarisAnsara/${url_target}`} target='_blank'>
                  <BodyText bodyText='Code' className='pl-3 pr-3'/>
                  {/* <IoIosArrowRoundForward className='text-white text-2xl' /> */}
                </a>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard