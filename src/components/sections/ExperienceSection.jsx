import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../../styles/ExperienceSection.module.css';
import ExperienceTiles from './ExperienceTiles';

export default function ExperienceSection() {
    const router = useRouter();
    const experienceItems = [
        {
            company: "Outlier AI",
            logo: "/images/work-logos/outlier-ai.png",
            title: "AI Math Specialist",
            location: "Baton Rouge, LA",
            date: "Jun 2024 – Present",
            description: [
                "Generated training data to improve model performance across various projects, ensuring alignment with discipline standards.",
                "Conducted evaluations on AI model responses to refine accuracy, establishing a robust feedback loop for continual enhancement.",
                "Facilitated user engagement through data-driven insights, significantly improving the relationship between users and their data."
            ]
        },
        {
            company: "Tracerco",
            logo: "/images/work-logos/tracerco.png",
            title: "Field Technician",
            location: "Baton Rouge, LA",
            date: "Apr 2024 – May 2024",
            description: [
                "Acted as a subject matter expert in scanning and instrumentation technologies, optimizing operational procedures for maximum efficiency.",
                "Forged and maintained client partnerships leading to tailored solutions that enhanced productivity across diverse sectors."
            ]
        },
        {
            company: "American Commercial Barge Line (ACBL)",
            logo: "/images/work-logos/acbl.png",
            title: "Safety and Training Coordinator",
            location: "Harahan, LA",
            date: "Oct 2023 – Mar 2024",
            description: [
                "Pioneered a proactive culture surrounding safety initiatives, resulting in improved compliance ratings and lower incident rates.",
                "Designed and delivered engaging safety training programs, fostering a culture of safety awareness and engagement among employees.",
                "Executed detailed risk assessments and strategic hazard mitigation plans, enhancing workplace safety across operational processes."
            ]
        },
        {
            company: "Emerson Automation Solutions",
            logo: "/images/work-logos/emerson.png",
            title: "Intern, Application Engineer",
            location: "Baton Rouge, LA",
            date: "Jun 2022 – Aug 2022",
            description: [
                "Implemented the AgileOps software suite on customer systems, optimizing operational workflows and enhancing efficiency.",
                "Led initiative to automate Windows updates across 1200 virtual machines, streamlining enforcement of security measures and reducing manual labor.",
                "Developed Excel macros to enhance user experience by refining usability, directly influencing operational efficiency in customer consultations."
            ]
        },
        {
            company: "TotalEnergies",
            logo: "/images/work-logos/total.png",
            title: "Intern, Project Development Engineer",
            location: "Port Arthur, TX",
            date: "Jun 2021 – Aug 2021",
            description: [
                "Directed pre-FEED planning to optimize processing capabilities within a condensate splitter unit, facilitating efficient project transitions into future phases.",
                "Conducted extensive feasibility studies to enhance existing operational frameworks, ultimately improving equipment reliability and performance.",
                "Modelled complex piping systems using industry-specific software, providing critical insights for engineering decisions."
            ]
        },
        {
            company: "Nalco Champion",
            logo: "/images/work-logos/nalco.png",
            title: "Intern, Engineering Technical Sales",
            location: "Houston, TX",
            date: "May 2018 - Aug 2018",
            description: [
                "Streamlined manufacturing processes, increasing efficiency by 20%.",
                "Conducted root cause analysis to resolve production issues effectively.",
                "Implemented cost-saving measures, reducing operational expenses by $50,000 annually."
            ]
        },
        {
            company: "DWL Technology",
            logo: "/images/dwl-logo.png",
            title: "Intern, Industrial Engineering Sales",
            location: "New Orleans, LA",
            date: "Aug 2019 - Sept 2019",
            description: [
                "Assisted in developing and implementing sales strategies for industrial engineering solutions",
                "Conducted market research and competitor analysis to identify potential business opportunities",
                "Collaborated with engineering team to understand technical specifications of products",
                "Created and delivered presentations to potential clients",
                "Maintained CRM database and generated sales reports",
                "Participated in client meetings and site visits"
            ]
        },
        {
            company: "Cornerstone Chemical Company",
            logo: "/images/work-logos/cornerstone.png",
            title: "Process Engineering Intern",
            location: "Westwego, LA",
            date: "Dec 2017 - Jan 2018",
            description: [
                "Utilized Pi ProcessBook and Pi Datalink to analyze plant data on acid neutralization and production costs",
                "Verified P&IDs with lead process engineer to understand combustion reactor symbology",
                "Examined industrial turbines and compressors to learn equipment failure mechanisms",
                "Developed skills in data analysis, process engineering, and equipment troubleshooting"
            ]
        },
        {
            company: "New Orleans Original Daiquiris",
            logo: "/images/work-logos/daiquiris.png",
            title: "Bartender",
            location: "Baton Rouge, LA",
            date: "Jul 2017 - Sep 2017",
            description: [
                "Developed customer business relations through effective social interaction and assurance of customer satisfaction in a fast-paced environment",
                "Exhibited time management skills and a strong work ethic through school & work-life balance"
            ]
        },
        {
            company: "Georgia-Pacific LLC",
            logo: "/images/work-logos/gp.png",
            title: "Intern, Chemical Sales Engineer",
            location: "New York, Pennsylvania and New Jersey",
            date: "May 2016 - Jan 2017",
            description: [
                "Conducted wet-end tests and optimized chemical additive injection rates to meet product benchmarks and minimize production costs",
                "Performed pulp receptivity studies on recycled furnishes to determine wet strength resin impact",
                "Created PFDs of paper making process at various mills for optimal injection location",
                "Participated in chemical trials to gain service of customer facilities by completing wet-end testing on pulp samples",
                "Analyzed system charge, pH, conductivity, and turbidity measurements to optimize chemical processes"
            ]
        },
        {
            company: "Home Servicing, LLC",
            logo: "/images/work-logos/home-servicing.png",
            title: "Mortgage Lender",
            location: "Baton Rouge, LA",
            date: "May 2015 - Aug 2015",
            description: [
                "Communicated with homeowners and agents regarding property taxes, insurance payments and mortgages on various properties around the country",
                "Organized and filed paperwork and documents into the computer database as well as into the physical file library, ensuring customer information was easily accessible by staff",
                "Acquired necessary customer information regarding property ownership and taxes through the use of Service Director and Citrix computer programs",
                "Also worked during LSU winter break 2014"
            ]
        },
        {
            company: "St. Charles Parish Public Schools",
            logo: "/images/work-logos/scpps.png",
            title: "Computer Technician",
            location: "Destrehan, LA",
            date: "May 2014 - Aug 2014",
            description: [
                "Deployed and optimized school technology infrastructure by efficiently installing and configuring computers, peripherals, and software across classrooms and offices",
                "Ensured uninterrupted learning through proactive IT support by providing timely troubleshooting and resolution of hardware, software, and network issues",
                "Streamlined school identification process by developing and implementing an efficient photo identification system",
                "Also worked during summer break of 2013"
            ]
        }
    ];

    const handleExperienceClick = (company) => {
        router.push(`/experience/${company.toLowerCase().replace(/\s+/g, '-')}`);
    };

    return (
        <section id="experience" className={styles.experienceSection}>
            <h2>Professional Experience</h2>
            
            <div className={styles.resumeButtonContainer}>
                <a href="/files/ryan-guidry-resume.pdf" download className={styles.resumeButton}>
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