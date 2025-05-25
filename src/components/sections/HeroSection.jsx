import React from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroContent}>
                <h1 className={styles.title}>Ryan Guidry</h1>
                <h2 className={styles.tagline}>
                    Passionate Web Developer | Data Science Explorer | Engineering Innovator
                </h2>
                <p className={styles.intro}>
                    Leveraging a unique combination of chemical engineering expertise, data analysis skills, and AI augmentation, I excel at transforming complex data into actionable insights that drive business decisions.
                </p>
                <blockquote className={styles.heroQuote}>
                    "Where engineering meets creativity, and technology transforms possibilities."
                </blockquote>
                <div className={styles.heroSocialLinks}>
                    <a href="https://github.com/rguid31" target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/rmguidry" target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.x.com/ryne_guidry" target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://medium.com/@guidry_ryan" target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                        <i className="fab fa-medium"></i>
                    </a>
                    <a href="https://unsplash.com/@ryne_guidry" target="_blank" className={styles.socialLink} rel="noopener noreferrer">
                        <i className="fab fa-unsplash"></i>
                    </a>
                </div>
                <Link href="#portfolio" passHref legacyBehavior>
                    <a className={styles.ctaButton}>
                        Explore My Portfolio
                    </a>
                </Link>
            </div>
            <div className={styles.highlights}>
                <div className={styles.highlightItem}>
                    <h3>Featured Project</h3>
                    <p>Interactive Media Portfolio</p>
                </div>
                <div className={styles.highlightItem}>
                    <h3>Latest Certification</h3>
                    <p>Google AI Essentials Certificate</p>
                </div>
            </div>
        </section>
    );
}