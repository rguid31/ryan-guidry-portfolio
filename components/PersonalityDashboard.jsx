import React from 'react';
import styles from './PersonalityDashboard.module.css';

const PersonalityDashboard = () => {
  return (
    <div className={styles['personality-dashboard']}>
      <div className={styles['personality-visualizations']}>
        <div className={styles['visualization-container']}>
          {/* Personality Wheel Image */}
          <div className={styles['svg-container']}>
            <img src="/images/personality/personality-wheel.svg" alt="My Personality Type Wheel" />
          </div>
          <div className={styles['visualization-caption']}>
            <h3>Personality Type Distribution</h3>
            <p>My energy distribution shows dominant blue (analytical) and red (decisive) energies, with supportive yellow (enthusiastic) and green (caring) components.</p>
          </div>
        </div>
        
        <div className={styles['visualization-container']}>
          {/* Radar Chart Image */}
          <div className={styles['svg-container']}>
            <img src="/images/personality/radar-chart.svg" alt="My Personal Attributes Radar Chart" />
          </div>
          <div className={styles['visualization-caption']}>
            <h3>Key Attributes</h3>
            <p>This radar chart illustrates my key personality attributes, showing the balance between analytical thinking, creativity, attention to detail, and interpersonal skills.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalityDashboard; 