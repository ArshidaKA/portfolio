import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { addDoc, db, collection } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields!");
      return;
    }
    try {
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });
      toast.success("message sended successfully");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("error sending meassage", error);
    }
  };

  return (
    <div className="bg-[#38393a] w-[90%] h-[90vh] mx-auto font-sans rounded-3xl mt-10 p-10">
      <ToastContainer
        autoClose={3000}
        theme="dark"
        draggable
        toastStyle={{
          backgroundColor: "#222",
          color: "gray",
          fontSize: "16px",
        }}
      />
      <h1 className="text-5xl font-sans ">
        Contact <span className="text-[#f5d061]">me</span>
      </h1>
      <p className="mt-10 text-xl text-gray-400">
        Let's connect! I'm excited to hear from you and explore how we can work
        together!
      </p>
      <div className="flex justify-around ml-4 ">
        <div className=" space-y-13 mt-[100px]">
          <div className="flex">
            <AiOutlineMail className="text-[#f5d061] text-4xl mt-1 " />
            <div className="ml-5">
              <h1 className="text-2xl">Email</h1>
              <a href="mailto:arshidaakbar39@gmail.com">
                {" "}
                <h1 className="text-lg  text-gray-400 hover:text-[#f5d061]">
                  arshidaakbar39@gmail.com
                </h1>
              </a>
            </div>
          </div>
          <div className="flex">
            <FiPhoneCall className="text-[#f5d061] text-4xl mt-1" />
            <div className="ml-5">
              <h1 className="text-2xl">Phone</h1>
              <h1 className="text-lg text-gray-400 hover:text-[#f5d061]">
                9645299269
              </h1>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-2xl  mt-5 mr-30">Get in touch</h1>
            <div className="flex justify-center space-x-4 text-xl mt-4 mr-30">
              <a
                href="https://www.linkedin.com/in/arshida-k-a-5ba98a314/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#f5d061] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/arshee.eh?igsh=NXY4Znh3djhydGsz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#f5d061] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/9645299269"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#f5d061] transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:arshidaakbar39@gmail.com"
                className="text-gray-500 hover:text-[#f5d061] transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-[#38393a] p-6 rounded-xl shadow-lg w-[90%] md:w-[50%] mx-auto mr-4 mt-7 ">
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3  h-16 border border-gray-700 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#f5d061] transition-all duration-300"
            />
            <br />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full mt-4 p-3 border border-gray-700  rounded-lg bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#f5d061] transition-all duration-300"
            />
            <br />

            {/* Textarea */}
            <textarea
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full mt-4 p-3 border border-gray-700 rounded-lg bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#f5d061] transition-all duration-300 h-32 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-52 mt-6 p-3 bg-[#f5d061] text-black font-bold rounded-full transition-all duration-300 hover:bg-[#e0b851] hover:scale-105 active:scale-95 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
