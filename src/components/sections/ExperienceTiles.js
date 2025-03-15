import React, { useState } from 'react';
import styles from '../../../styles/ExperienceTiles.module.css';

const ExperienceTiles = () => {
  const [activeExperience, setActiveExperience] = useState(null);
  
  const experiences = [
    {
      id: 1,
      company: 'Outlier AI',
      logo: '/images/work-logos/outlier-ai.png',
      title: 'AI Math Specialist',
      period: 'Jun 2024 - Present',
      location: 'Remote',
      description: '- Contributed to the advancement of AI models in advanced mathematics by generating high-quality training data, contributing to an improvement in model accuracy.\n- Finely tuned and trained AI models to enhance their accuracy.\n- Improved the relationship between people and their data by improving the accuracy, efficiency, and user experience of data processing tasks.',
      skills: ['AI model development', 'Data analysis', 'Mathematical modeling']
    },
    // Tracerco
{
  id: 2,
  company: 'Tracerco',
  logo: '/images/work-logos/tracerco.png',
  title: 'Field Technician',
  period: 'Apr 2024 - May 2024',
  location: 'Baton Rouge, LA',
  description: '- Oversaw technical innovation as a subject matter expert in Tracerco\'s core technologies.\n- Maintained strategic client partnerships, driving the development and delivery of tailored solutions.',
  skills: ['Technical innovation', 'Client relationship management']
},

// ACBL
{
  id: 3,
  company: 'American Commercial Barge Line',
  logo: '/images/work-logos/acbl.png',
  title: 'Safety and Training Coordinator',
  period: 'Oct 2023 - Mar 2024',
  location: 'Harahan, LA',
  description: '- Designed and conducted safety training sessions for employees, emphasizing best practices and regulations.\n- Completed River Seamanship 1 training, proving proficiency in deckhand duties.\n- Fostered a culture of safety and continuous improvement through cross-functional collaboration.',
  skills: ['Safety training', 'Regulatory compliance', 'Team collaboration']
},

// Emerson
{
  id: 4,
  company: 'Emerson Automation Solutions',
  logo: '/images/work-logos/emerson.png',
  title: 'Intern, Application Engineer',
  period: 'Jun 2022 - Aug 2022',
  location: 'Baton Rouge, LA',
  description: '- Designed and implemented a scalable solution to automate Windows Server Update Service (WSUS) deployment.\n- Collaborated to identify pain points in an Excel application and implemented automated solutions.\n- Developed a streamlined process to generate detailed site information documents.',
  skills: ['Automation solutions', 'Process improvement', 'Team collaboration']
},

// TotalEnergies
{
  id: 5,
  company: 'TotalEnergies',
  logo: '/images/work-logos/total.png',
  title: 'Intern, Project Development Engineer',
  period: 'Jun 2021 - Aug 2021',
  location: 'Port Arthur, TX',
  description: '- Lead project team through front-end-loading (FEL) of $1M CapEx project on the condensate splitter unit.\n- Led pre-FEED activities, defining project scope, estimating costs, and developing execution plan.\n- Studied feasibility of improved corrosion control on CSU.',
  skills: ['Project management', 'Cost estimation', 'Process optimization']
},
// DWL Technology
{
  id: 6,
  company: 'DWL Technology',
  logo: '/images/work-logos/dwl.png',
  title: 'Intern, Industrial Equipment Sales',
  period: 'May 2019 - Sep 2019',
  location: 'Walker, LA',
  description: '- Inventoried and organized surplus industrial parts and laboratory glassware.\n- Created an e-commerce sales presence with over two hundred sales transactions.\n- Monitored online sales metrics to improve overall sales performance.',
  skills: ['Inventory management', 'E-commerce sales', 'Sales performance analysis']
},
    {
      id: 7,
      company: 'Nalco Champion',
      logo: '/images/work-logos/nalco.png',
      title: 'Intern, Technical Sales Engineer',
      period: 'May 2018 - Aug 2018',
      location: 'Lafayette, LA',
      description: '- Conducted regular surveys of oil field well heads and upstream equipment.\n- Streamlined pipeline corrosion monitoring practices using AccuCount technology.\n- Introduced standardized process for field engineers to collect and correlate data.',
      skills: ['Chemical inventory management', 'Process optimization', 'Pipeline integrity analysis']
    },
    {
      id: 8,
      company: 'Cornerstone Chemical Company',
      logo: '/images/work-logos/cornerstone.png',
      title: 'Intern, Process Engineer',
      period: 'Dec 2017 - Jan 2018',
      location: 'Waggaman, LA',
      description: '- Utilized Pi ProcessBook and Pi Datalink to determine risks of acid over-neutralization.\n- Verified the accuracy of P&IDs surrounding a combustion reactor.\n- Studied industrial turbines and compressors to understand functionality and failure modes.',
      skills: ['Process analysis', 'Risk assessment', 'P&ID verification']
    },
    {
      id: 9,
      company: 'New Orleans Original Daiquiris',
      logo: '/images/work-logos/nod.png',
      title: 'Bartender',
      period: 'Jun 2017 - Sep 2017',
      location: 'Baton Rouge, LA',
      description: '- Developed customer business relations through effective social interaction and assurance of customer satisfaction in a fast-paced environment.\n- Exhibited time management skills and a strong work ethic through school & work-life balance.',
      skills: ['Social interaction', 'Customer satisfaction', 'Time management', 'Work ethic']
    },
    {
      id: 10,
      company: 'Georgia-Pacific',
      logo: '/images/work-logos/gp.png',
      title: 'Intern, Paper Chemical Sales Engineer',
      period: 'May 2016 - Aug 2016 & Dec 2016',
      location: 'Saratoga Springs, NY',
      description: '- Conducted wet-end tests throughout the paper making process.\n- Performed a pulp receptivity study on fifteen recycled furnishes.\n- Designed process flow diagrams (PFDs) of the recycled paper making process.',
      skills: ['Process optimization', 'Data analysis', 'Process flow diagram design']
    },
    {
      id: 11,
      company: 'Home Servicing, LLC',
      logo: '/images/work-logos/home-servicing.png',
      title: 'Mortgage Lender',
      period: 'May 2015 - Aug 2015',
      location: 'Baton Rouge, LA',
      description: '- Communicated with homeowners and agents in reference to property taxes, insurance payments and mortgages on various properties around the country.\n- Organized and filed paperwork and documents into the computer database as well as into the physical file library for easy staff accessibility.\n- Acquired necessary customer information regarding property ownership and taxes through Service Director and Citrix computer programs.',
      skills: ['Business Relationship Management', 'Interpersonal Communication', 'Executive Support', 'Administrative Assistance', 'Compliance Management', 'Technical Support']
    },
    {
      id: 12,
      company: 'St. Charles Parish Public Schools',
      logo: '/images/work-logos/scpps.png',
      title: 'Computer Technician',
      period: 'May 2014 - Aug 2014',
      location: 'Destrehan, LA',
      description: '- Deployed and optimized school technology infrastructure: Efficiently installed and configured computers, peripherals, and software across classrooms and offices, maximizing the utilization of technology resources to enhance learning environments.\n- Ensured uninterrupted learning through proactive IT support: Provided timely troubleshooting and resolution of hardware, software, and network issues, minimizing disruptions and ensuring continuous access to essential educational tools.\n- Streamlined school identification process: Developed and implemented an efficient photo identification system, streamlining the capture and distribution of staff photos and improving overall school security and efficiency.',
      skills: ['Help Desk Support', 'Networking', 'Troubleshooting', 'Electronics', 'Organizational Agility', 'Digital Transformation', 'Technical Support', 'Problem Solving']
    }
  ];

  const handleTileClick = (id) => {
    setActiveExperience(id === activeExperience ? null : id);
  };

  const closePopup = () => {
    setActiveExperience(null);
  };

  // Close popup when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      closePopup();
    }
  };

  return (
    <section className={styles.experienceTiles}>
      
      <div className={styles.tilesContainer}>
        {experiences.map((exp) => (
          <div 
            key={exp.id}
            className={styles.expTile}
            onClick={() => handleTileClick(exp.id)}
          >
            <div className={styles.logoContainer}>
              <img src={exp.logo} alt={`${exp.company} logo`} />
            </div>
            <div className={styles.companyName}>{exp.company}</div>
          </div>
        ))}
      </div>

      {/* Expanded popup overlay */}
      {activeExperience && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.popup}>
            {experiences.filter(exp => exp.id === activeExperience).map(exp => (
              <div key={exp.id} className={styles.popupContent}>
                <button className={styles.closeButton} onClick={closePopup}>×</button>
                
                <div className={styles.popupHeader}>
                  <div className={styles.popupLogoContainer}>
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                  <div className={styles.popupTitleContainer}>
                    <h3>{exp.title}</h3>
                    <p className={styles.companyInfo}>{exp.company}</p>
                    <p className={styles.periodInfo}>{exp.period} • {exp.location}</p>
                  </div>
                </div>
                
                <div className={styles.popupBody}>
                  <p className={styles.description}>{exp.description}</p>
                  
                  <div className={styles.skillsSection}>
                    <h4>Skills</h4>
                    <div className={styles.skills}>
                      {exp.skills.map((skill, index) => (
                        <span key={index} className={styles.skillTag}>{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceTiles;