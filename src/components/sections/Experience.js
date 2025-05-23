import React from 'react';
import ExperienceTiles from './ExperienceTiles';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
        <h2>Professional Experience</h2>
        
        {/* Add the Download Resume button */}
        <div className="resume-button-container">
            <a href="/files/ryan-guidry-resume.pdf" download className="resume-button">
                <i className="fas fa-download"></i> Download Resume
            </a>
        </div>
        
        <div className="experience-grid">
            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/outlier-ai.png" alt="Outlier AI Logo" />
                </div>
                <div className="job-details">
                    <h3>AI Math Specialist</h3>
                    <p>Outlier AI</p>
                    <p>Baton Rouge, Louisiana</p>
                    <p>Jun 2024 – Present</p>
                    <ul>
                        <li>Generated training data to improve model performance across various projects, ensuring alignment with discipline standards.</li>
                        <li>Conducted evaluations on AI model responses to refine accuracy, establishing a robust feedback loop for continual enhancement.</li>
                        <li>Facilitated user engagement through data-driven insights, significantly improving the relationship between users and their data.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/tracerco.png" alt="Tracerco Logo" />
                </div>
                <div className="job-details">
                    <h3>Field Technician</h3>
                    <p>Tracerco</p>
                    <p>Baton Rouge, Louisiana</p>
                    <p>Apr 2024 – May 2024</p>
                    <ul>
                        <li>Acted as a subject matter expert in scanning and instrumentation technologies, optimizing operational procedures for maximum efficiency.</li>
                        <li>Forged and maintained client partnerships leading to tailored solutions that enhanced productivity across diverse sectors.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/acbl.png" alt="ACBL Logo" />
                </div>
                <div className="job-details">
                    <h3>Safety and Training Coordinator</h3>
                    <p>American Commercial Barge Line (ACBL)</p>
                    <p>Harahan, Louisiana</p>
                    <p>Oct 2023 – Mar 2024</p>
                    <ul>
                        <li>Pioneered a proactive culture surrounding safety initiatives, resulting in improved compliance ratings and lower incident rates.</li>
                        <li>Designed and delivered engaging safety training programs, fostering a culture of safety awareness and engagement among employees.</li>
                        <li>Executed detailed risk assessments and strategic hazard mitigation plans, enhancing workplace safety across operational processes.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/emerson.png" alt="Emerson Logo" />
                </div>
                <div className="job-details">
                    <h3>Intern, Application Engineer</h3>
                    <p>Emerson Automation Solutions</p>
                    <p>Baton Rouge, Louisiana</p>
                    <p>Jun 2022 – Aug 2022</p>
                    <ul>
                        <li>Implemented the AgileOps software suite on customer systems, optimizing operational workflows and enhancing efficiency.</li>
                        <li>Led initiative to automate Windows updates across 1200 virtual machines, streamlining enforcement of security measures and reducing manual labor.</li>
                        <li>Developed Excel macros to enhance user experience by refining usability, directly influencing operational efficiency in customer consultations.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/total.png" alt="TotalEnergies Logo" />
                </div>
                <div className="job-details">
                    <h3>Intern, Project Development Engineer</h3>
                    <p>TotalEnergies</p>
                    <p>Port Arthur, Texas</p>
                    <p>Jun 2021 – Aug 2021</p>
                    <ul>
                        <li>Directed pre-FEED planning to optimize processing capabilities within a condensate splitter unit, facilitating efficient project transitions into future phases.</li>
                        <li>Conducted extensive feasibility studies to enhance existing operational frameworks, ultimately improving equipment reliability and performance.</li>
                        <li>Modelled complex piping systems using industry-specific software, providing critical insights for engineering decisions.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/google.png" alt="Google Logo" />
                </div>
                <div className="job-details">
                    <h3>Software Engineer</h3>
                    <p>Google</p>
                    <p>Mountain View, CA</p>
                    <p>Jan 2020 - Present</p>
                    <ul>
                        <li>Developed scalable web applications, improving user engagement by 25%.</li>
                        <li>Collaborated with cross-functional teams to design and implement innovative solutions.</li>
                        <li>Optimized system performance, reducing load times by 40%.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/emerson.png" alt="Emerson Logo" />
                </div>
                <div className="job-details">
                    <h3>Data Analyst</h3>
                    <p>Emerson</p>
                    <p>Austin, TX</p>
                    <p>Jun 2018 - Dec 2019</p>
                    <ul>
                        <li>Analyzed complex datasets to uncover actionable insights, driving business decisions.</li>
                        <li>Automated reporting processes, saving 15 hours of manual work weekly.</li>
                        <li>Designed interactive dashboards to visualize key performance metrics.</li>
                    </ul>
                </div>
            </div>

            <div className="experience-item">
                <div className="company-logo">
                    <img src="/images/work-logos/nalco.png" alt="Nalco Logo" />
                </div>
                <div className="job-details">
                    <h3>Process Engineer</h3>
                    <p>Nalco</p>
                    <p>Houston, TX</p>
                    <p>Aug 2015 - May 2018</p>
                    <ul>
                        <li>Streamlined manufacturing processes, increasing efficiency by 20%.</li>
                        <li>Conducted root cause analysis to resolve production issues effectively.</li>
                        <li>Implemented cost-saving measures, reducing operational expenses by $50,000 annually.</li>
                    </ul>
                </div>
            </div>
        </div>

        <ExperienceTiles />
    </section>
  );
};

export default Experience;
