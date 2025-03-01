import React from 'react';
import { faA, faEnvelope, faHomeAlt, faPaperPlane, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Body from './Body';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Home = () => {
  return (
    <div 
      className="bg-black w-full text-white min-h-screen flex flex-col"
     
    >
      {/* Navbar */}
      <div className='fixed top-0 left-0 w-full bg-opacity-50 mt-3 backdrop-blur-md h-[65px] flex justify-between items-center px-10 z-50'>
        <div className='ml-[70px] font-bold p-4'>
          <FontAwesomeIcon className="text-white text-3xl" icon={faA} />
          <FontAwesomeIcon className="text-[#f5d061] text-xl" icon={faPaperPlane} />
        </div>
        <div className='mr-[200px]'>
          <ul className='flex gap-9 font-4xl p-4 font-poppins'>
            {/* <a href='#'>
              <li className='relative group'>
                <FontAwesomeIcon icon={faHomeAlt} className="text-[#f5d061] cursor-pointer" />
                <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Home
                </span>
              </li>
            </a>
            <a href='#About'>
              <li className='relative group'>
                <FontAwesomeIcon icon={faUser} className="text-[#f5d061] cursor-pointer" />
                <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  About
                </span>
              </li>
            </a>
            <a href="#Skills">
              <li className="relative group cursor-pointer">
                Skills
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f5d061] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <a href="#Projects">
              <li className="relative group cursor-pointer">
                Projects
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f5d061] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </a>
            <a href='#Contact'>
              <li className='relative group'>
                <FontAwesomeIcon icon={faEnvelope} className="text-[#f5d061] cursor-pointer" />
                <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  Contact
                </span>
              </li>
            </a> */}
            <a href="#Home">
  <li className='relative group transform transition-transform duration-300 hover:scale-110'>
    <FontAwesomeIcon icon={faHomeAlt} className="text-[#f5d061] cursor-pointer" />
    <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      Home
    </span>
  </li>
</a>
<a href='#About'>
              <li className='relative group'>
                <FontAwesomeIcon icon={faUser} className="text-[#f5d061] cursor-pointer" />
                <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  About
                </span>
              </li></a>

<a href="#Skills">
  <li className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-110">
    Skills
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f5d061] transition-all duration-300 group-hover:w-full"></span>
  </li>
</a>

<a href="#Projects">
  <li className="relative group cursor-pointer transform transition-transform duration-300 hover:scale-110">
    Projects
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#f5d061] transition-all duration-300 group-hover:w-full"></span>
  </li>
</a>

<a href="#Contact">
  <li className='relative group transform transition-transform duration-300 hover:scale-110'>
    <FontAwesomeIcon icon={faEnvelope} className="text-[#f5d061] cursor-pointer" />
    <span className="absolute left-1/2 -translate-x-1/2 top-10 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      Contact
    </span>
  </li>
</a>

          </ul>
        </div>
      </div>

      {/* Body Section */}
      <div className='pt-[65px] flex-grow'>
        <div ><Body /></div>
        <div id='About'> <About /></div>
        <div id='Skills'><Skills/></div>
        <div id='Projects'><Projects/></div>
        <div id='Contact'><Contact/></div>
      

        <div className='h-21 text-center '>
          <p className='text-gray-500 font-normal mt-7 text-lg'>© Arshida 2025.All rights reserved.</p>
        </div>
      </div>
    </div>
  );  
};

export default Home;
