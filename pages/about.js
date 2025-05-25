import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import KeywordCloudMap from '../src/components/KeywordCloudMap';
import PersonalityDashboard from '../src/components/PersonalityDashboard';
import styles from '../src/styles/About.module.css';

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
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>

            <div className={styles.scrollProgressBar} style={{ width: `${scrollProgress}%` }}></div>

            <div className={styles.aboutNavContainer}>
                <div className={styles.aboutSidebar}>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'hero' ? styles.active : ''}`} onClick={() => scrollToSection('hero')}>
                        <i className="fas fa-user"></i>
                        <span>My Profile</span>
                    </button>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'journey' ? styles.active : ''}`} onClick={() => scrollToSection('journey')}>
                        <i className="fas fa-road"></i>
                        <span>My Journey</span>
                    </button>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'personality' ? styles.active : ''}`} onClick={() => scrollToSection('personality')}>
                        <i className="fas fa-brain"></i>
                        <span>Personality</span>
                    </button>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'philosophy' ? styles.active : ''}`} onClick={() => scrollToSection('philosophy')}>
                        <i className="fas fa-lightbulb"></i>
                        <span>Philosophy</span>
                    </button>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'interests' ? styles.active : ''}`} onClick={() => scrollToSection('interests')}>
                        <i className="fas fa-heart"></i>
                        <span>Interests</span>
                    </button>
                    <button className={`${styles.sidebarBtn} ${activeSection === 'contact' ? styles.active : ''}`} onClick={() => scrollToSection('contact')}>
                        <i className="fas fa-envelope"></i>
                        <span>Contact</span>
                    </button>
                </div>
            </div>

            <div className={styles.aboutPageContent}>
                <section id="hero" className={styles.aboutHero} style={{ opacity: heroOpacity, transition: 'opacity 0.3s ease' }}>
                    <h1>My Profile</h1>
                    <p className={styles.aboutIntro}>Chemical Engineer turned AI Specialist</p>
                </section>
                <section id="journey" className={styles.aboutJourney}>
                    <h2>My Journey</h2>
                    <div className={styles.timeline}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineDate}>2023 - Present</div>
                            <div className={styles.timelineContent}>
                                <h3>Data Analytics & Web Development Focus</h3>
                                <p>Completed Google Data Analytics Professional Certification and transitioned into web development and data visualization projects. Building expertise in modern web technologies while applying data analytics principles.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineDate}>2021 - 2023</div>
                            <div className={styles.timelineContent}>
                                <h3>Chemical Process Engineering</h3>
                                <p>Worked on optimizing chemical processes and implementing efficiency improvements. Applied engineering principles to solve complex industrial challenges and enhance operational performance.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineDate}>2014 - 2023</div>
                            <div className={styles.timelineContent}>
                                <h3>Chemical Engineering Education</h3>
                                <p>Studied Chemical Engineering at Louisiana State University, developing a strong foundation in mathematical modeling, process design, thermodynamics, and scientific problem-solving methodologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.storyContent}>
                        <p>I'm a Chemical Engineer with a passion for technology and innovation. My journey began in Louisiana, where I developed a strong foundation in analytical thinking and problem-solving. Through my diverse professional experiences, I've honed my skills in process optimization, data analysis, and technical leadership.</p>
                        <p>My transition into AI, data, and technology has been driven by my desire to leverage cutting-edge tools to solve complex problems. I combine my engineering background with modern technical skills to create innovative solutions that make a real impact.</p>
                    </div>
                </section>
                <section id="personality" className={styles.fullPersonalitySection}>
                    <div className={styles.personalityContainer}>
                        <h2 className={styles.personalityHeading}>My Personality Profile</h2>
                        <div className={styles.personalityCard}>
                            <PersonalityDashboard />
                        </div>
                        <div className={styles.profileDescription}>
                            <h3>Personality Insights</h3>
                            <div className={styles.personalityInsightContainer}>
                                <div className={styles.personalityTypeOverview}>
                                    <p className={styles.personalityHighlight}>
                                        I'm classified as a <strong>"Reforming Observer"</strong> with dominant <span className={styles.colorBlue}>blue (64%)</span> and <span className={styles.colorRed}>red (60%)</span> energy.
                                    </p>
                                    <p>This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
                                </div>
                                <div className={styles.energyBreakdown}>
                                    <div className={`${styles.energyItem} ${styles.blueEnergy}`}>
                                        <h4><i className="fas fa-brain"></i> Blue Energy</h4>
                                        <p>Drives my detail-oriented approach and desire for accuracy in everything I do.</p>
                                    </div>
                                    <div className={`${styles.energyItem} ${styles.redEnergy}`}>
                                        <h4><i className="fas fa-bolt"></i> Red Energy</h4>
                                        <p>Provides decisiveness and a results-oriented mindset to complete tasks efficiently.</p>
                                    </div>
                                    <div className={`${styles.energyItem} ${styles.yellowEnergy}`}>
                                        <h4><i className="fas fa-lightbulb"></i> Yellow Attributes</h4>
                                        <p>Creativity and enthusiasm that spark innovation and engagement in projects.</p>
                                    </div>
                                    <div className={`${styles.energyItem} ${styles.greenEnergy}`}>
                                        <h4><i className="fas fa-handshake"></i> Green Attributes</h4>
                                        <p>Supportiveness and relationship-building that enhance collaboration with diverse teams.</p>
                                    </div>
                                </div>
                                <p className={styles.personalityConclusion}>
                                    This unique combination makes me particularly effective at solving complex problems and implementing practical solutions while maintaining strong communication across teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="philosophy" className={styles.philosophySection}>
                    <div className={styles.philosophyContainer}>
                        <h2>Professional Philosophy & Core Values</h2>
                        <div className={styles.philosophyContent}>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>
                                    <i className="fas fa-lightbulb"></i>
                                </div>
                                <h3>Analytical Thinking</h3>
                                <p>I approach problems methodically, breaking them down into manageable components to find optimal solutions. My engineering background has taught me to think critically and find patterns in complex systems.</p>
                            </div>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>
                                    <i className="fas fa-users"></i>
                                </div>
                                <h3>Collaborative Approach</h3>
                                <p>I believe in the power of diverse perspectives when tackling challenges. By combining different viewpoints and expertise, we can create innovative solutions that address multifaceted problems.</p>
                            </div>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>
                                    <i className="fas fa-chart-line"></i>
                                </div>
                                <h3>Data-Driven Decisions</h3>
                                <p>I'm committed to letting data lead the way in decision-making processes. By leveraging analytics and visualization techniques, I transform raw data into strategic insights that drive measurable outcomes.</p>
                            </div>
                            <div className={styles.philosophyItem}>
                                <div className={styles.philosophyIcon}>
                                    <i className="fas fa-rocket"></i>
                                </div>
                                <h3>Continuous Learning</h3>
                                <p>The tech landscape is always evolving, and I'm dedicated to growing with it. I actively pursue new knowledge and skills, staying at the forefront of emerging technologies and methodologies.</p>
                            </div>
                        </div>
                        <div className={styles.valuesGrid}>
                            <div className={styles.valueCard}>
                                <h3>Analytical Excellence</h3>
                                <p>Approaching challenges with data-driven insights and systematic problem-solving.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Continuous Learning</h3>
                                <p>Constantly expanding my knowledge and skills to stay at the forefront of technology.</p>
                            </div>
                            <div className={styles.valueCard}>
                                <h3>Results-Driven</h3>
                                <p>Focusing on delivering tangible outcomes that create value and drive progress.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="interests" className={styles.interestsSection}>
                    <div className={styles.interestsContainer}>
                        <h2>Beyond Professional Life</h2>
                        <div className={styles.interestsGrid}>
                            <div className={styles.interestItem}>
                                <i className="fas fa-laptop-code"></i>
                                <h3>Technology Exploration</h3>
                                <p>I'm fascinated by emerging technologies like artificial intelligence, blockchain, and IoT. I enjoy experimenting with new tools and platforms to understand their potential applications.</p>
                            </div>
                            <div className={styles.interestItem}>
                                <i className="fas fa-book"></i>
                                <h3>Continuous Learning</h3>
                                <p>I have a passion for lifelong learning and regularly take online courses, read technical books, and participate in workshops to expand my knowledge and skills.</p>
                            </div>
                            <div className={styles.interestItem}>
                                <i className="fas fa-camera"></i>
                                <h3>Photography</h3>
                                <p>Photography helps me see the world from different perspectives. I enjoy capturing landscapes and urban scenes, finding beauty in both natural and built environments.</p>
                            </div>
                            <div className={styles.interestItem}>
                                <i className="fas fa-hiking"></i>
                                <h3>Outdoor Activities</h3>
                                <p>I enjoy hiking and exploring nature, which provides a perfect balance to my technical work and gives me space to recharge and find inspiration.</p>
                            </div>
                        </div>
                        <div className={styles.passionsContent}>
                            <div className={styles.passionItem}>
                                <h3>Creative Expression</h3>
                                <p>Sharing my creative work on platforms like SoundCloud and Behance, exploring the intersection of art and technology.</p>
                            </div>
                            <div className={styles.passionItem}>
                                <h3>Digital Media</h3>
                                <p>Contributing to the digital landscape through various platforms and creative projects.</p>
                            </div>
                            <div className={styles.passionItem}>
                                <h3>Collecting & Trading</h3>
                                <p>Engaging with communities on Discogs and eBay, building connections through shared interests.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="mission" className={styles.missionSection}>
                    <h2>Personal Mission</h2>
                    <p className={styles.missionStatement}>
                        To leverage my technical expertise and creative problem-solving abilities to drive innovation
                        and create meaningful impact in the intersection of engineering and technology.
                    </p>
                </section>
                <section id="funfacts" className={styles.funFactsSection}>
                    <h2>Three Things You Might Not Know</h2>
                    <div className={styles.funFactsGrid}>
                        <div className={styles.funFactCard}>
                            <h3>Multifaceted Creativity</h3>
                            <p>Beyond engineering, I express myself through music and digital art, finding inspiration in the intersection of technical and creative fields.</p>
                        </div>
                        <div className={styles.funFactCard}>
                            <h3>Digital Entrepreneur</h3>
                            <p>I actively engage in digital marketplaces, combining my technical knowledge with business acumen.</p>
                        </div>
                        <div className={styles.funFactCard}>
                            <h3>Community Builder</h3>
                            <p>I'm passionate about building and nurturing communities around shared interests and creative pursuits.</p>
                        </div>
                    </div>
                </section>
                <section id="contact" className={styles.aboutCtaSection}>
                    <div className={styles.aboutCtaContainer}>
                        <h2>Let's Work Together</h2>
                        <p>Whether you're looking for a data analyst, web developer, or someone to help bridge the gap between technical solutions and business needs, I'm here to collaborate.</p>
                        <div className={styles.ctaButtons}>
                            <Link href="/#contact" className={styles.ctaButton}>Get in Touch</Link>
                            <Link href="/files/ryan-guidry-resume.pdf" className={`${styles.ctaButton} ${styles.secondary}`} download>
                                <i className="fas fa-download"></i> Download Resume
                            </Link>
                        </div>
                        <div className={styles.socialLinks} style={{ marginTop: '2rem' }}>
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="https://linktr.ee/your-profile" target="_blank" rel="noopener noreferrer">LinkTree</a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}