import React from 'react';
import { motion } from 'framer-motion';

const Body = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Arshida_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='bg-[#38393a] bg-opacity-50 w-[90%] h-[90vh] mx-auto rounded-3xl flex mt-5 font-poppins justify-around overflow-hidden p-10'>
      {/* Intro Section */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1 }}
        className="space-y-6 mt-[170px]"
      >
        <h1 className='text-5xl font-semibold text-white'>Hey There,</h1>
        <h1 className='text-6xl font-semibold'>I'm <span className='text-[#f5d061]'>Arshida.</span></h1>
        <p className='text-gray-400 text-xl leading-loose'>
          I'm a <span className='text-white'>Full stack Developer</span> blending creativity and logic to build <br />
          digital spaces where every detail counts.
        </p>

        {/* Buttons */}
          <motion.button 
            className="px-6 py-2 bg-[#f5d061] text-black  font-semibold rounded-full w-[180px] h-[40px] shadow-md hover:border-[#f5d061] hover:text-[#f5d061]  hover:bg-[#38393a] hover:border-2 transition-all duration-300"
            onClick={handleDownload}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.5 }}

          >
            Download CV
          </motion.button>
          
          
        
      </motion.div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.1 }} 

        transition={{ duration: 1, delay: 1 }}
        className="relative flex justify-center items-center mt-[55px] mr-[100px]"
      >
        <div className="w-[390px] h-[390px] rounded-full  flex justify-center items-center relative overflow-hidden shadow-lg">
          <motion.img 
            src="/arshi.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full" 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Body;
