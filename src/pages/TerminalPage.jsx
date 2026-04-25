import { useNavigate } from 'react-router-dom';
import Terminal from '../components/Terminal';

export default function TerminalPage() {
  const navigate = useNavigate();

  return (
    <div className="terminal-fullscreen">
      <Terminal fullscreen />
      <p className="terminal-fullscreen-hint">
        Type <strong>help</strong> to get started &nbsp;•&nbsp; Type <strong>exit</strong> to return home
      </p>
    </div>
  );
}
