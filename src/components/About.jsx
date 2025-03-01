import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Page1 from "./about/page1";
import Page3 from "./about/Page3";

const About = () => {
  const [isPaused, setIsPaused] = useState(false);
  const swiperRef = useRef(null);

  // Function to stop autoplay on click
  const handlePause = () => {
    setIsPaused(true);
    swiperRef.current?.swiper?.autoplay.stop();
  };

  // Function to resume autoplay when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isPaused) {
        setIsPaused(false);
        swiperRef.current?.swiper?.autoplay.start();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isPaused]);

  return (
    <div className="relative bg-[#38393a] w-[90%] h-[90vh] mx-auto font-sans rounded-3xl mt-10 flex items-center justify-center">
      {/* Swiper Component */}
      <Swiper
  ref={swiperRef}
  modules={[Pagination, Autoplay]}
  pagination={{
    clickable: true, // Ensure pagination bullets are clickable
  }}
  direction="vertical"
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  autoplay={!isPaused ? { delay: 2000, disableOnInteraction: false } : false}
  className="w-full h-full rounded-lg"
  onClick={handlePause} // Pause on click
>
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
       
        <SwiperSlide>
          <Page3 />
        </SwiperSlide>
      </Swiper>

      {/* Custom Pagination (Vertical Dots) */}
      <div className="custom-swiper-pagination absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2"></div>

      {/* Swiper Pagination Custom Styling */}
      <style jsx global>{`
        .swiper-pagination-bullets {
          display: flex;
          flex-direction: column;
          gap: 8px;
          left: 20px !important;
          top: 50% !important;
          transform: translateY(-50%);
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #f5d061 !important;
          opacity: 0.6;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          width: 18px;
          height: 18px;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default About;
