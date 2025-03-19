"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const projects = [
  { id: 1, name: "E-commerce platfom", img: "/shoeapp.png", },
  { id: 2, name: "clothing platform", img: "/ecommerce2.png",  },
  { id: 3, name: "meme sharing platform", img: "/memeverse.png", },
  { id: 4, name: "coffie website", img: "/coffie-web.png", },
  { id: 5, name: "E-Commerce Website", img: "/ecommerce1.png", },


];

const Projects = () => {
  return (
    <motion.div
      className="bg-[#38393a] w-[90%] h-[90vh] mx-auto rounded-3xl mt-10 p-10 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h1 className="text-5xl font-sans font-semibold text-center">
        Featured <span className="text-[#61dff5]">Projects</span>
      </h1>

      <p className="text-gray-300 text-lg text-center mt-7">
        Take a look at some of my best projects showcasing my skills.
      </p>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
        className="mt-19"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <motion.div
              className="w-full h-80 bg-gray-700 rounded-2xl overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-500 transform hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-xl font-semibold text-[#61dff5] opacity-0 hover:opacity-100 transition-all duration-500">
                <p>{project.name}</p>
                
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Projects;
