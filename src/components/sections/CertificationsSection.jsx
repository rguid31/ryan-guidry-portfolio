import React from 'react';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="certifications-section">
            <h2>Certifications</h2>
            <div className="certifications-container">
                <div className="cert-row">
                    <div className="certification-item">
                        <div className="cert-image-container">
                            <i className="fas fa-certificate certification-icon"></i>
                        </div>
                        <div className="cert-details">
                            <h4>Data Analytics Professional Certification</h4>
                            <p>Issued by Coursera, created by Google</p>
                        </div>
                    </div>
                    
                    <div className="certification-item">
                        <div className="cert-image-container">
                            <i className="fas fa-robot certification-icon"></i>
                        </div>
                        <div className="cert-details">
                            <h4>AI Essentials Certification</h4>
                            <p>Issued by Coursera, created by Google</p>
                        </div>
                    </div>
                </div>
                
                <div className="cert-row reversed">
                    <div className="certification-item">
                        <div className="cert-image-container">
                            <i className="fas fa-id-card certification-icon"></i>
                        </div>
                        <div className="cert-details">
                            <h4>Transportation Worker Identification Credential (TWIC)</h4>
                            <p>Issued by the Transportation Safety Administration (TSA)</p>
                        </div>
                    </div>
                    
                    <div className="certification-item">
                        <div className="cert-image-container">
                            <i className="fas fa-hard-hat certification-icon"></i>
                        </div>
                        <div className="cert-details">
                            <h4>Basic Plus Orientation (OSHA)</h4>
                            <p>Issued by the Alliance Safety Council (PMI)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 