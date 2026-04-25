import { projects } from './projects';
import { skillCategories } from './skills';
import { workHistory } from './experience';

const HELP_TEXT = [
  { type: 'header', text: 'Available Commands:' },
  { type: 'row', cmd: 'about', desc: 'Learn about me' },
  { type: 'row', cmd: 'skills', desc: 'View my tech stack' },
  { type: 'row', cmd: 'projects', desc: 'Browse my projects' },
  { type: 'row', cmd: 'experience', desc: 'Work history' },
  { type: 'row', cmd: 'contact', desc: 'Get in touch' },
  { type: 'row', cmd: 'resume', desc: 'Download my resume' },
  { type: 'row', cmd: 'neofetch', desc: 'System info, developer style' },
  { type: 'row', cmd: 'whoami', desc: 'Who are you?' },
  { type: 'row', cmd: 'ls', desc: 'List portfolio sections' },
  { type: 'row', cmd: 'cd <page>', desc: 'Navigate to a page' },
  { type: 'row', cmd: 'echo <text>', desc: 'Echo back text' },
  { type: 'row', cmd: 'date', desc: 'Current date & time' },
  { type: 'row', cmd: 'history', desc: 'Command history' },
  { type: 'row', cmd: 'clear', desc: 'Clear terminal' },
  { type: 'row', cmd: 'exit', desc: 'Close terminal / go home' },
  { type: 'row', cmd: 'sudo hire me', desc: '???' },
];

const NEOFETCH_ASCII = `
   ▄████▄  ▄▄▄█████▓
  ▒██▀ ▀█  ▓  ██▒ ▓▒
  ▒▓█    ▄ ▒ ▓██░ ▒░
  ▒▓▓▄ ▄██▒░ ▓██▓ ░
  ▒ ▓███▀ ░  ▒██▒ ░
  ░ ░▒ ▒  ░  ▒ ░░
    ░  ▒       ░
  ░          ░
  ░ ░
`;

