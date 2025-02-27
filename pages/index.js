import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';

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
                    
                    {/* AI Math Specialist */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/outlier-ai.png" alt="Outlier AI logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">AI Math Specialist</h3>
                                <p className="company-info">Outlier AI · Jun 2024 - Present · Remote</p>
                                <ul className="responsibilities">
                                    <li>Contributed to the advancement of AI models in advanced mathematics by generating high-quality training data, contributing to an improvement in model accuracy.</li>
                                    <li>Finely tuned and trained AI models to enhance their accuracy.</li>
                                    <li>Improved the relationship between people and their data by improving the accuracy, efficiency, and user experience of data processing tasks.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>AI model development</span>
                                    <span>Data analysis</span>
                                    <span>Mathematical modeling</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Field Technician */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/tracerco.png" alt="Tracerco logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Field Technician</h3>
                                <p className="company-info">Tracerco · Apr 2024 - May 2024 · Baton Rouge, LA</p>
                                <ul className="responsibilities">
                                    <li>Oversaw technical innovation as a subject matter expert in Tracerco's core technologies.</li>
                                    <li>Maintained strategic client partnerships, driving the development and delivery of tailored solutions.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Technical innovation</span>
                                    <span>Client relationship management</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Safety and Training Coordinator */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/acbl.png" alt="ACBL logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Safety and Training Coordinator</h3>
                                <p className="company-info">American Commercial Barge Line · Oct 2023 - Mar 2024 · Harahan, LA</p>
                                <ul className="responsibilities">
                                    <li>Designed and conducted safety training sessions for employees, emphasizing best practices and regulations.</li>
                                    <li>Completed River Seamanship 1 training, proving proficiency in deckhand duties.</li>
                                    <li>Fostered a culture of safety and continuous improvement through cross-functional collaboration.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Safety training</span>
                                    <span>Regulatory compliance</span>
                                    <span>Team collaboration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Engineer */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/emerson.png" alt="Emerson logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern, Application Engineer</h3>
                                <p className="company-info">Emerson Automation Solutions · Jun 2022 - Aug 2022 · Baton Rouge, LA</p>
                                <ul className="responsibilities">
                                    <li>Designed and implemented a scalable solution to automate Windows Server Update Service (WSUS) deployment.</li>
                                    <li>Collaborated to identify pain points in an Excel application and implemented automated solutions.</li>
                                    <li>Developed a streamlined process to generate detailed site information documents.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Automation solutions</span>
                                    <span>Process improvement</span>
                                    <span>Team collaboration</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project Development Engineer */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/total.png" alt="TotalEnergies logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern, Project Development Engineer</h3>
                                <p className="company-info">TotalEnergies · Jun 2021 - Aug 2021 · Port Arthur, TX</p>
                                <ul className="responsibilities">
                                    <li>Lead project team through front-end-loading (FEL) of $1M CapEx project on the condensate splitter unit.</li>
                                    <li>Led pre-FEED activities, defining project scope, estimating costs, and developing execution plan.</li>
                                    <li>Studied feasibility of improved corrosion control on CSU.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Project management</span>
                                    <span>Cost estimation</span>
                                    <span>Process optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Industrial Equipment Sales */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/dwl.png" alt="DWL Technology logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern, Industrial Equipment Sales</h3>
                                <p className="company-info">DWL Technology · May 2019 - Sep 2019 · Walker, LA</p>
                                <ul className="responsibilities">
                                    <li>Inventoried and organized surplus industrial parts and laboratory glassware.</li>
                                    <li>Created an e-commerce sales presence with over two hundred sales transactions.</li>
                                    <li>Monitored online sales metrics to improve overall sales performance.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Inventory management</span>
                                    <span>E-commerce sales</span>
                                    <span>Sales performance analysis</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Oilfield Chemical Sales */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/nalco.png" alt="Nalco Champion logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern, Technical Sales Engineer</h3>
                                <p className="company-info">Nalco Champion · May 2018 - Aug 2018 · Lafayette, LA</p>
                                <ul className="responsibilities">
                                    <li>Conducted regular surveys of oil field well heads and upstream equipment.</li>
                                    <li>Streamlined pipeline corrosion monitoring practices using AccuCount technology.</li>
                                    <li>Introduced standardized process for field engineers to collect and correlate data.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Chemical inventory management</span>
                                    <span>Process optimization</span>
                                    <span>Pipeline integrity analysis</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Engineer */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/cornerstone.png" alt="Cornerstone Chemical logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern, Process Engineer</h3>
                                <p className="company-info">Cornerstone Chemical Company · Dec 2017 - Jan 2018 · Waggaman, LA</p>
                                <ul className="responsibilities">
                                    <li>Utilized Pi ProcessBook and Pi Datalink to determine risks of acid over-neutralization.</li>
                                    <li>Verified the accuracy of P&IDs surrounding a combustion reactor.</li>
                                    <li>Studied industrial turbines and compressors to understand functionality and failure modes.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Process analysis</span>
                                    <span>Risk assessment</span>
                                    <span>P&ID verification</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bartender */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/nod.png" alt="New Orleans Original Daquiris logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Bartender</h3>
                                <p className="company-info">New Orleans Original Daiquiris · Jun 2017 - Sep 2017 · Baton Rouge, LA</p>
                                <ul className="responsibilities">
                                    <li>Developed customer business relations through effective social interaction and assurance of customer satisfaction in a fast-paced environment.</li>
                                    <li>Exhibited time management skills and a strong work ethic through school & work-life balance.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Social interaction</span>
                                    <span>Customer satisfaction</span>
                                    <span>Time management</span>
                                    <span>Work ethic</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paper Chemical Sales Engineer */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/gp.png" alt="Georgia-Pacific logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Intern,Paper Chemical Sales Engineer</h3>
                                <p className="company-info">Georgia-Pacific · May 2016 - Aug 2016 & Dec 2016 · Saratoga Springs, NY</p>
                                <ul className="responsibilities">
                                    <li>Conducted wet-end tests throughout the paper making process.</li>
                                    <li>Performed a pulp receptivity study on fifteen recycled furnishes.</li>
                                    <li>Designed process flow diagrams (PFDs) of the recycled paper making process.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Process optimization</span>
                                    <span>Data analysis</span>
                                    <span>Process flow diagram design</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mortgage Lender */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/home-servicing.png" alt="Home Servicing, LLC logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Mortgage Lender</h3>
                                <p className="company-info">Home Servicing, LLC · May 2015 - Aug 2015 · Baton Rouge, LA</p>
                                <ul className="responsibilities">
                                    <li>Communicated with homeowners and agents in reference to property taxes, insurance payments and mortgages on various properties around the country.</li>
                                    <li>Organized and filed paperwork and documents into the computer database as well as into the physical file library for easy staff accessibility.</li>
                                    <li>Acquired necessary customer information regarding property ownership and taxes through Service Director and Citrix computer programs.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Business Relationship Management</span>
                                    <span>Interpersonal Communication</span>
                                    <span>Executive Support</span>
                                    <span>Administrative Assistance</span>
                                    <span>Compliance Management</span>
                                    <span>Technical Support</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Computer Technician */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/scpps.png" alt="St. Charles Parish Public Schools logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Computer Technician</h3>
                                <p className="company-info">St. Charles Parish Public Schools · May 2014 - Aug 2014 · Destrehan, LA</p>
                                <ul className="responsibilities">
                                    <li>Deployed and optimized school technology infrastructure: Efficiently installed and configured computers, peripherals, and software across classrooms and offices, maximizing the utilization of technology resources to enhance learning environments.</li>
                                    <li>Ensured uninterrupted learning through proactive IT support: Provided timely troubleshooting and resolution of hardware, software, and network issues, minimizing disruptions and ensuring continuous access to essential educational tools.</li>
                                    <li>Streamlined school identification process: Developed and implemented an efficient photo identification system, streamlining the capture and distribution of staff photos and improving overall school security and efficiency.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Help Desk Support</span>
                                    <span>Networking</span>
                                    <span>Troubleshooting</span>
                                    <span>Electronics</span>
                                    <span>Organizational Agility</span>
                                    <span>Digital Transformation</span>
                                    <span>Technical Support</span>
                                    <span>Problem Solving</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="section-header">Volunteer Experience</h2>

                    {/* LANDONi Music */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/landoni.png" alt="LANDONi Music logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Creative Marketing & Brand Development Specialist Volunteer</h3>
                                <p className="company-info">LANDONi Music · Mar 2020 - Present · New Orleans, LA</p>
                                <ul className="responsibilities">
                                    <li>Designed and launched an interactive media portfolio website that improved the client's brand visibility and drove a 15% increase in web traffic and increased audience engagement by 20%.</li>
                                    <li>Launched and managed online presence, increasing followers by 35% and streaming revenue by 20%.</li>
                                    <li>Oversaw social media, content, and artist branding.</li>
                                    <li>Led a fundraising campaign for COVID-19 relief, utilizing custom merchandise to boost brand awareness and community engagement.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Website design</span>
                                    <span>Digital marketing</span>
                                    <span>Social media management</span>
                                    <span>Content creation</span>
                                    <span>Branding</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Local Guide */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/google-maps.png" alt="Google Maps logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <h3 className="job-title">Google Local Guide Level 5 Volunteer &nbsp;
                                    <a href="https://www.google.com/maps/contrib/108376276956248088684/contribute/@35.4378279,-89.2902653,2989923m/data=!3m1!1e3!4m3!8m2!3m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEwMS4wIKXMDSoASAFQAw%3D%3D" 
                                       target="_blank" 
                                       className="cta-button google-cta"
                                       rel="noopener noreferrer">
                                        View My Contributions <i className="fas fa-external-link-alt"></i>
                                    </a>
                                </h3>
                                <p className="company-info">Google Maps · Present · Remote</p>
                                <ul className="responsibilities">
                                    <li>Contributed reviews, photos, and edits to Google Maps to enhance the user experience.</li>
                                    <li>Distributed local knowledge and insights to the global Google Maps community.</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Community engagement</span>
                                    <span>Content contribution</span>
                                    <span>Local knowledge sharing</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="section-header">Online Marketplace Experience</h2>

                    {/* eBay */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/ryans-rocket-shop.png" alt="eBay logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <div className="ebay-header">
                                    <h3 className="job-title">
                                        eBay Top Rated Seller
                                        <a href="https://www.ebay.com/usr/ryans_rocket_shop" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           className="cta-button google-cta">
                                            Visit My eBay Store <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </h3>
                                </div>
                                <p className="company-info">eBay · 2015 - Present</p>
                                <ul className="responsibilities">
                                    <li>Maintained 100% positive feedback rating with over 332 successful transactions</li>
                                    <li>Achieved and maintained eBay's Top Rated Seller status with 448 items sold</li>
                                    <li>Specialized in industrial equipment, books, and collectibles</li>
                                    <li>Maintained defect rating below 0.5% through excellent customer service</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Customer service</span>
                                    <span>Inventory management</span>
                                    <span>E-commerce</span>
                                    <span>Product photography</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Discogs */}
                    <div className="experience-item">
                        <div className="logo-section">
                            <div className="company-logo">
                                <img src="/images/work-logos/rockit-media.png" alt="Discogs logo" loading="lazy" />
                            </div>
                        </div>
                        <div className="content-section">
                            <div className="content-container">
                                <div className="discogs-header">
                                    <h3 className="job-title">
                                        Discogs Verified Seller
                                        <a href="https://www.discogs.com/user/Rockit_Media" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           className="cta-button google-cta">
                                            Visit My Discogs Profile <i className="fas fa-external-link-alt"></i>
                                        </a>
                                    </h3>
                                </div>
                                <p className="company-info">Discogs · 2020 - Present</p>
                                <ul className="responsibilities">
                                    <li>Specialized in vinyl records and music memorabilia</li>
                                    <li>Maintained high seller rating through accurate grading and descriptions</li>
                                    <li>Built reputation for detailed item condition documentation</li>
                                    <li>Provided excellent customer service and fast shipping</li>
                                </ul>
                                <div className="skills-tags">
                                    <span>Product grading</span>
                                    <span>Customer service</span>
                                    <span>Inventory management</span>
                                    <span>Music industry knowledge</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills section */}
                <section id="skills">
                    <h2>Skills & Expertise</h2>
                    <div className="skills-grid">
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