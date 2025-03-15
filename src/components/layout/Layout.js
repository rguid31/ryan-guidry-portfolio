import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Layout = ({ children }) => {
    const router = useRouter();
    
    const handleNavigation = (e, path) => {
        e.preventDefault();
        router.push(path);
    };
    
    return (
        <>
            <Head>
                <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="7360c2ad-3731-4b53-b876-48cc4f98b836" type="text/javascript"></script>
                <title>Ryan Guidry - Portfolio</title>
                <meta name="description" content="Ryan Guidry's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
                />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-3605L7SNLB"></script>
                <script dangerouslySetInnerHTML={{ __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-3605L7SNLB');
                `}} />
            </Head>

            <header>
                <nav>
                    <div className="nav-content">
                        <Link href="/" className="logo">
                            <img src="/assets/logos/rg-logomark.svg" alt="RG Logo" className="logo-image" />
                            <span className="logo-text">Ryan Guidry</span>
                        </Link>
                        <div className="nav-links">
                            <a href="/#about" onClick={(e) => handleNavigation(e, '/#about')}>About</a>
                            <a href="/#portfolio" onClick={(e) => handleNavigation(e, '/#portfolio')}>Portfolio</a>
                            <a href="/#experience" onClick={(e) => handleNavigation(e, '/#experience')}>Experience</a>
                            <a href="/#skills" onClick={(e) => handleNavigation(e, '/#skills')}>Skills</a>
                            <Link href="/blog">Blog</Link>
                            <a href="/#contact" onClick={(e) => handleNavigation(e, '/#contact')}>Contact</a>
                        </div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <div className="footer-content">
                    <div className="quick-links">
                        <a href="/#home" onClick={(e) => handleNavigation(e, '/#home')}>Home</a> |
                        <a href="/#about" onClick={(e) => handleNavigation(e, '/#about')}>About</a> |
                        <a href="/#portfolio" onClick={(e) => handleNavigation(e, '/#portfolio')}>Portfolio</a> |
                        <Link href="/blog">Blog</Link> |
                        <a href="/#contact" onClick={(e) => handleNavigation(e, '/#contact')}>Contact</a>
                    </div>
                    
                    <div className="social-icons">
                        <a href="https://github.com/rguid31" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/rmguidry" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.x.com/ryne_guidry" target="_blank" rel="noopener noreferrer">X</a>
                        <a href="https://medium.com/@guidry_ryan" target="_blank" rel="noopener noreferrer">Medium</a>
                    </div>
                    
                    <p>&copy; 2024 Ryan Guidry. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;