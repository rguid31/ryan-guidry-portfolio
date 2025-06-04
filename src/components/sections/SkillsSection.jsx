import React from 'react';
import styles from './SkillsSection.module.css';

export default function SkillsSection() {
    return (
        <section id="skills" className={styles.skillsSectionContainer}>
            <h2>Skills & Expertise</h2>
            <div className={styles.skillsGrid}>
                {/* Frontend Technologies */}
                <div className={styles.skillCard}> {/* Removed skill-web, skill-data etc. as they were not in CSS */}
                    <i className="fas fa-code"></i>
                    <h3>Frontend</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>HTML5 & CSS3</li>
                        <li className={styles.skillItem}>JavaScript (ES6+)</li>
                        <li className={styles.skillItem}>React.js</li>
                        <li className={styles.skillItem}>Responsive Design</li>
                        <li className={styles.skillItem}>CSS Frameworks</li>
                    </ul>
                </div>
                
                {/* Backend Technologies */}
                <div className={styles.skillCard}>
                    <i className="fas fa-server"></i>
                    <h3>Backend</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Node.js</li>
                        <li className={styles.skillItem}>Express.js</li>
                        <li className={styles.skillItem}>Python</li>
                        <li className={styles.skillItem}>RESTful APIs</li>
                        <li className={styles.skillItem}>Server Architecture</li>
                    </ul>
                </div>
                
                {/* Frameworks & Libraries */}
                <div className={styles.skillCard}>
                    <i className="fas fa-layer-group"></i>
                    <h3>Frameworks</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Next.js</li>
                        <li className={styles.skillItem}>Tailwind CSS</li>
                        <li className={styles.skillItem}>Bootstrap</li>
                        <li className={styles.skillItem}>Material UI</li>
                        <li className={styles.skillItem}>jQuery</li>
                    </ul>
                </div>
                
                {/* Databases */}
                <div className={styles.skillCard}>
                    <i className="fas fa-database"></i>
                    <h3>Databases</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>MongoDB</li>
                        <li className={styles.skillItem}>MySQL</li>
                        <li className={styles.skillItem}>PostgreSQL</li>
                        <li className={styles.skillItem}>Firebase</li>
                        <li className={styles.skillItem}>SQL</li>
                    </ul>
                </div>
                
                {/* Development Tools */}
                <div className={styles.skillCard}>
                    <i className="fas fa-tools"></i>
                    <h3>Dev Tools</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Git & GitHub</li>
                        <li className={styles.skillItem}>VS Code</li>
                        <li className={styles.skillItem}>Chrome DevTools</li>
                        <li className={styles.skillItem}>NPM/Yarn</li>
                        <li className={styles.skillItem}>Cursor</li>
                    </ul>
                </div>
                
                {/* Design & UI/UX */}
                <div className={styles.skillCard}>
                    <i className="fas fa-paint-brush"></i>
                    <h3>Design & UI/UX</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Figma</li>
                        <li className={styles.skillItem}>Adobe Photoshop</li>
                        <li className={styles.skillItem}>User Experience</li>
                        <li className={styles.skillItem}>Canva</li>
                        <li className={styles.skillItem}>Responsive Layouts</li>
                    </ul>
                </div>
                
                {/* Deployment & DevOps */}
                <div className={styles.skillCard}>
                    <i className="fas fa-rocket"></i>
                    <h3>Deployment</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Vercel</li>
                        <li className={styles.skillItem}>Netlify</li>
                        <li className={styles.skillItem}>Heroku</li>
                        <li className={styles.skillItem}>AWS (Basics)</li>
                        <li className={styles.skillItem}>CI/CD Pipelines</li>
                    </ul>
                </div>
                
                {/* Testing & QA */}
                <div className={styles.skillCard}>
                    <i className="fas fa-vial"></i>
                    <h3>Testing</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Jest</li>
                        <li className={styles.skillItem}>React Testing Library</li>
                        <li className={styles.skillItem}>Unit Testing</li>
                        <li className={styles.skillItem}>Integration Testing</li>
                        <li className={styles.skillItem}>Debugging</li>
                    </ul>
                </div>
                
                {/* Performance & Optimization */}
                <div className={styles.skillCard}>
                    <i className="fas fa-tachometer-alt"></i>
                    <h3>Performance</h3>
                    <ul className={styles.skillsList}>
                        <li className={styles.skillItem}>Web Vitals</li>
                        <li className={styles.skillItem}>Image Optimization</li>
                        <li className={styles.skillItem}>Lazy Loading</li>
                        <li className={styles.skillItem}>Caching Strategies</li>
                        <li className={styles.skillItem}>SEO Best Practices</li>
                    </ul>
                </div>
            </div>
        </section>
    );
} 