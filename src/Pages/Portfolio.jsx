import React, { useState} from "react";
import { Github, ExternalLink, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);


  const projects = [
    {
      title: "Recipe Book App",
      description:
        "Browse, add, and manage your favorite recipes in a clean and interactive interface.",
      github: "https://github.com/TolulopeSalome/Recipe-book-app.git",
      live: "https://recipe-book-app-woad.vercel.app/",
    },
    {
      title: "Oyo Booking App",
      description:
        "A hotel booking application that lets users browse hotels, view details, and make reservations.",
      github: "https://github.com/TolulopeSalome/Oyo-booking.git",
      live: "https://oyo-booking.vercel.app/",
    },
    {
      title: "Fresh-tech Gadgets",
      description:
        "An e-commerce web app for browsing and purchasing the latest tech gadgets, featuring a modern UI, responsive design, and smooth shopping experience.",
      github: "https://github.com/TolulopeSalome/New-Fresh-Gadgets.git",
      live: "https://fresh-tech-gadgets-6l7y.vercel.app/",
    },
    {
      title: "My habit tracker",
      description: "Track and manage your daily habits.",
      github: "https://github.com/TolulopeSalome/Habit-Tracker.git",
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

  

  return (
    <div className="w-full overflow-x-hidden font-sans bg-gray-50 text-gray-800">
    {/* Navbar */}
<motion.nav
  className="w-full flex justify-between items-center py-3 px-4 md:px-20 shadow-sm bg-white relative"
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <motion.h1
    className="text-xl font-bold md:text-2xl text-purple-600"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2, duration: 0.5 }}
  >
    Tolulope Ajibade
  </motion.h1>

  {/* Desktop Links */}
  <motion.div
    className="hidden md:flex gap-8 text-gray-700"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3, duration: 0.5 }}
  >
    {links.map((link) => (
      <motion.a
        key={link.name}
        href={link.href}
        className="hover:text-purple-600 transition cursor-pointer font-semibold text-sm md:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {link.name}
      </motion.a>
    ))}
  </motion.div>

  {/* Mobile Menu Button */}
  <div className="md:hidden">
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
        <X className="w-6 h-6 text-purple-600" />
      ) : (
        <Menu className="w-6 h-6 text-purple-600" />
      )}
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
          <motion.a
            key={link.name}
            href={link.href}
            className="py-2 text-gray-700 hover:text-purple-600 transition font-semibold text-sm"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {link.name}
          </motion.a>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</motion.nav>


      {/* Hero Section */}
      <section
        id="home"
        className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-20 py-16 bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black"
      >
        {/* Left Text */}
        <motion.div
          className="md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-purple-100 text-lg">Hey, I’m </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
            <span className="text-purple-200 dark:text-white">Tolu</span>
            <span className="text-white">lope</span> <br />
            <span className="text-white">Ajibade</span>
          </h1>
          <p className="text-purple-100 text-lg max-w-md mx-auto md:mx-0">
            I’m a passionate Web Developer based in Nigeria, specializing in
            crafting modern, responsive, and high-performance websites. I focus
            on creating user-friendly interfaces and seamless experiences while
            delivering business value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4">
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg shadow hover:from-purple-700 hover:to-purple-900 transition"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="px-6 py-3 bg-gray-100 text-purple-700 rounded-lg shadow hover:bg-gray-200 transition"
              whileHover={{ scale: 1.05 }}
            >
              Browse Projects
            </motion.a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-6 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <img
            src="/portfolio img.jpg"
            alt="Profile"
            className="w-56 md:w-72 h-56 md:h-72 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </motion.div>
      </section>

      {/* Skills Section */}
<motion.section
  id="skills"
  className="py-12 w-full bg-white text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: { staggerChildren: 0.15 }, // stagger skills
    },
  }}
>
  <motion.h2
    className="text-3xl font-semibold text-purple-600 mb-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    My Skills
  </motion.h2>

  <div className="flex flex-wrap justify-center gap-3">
    {skills.map((skill, index) => (
      <motion.span
        key={skill}
        className="px-3 py-1 border border-gray-300 rounded-full text-purple-700 bg-gray-50 shadow-sm text-sm relative overflow-hidden cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.1 }}
      >
        {skill}
        {/* Water ripple effect using pseudo-element */}
        <span className="absolute inset-0 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-200 opacity-20 animate-skill-wave pointer-events-none rounded-full"></span>
      </motion.span>
    ))}
  </div>
