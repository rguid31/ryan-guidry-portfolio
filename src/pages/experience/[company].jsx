import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../../styles/ExperienceDetail.module.css';

// Import experience data
import { experienceItems } from '../../data/experienceData';

export default function ExperienceDetail() {
    const router = useRouter();
    const { company } = router.query;

    // Find the experience item that matches the company slug
    const experience = experienceItems.find(
        item => item.company.toLowerCase().replace(/\s+/g, '-') === company
    );

    if (!experience) {
        return <div>Experience not found</div>;
    }

    return (
        <div className={styles.experienceDetail}>
            <div className={styles.header}>
                <button 
                    className={styles.backButton}
                    onClick={() => router.back()}
                >
                    ← Back to Experience
                </button>
                <div className={styles.companyHeader}>
                    <img 
                        src={experience.logo} 
                        alt={`${experience.company} Logo`} 
                        className={styles.companyLogo}
                    />
                    <div className={styles.companyInfo}>
                        <h1>{experience.company}</h1>
                        <h2>{experience.title}</h2>
                        <p className={styles.location}>{experience.location}</p>
                        <p className={styles.date}>{experience.date}</p>
                    </div>
                </div>
            </div>

            <div className={styles.content}>
                <section className={styles.description}>
                    <h3>Role & Responsibilities</h3>
                    <ul>
                        {experience.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </section>

                {experience.projects && (
                    <section className={styles.projects}>
                        <h3>Key Projects</h3>
                        <div className={styles.projectGrid}>
                            {experience.projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    {project.image && (
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className={styles.projectImage}
                                        />
                                    )}
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {experience.skills && (
                    <section className={styles.skills}>
                        <h3>Skills Developed</h3>
                        <div className={styles.skillTags}>
                            {experience.skills.map((skill, index) => (
                                <span key={index} className={styles.skillTag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
} 