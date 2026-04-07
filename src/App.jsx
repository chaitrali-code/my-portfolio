import { useEffect } from 'react';
import Ambient from './components/Ambient';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // IntersectionObserver for reveal animations
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const g = entry.target;
        const delay = parseInt(g.dataset.delay || 0);
        setTimeout(() => {
          g.classList.add('visible');
          g.querySelectorAll('.pill').forEach((p, i) => {
            setTimeout(() => p.classList.add('vis'), i * 80);
          });
        }, delay);
        skillObserver.unobserve(g);
      });
    }, { threshold: 0.18 });
    document.querySelectorAll('.sg').forEach(g => skillObserver.observe(g));
  }, []);

  return (
    <>
      <Ambient />
      <Navbar />
      <main>
        <Hero />
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
