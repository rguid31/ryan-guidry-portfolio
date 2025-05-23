import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  // Basic styling for the button (can be expanded or moved to a CSS file)
  const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',
    border: '1px solid #ccc', // Example border
    borderRadius: '4px',
    backgroundColor: theme === 'light' ? '#f0f0f0' : '#444', // Example background
    color: theme === 'light' ? '#333' : '#fff', // Example text color
  };

  return (
    <button onClick={toggleTheme} style={buttonStyle} title="Toggle theme">
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      {/* 
        Alternatively, you can use icons, e.g., Font Awesome:
        {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
        Make sure Font Awesome is included in your project if you choose this.
      */}
    </button>
  );
};

export default ThemeToggleButton;
