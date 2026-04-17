import Footer from './component/Footer';
import Navbar from './component/Navbar.jsx';
import Home from './page/Home.jsx';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register all GSAP plugins once at the app root
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function App() {
  useEffect(() => {
    const handleAnchorClick = (event) => {
      const href = event.currentTarget.getAttribute('href');

      if (!href || href === '#' || !href.startsWith('#')) {
        return;
      }

      const target = document.querySelector(href);
      if (!target) {
        return;
      }

      event.preventDefault();

      const navbarOffset = 88;
      const y = Math.max(
        target.getBoundingClientRect().top + window.scrollY - navbarOffset,
        0,
      );

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.scrollTo(0, y);
      } else {
        gsap.to(window, {
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTo: { y, autoKill: true },
        });
      }

      window.history.replaceState(null, '', href);
    };

    const anchorLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
    anchorLinks.forEach((link) => link.addEventListener('click', handleAnchorClick));

    return () => {
      anchorLinks.forEach((link) => link.removeEventListener('click', handleAnchorClick));
    };
  }, []);


  return (
    <>
      <Navbar />
        <Home />
  
      <div>
        <Footer />
      </div>

    </>
  )
}

export default App
