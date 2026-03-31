
import { useState, useEffect } from 'react';

import Welcome from './components/Welcome';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import Hero from './components/Hero';
import LogoLoop from './components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import About from './components/About';
import TechStack from './components/TechStack';
import ScrollVelocity from './components/ScrollVelocity';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

// Custom hook to detect mobile view
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const isMobile = useIsMobile();

  const handleWelcomeClick = () => {
    setShowWelcome(false);
  };

  if (showWelcome) {
    return (
      <>
        {!isMobile && <CustomCursor />}
        <Welcome onClick={handleWelcomeClick} />
      </>
    );
  }

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  return (
    <>
      {/* Custom Cursor Overlay (desktop only) */}
      {!isMobile && <CustomCursor />}
      <div className="min-h-screen bg-[#080808] text-slate-300 overflow-x-hidden">
      {/* Show NavbarMobile on mobile, Navbar on sm+ */}
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>
      <div className="hidden sm:block">
        <Navbar />
      </div>
      <Hero />
      {/* LogoLoop below Hero */}
      <div className="w-full py-6">
        <LogoLoop
          logos={techLogos}
          speed={100}
          direction="left"
          logoHeight={isMobile ? 36 : 60}
          gap={isMobile ? 24 : 60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="transparent"
          ariaLabel="Technology partners"
        />
      </div>
      <About />
      <TechStack />
      <ScrollVelocity
        texts={[
          'Building AI-powered web applications that solve real-world problems',
          
        ]}
        velocity={100}
        className="text-2xl md:text-4xl custom-scroll-text"
        parallaxClassName="[&>*:first-child]:mb-16"
      />
      <Projects />
      <Certifications />
      <Footer />
      <ChatBot />
      </div>
    </>
  );
}
