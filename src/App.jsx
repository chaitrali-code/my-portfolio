import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BootSequence from './components/BootSequence';
import TerminalWidget from './components/TerminalWidget';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import TerminalPage from './pages/TerminalPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [bootComplete, setBootComplete] = useState(
    () => sessionStorage.getItem('boot_done') === '1'
  );

  const location = useLocation();
  const isTerminalPage = location.pathname === '/terminal';

  if (!bootComplete) {
    return <BootSequence onComplete={() => setBootComplete(true)} />;
  }

  return (
    <>
      <ScrollToTop />
      {!isTerminalPage && <Header />}

      <main style={{ paddingTop: isTerminalPage ? 0 : '0' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terminal" element={<TerminalPage />} />
        </Routes>
      </main>

      {!isTerminalPage && <Footer />}
      <TerminalWidget />
    </>
  );
}
