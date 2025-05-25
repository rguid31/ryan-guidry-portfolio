import React from 'react';

export default function PersonalityProfileSection() {
    return (
        <section id="personality-profile">
            <h2>My Personality Profile</h2>
            
            <div className="visualization-container">
                {/* SVG Personality Wheel */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <circle cx="250" cy="250" r="200" fill="#f0f0f0" stroke="#ccc" strokeWidth="1"/>
                    <path d="M250,50 A200,200 0 0,1 450,250" fill="#4A89DC" stroke="none"/>
                    <path d="M250,50 A200,200 0 0,0 50,250" fill="#E9573F" stroke="none"/>
                    <circle cx="250" cy="250" r="50" fill="white" stroke="#ccc" strokeWidth="1"/>
                    <text x="250" y="260" textAnchor="middle" fill="#333" fontWeight="bold">64% Blue</text>
                </svg>
            </div>
            
            <div className="profile-description">
                <p>Based on my Insights Discovery profile, I'm classified as a "Reforming Observer" with dominant blue (64%) and red (60%) energy. This means I combine analytical thinking with task-focused execution to deliver thorough, well-considered solutions.</p>
            </div>
        </section>
    );
} 