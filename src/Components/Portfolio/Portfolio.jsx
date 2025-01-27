import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Portfolio.css";
import Mypic from "./../Images/MyPic1.jpg";

const Portfolio = () => {
  const aboutRef = useRef(null);
  const qualificationsRef = useRef(null);
  const projectsRef = useRef(null);
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
          {/* Title is only visible on larger screens */}
          <h1 className="navbar-title">Qamar's Portfolio</h1>

          {/* Menu toggle button */}
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
        </div>

        {/* Navbar links (hidden on small screens, visible when toggled) */}
        <ul className={`navbar-links ${isOpen ? "show" : ""}`}>
          {[
            { label: "About Me", ref: aboutRef },
            { label: "Qualifications", ref: qualificationsRef },
            { label: "Projects", ref: projectsRef },
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
            <h2 className="section-title">About </h2>
            <p className="section-description">
              "I am a Full Stack Developer with expertise in Java, C++, React,
              and Spring Boot. I thrive on creating innovative software
              solutions to solve real-world problems and contribute to
              meaningful projects. My strong technical foundation and
              problem-solving mindset empower me to deliver robust and scalable
              applications."
            </p>
            <div className="skills-tools">
              <div className="skills">
                <h3>Skills</h3>
                <ul>
                  <li>
                    Programming Languages: Java 8, C 98, C++, JavaScript, HTML5,
                    CSS, Shell Script
                  </li>
                  <li>Frontend Development: ReactJS, ASP.NET</li>
                  <li>Backend Development: Spring Boot, RESTful APIs</li>
                  <li>Database Management: MySQL</li>
                </ul>
              </div>
              <div className="tools-platforms">
                <h3>Tools & Platforms</h3>
                <ul>
                  <li>
                    Development Tools: Visual Studio Code, Eclipse, Git, Postman
                  </li>
                  <li>Platforms: Windows, Linux</li>
                </ul>
              </div>
            </div>

            <div className="social-icons">
              <a href="mailto:qamaransari63@email.com">
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
            <a href="/Resume/Qamar's_Resume.pdf" download>
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
              {[
                "Post Graduate Diploma in Advanced Computing from CDAC Bangalore",
                "Bachelor's Degree in Civil Engineering from RTU Kota Rajasthan",
                "Diploma in Civil Engineering from CPU Kota Rajasthan",
              ].map((qualification) => (
                <li key={qualification}>{qualification}</li>
              ))}
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
                  name: "Real-Time Chat Application",
                  Technologies: "ReactJS, Spring Boot, WebSockets",
                  description:
                    "Developed a real-time chat application where multiple users can chat personally or in groups. Implemented WebSockets for seamless backend communication to ensure real-time updates.",
                  link: "#",
                },
                {
                  name: "Student Attendance Management System",
                  Technologies: "ReactJS, Spring Boot, MySQL",
                  description:
                    "A project developed during training at CDAC Bangalore using React, Spring Boot, and MySQL.",
                  link: "https://github.com/Mohammad-Qamar/Project",
                },
                {
                  name: "To-do List Application",
                  Technologies: "HTML, CSS, ReactJS, JavaScript",
                  description:
                    "Developed a task management web application using HTML, CSS, React, and JavaScript. Helps users prioritize tasks and plan their schedules effectively.",
                  link: "https://github.com/Mohammad-Qamar/advance-todo-list",
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
                  {link && <a href={link}>View Project</a>}
                </motion.div>
              ))}
            </div>
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
            <p>Email: qamaransari63@email.com</p>
            <p>Phone: +91 8278635098</p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Portfolio;
