import React, { useState, useRef } from "react";
import { Github, ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const projects = [
        {
      title: "Recipe Book App",
      description: "Browse, add, and manage your favorite recipes in a clean and interactive interface.",
      github: "https://github.com/TeeSongs/Recipe-book-app.git",
      live: "https://recipe-book-app-woad.vercel.app/",
      }
      ,
        {
      title: "Oyo Booking App",
      description: "A hotel booking application that lets users browse hotels, view details, and make reservations.",
      github: "https://github.com/TeeSongs/Oyo-booking.git",
      live: "https://oyo-booking.vercel.app/",
    },
    
    {
      title: "Fresh-tech Gadgets",
      description: "An e-commerce web app for browsing and purchasing the latest tech gadgets, featuring a modern UI, responsive design, and smooth shopping experience.",
      github: "https://github.com/TeeSongs/New-Fresh-Gadgets.git",
      live: "https://fresh-tech-gadgets-6l7y.vercel.app/",
    },
    {
      title: "My habit tracker",
      description: "Track and manage your daily habits.",
      github: "https://github.com/TeeSongs/Habit-Tracker.git",
      live: "https://habit-tracker-zeta-navy.vercel.app/",
    },
  ];

  const skills = [
    "React",
    "TailwindCSS",
    "JavaScript",
    "HTML",
    "CSS",
    "API",
    "Git",
    "GitHub",
    "Figma",
  ];

  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_lzfkzpi", // EmailJS service ID
        "template_lsgtn3r", // EmailJS template ID
        formRef.current,
        "2DyBj39GaZEJNP-Yf" // EmailJS public key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setIsSending(false);
          formRef.current.reset();
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
          setIsSending(false);
        }
      );
  };


  return (
    <div className="w-full overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-3 px-4 md:px-20 shadow-sm bg-white relative">
        <h1 className="text-xl font-bold md:text-2xl text-purple-900">Tolulope Ajibade</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-700">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-600 transition cursor-pointer font-semibold text-sm md:text-base md:font-medium md:tracking-wide md:leading-6 md:text-purple-900"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 text-purple-900" /> : <Menu className="w-6 h-6 text-purple-900" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-50"
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-gray-700 hover:text-purple-600 transition text-purple-900 font-semibold text-sm md:text-base md:font-medium md:tracking-wide md:leading-6"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 py-16 mx-0 md:mx-0 bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700" 
      >
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 space-y-4 sm:space-y-6 text-center md:text-left w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-gray-100 text-lg">Hey, I’m </p>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-white">
            <span className="text-purple-200">Tolu</span>
            <span className="text-white">lope</span> <br />
            <span className="text-white">Ajibade</span>
          </h1>
          <p className="text-gray-100 text-md sm:text-lg max-w-full md:max-w-md mx-auto md:mx-0">
            I’m a passionate Web Developer based in Nigeria, specializing in crafting modern, responsive, and high-performance websites. I focus on creating user-friendly interfaces and seamless experiences that delight users while delivering business value. With expertise in React, TailwindCSS, and modern web technologies, I turn creative ideas into scalable and efficient web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-900 text-white rounded-lg shadow hover:from-purple-800 hover:to-purple-950 transition"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-white text-purple-800 rounded-lg shadow hover:bg-purple-50 transition"
              whileHover={{ scale: 1.05 }}
            >
              Browse Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-6 md:mt-0 w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/portfolio img.jpg"
            alt="Profile"
            className="w-48 sm:w-56 md:w-72 h-48 sm:h-56 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 w-full bg-gray-100 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-purple-900 mb-6 sm:mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 border border-gray-300 rounded-full text-purple-800 bg-white shadow-sm text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

     {/* Projects Section */}
<section
  id="projects"
  className="w-full py-12 bg-gradient-to-br from-purple-700 via-purple-500 to-purple-400"
>
  <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-8 text-white">
    Projects
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full px-4 sm:px-20 md:px-40 lg:px-60 mx-auto">
    {projects.map((project, index) => (
      <div
        key={index}
        className="bg-white bg-opacity-90 border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition"
      >
        <h3 className="text-xl font-bold text-purple-900 mb-2">{project.title}</h3>
        <p className="text-purple-700 mb-3 text-sm">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-3">
        
          
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-800 hover:text-purple-900 text-sm transition"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-800 hover:text-purple-900 text-sm transition"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-12 w-full bg-gray-50 text-center">
  <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8">About Me</h2>
  <p className="max-w-full md:max-w-3xl mx-auto text-gray-600 text-md sm:text-lg bg-white rounded-xl p-5 sm:p-6 shadow">
    I’m <span className="font-semibold text-gray-900">Tolulope Ajibade</span>, a
    solution–driven Web Developer passionate about transforming challenges into
    digital opportunities.
    <br /><br />
    I specialize in building modern, responsive applications, ensuring
    every project is not only visually appealing but also efficient, accessible,
    and user-friendly.
    <br /><br />
    My goal is simple: to solve real problems through clean code and thoughtful
    design 🌟—whether it’s simplifying workflows, creating intuitive user
    interfaces, or bringing innovative ideas to life.
  </p>
</section>

     {/* Contact Section */}
<section id="contact" className="py-12 w-full flex flex-col items-center">
  <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8">
    Get In Touch
  </h2>
  <p className="mb-6 text-center max-w-md text-gray-600">
    Click the button below to send me an email directly from your email
    client or use any of the other contact options below.
  </p>

  {/* Email Button */}
  <motion.a
    href="mailto:toluwalopeajibade@gmail.com?subject=Contact%20from%20Portfolio"
    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 via-purple-700 to-purple-900 text-white font-semibold shadow-lg hover:from-purple-700 hover:via-purple-800 hover:to-purple-950 transition"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
  >
    📧 Email Me
  </motion.a>

  {/* Extra Contact Options */}
  <div className="mt-6 flex flex-col sm:flex-row gap-4 text-center">
    {/* Phone */}
    <a
      href="tel:+2347050896396"
      className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
    >
      📞 Call Me +2347050896396
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/toluwalope-ajibade-948861268/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
    >
      💼 LinkedIn
    </a>
  </div>

  <p className="mt-6 text-sm text-gray-500">
    Or reach me at:{" "}
    <span className="font-medium">toluwalopeajibade@gmail.com</span>
  </p>
</section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Tolulope Ajibade. All rights reserved.
      </footer>
    </div>
  );
};    

export default Portfolio;
