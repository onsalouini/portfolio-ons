import React, { useEffect } from 'react';
import useReveal from './useReveal';
import useTilt from './useTilt';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ToTop from './components/ToTop';
import { useLang } from './context/LanguageContext';

function Home() {
  const { hash } = useLocation();
  useReveal();
  useTilt();

  // Coming back from a project page with /#projects: scroll to that section.
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView());
  }, [hash]);

  const { lang } = useLang();
  return (
    <>
      <a className="skip-link" href="#main">{lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}</a>
      <div className="page-glow" aria-hidden="true"><span className="g1" /><span className="g2" /><span className="g3" /></div>
      <Navbar />
      <ToTop />
      <main id="main">
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
