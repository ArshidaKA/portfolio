import React from 'react';
import { motion } from 'framer-motion';

const Body = () => {
  return (
    <div className='bg-[#38393a] bg-opacity-50 w-[90%] h-auto sm:h-[90vh] mx-auto rounded-3xl flex flex-col sm:flex-row mt-5 font-poppins justify-around overflow-hidden p-10 relative'>
      {/* Profile Image Section (First on Small Screens) */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative flex justify-center items-center mt-5 sm:mt-[55px] sm:mr-[100px]"
      >
        <div className="w-[250px] h-[250px] sm:w-[390px] sm:h-[390px] rounded-full flex justify-center items-center relative overflow-hidden shadow-lg">
          <motion.img 
            src="/arshi.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Floating Dots and Shapes */}
        <motion.div 
          className="absolute top-[-30px] left-[120%] w-4 h-4 bg-[#61dff5] rounded-full shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute bottom-[-30px] left-[110%] w-6 h-6 bg-[#61dff5] rounded-full shadow-lg"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        />
        <motion.div 
          className="absolute left-[130%] top-1/2 w-10 h-10 bg-[#61dff5] opacity-50 rounded-lg rotate-45"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Intro Section (Below Image on Small Screens) */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="space-y-6 mt-5 sm:mt-[170px] text-center sm:text-left"
      >
        <h1 className='text-3xl sm:text-5xl font-semibold text-white'>Hey There,</h1>
        <h1 className='text-4xl sm:text-6xl font-semibold'>I'm <span className='text-[#61dff5]'>Arshida.</span></h1>
        <p className='text-gray-400 text-lg sm:text-xl leading-loose'>
          I'm a <span className='text-white'>Full stack Developer</span> blending creativity and logic to build <br className='hidden sm:block' />
          digital spaces where every detail counts.
        </p>

        <a
          href="/Arshida-CV.pdf"
          download="Arshida-CV.pdf"
          className="px-6 py-2 bg-[#61dff5] mt-4 sm:mt-8 text-black font-semibold rounded-full w-[180px] h-[40px] shadow-md hover:border-[#61dff5] hover:text-[#61dff5] hover:bg-[#38393a] hover:border-2 transition-all duration-300"
        >
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default Body;
