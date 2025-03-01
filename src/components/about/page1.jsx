import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fa500Px, FaGithub, FaInstagram, FaLaptopCode, FaLinkedin } from 'react-icons/fa';

function Page1() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div>
            <motion.div 
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className='bg-[#38393a] w-[90%] h-[90vh] mx-auto font-sans rounded-3xl px-9 flex items-center justify-between'
            >
                {/* Left Side - Text Content */}
                <div className="w-1/2">
                    <motion.h1 
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className='text-6xl font-bold mt-18 ml-3 font-sans text-[#f5d061]'
                    >
                        about.
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='text-2xl ml-3 font-poppins text-gray-400 mt-8'
                    >
                        I'm a passionate <span className='text-white'>Fullstack Developer</span> who loves blending creativity with logic to build seamless digital experiences.
                    </motion.p>

                    <motion.h3
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className='text-xl ml-3 font-poppins text-gray-400 mt-8'
                    >
                        I specialize in both front-end and back-end development, building responsive interfaces using React, TailwindCSS, and JavaScript, while ensuring scalable back-end solutions with Node.js, Express.js, and MongoDB.
                    </motion.h3>

                    {/* Social Media Links */}
                    <div className="flex text-2xl space-x-4 mt-12 ml-7">
                        <a href="https://www.linkedin.com/in/arshida-k-a-5ba98a314/" target="_blank" rel="noopener noreferrer" className="text-[#f5d061] hover:text-gray-600 transition">
                            <FaLinkedin />
                        </a>
                        <a href="https://www.instagram.com/arshee.eh?igsh=NXY4Znh3djhydGsz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#f5d061] transition">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/9645299269" target="_blank" rel="noopener noreferrer" className="text-[#f5d061] hover:text-gray-600 transition">
                            <FaGithub />
                        </a>
                    </div>
                </div>

                {/* Right Side - Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-1/2 flex justify-center"
                >
                    {/* <FaLaptopCode className='text-[200px] text-[#f5d061]'/> */}
                    <img
                    src='https://www.rhdigital.co.uk/wp-content/uploads/web-design-768x694.png'
                    className='w-[400px]'></img>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Page1;
