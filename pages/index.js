import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/layout/Layout';
import ExperienceTiles from '../src/components/sections/ExperienceTiles';
import PersonalityDashboard from '../src/components/PersonalityDashboard.jsx';
import Hero from '../src/components/sections/Hero';
import About from '../src/components/sections/About';
import Education from '../src/components/sections/Education';
import Certifications from '../src/components/sections/Certifications';
import Portfolio from '../src/components/sections/Portfolio';
import Experience from '../src/components/sections/Experience';
import Skills from '../src/components/sections/Skills';
import PersonalityProfile from '../src/components/sections/PersonalityProfile';
import Contact from '../src/components/sections/Contact';

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Ryan Guidry - Portfolio 2025</title>
                <meta name="description" content="Portfolio of Ryan Guidry - Data Analyst, Engineering, and Web Development" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            
            <Hero />

            <About />

            <Education />

            <Certifications />

            <Portfolio />

            <Experience />

            <Skills />

            <PersonalityProfile />

            <Contact />
        </Layout>
   );
}