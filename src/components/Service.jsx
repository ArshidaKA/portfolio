import { Monitor, Palette, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Button = ({ children, className }) => (
  <button className={`px-4 py-2 rounded-full transition-all duration-300 ${className}`}>
    {children}
  </button>
);

export default function Page3() {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description:
        "With a passion for clean design and efficient functionality, I specialize in building responsive websites and robust applications that bring ideas to life."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description:
        "I create user-friendly and visually appealing designs that enhance user experiences and improve engagement.",
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Web Hosting",
      description:
        "Reliable and secure web hosting solutions to keep your website running smoothly with minimal downtime.",
    },
  ];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="py-16 px-4 bg-[#38393a] w-[90%] h-auto mx-auto mt-10 rounded-2xl"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={inView ? { scale: 1 } : {}} 
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-[#38393a] text-[#61dff5] mb-4 text-sm md:text-base"
        >
          MY SERVICES
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          My Provided Features
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 md:px-0">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 border border-[#61dff5] overflow-hidden group max-w-[320px] mx-auto md:max-w-none"
          >
            <motion.div 
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-[#61dff5] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"
            ></motion.div>

            <div className="relative z-10 text-white group-hover:text-[#38393a] transition-all duration-300">
              <motion.div 
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-6 border border-[#61dff5]"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm sm:text-base mb-6 text-gray-400 group-hover:text-[#38393a] transition-all duration-300">
                {service.description}
              </p>
              <Button className="bg-[#61dff5] text-[#38393a] hover:bg-[#38393a] hover:text-[#61dff5]">
                READ MORE
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
