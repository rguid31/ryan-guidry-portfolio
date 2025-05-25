import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout';

export default function InteractiveMediaProject() {
    return (
        <Layout>
            <Head>
                <title>Interactive Media Portfolio - Ryan Guidry</title>
                <meta name="description" content="Case study of an interactive media portfolio project showcasing web development and design skills" />
            </Head>

            <main className="project-page">
                <div className="project-header">
                    <Link href="/#portfolio" className="back-link">
                        <i className="fas fa-arrow-left"></i> Back to Portfolio
                    </Link>
                    <h1>Interactive Media Portfolio</h1>
                    <div className="project-meta">
                        <span><i className="fas fa-calendar"></i> 2024</span>
                        <span><i className="fas fa-tag"></i> Web Development</span>
                    </div>
                </div>

                <div className="project-content">
                    <img 
                        src="/images/projects/interactive-media.png"
                        alt="Interactive Media Portfolio Project"
                        className="project-hero-image"
                        width="1200"
                        height="675"
                    />

                    <div className="project-section">
                        <h2>Project Overview</h2>
                        <p>A dynamic portfolio website that showcases creative work through an intuitive and engaging user interface. Built with modern web technologies and optimized for performance and user experience.</p>
                    </div>

                    <div className="project-section">
                        <h2>Key Features</h2>
                        <ul>
                            <li>Responsive design that adapts to all screen sizes</li>
                            <li>Dynamic content loading for optimal performance</li>
                            <li>Interactive galleries and project showcases</li>
                            <li>Integrated contact forms and social media links</li>
                            <li>SEO optimization and accessibility features</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h2>Technologies Used</h2>
                        <div className="tech-stack">
                            <span>Next.js</span>
                            <span>React</span>
                            <span>CSS3</span>
                            <span>JavaScript</span>
                            <span>Responsive Design</span>
                            <span>Git</span>
                        </div>
                    </div>

                    <div className="project-section">
                        <h2>Development Process</h2>
                        <p>The development process followed an iterative approach:</p>
                        <ol>
                            <li>Initial planning and wireframing</li>
                            <li>Design system creation</li>
                            <li>Component development</li>
                            <li>Content integration</li>
                            <li>Performance optimization</li>
                            <li>Testing and refinement</li>
                        </ol>
                    </div>

                    <div className="project-section">
                        <h2>Challenges & Solutions</h2>
                        <p>Key challenges included optimizing image loading for performance, implementing smooth transitions, and ensuring cross-browser compatibility. These were addressed through:</p>
                        <ul>
                            <li>Implementation of lazy loading and image optimization</li>
                            <li>Custom CSS animations and transitions</li>
                            <li>Extensive browser testing and bug fixing</li>
                        </ul>
                    </div>

                    <div className="project-section">
                        <h2>Results</h2>
                        <ul>
                            <li>Improved page load times by 40%</li>
                            <li>Increased mobile user engagement by 25%</li>
                            <li>Enhanced accessibility scores to 95+</li>
                            <li>Simplified content management process</li>
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    );
} 