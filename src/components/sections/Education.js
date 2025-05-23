import React from 'react';

const Education = () => {
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
                        <h3>Bachelor of Science in Chemical Engineering (Incomplete - 8 credits remaining) </h3>
                        <p>Louisiana State University, Baton Rouge, LA</p>
                    </div>
                </div>
            </div>
            
            {/* Add more education items */}
        </div>
    </section>
  );
};

export default Education;
