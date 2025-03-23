import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';
import ExperienceTiles from '../src/components/sections/ExperienceTiles';
import PersonalityDashboard from '../src/components/PersonalityDashboard.jsx';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Ryan Guidry - Portfolio 2025</title>
                <meta name="description" content="Portfolio of Ryan Guidry - Data Analyst, Engineering, and Web Development" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            {/* Hero section */}
            <section id="home" className="hero">
                <div className="hero-content">
                    <h1>Ryan Guidry</h1>
                    <h2 className="tagline">Passionate Web Developer | Data Science Explorer | Engineering Innovator</h2>
                    <p className="intro">Leveraging a unique combination of chemical engineering expertise, data analysis skills, and AI augmentation, I excel at transforming complex data into actionable insights that drive business decisions.</p>
                    
                    <blockquote className="hero-quote">
                        "Where engineering meets creativity, and technology transforms possibilities."
                    </blockquote>
                    
                    <div className="hero-social-links">
                        <a href="https://github.com/rguid31" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/rmguidry" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.x.com/ryne_guidry" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                        <a href="https://medium.com/@guidry_ryan" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-medium"></i>
                        </a>
                        <a href="https://unsplash.com/@ryne_guidry" target="_blank" className="social-link" rel="noopener noreferrer">
                            <i className="fab fa-unsplash"></i>
                        </a>
                    </div>
                    
                    <Link href="#portfolio" className="cta-button">
                        Explore My Portfolio
                    </Link>
                </div>
                
                <div className="highlights">
                    <div className="highlight-item">
                        <h3>Featured Project</h3>
                        <p>Interactive Media Portfolio</p>
                    </div>
                    <div className="highlight-item">
                        <h3>Latest Certification</h3>
                        <p>Google AI Essentials Certificate</p>
                    </div>
                </div>
            </section>

            {/* About section */}
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="profile-container">
                        <img src="/images/profile/profile-photo.jpg" 
                             alt="Ryan Guidry - Engineering Professional and Data Analyst" 
                             className="profile-photo hero-image"
                             loading="lazy" />
                    </div>
                    
                    <div className="about-text">
                        <p className="bio">Hi, I'm Ryan Guidry, a student of Chemical Engineering transitioning into data analysis. I'm passionate about using data to uncover insights, solve problems, and drive informed decisions.</p>
                        <p>With a strong foundation in analytical thinking and process optimization, I've worked across industries, including artificial intelligence and engineering. My hands-on experience includes enhancing AI models, streamlining operations, and improving data accuracy.</p>
                        <p>I'm currently building my expertise as a certified Google Data Analytics Professional, focusing on visualization, statistical analysis, and data storytelling. I enjoy turning complex data into actionable insights that create real-world impact.</p>
                        <p>Outside of work, I explore emerging technologies like AI and blockchain while constantly learning and growing. Let's connect to see how I can help transform your data into opportunities!</p>
                        <Link href="/about" className="about-more-link">
                            Learn more about me <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
                
                {/* Personality Profile */}
                <div className="personality-container">
                    <h3 className="personality-heading">My Personality Profile</h3>
                    
                    <PersonalityDashboard />
                    
                    <div className="profile-description">
                        <p>Based on my Insights Discovery profile, I'm classified as a "Reforming Observer" with dominant blue (64%) and red (60%) energy. This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
                        <Link href="/about#personality" className="about-more-link">
                            See full personality profile <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Education Journey Section */}
            <section id="education" className="education-section">
                <h2>Education</h2>
                <div className="education-timeline">
                    <div className="education-item">
                        <div className="education-image-container">
                            <img src="/images/education/lsu.png" alt="LSU" className="education-image" />
                        </div>
                        <div className="education-details">
                            <div className="education-dot"></div>
                            <div className="education-date">2014 - 2023</div>
                            <div className="education-content">
                                <h3>Bachelor of Science in Chemical Engineering (Incomplete - 8 credits remaining) </h3>
                                <p>Louisiana State University, Baton Rouge, LA</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Add more education items */}
                </div>
            </section>

            {/* Certifications Section */}
            <section id="certifications" className="certifications-section">
                <h2>Certifications</h2>
                <div className="certifications-container">
                    <div className="cert-row">
                        <div className="certification-item">
                            <div className="cert-image-container">
                                <i className="fas fa-certificate certification-icon"></i>
                            </div>
                            <div className="cert-details">
                                <h4>Data Analytics Professional Certification</h4>
                                <p>Issued by Coursera, created by Google</p>
                            </div>
                        </div>
                        
                        <div className="certification-item">
                            <div className="cert-image-container">
                                <i className="fas fa-robot certification-icon"></i>
                            </div>
                            <div className="cert-details">
                                <h4>AI Essentials Certification</h4>
                                <p>Issued by Coursera, created by Google</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="cert-row reversed">
                        <div className="certification-item">
                            <div className="cert-image-container">
                                <i className="fas fa-id-card certification-icon"></i>
                            </div>
                            <div className="cert-details">
                                <h4>Transportation Worker Identification Credential (TSA)</h4>
                                <p>Issued by the National Council of Examiners for Engineering and Surveying (NCEES)</p>
                            </div>
                        </div>
                        
                        <div className="certification-item">
                            <div className="cert-image-container">
                                <i className="fas fa-hard-hat certification-icon"></i>
                            </div>
                            <div className="cert-details">
                                <h4>Basic Plus Orientation (OSHA)</h4>
                                <p>Issued by the Alliance Safety Council (PMI)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio section */}
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div className="project-grid">
                    <Link href="/projects/interactive-media" className="project-card">
                        <img src="/images/projects/interactive-media.png"
                             alt="Interactive Media Portfolio Project"
                             loading="lazy"
                             width="800"
                             height="450" />
                        <h3>Interactive Media Portfolio</h3>
                        <p>Designed and developed a dynamic portfolio website that showcases my skills in full-stack web development, data analytics, and data visualization. Built with modern web technologies and optimized for performance and user experience.</p>
                        <span className="view-project">View Project <i className="fas fa-arrow-right"></i></span>
                    </Link>

                    <Link href="/projects/data-analytics" className="project-card">
                        <img src="/images/projects/data-analytics.png"
                             alt="Data Analytics Dashboard"
                             loading="lazy"
                             width="800"
                             height="450" />
                        <h3>Data Analytics Dashboard</h3>
                        <p>Created an interactive dashboard for visualizing complex datasets, featuring real-time updates, customizable charts, and automated reporting capabilities. Built with Python, SQL, and modern visualization libraries.</p>
                        <span className="view-project">View Project <i className="fas fa-arrow-right"></i></span>
                    </Link>

                    <Link href="/projects/automation-tools" className="project-card">
                        <img src="/images/projects/automation.png"
                             alt="Process Automation Tools"
                             loading="lazy"
                             width="800"
                             height="450" />
                        <h3>Process Automation Tools</h3>
                        <p>Developed a suite of automation tools for streamlining industrial processes, including data collection, analysis, and reporting. Implemented using Python and industry-standard automation frameworks.</p>
                        <span className="view-project">View Project <i className="fas fa-arrow-right"></i></span>
                    </Link>
                </div>
            </section>

            {/* Experience section */}
            <section id="experience" className="experience-section">
                <h2>Professional Experience</h2>
                
                {/* Add the Download Resume button */}
                <div className="resume-button-container">
                    <a href="/files/ryan-guidry-resume.pdf" download className="resume-button">
                        <i className="fas fa-download"></i> Download Resume
                    </a>
                </div>
                
                <ExperienceTiles />
            </section>

            {/* Skills section */}
            <section id="skills">
                <h2>Skills & Expertise</h2>
                <div className="skills-grid">
                    {/* Frontend Technologies */}
                    <div className="skill-card skill-web">
                        <i className="fas fa-code"></i>
                        <h3>Frontend</h3>
                        <ul className="skills-list">
                            <li className="skill-item">HTML5 & CSS3</li>
                            <li className="skill-item">JavaScript (ES6+)</li>
                            <li className="skill-item">React.js</li>
                            <li className="skill-item">Responsive Design</li>
                            <li className="skill-item">CSS Frameworks</li>
                        </ul>
                    </div>
                    
                    {/* Backend Technologies */}
                    <div className="skill-card skill-data">
                        <i className="fas fa-server"></i>
                        <h3>Backend</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Node.js</li>
                            <li className="skill-item">Express.js</li>
                            <li className="skill-item">Python</li>
                            <li className="skill-item">RESTful APIs</li>
                            <li className="skill-item">Server Architecture</li>
                        </ul>
                    </div>
                    
                    {/* Frameworks & Libraries */}
                    <div className="skill-card skill-technical">
                        <i className="fas fa-layer-group"></i>
                        <h3>Frameworks</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Next.js</li>
                            <li className="skill-item">Tailwind CSS</li>
                            <li className="skill-item">Bootstrap</li>
                            <li className="skill-item">Material UI</li>
                            <li className="skill-item">jQuery</li>
                        </ul>
                    </div>
                    
                    {/* Databases */}
                    <div className="skill-card skill-data">
                        <i className="fas fa-database"></i>
                        <h3>Databases</h3>
                        <ul className="skills-list">
                            <li className="skill-item">MongoDB</li>
                            <li className="skill-item">MySQL</li>
                            <li className="skill-item">PostgreSQL</li>
                            <li className="skill-item">Firebase</li>
                            <li className="skill-item">SQL</li>
                        </ul>
                    </div>
                    
                    {/* Development Tools */}
                    <div className="skill-card skill-technical">
                        <i className="fas fa-tools"></i>
                        <h3>Dev Tools</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Git & GitHub</li>
                            <li className="skill-item">VS Code</li>
                            <li className="skill-item">Chrome DevTools</li>
                            <li className="skill-item">NPM/Yarn</li>
                            <li className="skill-item">Webpack</li>
                        </ul>
                    </div>
                    
                    {/* Design & UI/UX */}
                    <div className="skill-card skill-design">
                        <i className="fas fa-paint-brush"></i>
                        <h3>Design & UI/UX</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Figma</li>
                            <li className="skill-item">Adobe Photoshop</li>
                            <li className="skill-item">User Experience</li>
                            <li className="skill-item">Wireframing</li>
                            <li className="skill-item">Responsive Layouts</li>
                        </ul>
                    </div>
                    
                    {/* Deployment & DevOps */}
                    <div className="skill-card skill-engineering">
                        <i className="fas fa-rocket"></i>
                        <h3>Deployment</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Vercel</li>
                            <li className="skill-item">Netlify</li>
                            <li className="skill-item">Heroku</li>
                            <li className="skill-item">AWS (Basics)</li>
                            <li className="skill-item">CI/CD Pipelines</li>
                        </ul>
                    </div>
                    
                    {/* Testing & QA */}
                    <div className="skill-card skill-technical">
                        <i className="fas fa-vial"></i>
                        <h3>Testing</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Jest</li>
                            <li className="skill-item">React Testing Library</li>
                            <li className="skill-item">Unit Testing</li>
                            <li className="skill-item">Integration Testing</li>
                            <li className="skill-item">Debugging</li>
                        </ul>
                    </div>
                    
                    {/* Performance & Optimization */}
                    <div className="skill-card skill-web">
                        <i className="fas fa-tachometer-alt"></i>
                        <h3>Performance</h3>
                        <ul className="skills-list">
                            <li className="skill-item">Web Vitals</li>
                            <li className="skill-item">Image Optimization</li>
                            <li className="skill-item">Lazy Loading</li>
                            <li className="skill-item">Caching Strategies</li>
                            <li className="skill-item">SEO Best Practices</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Personality Profile Section */}
            <section id="personality-profile">
                <h2>My Personality Profile</h2>
                
                <div className="visualization-container">
                    {/* SVG Personality Wheel */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                        {/* Insert the entire SVG code from the personality wheel artifact */}
                        {/* This is a placeholder - replace with your actual SVG code */}
                        <circle cx="250" cy="250" r="200" fill="#f0f0f0" stroke="#ccc" strokeWidth="1"/>
                        <path d="M250,50 A200,200 0 0,1 450,250" fill="#4A89DC" stroke="none"/>
                        <path d="M250,50 A200,200 0 0,0 50,250" fill="#E9573F" stroke="none"/>
                        <circle cx="250" cy="250" r="50" fill="white" stroke="#ccc" strokeWidth="1"/>
                        <text x="250" y="260" textAnchor="middle" fill="#333" fontWeight="bold">64% Blue</text>
                    </svg>
                </div>
                
                <div className="profile-description">
                    <p>Based on my Insights Discovery profile, I'm classified as a "Reforming Observer" with dominant blue (64%) and red (60%) energy. This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
                </div>
            </section>

            {/* Contact section */}
            <section id="contact">
                <h2>Get in touch</h2>
                <div className="contact-form-container">
                    <form id="contactForm">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                autoComplete="name"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required 
                                autoComplete="email"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input 
                                type="text" 
                                id="subject" 
                                name="subject" 
                                required
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                required
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <div className="button-container">
                            <button type="submit" className="submit-button">Send Message</button>
                        </div>
                    </form>

                    <div id="form-response"></div>
                </div>

                <div className="contact-info">
                    <p>Or reach out directly: <a href="mailto:inquireryan@gmail.com">inquireryan@gmail.com</a></p>
                </div>
            </section>
        </Layout>
   );
}