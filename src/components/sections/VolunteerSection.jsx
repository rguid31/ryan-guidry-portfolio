import React from 'react';

export default function VolunteerSection() {
    return (
        <section id="volunteer" className="volunteer-section">
            <h2>Volunteer Work</h2>
            <div className="experience-grid">
                <div className="experience-item">
                    <div className="company-logo">
                        <img src="/images/work-logos/landoni.png" alt="LANDONi Music Logo" />
                    </div>
                    <div className="job-details">
                        <h3>Director of Social Media Marketing</h3>
                        <p>LANDONi Music</p>
                        <p>New Orleans, LA</p>
                        <p>Mar 2020 – Mar 2022</p>
                        <ul>
                            <li>Developed creative and engaging promotional content using Canva and Figma for social media platforms, content sharing sites, music streaming services, and designed an interactive media portfolio website to maintain client's online presence.</li>
                            <li>Established an online presence for the LANDONi Music brand by overseeing music streaming and social media platforms, tracking online analytics to verify audience engagement, editing media, and creating content for social media posts and post scheduling, designing album artwork, heading merchandise sales, and booking live events and shows.</li>
                            <li>Organized a fundraising event by designing and producing custom logo COVID-19 masks, which were then sold to increase brand awareness; profit from mask sales was directly donated to Direct Relief humanitarian aid organization to provide relief efforts to COVID-19 patients.</li>
                        </ul>
                    </div>
                </div>

                <div className="experience-item">
                    <div className="company-logo">
                        <img src="/images/work-logos/google.png" alt="Google Local Guide Logo" />
                    </div>
                    <div className="job-details">
                        <h3>Local Guide Level 5</h3>
                        <p>Google</p>
                        <p>Remote</p>
                        <p>Mar 2020 – Present</p>
                        <ul>
                            <li>Actively contributed to the Google Local Guide program, attaining Level 5 status by providing comprehensive reviews, photos, and updates on local businesses, enhancing the user experience on Google Maps.</li>
                            <li>Leveraged in-depth local knowledge to consistently contribute high-quality content as a Level 5 Google Local Guide, resulting in improved accuracy and discoverability of local establishments on Google Maps.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
} 