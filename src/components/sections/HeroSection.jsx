import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
    return (
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
    );
} 