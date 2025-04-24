import "./App.css";
import Nav from "./components/Nav/Nav";
import prem from "./assets/prem1.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import sql from "./assets/sql.png";
import mongo from "./assets/mongo.png";
import node from "./assets/node.png";
import react from "./assets/react.png";
import python from "./assets/python.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import vs from "./assets/vscode.svg";

function App() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm({
      ...contactForm,
      [name]: value,
    });
  };
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const text = `Name: ${contactForm.name}%0AEmail: ${contactForm.email}%0AMessage: ${contactForm.message}`;

    // WhatsApp API link with your phone number (replace with Prem's actual number)
    const whatsappLink = `https://wa.me/+916302903019?text=${text}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");

    // Reset the form
    setContactForm({ name: "", email: "", message: "" });
  };
  return (
    <div className="layout">
      <Nav />
      <div className="hero" id="home">
        <div className="content">
          <h2>PREM GUNDUBOINA</h2>
          <h4>
            Hi, I'm Prem a passionate <span>Full Stack Developer</span>
          </h4>
          <div className="contactLinks">
            <a
              href="https://www.linkedin.com/in/premgunduboina/"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin fontSize={30} />
            </a>
            <a href="https://github.com/premg514" aria-label="GitHub profile">
              <FaGithub fontSize={30} />
            </a>
            <a
              href="https://drive.google.com/file/d/1VBxv83Hc3cWQkhl-Vc1UuiSC59SGRtD0/view?usp=sharing"
              aria-label="Resume"
            >
              <IoMdDocument fontSize={30} />
            </a>
          </div>
        </div>
        <img className="bannerimg" src={prem} alt="Prem Gunduboina" />
      </div>

      <div className="techStack" id="skills">
        <h2>Tech Stack</h2>
        <div className="techies">
          <img src={html} alt="HTML" style={{ "--i": 1 }} />
          <img src={css} alt="CSS" style={{ "--i": 2 }} />
          <img src={js} alt="JavaScript" style={{ "--i": 3 }} />
          <img src={python} alt="Python" style={{ "--i": 4 }} />
          <img src={sql} alt="SQL" style={{ "--i": 5 }} />
          <img src={mongo} alt="MongoDB" style={{ "--i": 6 }} />
          <img src={node} alt="Node.js" style={{ "--i": 7 }} />
          <img src={react} alt="React" style={{ "--i": 8 }} />
        </div>
      </div>

      <div className="about" id="about">
        <h2>About</h2>
        <p>
          Hi, I'm Prem, a passionate and dedicated Full-Stack Developer with a
          strong foundation in ReactJS, NodeJS, and Python. I thrive on building
          efficient, user-friendly web applications and solving complex problems
          through clean and scalable code. I have experience developing projects
          like a bank info management system with secure authentication and user
          roles, a resume-building app using state management and local storage,
          and a mock interview platform that helps users prepare for job
          interviews. My work reflects a strong understanding of both frontend
          and backend development, focusing on responsive design, performance
          optimization, and secure data handling.
        </p>
      </div>

      <div className="education" id="education">
        <h2>Education</h2>
        <div className="education-timeline">
          <div className="education-item">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <h3>Master of Computer Applications</h3>
              <h4>Woolf University</h4>
              <p className="edu-date">2024 - 2026</p>
              <p>
                Specialized in Advanced Web Development, Data sceience and
                Machine Learning.
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <h3>Bachelor of Computer Science</h3>
              <h4>Kakinada Institute of technology and science</h4>
              <p className="edu-date">2020 - 2024</p>
              <p>
                Focused on Programming Fundamentals, Data Structures, and
                Algorithms with a CGPA of 7.19.
              </p>
            </div>
          </div>

          <div className="education-item">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <h3>Intermediatte</h3>
              <h4>Govt Jr.College</h4>
              <p className="edu-date">2018 - 2020</p>
              <p>M.P.C</p>
            </div>
          </div>
          <div className="education-item">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <h3>10th (SSC)</h3>
              <h4>Govt School</h4>
              <p className="edu-date">2017 - 2018</p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project">
          <img src={project3} className="projectPic" alt="DeshCart Project" />
          <div className="projectContent">
            <h2>Desh Cart</h2>
            <p>
              <strong>Technologies:</strong> React.js, Redux, Node.js,
              Express.js, MongoDB
            </p>
            <ul>
              <li>
                Developed a full-stack e-commerce application to enable seamless
                shopping experiences.
              </li>
              <li>
                Designed a responsive, mobile-first UI optimized for users in
                rural areas with low-speed internet connectivity.
              </li>
              <li>
                Implemented secure authentication, user roles, and RESTful APIs
                for handling products, carts, and order management.
              </li>
              <li>
                Utilized Redux for scalable state management, improving data
                flow and performance across the application.
              </li>
            </ul>
            {/* <div className="contactLinks">
              <a
                href="https://github.com/premg514/AI-Analyzer"
                aria-label="GitHub repository"
              >
                <FaGithub fontSize={22} />
              </a>
              <a
                href="https://ai-assistance-theta.vercel.app/"
                aria-label="Live demo"
              >
                <FaLink fontSize={20} />
              </a>
            </div> */}
          </div>
        </div>

        <div className="project">
          <img
            className="projectPic"
            src={project1}
            alt="AI-Assistance Project"
          />
          <div className="projectContent">
            <h2>AI-Powered Assistant Platform</h2>
            <p>
              <strong>Technologies:</strong> MERN Stack, Google Gemini API, JWT
              Authentication
            </p>
            <ul>
              <li>
                Developed an AI-powered web application using the MERN stack,
                integrating Google's Gemini AI API to generate intelligent
                responses for user queries.
              </li>
              <li>
                Implemented JWT authentication for secure user login and access
                management, ensuring data privacy and system security.
              </li>
              <li>
                Designed and optimized RESTful APIs for seamless data
                communication between frontend and backend, improving system
                efficiency.
              </li>
              <li>
                Created a responsive UI that adapts to different screen sizes,
                providing a consistent user experience across devices.
              </li>
            </ul>
            <div className="contactLinks">
              <a
                href="https://github.com/premg514/AI-Analyzer"
                aria-label="GitHub repository"
              >
                <FaGithub fontSize={22} />
              </a>
              <a
                href="https://ai-assistance-theta.vercel.app/"
                aria-label="Live demo"
              >
                <FaLink fontSize={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            className="projectPic"
            src={project4}
            alt="AI-Assistance Project"
          />
          <div className="projectContent">
            <h2>Video Subtitles Generator</h2>
            <p>
              <strong>Technologies:</strong> MERN Stack, Google Gemini API
            </p>
            <ul>
              <li>
                Developed an AI-powered web application using the MERN stack,
                integrating Google's Gemini AI API to generate intelligent
                responses for generate a Subtitles for a video.
              </li>
              <li>
                Designed and optimized RESTful APIs for seamless data
                communication between frontend and backend, improving system
                efficiency.
              </li>
              <li>
                Created a responsive UI that adapts to different screen sizes,
                providing a consistent user experience across devices.
              </li>
            </ul>
            {/* <div className="contactLinks">
              <a
                href="https://github.com/premg514/AI-Analyzer"
                aria-label="GitHub repository"
              >
                <FaGithub fontSize={22} />
              </a>
              <a
                href="https://ai-assistance-theta.vercel.app/"
                aria-label="Live demo"
              >
                <FaLink fontSize={20} />
              </a>
            </div> */}
          </div>
        </div>

        <div className="project">
          <img src={project2} className="projectPic" alt="Nxt Watch Project" />
          <div className="projectContent">
            <h2>Video Content Platform</h2>
            <p>
              <strong>Technologies:</strong> React.js, Context API, RESTful
              APIs, CSS3
            </p>
            <ul>
              <li>
                Developed a responsive video streaming platform with features
                like search, categorization, and user preferences.
              </li>
              <li>
                Implemented Context API for state management across the
                application, ensuring efficient data flow.
              </li>
              <li>
                Created a dark/light theme toggle feature for enhanced user
                experience and accessibility.
              </li>
              <li>
                Utilized RESTful APIs to fetch and manage data on the frontend,
                ensuring efficient data retrieval and seamless integration with
                backend services.
              </li>
            </ul>
            <div className="contactLinks">
              (username: rahul, password: rahul@2021)
              <a href="https://nxtwotch.ccbp.tech/" aria-label="Live demo">
                <FaLink fontSize={20} />
              </a>
            </div>
          </div>
        </div>
        <a href="https://github.com/premg514" className="show-more-btn">
          Show More <span className="arrow">→</span>
        </a>
      </div>
      <div className="contact" id="contact">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>
              Feel free to reach out to me for any queries or opportunities. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Call Me</h4>
                  <p>+91 6302903019</p>
                </div>
              </div>

              <div className="contact-method">
                <FaWhatsapp className="contact-icon" />
                <div>
                  <h4>WhatsApp</h4>
                  <p>Message me directly</p>
                </div>
              </div>

              <a href="tel:+916302903019" className="call-btn">
                Call Now
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Message</h3>
            <form onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="whatsapp-btn">
                <FaWhatsapp /> Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2025 Prem Gunduboina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
