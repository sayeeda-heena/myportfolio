import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter}  from 'react-icons/fa';

const Contact = () => {
  return (
       <motion.div 
            initial={{opacity:0, y: 50}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1, ease: 'easeOut' }}
            viewport={{once: false, amount: 0.2}}
            id='contact'
            className='py-20 dark:bg-dark-100 '
            >
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4 dark:text-white'>Get In
                        <span className='text-purple ml-2'>Touch</span>
                    </h2>
                
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                   {/* Contact Form */}
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor='name' className='block dark:text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full dark:bg-dark-300 bg-gray-50 dark:border dark:border-dark-400 rounded-lg px-4 py-3 outline-none' type='text' />
                            </div>
                          
                            <div>
                                <label htmlFor='email' className='block dark:text-gray-300 mb-2'>Email Address</label>
                                <input className='w-full dark:bg-dark-300 bg-gray-50 dark:border dark:border-dark-400 rounded-lg px-4 py-3 outline-none' type='email' />
                            </div>

                             <div>
                                <label htmlFor='message' className='block dark:text-gray-300 mb-2'>Your Message</label>
                                <textarea className='w-full h-40 dark:bg-dark-300 bg-gray-50 dark:border dark:border-dark-400 rounded-lg px-4 py-3 outline-none' type='message' />
                            </div>

                            <button type='submit' className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer '>Send</button>

                        </form>
                    </div>

                    {/*Contact Information */}
                    <div className='space-y-8'>
                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 dark:text-white'>Location</h3>
                                <p className='text-gray-400'>Al Jiwa St, Al-Nahyan, Abu Dhabi </p>
                            </div>
                        </div>

                        <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 dark:text-white'>Email</h3>
                                <p className='text-gray-400'>heenahafeez28@gmail.com</p>
                            </div>
                           </div>

                           <div className='flex items-start'>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2 dark:text-white'>Phone</h3>
                                <p className='text-gray-400'>123-345-2346</p>
                            </div>
                             </div>

                            <div className='pt-4'>
                                <h3 className='text-lg font-semibold mb-4 dark:text-white'>Follow Me</h3>
                                <div className='flex space-x-4'>
                                    <a href='https://github.com/sayeeda-heena' target='_blank' className='w-12  h-12 rounded-full dark:bg-dark-300 bg-gray-100 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                        <FaGithub />
                                    </a>

                                    <a href='https://www.linkedin.com/in/sayeeda-heena-3149a0225/' target='_blank' className='w-12 h-12 rounded-full dark:bg-dark-300 bg-gray-100 flex items-center justify-center text-blue-700 hover:bg-blue-950 hover:text-white transition duration-300'>
                                        <FaLinkedin />
                                    </a>

                                     <a href='https://x.com/HeenaHafee11114' target='_blank' className='w-12 h-12 rounded-full dark:bg-dark-300 bg-gray-100 flex items-center justify-center text-blue hover:bg-blue-400 hover:text-white transition duration-300'>
                                        <FaTwitter />
                                    </a>
                                </div>

                            </div>
                            </div>
                         </div>
                </div>
            </motion.div>
    
  )
}

export default Contact
