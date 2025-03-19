import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Page1() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className='w-[90%] mx-auto mt-10'>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className='bg-[#38393a] w-full h-auto sm:h-[90vh] font-sans rounded-3xl px-9 flex flex-col sm:flex-row items-center justify-between py-10 sm:py-0'
            >
                {/* Left Side - Text Content */}
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-5xl sm:text-6xl font-bold font-sans text-[#61dff5]'
                    >
                        about.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='text-lg sm:text-2xl font-poppins text-gray-400 mt-4 sm:mt-8'
                    >
                        I'm a passionate <span className='text-white'>Fullstack Developer</span> who loves blending creativity with logic to build seamless digital experiences.
                    </motion.p>

                    <motion.h3
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='text-base sm:text-xl font-poppins text-gray-400 mt-4 sm:mt-8'
                    >
                        I specialize in both front-end and back-end development, building responsive interfaces using React, TailwindCSS, and JavaScript, while ensuring scalable back-end solutions with Node.js, Express.js, and MongoDB.
                    </motion.h3>

                    {/* Social Media Links */}
                    <div className="flex justify-center sm:justify-start text-2xl space-x-4 mt-6 sm:mt-12">
                        <a href="https://www.linkedin.com/in/arshida-k-a-5ba98a314/" target="_blank" rel="noopener noreferrer" className="text-[#61dff5] hover:text-gray-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/arshee.eh?igsh=NXY4Znh3djhydGsz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#61dff5] transition">
                            <FaInstagram />
                        </a>
                        <a href="https://github.com/ArshidaKA" target="_blank" rel="noopener noreferrer" className="text-[#61dff5] hover:text-gray-600 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Right Side - Image (Appears First on Small Screens) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0"
                >
                    <img
                        src='https://www.rhdigital.co.uk/wp-content/uploads/web-design-768x694.png'
                        className='w-[250px] sm:w-[400px]'
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Page1;
