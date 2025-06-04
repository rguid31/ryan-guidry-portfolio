import React from 'react';
import styles from './CertificationsSection.module.css';

export default function CertificationsSection() {
    return (
        <section id="certifications" className={styles.certificationsSection}>
            <h2>Certifications</h2>
            <div className={styles.certificationsContainer}>
                <div className={styles.certRow}>
                    <div className={styles.certificationItem}>
                        <div className={styles.certImageContainer}>
                            <i className={`fas fa-certificate ${styles.certificationIcon}`}></i>
                        </div>
                        <div className={styles.certDetails}>
                            <h4>Data Analytics Professional Certification</h4>
                            <p>Issued by Coursera, created by Google</p>
                        </div>
                    </div>
                    
                    <div className={styles.certificationItem}>
                        <div className={styles.certImageContainer}>
                            <i className={`fas fa-robot ${styles.certificationIcon}`}></i>
                        </div>
                        <div className={styles.certDetails}>
                            <h4>AI Essentials Certification</h4>
                            <p>Issued by Coursera, created by Google</p>
                        </div>
                    </div>
                </div>
                
                <div className={`${styles.certRow} ${styles.reversed}`}>
                    <div className={styles.certificationItem}>
                        <div className={styles.certImageContainer}>
                            <i className={`fas fa-id-card ${styles.certificationIcon}`}></i>
                        </div>
                        <div className={styles.certDetails}>
                            <h4>Transportation Worker Identification Credential (TWIC)</h4>
                            <p>Issued by the Transportation Safety Administration (TSA)</p>
                        </div>
                    </div>
                    
                    <div className={styles.certificationItem}>
                        <div className={styles.certImageContainer}>
                            <i className={`fas fa-hard-hat ${styles.certificationIcon}`}></i>
                        </div>
                        <div className={styles.certDetails}>
                            <h4>Basic Plus Orientation (OSHA)</h4>
                            <p>Issued by the Alliance Safety Council (PMI)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 