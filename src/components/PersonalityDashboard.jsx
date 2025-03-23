import React, { useState } from 'react';
import styles from './PersonalityDashboard.module.css';

const PersonalityDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Color definitions based on Insights Discovery
  const colors = {
    blue: "#3498db",
    red: "#e74c3c",
    yellow: "#f1c40f",
    green: "#2ecc71",
    purple: "#9b59b6",
    darkBlue: "#2980b9",
    darkText: "#2c3e50",
    lightGray: "#f5f5f5",
    mediumGray: "#e0e0e0"
  };
  
  // Personality data from the profile
  const profileData = {
    name: "Ryan Guidry",
    date: "05 July 2022",
    type: "Reforming Observer",
    colorDynamics: {
      blue: 64,
      red: 60,
      green: 47,
      yellow: 43
    },
    strengths: [
      "Evaluates people on their results",
      "Dependable",
      "Will find ways to work more effectively",
      "Concentrates for as long as necessary",
      "His word is his bond",
      "Analysis",
      "Logical thinker",
      "Understands underlying principles",
      "Fair mindedness in implementing systems",
      "Will work late to get the job done"
    ],
    challenges: [
      "All work and no play",
      "May appear abrupt",
      "Emphasis on 'correctness' can delay implementation",
      "Can be too self critical",
      "Sometimes becomes ineffective when strong emotions are expressed",
      "Less effective at work involving imaginative future orientation",
      "His need to assimilate information takes time",
      "Tends to lose himself in detail",
      "Has difficulty with unstructured tasks",
      "Tendency to over-analyse before acting"
    ],
    keyAttributes: {
      analytical: 90,
      taskFocused: 80,
      methodical: 85,
      detailOriented: 95,
      independent: 75,
      logical: 90,
      dependable: 85,
      precise: 90
    },
    keywordCategories: {
      analytical: ["logical", "analytical", "analysis", "precise", "detail", "methodical", "facts", "figures", "accuracy", "concentration", "principles", "objective", "data"],
      introverted: ["quiet", "reserved", "private", "independent", "calm", "introverted", "isolation", "self-contained", "introspective", "observing", "reflective"],
      taskFocused: ["task", "practical", "quality", "efficiency", "orderly", "organized", "structured", "systematic", "processes", "perfectionism", "high standards", "implementation"],
      technical: ["technical", "competence", "innovation", "ingenious", "knowledge", "original", "insight", "complex", "vision", "intellectual", "abstract", "conceptual"],
      workStyle: ["dedicated", "serious", "conscientious", "perseverance", "reliable", "loyal", "dependable", "productive", "determined", "thorough", "precise"],
      challenges: ["overanalysis", "detached", "impersonal", "perfection", "communication", "emotion", "delay", "stubborn", "unstructured", "hair-splitting", "indecisive"]
    },
    keyInsights: [
      "Ryan is primarily an analytical thinker with strong logical abilities",
      "Shows a preference for working independently and values quiet reflection",
      "Values accuracy and attention to detail in work output",
      "Has a strong focus on quality and technical excellence",
      "May need to be mindful of tendency to over-analyze before acting",
      "Values structure and organization in work environment"
    ]
  };

  // Navigation tabs
  const Tab = ({ id, label, active, onClick }) => (
    <button 
      className={`${styles.tabButton} ${active ? styles.active : ''}`}
      onClick={() => onClick(id)}
    >
      {label}
    </button>
  );

  // Overview tab content
  const OverviewSection = () => (
    <div className={`${styles.gridContainer} ${styles.grid2Col}`}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Profile Summary</h3>
        <p><span style={{fontWeight: 'bold'}}>Name:</span> {profileData.name}</p>
        <p><span style={{fontWeight: 'bold'}}>Assessment Date:</span> {profileData.date}</p>
        <p><span style={{fontWeight: 'bold'}}>Personality Type:</span> {profileData.type}</p>
        <p><span style={{fontWeight: 'bold'}}>Primary Traits:</span> Analytical, Logical, Detail-oriented, Task-focused</p>
        
        <h4 style={{fontWeight: 'bold', marginTop: '16px', marginBottom: '8px'}}>Color Dynamics</h4>
        <div className={styles.colorBarContainer}>
          {Object.entries(profileData.colorDynamics).map(([color, value]) => (
            <div key={color} style={{flex: 1, marginRight: '4px'}}>
              <div 
                className={styles.colorBar}
                style={{ 
                  backgroundColor: colors[color] || '#ccc'
                }}
              ></div>
              <div className={styles.colorLabel}>
                {color.charAt(0).toUpperCase() + color.slice(1)}: {value}%
              </div>
            </div>
          ))}
        </div>
        
        <h4 style={{fontWeight: 'bold', marginTop: '16px', marginBottom: '8px'}}>Key Insights</h4>
        <ul className={styles.listContainer}>
          {profileData.keyInsights.map((insight, index) => (
            <li key={index} className={styles.listItem}>{insight}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Personality Radar Chart</h3>
        <div className={styles.radarContainer}>
          {/* Radar background circles */}
          <div className={styles.radarBackground}>
            <div className={`${styles.radarCircle} ${styles.radarCircle80}`}></div>
            <div className={`${styles.radarCircle} ${styles.radarCircle60}`}></div>
            <div className={`${styles.radarCircle} ${styles.radarCircle40}`}></div>
            <div className={`${styles.radarCircle} ${styles.radarCircle20}`}></div>
          </div>
          
          {/* Radar axes */}
          <div className={styles.radarAxes}>
            <div className={styles.horizontalAxis}></div>
            <div className={styles.verticalAxis}></div>
            <div className={styles.diagonalAxis1}></div>
            <div className={styles.diagonalAxis2}></div>
          </div>
          
          {/* Labels */}
          <div className={styles.radarLabels}>
            <div className={`${styles.radarLabel} ${styles.labelTop}`}>Analytical (90%)</div>
            <div className={`${styles.radarLabel} ${styles.labelBottom}`}>Methodical (85%)</div>
            <div className={`${styles.radarLabel} ${styles.labelLeft}`}>Detail-Oriented (95%)</div>
            <div className={`${styles.radarLabel} ${styles.labelRight}`}>Task-Focused (80%)</div>
            <div className={`${styles.radarLabel} ${styles.labelTopRight}`}>Independent (75%)</div>
            <div className={`${styles.radarLabel} ${styles.labelTopLeft}`}>Logical (90%)</div>
            <div className={`${styles.radarLabel} ${styles.labelBottomLeft}`}>Dependable (85%)</div>
            <div className={`${styles.radarLabel} ${styles.labelBottomRight}`}>Precise (90%)</div>
          </div>
          
          {/* Data polygon */}
          <svg style={{ position: 'absolute', width: '80%', height: '80%', overflow: 'visible' }} viewBox="0 0 200 200">
            <polygon
              points="
                100,10 
                160,80 
                190,140 
                140,180 
                60,190 
                20,140 
                10,60
                50,20
              "
              fill="rgba(77, 182, 172, 0.4)"
              stroke="#4DB6AC"
              strokeWidth="2"
            />
          </svg>
          
          {/* Center label */}
          <div className={styles.centerLabel}>
            <span className={styles.centerText}>Personal</span>
            <span className={styles.centerText}>Attributes</span>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Strengths & Challenges tab content
  const StrengthsChallengesSection = () => (
    <div className={`${styles.gridContainer} ${styles.grid2Col}`}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle} style={{color: colors.green}}>Key Strengths</h3>
        <ul className={styles.listContainer}>
          {profileData.strengths.map((strength, index) => (
            <li key={index} className={styles.listItem}>{strength}</li>
          ))}
        </ul>
      </div>
      
      <div className={styles.card}>
        <h3 className={styles.cardTitle} style={{color: colors.red}}>Possible Challenges</h3>
        <ul className={styles.listContainer}>
          {profileData.challenges.map((challenge, index) => (
            <li key={index} className={styles.listItem}>{challenge}</li>
          ))}
        </ul>
      </div>
    </div>
  );
  
  // Keyword cloud section
  const KeywordCloudSection = () => {
    // Define colors for each category
    const categoryColors = {
      analytical: "#3182CE",  // Blue
      introverted: "#805AD5", // Purple
      taskFocused: "#38A169", // Green
      technical: "#DD6B20",   // Orange
      workStyle: "#D53F8C",   // Pink
      challenges: "#E53E3E"   // Red
    };
    
    // Calculate weights based on category
    const weights = {
      analytical: 5,
      introverted: 4,
      taskFocused: 4.5,
      technical: 3.8,
      workStyle: 3.2,
      challenges: 3
    };
    
    return (
      <div className={styles.card} style={{backgroundColor: colors.lightGray}}>
        <h2 style={{fontSize: '20px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px'}}>
          Insights Discovery Keyword Map
        </h2>
        
        <div className={`${styles.gridContainer} ${styles.grid3Col}`}>
          {Object.entries(profileData.keywordCategories).map(([category, keywords]) => {
            // Create a shuffled version of keywords for more organic display
            const shuffledKeywords = [...keywords].sort(() => Math.random() - 0.5);
            
            return (
              <div key={category} className={styles.keywordCategory}>
                <h3 
                  className={styles.categoryTitle}
                  style={{ color: categoryColors[category] }}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h3>
                <div className={styles.keywordCloud}>
                  {shuffledKeywords.map((keyword, index) => (
                    <span 
                      key={index}
                      className={styles.keywordTag}
                      style={{ 
                        backgroundColor: categoryColors[category],
                        fontSize: `${weights[category] * 0.2 + 0.6 + (index % 3) * 0.1}rem`,
                        opacity: 0.7 + (Math.random() * 0.3)
                      }}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={styles.keyInsights}>
          <h3 className={styles.insightsTitle}>Key Insights:</h3>
          <ul className={styles.listContainer}>
            {profileData.keyInsights.map((insight, index) => (
              <li key={index} className={styles.listItem}>{insight}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  // Personality Wheel Section
  const PersonalityWheelSection = () => (
    <div className={styles.card}>
      <h3 className={styles.cardTitle} style={{textAlign: 'center'}}>Insights Discovery Type Wheel</h3>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className={styles.wheelContainer}>
          <svg className={styles.wheelSvg} viewBox="0 0 400 400">
            {/* Main wheel background */}
            <circle cx="200" cy="200" r="180" fill="#f5f5f5" />
            
            {/* Cross lines */}
            <line x1="20" y1="200" x2="380" y2="200" stroke="#777" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="200" y1="20" x2="200" y2="380" stroke="#777" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="56" y1="56" x2="344" y2="344" stroke="#777" strokeWidth="1" strokeDasharray="5,5" />
            <line x1="344" y1="56" x2="56" y2="344" stroke="#777" strokeWidth="1" strokeDasharray="5,5" />
            
            {/* Color segments */}
            <path d="M 200 20 A 180 180 0 0 1 380 200" fill="none" stroke={colors.blue} strokeWidth="30" />
            <path d="M 20 200 A 180 180 0 0 1 200 20" fill="none" stroke={colors.purple} strokeWidth="30" />
            <path d="M 200 380 A 180 180 0 0 1 20 200" fill="none" stroke={colors.green} strokeWidth="30" />
            <path d="M 380 200 A 180 180 0 0 1 200 380" fill="none" stroke={colors.yellow} strokeWidth="30" />
            
            {/* Quadrant labels */}
            <g>
              <rect x="260" y="60" width="100" height="30" rx="15" fill="white" fillOpacity="0.9" />
              <text x="310" y="80" fontFamily="Arial" fontSize="16" fontWeight="bold" fill={colors.blue} textAnchor="middle">ANALYTICAL</text>
            </g>
            <g>
              <rect x="40" y="60" width="100" height="30" rx="15" fill="white" fillOpacity="0.9" />
              <text x="90" y="80" fontFamily="Arial" fontSize="16" fontWeight="bold" fill={colors.purple} textAnchor="middle">REFLECTIVE</text>
            </g>
            <g>
              <rect x="40" y="310" width="100" height="30" rx="15" fill="white" fillOpacity="0.9" />
              <text x="90" y="330" fontFamily="Arial" fontSize="16" fontWeight="bold" fill={colors.green} textAnchor="middle">METHODICAL</text>
            </g>
            <g>
              <rect x="260" y="310" width="100" height="30" rx="15" fill="white" fillOpacity="0.9" />
              <text x="310" y="330" fontFamily="Arial" fontSize="16" fontWeight="bold" fill={colors.yellow} textAnchor="middle">PRACTICAL</text>
            </g>
            
            {/* Position marker */}
            <circle cx="120" cy="120" r="15" fill={colors.blue} stroke={colors.red} strokeWidth="4">
              <animate attributeName="r" values="15;17;15" dur="2s" repeatCount="indefinite" />
            </circle>
            <rect x="80" y="140" width="80" height="25" rx="10" fill="white" stroke={colors.blue} strokeWidth="1" />
            <text x="120" y="157" fontFamily="Arial" fontSize="14" fontWeight="bold" fill={colors.blue} textAnchor="middle">RO</text>
            
            {/* Center */}
            <circle cx="200" cy="200" r="40" fill="white" stroke="#e0e0e0" strokeWidth="1" />
            
            {/* Legend */}
            <g>
              <rect x="250" y="120" width="130" height="100" rx="10" fill="white" stroke="#e0e0e0" strokeWidth="1" />
              <text x="315" y="140" fontFamily="Arial" fontSize="14" fontWeight="bold" fill={colors.darkText} textAnchor="middle">Your Position:</text>
              <text x="315" y="160" fontFamily="Arial" fontSize="12" fill={colors.darkText} textAnchor="middle">Reforming Observer</text>
              <text x="275" y="185" fontFamily="Arial" fontSize="12" fill={colors.blue} textAnchor="start">Blue: 64%</text>
              <text x="275" y="205" fontFamily="Arial" fontSize="12" fill={colors.red} textAnchor="start">Red: 60%</text>
              <text x="350" y="185" fontFamily="Arial" fontSize="12" fill={colors.green} textAnchor="start">Green: 47%</text>
              <text x="350" y="205" fontFamily="Arial" fontSize="12" fill={colors.yellow} textAnchor="start">Yellow: 43%</text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>{profileData.name}'s Personality Profile</h1>
        <p className={styles.dashboardSubtitle}>Insights Discovery Assessment - {profileData.date}</p>
      </div>
      
      <div className={styles.tabContainer}>
        <Tab id="overview" label="Overview" active={activeTab === 'overview'} onClick={setActiveTab} />
        <Tab id="strengths" label="Strengths & Challenges" active={activeTab === 'strengths'} onClick={setActiveTab} />
        <Tab id="keywords" label="Keyword Cloud" active={activeTab === 'keywords'} onClick={setActiveTab} />
        <Tab id="wheel" label="Personality Wheel" active={activeTab === 'wheel'} onClick={setActiveTab} />
      </div>
      
      <div className={styles.dashboardContent}>
        {activeTab === 'overview' && <OverviewSection />}
        {activeTab === 'strengths' && <StrengthsChallengesSection />}
        {activeTab === 'keywords' && <KeywordCloudSection />}
        {activeTab === 'wheel' && <PersonalityWheelSection />}
      </div>
      
      <div className={styles.footer}>
        Based on Insights Discovery Personal Profile completed on 05 July 2022
      </div>
    </div>
  );
};

export default PersonalityDashboard;