export function getCommands(navigate) {
  return {
    help: () => ({
      type: 'table',
      rows: HELP_TEXT
    }),

    about: () => ({
      type: 'lines',
      lines: [
        { text: '╭─────────────────────────────────────╮', className: 't-dim' },
        { text: '│  Chaitrali Tikar                    │', className: 't-pink t-bold' },
        { text: '│  Computer Engineering Student       │', className: 't-white' },
        { text: '│  Full Stack Developer               │', className: 't-white' },
        { text: '╰─────────────────────────────────────╯', className: 't-dim' },
        { text: '' },
        { text: 'I build practical web applications, participate' },
        { text: 'in hackathons, and design solutions that' },
        { text: 'improve productivity.' },
        { text: '' },
        { text: '→ Type "cd about" to visit the full About page', className: 't-dim' },
      ]
    }),

    skills: () => {
      const lines = [
        { text: '⚡ Skills & Technologies', className: 't-pink t-bold' },
        { text: '' }
      ];
      skillCategories.forEach(cat => {
        lines.push({ text: `  ${cat.name}:`, className: 't-yellow' });
        lines.push({ text: `    ${cat.skills.map(s => s.name).join(' · ')}`, className: 't-white' });
        lines.push({ text: '' });
      });
      return { type: 'lines', lines };
    },

    projects: () => {
      const lines = [
        { text: '📁 Projects', className: 't-pink t-bold' },
        { text: '' }
      ];
      projects.forEach((p, i) => {
        lines.push({ text: `  ${String(i + 1).padStart(2, '0')}. ${p.title} (${p.year})`, className: 't-green' });
        lines.push({ text: `      ${p.summary.slice(0, 70)}...`, className: 't-dim' });
        lines.push({ text: '' });
      });
      lines.push({ text: '→ Type "cd projects" to see full case studies', className: 't-dim' });
      return { type: 'lines', lines };
    },

    experience: () => {
      const lines = [
        { text: '💼 Work Experience', className: 't-pink t-bold' },
        { text: '' }
      ];
      workHistory.forEach(w => {
        lines.push({ text: `  ${w.company}`, className: 't-green' });
        lines.push({ text: `  ${w.role} | ${w.dates}`, className: 't-yellow' });
        w.achievements.slice(0, 3).forEach(a => {
          lines.push({ text: `    • ${a}`, className: 't-white' });
        });
        lines.push({ text: '' });
      });
      return { type: 'lines', lines };
    },

    contact: () => ({
      type: 'lines',
      lines: [
        { text: '📬 Contact Info', className: 't-pink t-bold' },
        { text: '' },
        { text: '  Email:    chaitrali678@gmail.com', className: 't-green' },
        { text: '  GitHub:   github.com/[your-username]', className: 't-white' },
        { text: '  LinkedIn: linkedin.com/in/chaitrali-tikar-0673672aa', className: 't-white' },
        { text: '' },
        { text: '  Status: Open to opportunities ●', className: 't-pink' },
        { text: '  Timezone: IST (UTC+5:30)', className: 't-dim' },
        { text: '' },
        { text: '→ Type "cd contact" to visit the contact page', className: 't-dim' },
      ]
    }),

    resume: () => ({
      type: 'lines',
      lines: [
        { text: '📄 Downloading resume...', className: 't-yellow' },
        { text: '' },
        { text: '⚠ Resume PDF placeholder — add your resume to /public/resume.pdf', className: 't-dim' },
      ]
    }),

    whoami: () => ({
      type: 'lines',
      lines: [
        { text: 'visitor@chaitrali.dev', className: 't-green' },
      ]
    }),

    neofetch: () => ({
      type: 'neofetch',
      ascii: NEOFETCH_ASCII,
      info: [
        { label: 'Name', value: 'Chaitrali Tikar' },
        { label: 'Role', value: 'Full Stack Developer' },
        { label: 'Education', value: 'B.E. Computer Engineering' },
        { label: 'Location', value: 'India (IST)' },
        { label: 'Languages', value: 'JavaScript, Python, SQL' },
        { label: 'Frameworks', value: 'React, Node.js, Express' },
        { label: 'Databases', value: 'MongoDB, PostgreSQL, MySQL' },
        { label: 'Tools', value: 'Git, VS Code, Docker' },
        { label: 'Status', value: '● Open to opportunities' },
        { label: 'Projects', value: `${projects.length} shipped` },
        { label: 'Terminal', value: 'bash 5.1' },
      ]
    }),

    ls: () => ({
      type: 'lines',
      lines: [
        { text: 'drwxr-xr-x  home/', className: 't-green' },
        { text: 'drwxr-xr-x  about/', className: 't-green' },
        { text: 'drwxr-xr-x  projects/', className: 't-green' },
        { text: 'drwxr-xr-x  experience/', className: 't-green' },
        { text: 'drwxr-xr-x  contact/', className: 't-green' },
        { text: 'drwxr-xr-x  terminal/', className: 't-green' },
        { text: '-rw-r--r--  README.md', className: 't-white' },
      ]
    }),

    date: () => ({
      type: 'lines',
      lines: [
        { text: new Date().toString(), className: 't-white' },
      ]
    }),

    echo: (args) => ({
      type: 'lines',
      lines: [
        { text: args || '', className: 't-white' },
      ]
    }),

    cd: (args, nav) => {
      const routes = {
        home: '/',
        '/': '/',
        about: '/about',
        projects: '/projects',
        experience: '/experience',
        contact: '/contact',
        terminal: '/terminal',
        '~': '/',
        '..': '/',
      };

      const target = (args || '').trim().toLowerCase();
      const route = routes[target];

      if (route) {
        if (nav) nav(route);
        return {
          type: 'lines',
          lines: [
            { text: `Navigating to /${target}...`, className: 't-green' },
          ]
        };
      }

      return {
        type: 'lines',
        lines: [
          { text: `cd: no such directory: ${args}`, className: 't-pink' },
          { text: 'Available: home, about, projects, experience, contact, terminal', className: 't-dim' },
        ]
      };
    },

    'sudo hire me': () => ({
      type: 'easter-egg',
      lines: [
        { text: '' },
        { text: '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉', className: '' },
        { text: '' },
        { text: '  Permission granted!', className: 't-green t-bold' },
        { text: '' },
        { text: '  You have executive access to hire', className: 't-white' },
        { text: '  Chaitrali Tikar. Smart move. 🚀', className: 't-white' },
        { text: '' },
        { text: '  → Email: chaitrali678@gmail.com', className: 't-yellow' },
        { text: '  → LinkedIn: /in/chaitrali-tikar', className: 't-yellow' },
        { text: '' },
        { text: '🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉', className: '' },
        { text: '' },
      ]
    }),

    exit: (args, nav) => {
      if (nav) nav('/');
      return {
        type: 'lines',
        lines: [
          { text: 'logout', className: 't-dim' },
        ]
      };
    }
  };
}
