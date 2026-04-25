import { useState, useEffect, useRef } from 'react';

const bootLines = [
  { text: 'visitor@portfolio:~$ ', cmd: 'npm run init', delay: 400 },
  { text: '', delay: 300 },
  { text: '> Loading modules...', type: 'status', delay: 200 },
  { text: '  ████████████████████████████████  100%', type: 'progress', delay: 800 },
  { text: '', delay: 100 },
  { text: '> Compiling components...     ', status: 'done ✓', delay: 400 },
  { text: '> Mounting routes...          ', status: 'done ✓', delay: 300 },
  { text: '> Injecting design system...  ', status: 'done ✓', delay: 350 },
  { text: '> Starting dev server...      ', status: 'done ✓', delay: 300 },
  { text: '', delay: 200 },
  { text: '  Portfolio ready at ', highlight: 'localhost:5173', delay: 400 },
  { text: '', delay: 200 },
  { text: '  Welcome, visitor. ', emoji: '🚀', delay: 600 },
];

export default function BootSequence({ onComplete }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [exiting, setExiting] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let currentLine = 0;
    let totalDelay = 0;

    const timers = [];

    bootLines.forEach((line, index) => {
      totalDelay += line.delay;
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
      }, totalDelay);
      timers.push(timer);
    });

    // After all lines, wait a moment then exit
    const exitTimer = setTimeout(() => {
      handleComplete();
    }, totalDelay + 800);
    timers.push(exitTimer);

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleComplete = () => {
    setExiting(true);
    sessionStorage.setItem('boot_done', '1');
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  const renderLine = (line, index) => {
    if (line.cmd) {
      return (
        <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
          <span className="cmd">{line.text}</span>
          <span className="status">{line.cmd}</span>
        </div>
      );
    }

    if (line.type === 'progress') {
      return (
        <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
          <span className="success">{line.text}</span>
        </div>
      );
    }

    if (line.status) {
      return (
        <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
          <span className="status">{line.text}</span>
          <span className="success">{line.status}</span>
        </div>
      );
    }

    if (line.highlight) {
      return (
        <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
          <span className="status">{line.text}</span>
          <span className="path">{line.highlight}</span>
        </div>
      );
    }

    if (line.emoji) {
      return (
        <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
          <span className="info">{line.text}</span>
          <span>{line.emoji}</span>
        </div>
      );
    }

    return (
      <div key={index} className={`boot-line ${index < visibleLines ? 'visible' : ''}`}>
        <span className="status">{line.text || '\u00A0'}</span>
      </div>
    );
  };

  return (
    <div className={`boot-screen ${exiting ? 'exiting' : ''}`}>
      <div style={{ maxWidth: '700px' }}>
        {bootLines.map((line, i) => renderLine(line, i))}

        {visibleLines >= bootLines.length && !exiting && (
          <div className="boot-line visible" style={{ marginTop: '1rem' }}>
            <span className="terminal-cursor"></span>
          </div>
        )}
      </div>

      <button className="boot-skip" onClick={handleComplete}>
        skip →
      </button>
    </div>
  );
}
