import { useEffect, useState } from 'react';

export default function Toast({ message, onClose }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHiding(true);
      setTimeout(onClose, 300);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast ${hiding ? 'hiding' : ''}`}>
      <span className="toast-icon">✓</span>
      {message}
    </div>
  );
}
