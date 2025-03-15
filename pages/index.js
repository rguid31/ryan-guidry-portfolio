import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';
import ExperienceTiles from '../src/components/sections/ExperienceTiles';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Ryan Guidry - Portfolio 2025</title>
                <meta name="description" content="Portfolio of Ryan Guidry - Data Analyst, Engineering, and Web Development" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3605L7SNLB"></script>
            </Head>

            <main>
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
                        </div>
                    </div>
                </section>

                {/* Skills & Certifications section */}
                <section id="skills-certifications" className="skills-certifications-section">
                    <div className="container">
                        <div className="skills-container">
                            <h2>Skills & Technologies</h2>
                            <ul className="skills-list">
                                <li>
                                    <i className="fas fa-code" style={{marginRight: '10px', width: '20px'}}></i>
                                    Python Programming
                                </li>
                                <li>
                                    <i className="fas fa-laptop-code" style={{marginRight: '10px', width: '20px'}}></i>
                                    Web Development
                                </li>
                                <li>
                                    <i className="fas fa-database" style={{marginRight: '10px', width: '20px'}}></i>
                                    SQL
                                </li>
                                <li>
                                    <i className="fas fa-file-excel" style={{marginRight: '10px', width: '20px'}}></i>
                                    Spreadsheets
                                </li>
                                <li>
                                    <i className="fas fa-chart-line" style={{marginRight: '10px', width: '20px'}}></i>
                                    Data Visualization
                                </li>
                                <li>
                                    <i className="fas fa-chart-bar" style={{marginRight: '10px', width: '20px'}}></i>
                                    Data Analysis
                                </li>
                                <li>
                                    <i className="fas fa-cogs" style={{marginRight: '10px', width: '20px'}}></i>
                                    Process Optimization
                                </li>
                                <li>
                                    <i className="fas fa-broom" style={{marginRight: '10px', width: '20px'}}></i>
                                    Data Cleaning
                                </li>
                                <li>
                                    <i className="fas fa-chart-pie" style={{marginRight: '10px', width: '20px'}}></i>
                                    Reporting & Dashboards
                                </li>
                                <li>
                                    <i className="fas fa-file-excel" style={{marginRight: '10px', width: '20px'}}></i>
                                    Excel Advanced Analytics
                                </li>
                            </ul>
                        </div>
                        
                        <div className="certifications-container">
                            <h2>Certifications</h2>
                            <ul className="certifications-list">
                                <li>
                                    <i className="fas fa-database" style={{marginRight: '10px', width: '20px'}}></i>
                                    Google AI Essentials
                                </li>
                                <li>
                                    <i className="fas fa-magnifying-glass-chart" style={{marginRight: '10px', width: '20px'}}></i>
                                    Google Data Analytics Professional
                                </li>
                                <li>
                                    <i className="fas fa-helmet-safety" style={{marginRight: '10px', width: '20px'}}></i>
                                    OSHA Basic Orientation Plus
                                </li>
                                <li>
                                    <i className="fas fa-id-card" style={{marginRight: '10px', width: '20px'}}></i>
                                    Transportation Worker Identification Credential (TWIC)
                                </li>
                            </ul>
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

                {/* Education section */}
                <section id="education" className="education-section">
                    <h2>Education</h2>
                    
                    {/* Google AI Essentials Certification */}
                    <div className="education-item">
                        <div className="logo-section">
                            <div className="institution-logo">
                                <img src="/images/education/google-ai.png" alt="Google AI Essentials Certification" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <h3 className="education-title">Google AI Essentials Certification</h3>
                            <p className="institution-info">Coursera</p>
                            <p className="education-details">Field of Study: Artificial Intelligence</p>
                            <div className="education-period">
                                <i className="fas fa-calendar"></i>
                                <span>February 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* Google Data Analytics Certification */}
                    <div className="education-item">
                        <div className="logo-section">
                            <div className="institution-logo">
                                <img src="/images/education/gdapc.png" alt="Google Data Analytics Professional Certificate" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <h3 className="education-title">Google Data Analytics Professional Certification</h3>
                            <p className="institution-info">Coursera</p>
                            <p className="education-details">Field of Study: Data Analytics</p>
                            <div className="education-period">
                                <i className="fas fa-calendar"></i>
                                <span>Sep 2024 - Jan 2025</span>
                            </div>
                        </div>
                    </div>

                    {/* LSU Chemical Engineering */}
                    <div className="education-item">
                        <div className="logo-section">
                            <div className="institution-logo">
                                <img src="/images/education/lsu.png" alt="Louisiana State University logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <h3 className="education-title">Bachelor of Science in Chemical Engineering (Incomplete)</h3>
                            <p className="institution-info">Louisiana State University (LSU A&M)</p>
                            <p className="education-details">Field of Study: Chemical Engineering</p>
                            <div className="education-period">
                                <i className="fas fa-calendar"></i>
                                <span>Aug 2014 - Dec 2023</span>
                            </div>
                            <div className="education-stats">
                                <span>131/128 credit hours completed</span>
                            </div>
                        </div>
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
                        {/* Technical Skills - Exact card as provided */}
                        <div className="skill-card">
                            <i className="fas fa-code"></i>
                            <h3>Technical Skills</h3>
                            <ul className="skills-list">
                                <li>Python Programming</li>
                                <li>Web Development</li>
                                <li>SQL</li>
                                <li>RESTful APIs</li>
                                <li>Machine Learning</li>
                            </ul>
                        </div>
                        
                        {/* Web Development/Coding - NEW */}
                        <div className="skill-card">
                            <i className="fas fa-laptop-code"></i>
                            <h3>Web Development</h3>
                            <ul className="skills-list">
                                <li>JavaScript/React</li>
                                <li>Next.js Framework</li>
                                <li>HTML5/CSS3</li>
                                <li>Responsive Design</li>
                                <li>API Integration</li>
                                <li>Git Version Control</li>
                                <li>Frontend Optimization</li>
                            </ul>
                        </div>
                        
                        {/* Data Analytics */}
                        <div className="skill-card">
                            <i className="fas fa-chart-line"></i>
                            <h3>Data Analytics</h3>
                            <ul className="skills-list">
                                <li>Data Visualization</li>
                                <li>Data Analysis</li>
                                <li>Data Storytelling</li>
                                <li>Spreadsheets</li>
                                <li>Process Optimization</li>
                            </ul>
                        </div>
                        
                        {/* ML/AI - NEW */}
                        <div className="skill-card">
                            <i className="fas fa-brain"></i>
                            <h3>Machine Learning & AI</h3>
                            <ul className="skills-list">
                                <li>AI Model Training</li>
                                <li>Neural Networks</li>
                                <li>Data Preprocessing</li>
                                <li>Model Evaluation</li>
                                <li>Natural Language Processing</li>
                                <li>AI Ethics & Responsibility</li>
                                <li>Predictive Modeling</li>
                            </ul>
                        </div>
                        
                        {/* Graphic Design */}
                        <div className="skill-card">
                            <i className="fas fa-palette"></i>
                            <h3>Graphic Design</h3>
                            <ul className="skills-list">
                                <li>UI/UX Design</li>
                                <li>Adobe Photoshop</li>
                                <li>Figma</li>
                                <li>Typography</li>
                                <li>Logo Design</li>
                                <li>Wireframing</li>
                                <li>Responsive Design</li>
                            </ul>
                        </div>
                        
                        {/* Engineering */}
                        <div className="skill-card">
                            <i className="fas fa-cogs"></i>
                            <h3>Engineering</h3>
                            <ul className="skills-list">
                                <li>Process Engineering</li>
                                <li>Chemical Engineering</li>
                                <li>Process Optimization</li>
                                <li>Project Management</li>
                                <li>Technical Documentation</li>
                                <li>Risk Assessment</li>
                                <li>Equipment Design</li>
                            </ul>
                        </div>
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
            </main>

            {/* Footer Section */}
            <footer>
                <div className="footer-content">
                    <p>Connect with me:</p>
                    <div className="footer-social-links">
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
                </div>
            </footer>
        </Layout>
    );
}