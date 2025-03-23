import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';

export default function AboutPage() {
    return (
        <Layout>
            <Head>
                <title>About Me | Ryan Guidry</title>
                <meta name="description" content="Learn more about Ryan Guidry - Chemical Engineering background, skills in Data Analysis, Web Development, and technology innovations." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <main>
                {/* About Hero Section */}
                <section className="about-hero">
                    <div className="about-hero-content">
                        <h1>About Me</h1>
                        <p className="about-tagline">Chemical Engineer, Data Analyst, Web Developer & Technology Enthusiast</p>
                    </div>
                </section>

                {/* About Introduction */}
                <section className="about-intro">
                    <div className="about-intro-grid">
                        <div className="about-image-container">
                            <img 
                                src="/images/profile/profile-photo.jpg" 
                                alt="Ryan Guidry - Professional Portrait" 
                                className="about-profile-image"
                                loading="lazy" 
                            />
                        </div>
                        <div className="about-intro-content">
                            <h2>My Journey</h2>
                            <p className="intro-large">Hi, I'm Ryan Guidry, a Chemical Engineering student transitioning into the world of data analysis and web development.</p>
                            <p>With a strong foundation in analytical thinking and problem-solving from my engineering background, I've developed a passion for using data to uncover insights, solve complex problems, and drive informed decisions.</p>
                            <p>My professional journey has taken me through various industries, including artificial intelligence and chemical engineering, where I've had the opportunity to apply my analytical skills to real-world challenges.</p>
                            <p>I'm currently building my expertise as a certified Google Data Analytics Professional, focusing on data visualization, statistical analysis, and data storytelling. I enjoy transforming complex data sets into actionable insights that create meaningful impact.</p>
                            <Link href="/#contact" className="cta-button">Let's Connect</Link>
                        </div>
                    </div>
                </section>

                {/* Professional Philosophy */}
                <section className="philosophy-section">
                    <div className="philosophy-container">
                        <h2>Professional Philosophy</h2>
                        <div className="philosophy-content">
                            <div className="philosophy-item">
                                <div className="philosophy-icon">
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3>Analytical Thinking</h3>
                                <p>I approach problems methodically, breaking them down into manageable components to find optimal solutions. My engineering background has taught me to think critically and find patterns in complex systems.</p>
                            </div>
                            <div className="philosophy-item">
                                <div className="philosophy-icon">
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3>Collaborative Approach</h3>
                                <p>I believe in the power of diverse perspectives when tackling challenges. By combining different viewpoints and expertise, we can create innovative solutions that address multifaceted problems.</p>
                            </div>
                            <div className="philosophy-item">
                                <div className="philosophy-icon">
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Data-Driven Decisions</h3>
                                <p>I'm committed to letting data lead the way in decision-making processes. By leveraging analytics and visualization techniques, I transform raw data into strategic insights that drive measurable outcomes.</p>
                            </div>
                            <div className="philosophy-item">
                                <div className="philosophy-icon">
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <h3>Continuous Learning</h3>
                                <p>The tech landscape is always evolving, and I'm dedicated to growing with it. I actively pursue new knowledge and skills, staying at the forefront of emerging technologies and methodologies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Timeline */}
                <section className="timeline-section">
                    <h2>Professional Journey</h2>
                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2023 - Present</div>
                            <div className="timeline-content">
                                <h3>Data Analytics & Web Development Focus</h3>
                                <p>Completed Google Data Analytics Professional Certification and transitioned into web development and data visualization projects. Building expertise in modern web technologies while applying data analytics principles.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2021 - 2023</div>
                            <div className="timeline-content">
                                <h3>Chemical Process Engineering</h3>
                                <p>Worked on optimizing chemical processes and implementing efficiency improvements. Applied engineering principles to solve complex industrial challenges and enhance operational performance.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-date">2014 - 2023</div>
                            <div className="timeline-content">
                                <h3>Chemical Engineering Education</h3>
                                <p>Studied Chemical Engineering at Louisiana State University, developing a strong foundation in mathematical modeling, process design, thermodynamics, and scientific problem-solving methodologies.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Personality Profile */}
                <section id="personality" className="full-personality-section">
                    <div className="personality-container">
                        <h2 className="personality-heading">My Personality Profile</h2>
                        
                        <div className="personality-visualizations">
                            <div className="visualization-container">
                                {/* Personality Wheel Image */}
                                <div className="svg-container">
                                    <img src="/images/personality/personality-wheel.svg" alt="My Personality Type Wheel" />
                                </div>
                                <div className="visualization-caption">
                                    <h3>Personality Type Distribution</h3>
                                    <p>My energy distribution shows dominant blue (analytical) and red (decisive) energies, with supportive yellow (enthusiastic) and green (caring) components.</p>
                                </div>
                            </div>
                            
                            <div className="visualization-container">
                                {/* Radar Chart Image */}
                                <div className="svg-container">
                                    <img src="/images/personality/radar-chart.svg" alt="My Personal Attributes Radar Chart" />
                                </div>
                                <div className="visualization-caption">
                                    <h3>Key Attributes</h3>
                                    <p>This radar chart illustrates my key personality attributes, showing the balance between analytical thinking, creativity, attention to detail, and interpersonal skills.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="profile-description">
                            <h3>Personality Insights</h3>
                            <p>Based on my Insights Discovery profile, I'm classified as a "Reforming Observer" with dominant blue (64%) and red (60%) energy. This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
                            <p>My analytical blue energy drives my detail-oriented approach and desire for accuracy, while my red energy provides decisiveness and a results-oriented mindset. This combination makes me particularly effective at solving complex problems and implementing practical solutions.</p>
                            <p>Supporting these primary energies are my yellow attributes (creativity and enthusiasm) and green attributes (supportiveness and relationship-building), which help me communicate effectively and collaborate well with diverse teams.</p>
                        </div>
                    </div>
                </section>

                {/* Personal Interests */}
                <section className="interests-section">
                    <div className="interests-container">
                        <h2>Beyond Professional Life</h2>
                        <div className="interests-grid">
                            <div className="interest-item">
                                <i className="fas fa-laptop-code"></i>
                                <h3>Technology Exploration</h3>
                                <p>I'm fascinated by emerging technologies like artificial intelligence, blockchain, and IoT. I enjoy experimenting with new tools and platforms to understand their potential applications.</p>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-book"></i>
                                <h3>Continuous Learning</h3>
                                <p>I have a passion for lifelong learning and regularly take online courses, read technical books, and participate in workshops to expand my knowledge and skills.</p>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-camera"></i>
                                <h3>Photography</h3>
                                <p>Photography helps me see the world from different perspectives. I enjoy capturing landscapes and urban scenes, finding beauty in both natural and built environments.</p>
                            </div>
                            <div className="interest-item">
                                <i className="fas fa-hiking"></i>
                                <h3>Outdoor Activities</h3>
                                <p>I enjoy hiking and exploring nature, which provides a perfect balance to my technical work and gives me space to recharge and find inspiration.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="about-cta-section">
                    <div className="about-cta-container">
                        <h2>Let's Work Together</h2>
                        <p>Whether you're looking for a data analyst, web developer, or someone to help bridge the gap between technical solutions and business needs, I'm here to collaborate.</p>
                        <div className="cta-buttons">
                            <Link href="/#contact" className="cta-button">Get in Touch</Link>
                            <Link href="/files/ryan-guidry-resume.pdf" className="cta-button secondary" download>
                                <i className="fas fa-download"></i> Download Resume
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
} 