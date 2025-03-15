import Navigation from '../components/Navigation';
import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Handle hash navigation when the route changes
    const handleRouteChange = (url) => {
      if (url.includes('#')) {
        const id = url.split('#')[1];
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    
    // If initial URL includes hash, scroll to it
    if (router.asPath.includes('#')) {
      handleRouteChange(router.asPath);
    }
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const handleNavigation = (e, path) => {
    e.preventDefault();
    window.location.href = path;
  };

  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp 