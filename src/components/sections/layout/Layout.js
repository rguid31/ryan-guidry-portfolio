import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="/css/styles.css" />
                <link rel="stylesheet" href="/css/blog.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            </Head>

            <header>
                <nav>
                    <div className="nav-content">
                        <Link href="/" className="logo">
                            <img src="/images/rg-logomark.svg" alt="RG Logo" className="logo-image" />
                            <span className="logo-text">Ryan Guidry</span>
                        </Link>
                        <div className="nav-links">
                            <Link href="/#about">About</Link>
                            <Link href="/#portfolio">Portfolio</Link>
                            <Link href="/#experience">Experience</Link>
                            <Link href="/#skills">Skills</Link>
                            <Link href="/blog">Blog</Link>
                            <Link href="/#contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                {children}
            </main>

            <footer>
                <div className="footer-content">
                    <div className="quick-links">
                        <Link href="/#home">Home</Link> |
                        <Link href="/#about">About</Link> |
                        <Link href="/#portfolio">Portfolio</Link> |
                        <Link href="/blog">Blog</Link> |
                        <Link href="/#contact">Contact</Link>
                    </div>
                    
                    <div className="social-icons">
                        <a href="https://github.com/rguid31" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/rmguidry" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.x.com/ryne_guidry" target="_blank" rel="noopener noreferrer">X</a>
                    </div>
                    
                    <p>&copy; 2024 Ryan Guidry. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
} 