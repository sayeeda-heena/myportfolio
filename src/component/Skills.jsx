import React from 'react'
import { motion } from 'framer-motion'
import { skills } from '../assets/assets'

const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0, y: 50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1, ease: 'easeOut' }}
    viewport={{once: false, amount: 0.2}}
    
    className='py-20 dark:bg-dark-100 '
    >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-6 dark:text-white'>My 
                <span className='text-purple ml-3'>Skills</span></h2>
            <p className='dark:text-gray-400 text-center max-w-2xl m-auto mb-16'>Technologies I work with to bring ideas to life.</p>
         <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {
                skills.map((skill, index) => (
                    <div key={index} className='dark:bg-dark-300 bg-gray-300/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer'>
                        <div className='flex items-center mb-4'>
                            <skill.icon className='w-12 h-12 text-purple mr-6' />
                            <h3 className='text-xl font-semibold dark:text-white'>{skill.title}</h3>
                       </div>
                       <p className='dark:text-white/40 text-gray-500'>{skill.description}</p>

                    </div>

                ))
            }
            

         </div>
        
        
        </div>

    </motion.div>
  )
}

export default Skills
