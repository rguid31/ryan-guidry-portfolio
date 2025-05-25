import React from 'react';

export default function SkillsSection() {
    return (
        <section id="skills">
            <h2>Skills & Expertise</h2>
            <div className="skills-grid">
                {/* Frontend Technologies */}
                <div className="skill-card skill-web">
                    <i className="fas fa-code"></i>
                    <h3>Frontend</h3>
                    <ul className="skills-list">
                        <li className="skill-item">HTML5 & CSS3</li>
                        <li className="skill-item">JavaScript (ES6+)</li>
                        <li className="skill-item">React.js</li>
                        <li className="skill-item">Responsive Design</li>
                        <li className="skill-item">CSS Frameworks</li>
                    </ul>
                </div>
                
                {/* Backend Technologies */}
                <div className="skill-card skill-data">
                    <i className="fas fa-server"></i>
                    <h3>Backend</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Node.js</li>
                        <li className="skill-item">Express.js</li>
                        <li className="skill-item">Python</li>
                        <li className="skill-item">RESTful APIs</li>
                        <li className="skill-item">Server Architecture</li>
                    </ul>
                </div>
                
                {/* Frameworks & Libraries */}
                <div className="skill-card skill-technical">
                    <i className="fas fa-layer-group"></i>
                    <h3>Frameworks</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Next.js</li>
                        <li className="skill-item">Tailwind CSS</li>
                        <li className="skill-item">Bootstrap</li>
                        <li className="skill-item">Material UI</li>
                        <li className="skill-item">jQuery</li>
                    </ul>
                </div>
                
                {/* Databases */}
                <div className="skill-card skill-data">
                    <i className="fas fa-database"></i>
                    <h3>Databases</h3>
                    <ul className="skills-list">
                        <li className="skill-item">MongoDB</li>
                        <li className="skill-item">MySQL</li>
                        <li className="skill-item">PostgreSQL</li>
                        <li className="skill-item">Firebase</li>
                        <li className="skill-item">SQL</li>
                    </ul>
                </div>
                
                {/* Development Tools */}
                <div className="skill-card skill-technical">
                    <i className="fas fa-tools"></i>
                    <h3>Dev Tools</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Git & GitHub</li>
                        <li className="skill-item">VS Code</li>
                        <li className="skill-item">Chrome DevTools</li>
                        <li className="skill-item">NPM/Yarn</li>
                        <li className="skill-item">Cursor</li>
                    </ul>
                </div>
                
                {/* Design & UI/UX */}
                <div className="skill-card skill-design">
                    <i className="fas fa-paint-brush"></i>
                    <h3>Design & UI/UX</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Figma</li>
                        <li className="skill-item">Adobe Photoshop</li>
                        <li className="skill-item">User Experience</li>
                        <li className="skill-item">Canva</li>
                        <li className="skill-item">Responsive Layouts</li>
                    </ul>
                </div>
                
                {/* Deployment & DevOps */}
                <div className="skill-card skill-engineering">
                    <i className="fas fa-rocket"></i>
                    <h3>Deployment</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Vercel</li>
                        <li className="skill-item">Netlify</li>
                        <li className="skill-item">Heroku</li>
                        <li className="skill-item">AWS (Basics)</li>
                        <li className="skill-item">CI/CD Pipelines</li>
                    </ul>
                </div>
                
                {/* Testing & QA */}
                <div className="skill-card skill-technical">
                    <i className="fas fa-vial"></i>
                    <h3>Testing</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Jest</li>
                        <li className="skill-item">React Testing Library</li>
                        <li className="skill-item">Unit Testing</li>
                        <li className="skill-item">Integration Testing</li>
                        <li className="skill-item">Debugging</li>
                    </ul>
                </div>
                
                {/* Performance & Optimization */}
                <div className="skill-card skill-web">
                    <i className="fas fa-tachometer-alt"></i>
                    <h3>Performance</h3>
                    <ul className="skills-list">
                        <li className="skill-item">Web Vitals</li>
                        <li className="skill-item">Image Optimization</li>
                        <li className="skill-item">Lazy Loading</li>
                        <li className="skill-item">Caching Strategies</li>
                        <li className="skill-item">SEO Best Practices</li>
                    </ul>
                </div>
            </div>
        </section>
    );
} 