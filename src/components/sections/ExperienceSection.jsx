import React from 'react';
import { useRouter } from 'next/router';
import styles from '../ExperienceSection.module.css';
import ExperienceTiles from '../ExperienceTiles';
import { experienceItems } from '../../data/experienceData';

export default function ExperienceSection() {
  const router = useRouter();

  const handleExperienceClick = (company) => {
    const slug = company.toLowerCase().replace(/\s+/g, '-');
    router.push(`/experience/${slug}`);
  };

  return (
    <section id="experience" className={styles.experienceSection}>
      <h2>Professional Experience</h2>

      <div className={styles.resumeButtonContainer}>
        <a
          href="/files/ryan-guidry-resume.pdf"
          download
          className={styles.resumeButton}
        >
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>

      <div className={styles.experienceGrid}>
        {experienceItems.map((item, index) => (
          <div
            key={index}
            className={styles.experienceCard}
            onClick={() => handleExperienceClick(item.company)}
          >
            <div className={styles.logoContainer}>
              <img
                src={item.logo}
                alt={`${item.company} Logo`}
                className={styles.companyLogo}
              />
            </div>
            <div className={styles.cardOverlay}>
              <h3>{item.company}</h3>
              <p>{item.title}</p>
              <p>{item.date}</p>
            </div>
          </div>
        ))}
      </div>

      <ExperienceTiles />
    </section>
  );
}