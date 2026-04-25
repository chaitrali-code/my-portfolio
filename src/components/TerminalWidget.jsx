import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Terminal from './Terminal';

export default function TerminalWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Don't show widget on the full terminal page
  if (location.pathname === '/terminal') return null;

  return (
    <>
      <button
        className="terminal-widget-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle terminal"
        title="Open terminal"
      >
        &gt;_
      </button>

      {isOpen && (
        <div className="terminal-widget-panel">
          <Terminal />
        </div>
      )}
    </>
  );
}
