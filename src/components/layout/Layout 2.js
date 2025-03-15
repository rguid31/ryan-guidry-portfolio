import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ryan Guidry - Portfolio</title>
                <meta name="description" content="Ryan Guidry's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-3605L7SNLB"
                strategy="afterInteractive"
            />
            <Script id="google-analytics-config" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-3605L7SNLB');
                `}
            </Script>
            <Script src="https://consent.cookiebot.com/uc.js" />

            <header>
                <nav>
                    <div className="nav-content">
                        <a href="#home" className="logo">
                            <img src="/assets/logos/rg-logomark.svg" alt="RG Logo" className="logo-image" />
                            <span className="logo-text">Ryan Guidry</span>
                        </a>
                        <div className="nav-links">
                            <a href="#about">About</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#experience">Experience</a>
                            <a href="#skills">Skills</a>
                            <a href="/blog">Blog</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <div className="footer-content">
                    <div className="quick-links">
                        <a href="#home">Home</a> |
                        <a href="#about">About</a> |
                        <a href="#projects">Portfolio</a> |
                        <a href="#experience">Experience</a> |
                        <a href="#skills">Skills</a> |
                        <a href="/blog">Blog</a> |
                        <a href="#contact">Contact</a>
                    </div>
            
                    
                    <p>Developed by RG with passion &#x2764;&#xFE0F;&#x200D;&#x1F525;;</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;