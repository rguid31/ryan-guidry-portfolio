import React, { useState, useEffect } from 'react';
import styles from '../components/ExperienceTiles.module.css';
import { fetchProfileData } from '../lib/api';

export default function ExperienceTiles() {
  const [experience, setExperience] = useState([]);
  const [activeExperience, setActiveExperience] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchProfileData();
        if (data.professionalExperience) {
          setExperience(data.professionalExperience);
        } else {
          console.error('Professional experience data is missing from the API response.');
        }
      } catch (error) {
        console.error('Error fetching profile data:', error.message);
      }
    }
    fetchData();
  }, []);

  const handleTileClick = (id) => {
    setActiveExperience(id === activeExperience ? null : id);
  };

  const closePopup = () => {
    setActiveExperience(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains(styles.overlay)) {
      closePopup();
    }
  };

  if (!experience.length) return <p>Loading...</p>;

  return (
    <section className={styles.experienceTiles}>
      <h2>Professional Experience</h2>
      <div className={styles.tilesContainer}>
        {experience.map((exp, index) => (
          <div 
            key={index}
            className={styles.expTile}
            onClick={() => handleTileClick(exp.id)}
          >
            <div className={styles.logoContainer}>
              <img src={exp.logo} alt={`${exp.companyName} logo`} />
            </div>
            <div className={styles.companyName}>{exp.companyName}</div>
          </div>
        ))}
      </div>

      {activeExperience && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          <div className={styles.popup}>
            {experience.filter(exp => exp.id === activeExperience).map((exp, index) => (
              <div key={index} className={styles.popupContent}>
                <button className={styles.closeButton} onClick={closePopup}>×</button>
                <div className={styles.popupHeader}>
                  <div className={styles.popupLogoContainer}>
                    <img src={exp.logo} alt={`${exp.companyName} logo`} />
                  </div>
                  <div className={styles.popupTitleContainer}>
                    <h3>{exp.jobTitle}</h3>
                    <p className={styles.companyInfo}>{exp.companyName}</p>
                    <p className={styles.periodInfo}>{exp.startDate} - {exp.endDate || 'Present'} • {exp.location}</p>
                  </div>
                </div>
                <div className={styles.popupBody}>
                  <ul className={styles.description}>
                    {exp.responsibilitiesAndAchievements.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
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
}