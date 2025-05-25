import React from 'react';
import Link from 'next/link';

export default function AboutSection() {
    return (
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
        </section>
    );
} 