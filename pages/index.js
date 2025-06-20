import React from 'react';
import Head from 'next/head';
import Layout from '../src/components/Layout';
import HeroSection from '../src/components/sections/HeroSection';
import AboutSection from '../src/components/sections/AboutSection';
import EducationSection from '../src/components/sections/EducationSection';
import CertificationsSection from '../src/components/sections/CertificationsSection';
import PortfolioSection from '../src/components/sections/PortfolioSection';
import ExperienceSection from '../src/components/sections/ExperienceSection';
import VolunteerSection from '../src/components/sections/VolunteerSection';
import SkillsSection from '../src/components/sections/SkillsSection';
import ContactSection from '../src/components/sections/ContactSection';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Ryan Guidry - Portfolio 2025</title>
                <meta name="description" content="Portfolio of Ryan Guidry - Data Analyst, Engineering Academic, and Software Developer in Progress" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <CertificationsSection />
            <PortfolioSection />
            <ExperienceSection />
            <VolunteerSection />
            <SkillsSection />
            <ContactSection />
        </Layout>
   );
}