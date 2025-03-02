import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { addDoc, db, collection } from "../firebaseConfig";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser"; 

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
      // Save message to Firestore
      await addDoc(collection(db, "messages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        createdAt: new Date(),
      });

      // EmailJS service details
      const serviceID = "service_wq20u6c";
      const templateID = "template_uiy63ae";
      const publicKey = "qlhzISkPtfBiy954l";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      // Sending email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
  };

  return (
    <div className="bg-[#38393a] w-[90%] mx-auto font-sans rounded-3xl mt-10 p-6 md:p-10">
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
      <h1 className="text-4xl md:text-5xl font-sans text-center md:text-left">
        Contact <span className="text-[#61dff5]">me</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-400 text-center md:text-left">
        Let's connect! I'm excited to hear from you and explore how we can work together!
      </p>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 md:space-x-8 mt-8">
        {/* Contact Info */}
        <div className="space-y-8 w-full md:w-1/2">
          <div className="flex items-center p-5">
            <AiOutlineMail className="text-[#61dff5] text-4xl" />
            <div className="ml-4">
              <h1 className="text-2xl">Email</h1>
              <a href="mailto:arshidaakbar39@gmail.com" className="text-lg text-gray-400 hover:text-[#61dff5] transition-all">
                arshidaakbar39@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center p-5">
            <FiPhoneCall className="text-[#61dff5] text-4xl" />
            <div className="ml-4">
              <h1 className="text-2xl">Phone</h1>
              <h1 className="text-lg text-gray-400 hover:text-[#61dff5] transition-all">
                9645299269
              </h1>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center p-11 md:text-left">
            <h1 className="text-2xl">Get in touch</h1>
            <div className="flex justify-center md:justify-start space-x-4 text-xl mt-4">
              <a href="https://www.linkedin.com/in/arshida-k-a-5ba98a314/" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#61dff5] transition-all">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/arshee.eh?igsh=NXY4Znh3djhydGsz&utm_source=qr" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#61dff5] transition-all">
                <FaInstagram />
              </a>
              <a href="https://wa.me/9645299269" target="_blank" rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#61dff5] transition-all">
                <FaWhatsapp />
              </a>
              <a href="mailto:arshidaakbar39@gmail.com"
                className="text-gray-500 hover:text-[#61dff5] transition-all">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#2c2d2e] p-6 rounded-xl shadow-lg w-full md:w-1/2">
          <form onSubmit={handleSubmit} autoComplete="off">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="w-full p-3 h-14 border border-gray-700 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#61dff5] transition-all duration-300"
            />
            <br />

            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full mt-4 p-3 h-14 border border-gray-700 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#61dff5] transition-all duration-300"
            />
            <br />

            <textarea
              placeholder="Your Message"
              name="message"
              onChange={handleChange}
              value={formData.message}
              className="w-full mt-4 p-3 border border-gray-700 rounded-xl bg-transparent text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#61dff5] transition-all duration-300 h-32 resize-none"
            ></textarea>

            <button
              type="submit"
              className="md:w-1/3  w-full mt-6 p-3 bg-[#61dff5] text-black font-bold rounded-full transition-all duration-300 hover:bg-[#4ec1da] hover:scale-105 active:scale-95 shadow-md"
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
