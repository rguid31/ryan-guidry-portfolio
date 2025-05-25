import React from 'react';

export default function EducationSection() {
    return (
        <section id="education" className="education-section">
            <h2>Education</h2>
            <div className="education-timeline">
                <div className="education-item">
                    <div className="education-image-container">
                        <img src="/images/education/lsu.png" alt="LSU" className="education-image" />
                    </div>
                    <div className="education-details">
                        <div className="education-dot"></div>
                        <div className="education-date">2014 - 2023</div>
                        <div className="education-content">
                            <h3>Bachelor of Science in Chemical Engineering (Incomplete - 8 credits remaining)</h3>
                            <p>Louisiana State University, Baton Rouge, LA</p>
                        </div>
                    </div>
                </div>

                <div className="education-item future">
                    <div className="education-image-container">
                        <img src="/images/education/lsu.png" alt="LSU A&M" className="education-image" />
                    </div>
                    <div className="education-details">
                        <div className="education-dot"></div>
                        <div className="education-date">Fall 2025 - Spring 2027</div>
                        <div className="education-content">
                            <h3>Bachelor of Science in Mathematics (Planned)</h3>
                            <p>Secondary Discipline in Engineering</p>
                            <p>Louisiana State University A&M, Baton Rouge, LA</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 