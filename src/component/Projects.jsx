import React from 'react'
import { motion } from 'framer-motion'
import ProjectsCard from './ProjectsCard'
import { projects } from '../assets/assets'


const Projects = () => {
  return (
    <motion.div
    initial={{opacity:0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.6, ease: 'easeOut' }}
    viewport={{once: false, amount:0.2}}
    id='projects'
    className='py-20 dark:bg-dark-200'
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4 dark:text-white'>My 
                <span className='text-purple ml-2'>Projects</span></h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>A selection of my work.</p>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto dark:text-white'>
            {/* Project card */}
            {
              projects.map((project, index) => (
                <ProjectsCard key={index} {...project}/>
              ))

            }
          </div>
        </div>
      
    </motion.div>
  )
}

export default Projects
