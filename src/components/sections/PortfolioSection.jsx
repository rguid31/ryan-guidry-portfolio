import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './PortfolioSection.module.css';

const projects = [
	{
		href: '/projects/interactive-media',
		img: '/images/projects/interactive-media.png',
		alt: 'Interactive Media Portfolio Project',
		title: 'Interactive Media Portfolio',
		description:
			'Designed and developed a dynamic portfolio website that showcases my skills in full-stack web development, data analytics, and data visualization. Built with modern web technologies and optimized for performance and user experience.',
	},
	{
		href: '/projects/data-analytics',
		img: '/images/projects/data-analytics.png',
		alt: 'Data Analytics Dashboard',
		title: 'Data Analytics Dashboard',
		description:
			'Created an interactive dashboard for visualizing complex datasets, featuring real-time updates, customizable charts, and automated reporting capabilities. Built with Python, SQL, and modern visualization libraries.',
	},
	{
		href: '/projects/automation-tools',
		img: '/images/projects/automation.png',
		alt: 'Process Automation Tools',
		title: 'Process Automation Tools',
		description:
			'Developed a suite of automation tools for streamlining industrial processes, including data collection, analysis, and reporting. Implemented using Python and industry-standard automation frameworks.',
	},
];

export default function PortfolioSection() {
	return (
		<section id="portfolio" className={styles.portfolioSection}>
			<h2 className={styles.heading}>Portfolio</h2>
			<div className={styles.projectGrid}>
				{projects.map((project, idx) => (
					<Link href={project.href} key={idx} passHref legacyBehavior>
						<a className={styles.projectCard}>
							<Image
								src={project.img}
								alt={project.alt}
								width={800}
								height={450}
								className={styles.projectImage}
								loading="lazy"
							/>
							<h3 className={styles.projectTitle}>{project.title}</h3>
							<p className={styles.projectDescription}>{project.description}</p>
							<span className={styles.viewProject}>
								View Project <i className="fas fa-arrow-right"></i>
							</span>
						</a>
					</Link>
				))}
			</div>
		</section>
	);
}