</motion.section>


      {/* Projects Section */}
<motion.section
  id="projects"
  className="w-full py-12 bg-gradient-to-br from-purple-800 via-purple-600 to-purple-500"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger each project card
      },
    },
  }}
>
  <motion.h2
    className="text-3xl font-semibold text-center mb-8 text-white"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Projects
  </motion.h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl px-6 mx-auto">
    {projects.map((project, index) => (
      <motion.div
        key={index}
        className="bg-white border border-gray-200 rounded-xl shadow-md p-5 hover:shadow-lg transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
      >
        <h3 className="text-xl font-bold text-purple-600 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 mb-3 text-sm">{project.description}</p>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-700 hover:text-purple-800 text-sm transition"
          >
            <Github className="w-4 h-4" /> Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-purple-700 hover:text-purple-800 text-sm transition"
          >
            <ExternalLink className="w-4 h-4" /> Live
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* About Section */}
      
<motion.section
  id="about"
  className="py-12 w-full bg-gray-50 text-center"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <motion.h2
    className="text-3xl font-semibold mb-6 text-purple-600"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1, duration: 0.6 }}
  >
    About Me
  </motion.h2>

<motion.p
  className="max-w-3xl mx-auto text-gray-700 text-lg bg-white rounded-xl p-6 shadow"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  animate={{ y: [0, -5, 0] }} // gentle floating
  transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.3, // stagger line-by-line
      },
    },
  }}
>
  <motion.span
    className="block"
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
  >
    I’m <span className="font-semibold text-purple-600">Tolulope Ajibade</span>, a solution–driven Web Developer passionate about transforming challenges into digital opportunities.
  </motion.span>

  <motion.span
    className="block mt-2"
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
  >
    I specialize in building modern, responsive applications, ensuring every project is not only visually appealing but also efficient, accessible, and user-friendly.
  </motion.span>

  <motion.span
    className="block mt-2"
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
  >
    My goal is simple: to solve real problems through clean code and thoughtful design 🌟—whether it’s simplifying workflows, creating intuitive user interfaces, or bringing innovative ideas to life.
  </motion.span>
</motion.p>



</motion.section>


     {/* Contact Section */}
<motion.section
  id="contact"
  className="py-12 w-full flex flex-col items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.3, // stagger all children
      },
    },
  }}
>
  <motion.h2
    className="text-3xl font-semibold mb-6 text-purple-600"
    variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
  >
    Get In Touch
  </motion.h2>

  <motion.p
    className="mb-6 text-center max-w-md text-gray-600"
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
  >
    Click the button below to send me an email directly from your email client or use any of the other contact options below.
  </motion.p>

  {/* Email Button */}
  <motion.a
    href="mailto:toluwalopeajibade@gmail.com?subject=Contact%20from%20Portfolio"
    className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-800 text-white font-semibold shadow-lg hover:from-purple-700 hover:to-purple-900 transition"
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.95 }}
    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
    animate={{ y: [0, -5, 0] }} // floating effect
    transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
  >
    📧 Email Me
  </motion.a>

  {/* Extra Contact Options */}
  <motion.div
    className="mt-6 flex flex-col sm:flex-row gap-4 text-center"
    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }} // stagger buttons
  >
    {/* Phone */}
    <motion.a
      href="tel:+2347050896396"
      className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      📞 Call Me
    </motion.a>

    {/* LinkedIn */}
    <motion.a
      href="https://www.linkedin.com/in/toluwalope-ajibade-948861268/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      💼 LinkedIn
    </motion.a>
  </motion.div>

  <motion.p
    className="mt-6 text-sm text-gray-500"
    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
  >
    Or reach me at: <span className="font-medium">toluwalopeajibade@gmail.com</span>
  </motion.p>
</motion.section>



      {/* Footer */}
<motion.footer
  className="py-6 text-center text-gray-500 text-sm border-t border-gray-200"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  © {new Date().getFullYear()} Tolulope Ajibade. All rights reserved.
</motion.footer>

    </div>
  );
}

export default Portfolio;
