import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Portfolio.css";
import Mypic from "./../Images/MyPic1.jpg";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const qualificationsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null);
  const contactRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <motion.nav
        className={`portfolio-navbar ${isOpen ? "open" : ""}`}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
      >
        <div className="navbar-content">
          <h1 className="navbar-title">Qamar's Portfolio</h1>
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
          {[
            { label: "About Me", ref: aboutRef },
            { label: "Qualifications", ref: qualificationsRef },
            { label: "Experience", ref: experienceRef },
            { label: "Projects", ref: projectsRef },
            { label: "Certifications", ref: certificationsRef },
            { label: "Contact", ref: contactRef },
          ].map(({ label, ref }, index) => (
            <li key={index}>
              <button
                onClick={() => scrollToSection(ref)}
                className="navbar-button"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Content */}
      <div className="portfolio-content">
        {/* About Section */}
        <motion.section
          ref={aboutRef}
          id="about"
          className="portfolio-section"
          initial={{ opacity: 0, x: -200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="card about-card">
            <div className="profile-image-container">
              <img src={Mypic} alt="Profile" className="profile-image" />
            </div>
            <h2 className="section-title">About</h2>
            <p className="section-description">
              I'm a passionate software developer trained at CDAC Acts, looking
              for full-time opportunities in software development or
              networking.I'm excited to apply what I've learned to real-world
              projects. I'm eager to join a team where I can grow, contribute,
              and make a meaningful impact while continuing to learn every day
            </p>
            <div className="skills-tools">
              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li>Languages: Java, C++, C#, Shell Script</li>
                  <li>Frontend: ReactJS, HTML, CSS, JS, Bootstrap</li>
                  <li>Backend: Spring Boot, RESTful APIs</li>
                  <li>Database: MySQL</li>
                  <li>Frameworks: ReactJS, Spring Boot</li>
                  <li>Version Control: Git, GitHub</li>
                  <li>Learning... Cloud And Networking Skills</li>
                </ul>
              </div>
              <div className="tools-platforms">
                <h3>Tools & Platforms</h3>
                <ul>
                  <li>
                    Tools: VS Code, Eclipse, Git, Postman ,Cisco packet tracer
                  </li>
                  <li>Platforms: Windows, Linux</li>
                </ul>
              </div>
            </div>
            <div className="social-icons">
              <a href="mailto:qamaransari623@email.com">
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad--qamar/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Mohammad-Qamar"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <a href="Resume/Mohammad Qamar Resume.pdf" download>
              <button className="download-resume">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </motion.section>

        {/* Qualifications Section */}
        <motion.section
          ref={qualificationsRef}
          id="qualifications"
          className="portfolio-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card">
            <h2 className="section-title">Qualifications</h2>
            <ul>
              <li>
                Post Graduate Diploma in Advanced Computing - CDAC Bangalore
              </li>
              <li>B.Tech in Civil Engineering - RTU, Kota</li>
            </ul>
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          ref={experienceRef}
          id="experience"
          className="portfolio-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card">
            <h2 className="section-title">Experience</h2>
            <ul>
              <li>
                <strong>
                  Frontend Software Engineering Intern [Part Time]
                </strong>
                <br />
                <em>Frantiger Consulting, Bangalore — Apr 2024 – Sep 2024</em>
                <br />
                - Built responsive web interfaces using React.js, HTML, and CSS.
                <br />- Collaborated with the team using GitHub and VS Code.
              </li>
            </ul>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          ref={projectsRef}
          id="projects"
          className="portfolio-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card">
            <h2 className="section-title">Projects</h2>
            <div className="project-list">
              {[
                {
                  name: "ECommerce ClothKings Website",
                  description:
                    "A fully responsive and visually appealing e-commerce website built with React.js. Focused on UI/UX and smooth frontend interactions.",
                  link: "https://mohammad-qamar.github.io/ecommerce/",
                },
                {
                  name: "Real-Time Chat App",
                  description:
                    "Real-time chat app using React and WebSockets. Enables real-time communication between users.",
                  link: "https://github.com/Mohammad-Qamar/Real-Time-Chat-App",
                },
                {
                  name: "Student Attendance Management System",
                  description:
                    "Developed during CDAC training to track attendance, generate reports, and handle authentication.",
                  link: "https://github.com/Mohammad-Qamar/Project",
                },
                {
                  name: "Advanced To-do List",
                  description:
                    "CRUD-based task management tool with priority control and responsive layout.",
                  link: "https://mohammad-qamar.github.io/advance-todo-list/",
                },
              ].map(({ name, description, link }, index) => (
                <motion.div
                  key={index}
                  className="project-item"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h3>{name}</h3>
                  <p>{description}</p>
                  {link && (
                    <a href={link} target="_blank" rel="noreferrer">
                      View Project
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          ref={certificationsRef}
          id="certifications"
          className="portfolio-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card">
            <h2 className="section-title">Certifications</h2>
            <ul>
              <li>CCNA DevNet – Cisco NetAcad</li>
              <li>Introduction to Cybersecurity – Cisco NetAcad</li>
              <li>TCS iON Career Edge – Young Professional</li>
              <li>Google – Introduction to Generative AI</li>
              <li>Sunbeam Pre CAT – Core CS, OOP, Networking</li>
            </ul>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          ref={contactRef}
          id="contact"
          className="portfolio-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="card">
            <h2 className="section-title">Contact</h2>
            <p>Email: qamaransari623@email.com</p>
            <p>Phone: +91 8278635098</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
