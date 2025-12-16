import React, { useState} from 'react'
import { nav } from 'framer-motion/client'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";



const Narbar = () => {

    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='fixed w-full z-50 dark:bg-dark-100/90 dark:text-white/90 bg-white/60 text-black/50 backdrop-blur-sm py-4 px-8 
    shadow-2xl'>
        <div className='container mx-auto flex justify-between items-center'>
            <div>
                <a href="#" className='text-3xl font-bold dark:text-white text-black/50 '>
                    Sayeeda
          <span className='text-purple'>Heena</span>
          <div className='w-4 h-4 bg-purple rounded-full'></div>                   
           </a>
            </div>
            <div className='hidden md:flex space-x-10'>
                <Link to='/'  className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Home</span>
               <span className='absolute left-0 -bottom-1 width-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>
             
              <Link to='/about'  className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>About</span>
               <span className='absolute left-0 -bottom-1 width-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to='/skills'  className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Skills</span>
               <span className='absolute left-0 -bottom-1 width-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to='/projects'  className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Projects</span>
               <span className='absolute left-0 -bottom-1 width-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>

               <Link to='/contact'  className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Contact</span>
               <span className='absolute left-0 -bottom-1 width-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full'></span>
               </Link>
                 
                <ThemeToggle /> 

             </div>
            
            {/*Mobile button */}
            <div className='md:hidden'>
                {showMenu ? <FaXmark onClick={() =>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/> : 
                <FaBars onClick={() =>setShowMenu(!showMenu)} className='text-2xl cursor-pointer'/>
             }
            </div>
            </div>

            {/* Mobile menus */}
            {showMenu && (
              <div className='md:hidden mt-4 dark:bg-dark-300  bg-white/40 text-black/50 max-h-screen rounded-lg p-4 flex flex-col space-y-4 text-center justify-center items-center'>
                 <a href='#home' onClick={() =>setShowMenu(!showMenu)} className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Home</span>
               </a>
             
              <a href='#about' onClick={() =>setShowMenu(!showMenu)} className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>About</span>
                </a>

               <a href='#skills' onClick={() =>setShowMenu(!showMenu)} className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Skills</span>
              </a>

               <a href='#projects' onClick={() =>setShowMenu(!showMenu)} className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Projects</span>
               </a>

               <a href='#contact' onClick={() =>setShowMenu(!showMenu)} className='relative dark:text-white/80 transition duration-300 hover:text-purple group'>
               <span>Contact</span>
              </a>
               <ThemeToggle /> 
              </div> 
            )}

           </nav> 
  )
}

export default Narbar
