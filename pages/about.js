import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';
import KeywordCloudMap from '../components/KeywordCloudMap';
import PersonalityDashboard from '../src/components/PersonalityDashboard.jsx';

export default function AboutPage() {
    const [activeSection, setActiveSection] = useState('hero');
    const [scrollProgress, setScrollProgress] = useState(0);
    const [heroOpacity, setHeroOpacity] = useState(1);
    const sectionsRef = useRef([]);
    const [personalInfo, setPersonalInfo] = useState(null);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observerOptions = {
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    entry.target.classList.add('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            const scrollTop = window.scrollY;
            const heroHeight = document.getElementById('hero')?.offsetHeight || 500;
            const heroOpacityValue = Math.max(1 - scrollTop / (heroHeight * 0.8), 0);
            setHeroOpacity(heroOpacityValue);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/profile');
            const data = await response.json();
            setPersonalInfo(data.personalInformation);
        }
        fetchData();
    }, []);

    if (!personalInfo) return <p>Loading...</p>;

    return (
        <Layout>
            <Head>
                <title>My Profile - Ryan Guidry</title>
                <meta name="description" content="Learn more about Ryan Guidry - my journey, personality, values, and interests" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>

            <div className="about-nav-container">
                <div className="about-sidebar">
                    <button className={`sidebar-btn ${activeSection === 'hero' ? 'active' : ''}`} onClick={() => scrollToSection('hero')}>
                        <i className="fas fa-user"></i>
                        <span>My Profile</span>
                    </button>
                    <button className={`sidebar-btn ${activeSection === 'journey' ? 'active' : ''}`} onClick={() => scrollToSection('journey')}>
                        <i className="fas fa-road"></i>
                        <span>My Journey</span>
                    </button>
                    <button className={`sidebar-btn ${activeSection === 'personality' ? 'active' : ''}`} onClick={() => scrollToSection('personality')}>
                        <i className="fas fa-brain"></i>
                        <span>Personality</span>
                    </button>
                    <button className={`sidebar-btn ${activeSection === 'philosophy' ? 'active' : ''}`} onClick={() => scrollToSection('philosophy')}>
                        <i className="fas fa-lightbulb"></i>
                        <span>Philosophy</span>
                    </button>
                    <button className={`sidebar-btn ${activeSection === 'interests' ? 'active' : ''}`} onClick={() => scrollToSection('interests')}>
                        <i className="fas fa-heart"></i>
                        <span>Interests</span>
                    </button>
                    <button className={`sidebar-btn ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => scrollToSection('contact')}>
                        <i className="fas fa-envelope"></i>
                        <span>Contact</span>
                    </button>
                </div>
            </div>

            <div className="about-page-content">
                <section id="hero" className="about-hero" style={{ opacity: heroOpacity, transition: 'opacity 0.3s ease' }}>
                    <h1>My Profile</h1>
                    <p className="about-intro">Get to know me beyond the resume — my journey, values, and what drives me forward.</p>
                </section>
                <section id="journey" className="about-journey">
                    <h2>My Journey</h2>
                    <div className="timeline">
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
                <section id="personality" className="full-personality-section">
                    <div className="personality-container">
                        <h2 className="personality-heading">My Personality Profile</h2>
                        <div className="personality-card">
                            <PersonalityDashboard />
                        </div>
                        <div className="profile-description">
                            <h3>Personality Insights</h3>
                            <div className="personality-insight-container">
                                <div className="personality-type-overview">
                                    <p className="personality-highlight">
                                        I'm classified as a <strong>"Reforming Observer"</strong> with dominant <span className="color-blue">blue (64%)</span> and <span className="color-red">red (60%)</span> energy.
                                    </p>
                                    <p>This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
                                </div>
                                <div className="energy-breakdown">
                                    <div className="energy-item blue-energy">
                                        <h4><i className="fas fa-brain"></i> Blue Energy</h4>
                                        <p>Drives my detail-oriented approach and desire for accuracy in everything I do.</p>
                                    </div>
                                    <div className="energy-item red-energy">
                                        <h4><i className="fas fa-bolt"></i> Red Energy</h4>
                                        <p>Provides decisiveness and a results-oriented mindset to complete tasks efficiently.</p>
                                    </div>
                                    <div className="energy-item yellow-energy">
                                        <h4><i className="fas fa-lightbulb"></i> Yellow Attributes</h4>
                                        <p>Creativity and enthusiasm that spark innovation and engagement in projects.</p>
                                    </div>
                                    <div className="energy-item green-energy">
                                        <h4><i className="fas fa-handshake"></i> Green Attributes</h4>
                                        <p>Supportiveness and relationship-building that enhance collaboration with diverse teams.</p>
                                    </div>
                                </div>
                                <p className="personality-conclusion">
                                    This unique combination makes me particularly effective at solving complex problems and implementing practical solutions while maintaining strong communication across teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="philosophy" className="philosophy-section">
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
                <section id="interests" className="interests-section">
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
                <section id="contact" className="about-cta-section">
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
            </div>
        </Layout>
    );
}