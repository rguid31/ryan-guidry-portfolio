import React from 'react';
import Link from 'next/link';
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section id="about" className={styles.hpAboutSection}>
            <h2>About Me</h2>
            <div className={styles.hpAboutLayout}> {/* Corresponds to old .about-section for layout */}
                <div className={styles.hpProfileContainer}>
                    <img src="/images/profile/profile-photo.jpg" 
                         alt="Ryan Guidry - Engineering Professional and Data Analyst" 
                         className={styles.hpProfileImage} /* Corresponds to old .hero-image */
                         loading="lazy" />
                </div>
                
                <div className={styles.hpAboutText}>
                    <p className={styles.hpBioText}>Hi, I'm Ryan Guidry, a student of Chemical Engineering transitioning into data analysis. I'm passionate about using data to uncover insights, solve problems, and drive informed decisions.</p>
                    <p>With a strong foundation in analytical thinking and process optimization, I've worked across industries, including artificial intelligence and engineering. My hands-on experience includes enhancing AI models, streamlining operations, and improving data accuracy.</p>
                    <p>I'm currently building my expertise as a certified Google Data Analytics Professional, focusing on visualization, statistical analysis, and data storytelling. I enjoy turning complex data into actionable insights that create real-world impact.</p>
                    <p>Outside of work, I explore emerging technologies like AI and blockchain while constantly learning and growing. Let's connect to see how I can help transform your data into opportunities!</p>
                    <Link href="/about" className={styles.hpAboutMoreLink}> {/* Added a style for the link if needed, or use global 'a' styling */}
                        Learn more about me <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </section>
    );
} 