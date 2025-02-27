import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
    const router = useRouter();

    const handleClick = (e, href) => {
        e.preventDefault();
        
        // If we're not on the homepage and trying to navigate to a section
        if (href.startsWith('/#') && router.pathname !== '/') {
            // First navigate to homepage
            router.push('/').then(() => {
                // After navigation, scroll to the section
                const element = document.querySelector(href.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else {
            // If we're already on homepage or navigating to a different page
            router.push(href);
        }
    };

    return (
        <nav>
            <div className="nav-content">
                <Link href="/" className="logo">
                    <span className="logo-text">Ryan Guidry</span>
                </Link>
                <div className="nav-links">
                    <a href="/#about" onClick={(e) => handleClick(e, '/#about')}>About Me</a>
                    <a href="/#skills-certifications" onClick={(e) => handleClick(e, '/#skills-certifications')}>Skills</a>
                    <a href="/#portfolio" onClick={(e) => handleClick(e, '/#portfolio')}>Portfolio</a>
                    <a href="/blog" onClick={(e) => handleClick(e, '/blog')}>Blog</a>
                    <a href="/#contact" onClick={(e) => handleClick(e, '/#contact')}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 