import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCommands } from '../data/terminal-commands';

export default function Terminal({ fullscreen = false }) {
  const navigate = useNavigate();
  const commands = getCommands(navigate);

  const [history, setHistory] = useState([
    {
      type: 'lines',
      lines: [
        { text: 'Welcome to Chaitrali\'s Portfolio Terminal', className: 't-pink t-bold' },
        { text: 'Type "help" to see available commands.', className: 't-dim' },
        { text: '' },
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add command to display history
    const commandLine = { type: 'command', text: trimmed };
    const newCmdHistory = [trimmed, ...cmdHistory];
    setCmdHistory(newCmdHistory);
    setHistoryIndex(-1);

    // Check for special multi-word commands first
    let result;
    if (trimmed.toLowerCase() === 'sudo hire me') {
      result = commands['sudo hire me']();
    } else if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      // Parse command and args
      const parts = trimmed.split(' ');
      const cmd = parts[0].toLowerCase();
      const args = parts.slice(1).join(' ');

      if (commands[cmd]) {
        result = commands[cmd](args, navigate);
      } else {
        result = {
          type: 'lines',
          lines: [
            { text: `command not found: ${cmd}`, className: 't-pink' },
            { text: 'Type "help" for available commands.', className: 't-dim' },
          ]
        };
      }
    }

    // Handle history command
    if (trimmed.toLowerCase() === 'history') {
      result = {
        type: 'lines',
        lines: newCmdHistory.slice(0, 20).reverse().map((cmd, i) => ({
          text: `  ${String(i + 1).padStart(3)}  ${cmd}`,
          className: 't-white'
        }))
      };
    }

    setHistory((prev) => [...prev, commandLine, result]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < cmdHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const renderOutput = (item, index) => {
    if (!item) return null;

    if (item.type === 'command') {
      return (
        <div key={index} className="terminal-output-line">
          <span className="t-green">visitor</span>
          <span className="t-dim">@</span>
          <span className="t-pink">portfolio</span>
          <span className="t-dim">:~$ </span>
          <span className="t-white">{item.text}</span>
        </div>
      );
    }

    if (item.type === 'table') {
      return (
        <div key={index} className="terminal-output-line">
          {item.rows.map((row, i) => {
            if (row.type === 'header') {
              return <div key={i} className="t-pink t-bold">{row.text}</div>;
            }
            return (
              <div key={i}>
                <span className="t-green">  {row.cmd.padEnd(16)}</span>
                <span className="t-dim">{row.desc}</span>
              </div>
            );
          })}
        </div>
      );
    }

    if (item.type === 'neofetch') {
      return (
        <div key={index} className="terminal-output-line">
          <div className="neofetch-grid">
            <pre className="neofetch-ascii">{item.ascii}</pre>
            <div className="neofetch-info">
              {item.info.map((row, i) => (
                <div key={i}>
                  <span className="t-pink t-bold">{row.label}</span>
                  <span className="neofetch-separator">: </span>
                  <span className="t-white">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (item.type === 'lines' || item.type === 'easter-egg') {
      return (
        <div key={index} className="terminal-output-line">
          {item.lines.map((line, i) => (
            <div key={i} className={line.className || 't-white'}>
              {line.text || '\u00A0'}
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="terminal" onClick={focusInput}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot red"></span>
          <span className="terminal-dot yellow"></span>
          <span className="terminal-dot green"></span>
        </div>
        <span className="terminal-title-text">
          visitor@portfolio — bash
        </span>
      </div>

      <div className="terminal-body" ref={bodyRef}>
        {history.map((item, i) => renderOutput(item, i))}

        <form onSubmit={handleSubmit} className="terminal-prompt-line">
          <span className="terminal-user">visitor</span>
          <span className="t-dim">@</span>
          <span className="terminal-path">portfolio</span>
          <span className="terminal-dollar">:~$ </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus={fullscreen}
            spellCheck={false}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
