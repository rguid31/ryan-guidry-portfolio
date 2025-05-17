// Moved to src/components/common/KeywordCloudMap.jsx
import React from 'react';
import _ from 'lodash';
import styles from './KeywordCloudMap.module.css'; // We'll create this file next

const KeywordCloudMap = () => {
  // Define the main personality traits and their related keywords from the profile
  const keywordCategories = {
    analytical: ["logical", "analytical", "analysis", "precise", "detail", "methodical", "facts", "figures", "accuracy", "concentration", "principles", "objective", "data"],
    introverted: ["quiet", "reserved", "private", "independent", "calm", "introverted", "isolation", "self-contained", "introspective", "observing", "reflective"],
    taskFocused: ["task", "practical", "quality", "efficiency", "orderly", "organized", "structured", "systematic", "processes", "perfectionism", "high standards", "implementation"],
    technical: ["technical", "competence", "innovation", "ingenious", "knowledge", "original", "insight", "complex", "vision", "intellectual", "abstract", "conceptual"],
    workStyle: ["dedicated", "serious", "conscientious", "perseverance", "reliable", "loyal", "dependable", "productive", "determined", "thorough", "precise"],
    challenges: ["overanalysis", "detached", "impersonal", "perfection", "communication", "emotion", "delay", "stubborn", "unstructured", "hair-splitting", "indecisive"]
  };

  // Define colors for each category
  const categoryColors = {
    analytical: "#3182CE",  // Blue
    introverted: "#805AD5", // Purple
    taskFocused: "#38A169", // Green
    technical: "#DD6B20",   // Orange
    workStyle: "#D53F8C",   // Pink
    challenges: "#E53E3E"   // Red
  };

  // Calculate font size based on frequency of keywords in profile
  const getKeywordWeight = (category) => {
    const baseWeight = {
      analytical: 5,
      introverted: 4,
      taskFocused: 4.5,
      technical: 3.8,
      workStyle: 3.2,
      challenges: 3
    };
    
    return baseWeight[category] || 3;
  };

  // Shuffle array to create more organic layout
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Main rendering component for each category
  const KeywordCluster = ({ category, keywords, weight }) => {
    const shuffledKeywords = shuffleArray(keywords);
    
    return (
      <div className={styles.cluster}>
        <h3 className={styles.categoryTitle} style={{ color: categoryColors[category] }}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </h3>
        <div className={styles.keywordsContainer}>
          {shuffledKeywords.map((keyword, index) => (
            <span 
              key={index}
              className={styles.keyword}
              style={{ 
                backgroundColor: categoryColors[category],
                fontSize: `${weight * 0.2 + 0.6 + (index % 3) * 0.1}rem`,
                opacity: 0.7 + (Math.random() * 0.3)
              }}
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>My Personality Profile</h1>
      <h2 className={styles.subtitle}>Insights Discovery Keyword Map</h2>
      
      <div className={styles.grid}>
        {Object.entries(keywordCategories).map(([category, keywords]) => (
          <KeywordCluster 
            key={category}
            category={category}
            keywords={keywords}
            weight={getKeywordWeight(category)}
          />
        ))}
      </div>
      
      <div className={styles.insights}>
        <h3 className={styles.insightsTitle}>Key Insights:</h3>
        <ul className={styles.insightsList}>
          <li>I am primarily an <b>analytical thinker</b> with strong logical abilities</li>
          <li>I prefer <b>working independently</b> and value quiet reflection</li>
          <li>I value <b>accuracy and attention to detail</b> in my work output</li>
          <li>I maintain a strong focus on <b>quality and technical excellence</b></li>
          <li>I am mindful of my tendency to <b>over-analyze</b> before acting</li>
          <li>I thrive in environments with <b>structure and organization</b></li>
        </ul>
      </div>
      
      <div className={styles.footer}>
        Based on Insights Discovery Personal Profile (Completed 05 July 2022)
      </div>
    </div>
  );
};

export default KeywordCloudMap;