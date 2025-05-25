import React from 'react';
import Link from 'next/link';

export default function PortfolioSection() {
    return (
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
    );
} 