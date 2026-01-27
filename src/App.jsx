import { useState, useEffect } from 'react'
import './style.css'
import profileImage from './assets/profile.JPG'
import gymAppImage from './assets/Screenshot 2026-01-22 134012.png'
import dungeonImage from './assets/dungeon.png'
import demoVideo from './assets/Demo4Video.mp4'
import resumeImage from './assets/Resume.png'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)

  // Smooth scrolling for navigation links
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.closest('a')?.getAttribute('href')
      if (href && href.startsWith('#')) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  // Add scroll effect to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHeaderScrolled(true)
      } else {
        setHeaderScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  const openVideoModal = () => {
    setIsModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsModalOpen(false)
    const video = document.querySelector('.video-player')
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const handleModalClick = (e) => {
    if (e.target.id === 'gym-video-modal') {
      closeVideoModal()
    }
  }

  return (
    <>
      <header className={headerScrolled ? 'scrolled' : ''}>
        <nav>
          <div className="nav-container">
            <div className="logo">Jacob O'Neill</div>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero/About Section */}
        <section id="about" className="hero">
          <div className="container">
            <div className="social-icons">
              <a href="https://github.com/Jakobe088?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jacob-o-neill-0756833a7/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="hero-content">
              <div className="profile-image-wrapper">
                <img src={profileImage} alt="Jacob O'Neill" className="profile-image" />
              </div>
              <div className="hero-text">
                <h1>Jacob O'Neill</h1>
                <p className="subtitle">Full Stack Developer</p>
                <p className="description">
                  I am a student at Iowa State University pursing a degree in software engineering.
                  I am currently in my third year of college. With 7 years of coding experience, I have honed my skills in becoming a full stack developer.
                  I love learning and adding more to my skill set. 
                </p>
                <div className="hero-buttons">
                  <a href={resumeImage} download="Jacob_ONeill_Resume.png" className="btn btn-primary">Download Resume</a>
                  <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                  <a href="#projects" className="btn btn-secondary">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <div className="container">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  <span className="skill-tag">C</span>
                  <span className="skill-tag">C++</span>
                  <span className="skill-tag">Java</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">JavaScript</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Web Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">HTML</span>
                  <span className="skill-tag">CSS</span>
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-tags">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Development Tools</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Android Studio</span>
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">VS Code</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="experience-section">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Student - Iowa State University</h3>
                  <p className="timeline-date">August 2023 - May 2027</p>
                  <p>Currently pursuing a degree in Software Engineering. 
                    Projected to graducate in 2027. Becoming a Bachelor of Science in Computer 
                    Science. Have taken courses in software engineering, data structures, and algorithms. </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Web Developer - Desi Eats</h3>
                  <p className="timeline-date">January 2025 - Present</p>
                  <p>Developed core backend functionality and page navigation for Desi Eats’ production website.
                       Built an interactive meal customization system allowing users to select ingredients and adjust quantities dynamically
                       Assisted with calorie tracking display and menu data flow.
                       Contributed to a platform receiving 20,000+ monthly visits and ranking #1 on Google for “Desi Eats”!</p>
                  <a href="https://www.desieatsus.com/" target="_blank" rel="noopener noreferrer" className="project-link timeline-project-link">View Project →</a>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>Software Development Intern - SourceTech-iit</h3>
                  <p className="timeline-date">June 2025 - August 2025</p>
                  <ul>
                    <p>Collaborated across engineering teams to complete development tasks throughout the full software lifecycle.
                     Learned and applied workflow practices using task boards, branches, code reviews, and CI/CD pipelines.
                     Created feature branches, implemented changes, merged pull requests, and monitored automated pipelines.
                     Wrote and executed tests to validate functionality and prevent regressions.
                     Shadowed senior developers to understand company architecture, deployment flow, and daily engineering operations.
                     Independently completed assigned development tasks while coordinating with teammates for integration.</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src="https://placehold.co/600x400/4f46e5/e0e7ff?text=NHL+Draft+Simulation" alt="NHL Draft Simulation Game" className="project-image" />
                </div>
                <div className="project-content">
                  <h3>NHL Draft Simulation Game</h3>
                  <p className="project-date">Python Game</p>
                  <p>Developed an interactive Python-based NHL career simulation game featuring drafting, team dynamics, and in-game decision making. Implemented a probability-based scoring system influencing shot success and game outcomes. Designed player choice mechanics affecting team chemistry and performance over time. Built a dialogue and interview system where user responses impacted draft position and team relationships. Created season progression with awards, championships, and career outcomes.</p>
                  <div className="project-tags">
                    <span className="project-tag">Python</span>
                    <span className="project-tag">Game Development</span>
                    <span className="project-tag">Simulation</span>
                    <span className="project-tag">Probability Systems</span>
                  </div>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src={gymAppImage} alt="Gym and Training App - Calorie Tracker Interface" className="project-image gym-app-image" />
                </div>
                <div className="project-content">
                  <h3>Gym and Training App</h3>
                  <p className="project-date">Fall 2025</p>
                  <p>Collaborated with a team of 4 developers to build a comprehensive mobile fitness application. Focused on frontend development with a partner, creating an intuitive user interface for workout and calorie tracking. The app features a personalized onboarding experience that asks users questions to generate a customized workout plan and set fitness goals. Key features include a calendar-based meal tracking system for logging meals with calories and categories (Breakfast, Lunch, Dinner, Snack), a dedicated workout tracking page, and a comprehensive dashboard displaying calories gained and burned, daily totals, fitness goals, and workout statistics. Implemented secure user authentication with sign up, sign in, and logout functionality, ensuring that user stats and personalized data are only accessible when logged in.</p>
                  <div className="project-tags">
                    <span className="project-tag">Android Studio</span>
                    <span className="project-tag">Java</span>
                    <span className="project-tag">Postman</span>
                    <span className="project-tag">Mobile Development</span>
                    <span className="project-tag">UI/UX Design</span>
                  </div>
                  <button className="project-link" onClick={openVideoModal}>
                    View Project →
                  </button>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image-wrapper">
                  <img src={dungeonImage} alt="Dungeon Game" className="project-image" />
                </div>
                <div className="project-content">
                  <h3>Dungeon Game</h3>
                  <p className="project-date">Spring 2025</p>
                  <p>Developed an interactive text-based dungeon game using C and C++. Players navigate through multiple rooms, encountering various monsters represented by different letters and colors. Each monster type has unique health points and damage values, requiring strategic decision-making to either attack or flee. Implemented a comprehensive game system featuring room navigation, item pickup and drop mechanics, and teleportation functionality. The game challenges players to manage resources, plan combat strategies, and explore the dungeon while avoiding or defeating enemies.</p>
                  <div className="project-tags">
                    <span className="project-tag">C</span>
                    <span className="project-tag">C++</span>
                    <span className="project-tag">Game Development</span>
                    <span className="project-tag">Object-Oriented Programming</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <p className="contact-description">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat!
              </p>
              <div className="contact-info">
                <a href="mailto:jacoboneill088@gmail.com" className="contact-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>jacoboneill088@gmail.com</span>
                </a>
                <a href="tel:630-724-7403" className="contact-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>630-724-7403</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {isModalOpen && (
        <div id="gym-video-modal" className="video-modal" onClick={handleModalClick}>
          <div className="video-modal-content">
            <span className="video-modal-close" onClick={closeVideoModal}>&times;</span>
            <video controls className="video-player">
              <source src={demoVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}

export default App
