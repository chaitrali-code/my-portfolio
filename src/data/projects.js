export const projects = [
  {
    slug: 'blissflow',
    title: 'BlissFlow',
    year: '2025',
    role: 'Full Stack Developer Intern',
    summary: 'Full-stack expense management platform built during internship at BlissQuants, handling complex approval workflows and real-time financial tracking.',
    tags: ['Web', 'Full Stack'],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
    featured: true,
    gradient: 'gradient-1',
    problem: 'BlissQuants needed an internal tool to manage employee expenses, reimbursements, and approval workflows. The existing process was manual — spreadsheets, email threads, and delayed approvals that frustrated both employees and finance teams.',
    approach: 'I worked within an agile team to build a modern web application from scratch. We started with user research to understand pain points, then designed a clean approval pipeline. I owned the full stack — React frontend with component-driven architecture, and a Node.js/Express backend with PostgreSQL for reliable data persistence.',
    features: [
      'Multi-level approval workflow with role-based access control',
      'Real-time expense tracking dashboard with charts and analytics',
      'Receipt upload and attachment management',
      'Email notification system for approval status updates',
      'Export functionality for finance team reporting',
      'Responsive design that works on desktop and mobile'
    ],
    techBreakdown: [
      { name: 'React', reason: 'Component-driven UI with complex state management' },
      { name: 'Node.js', reason: 'Fast, non-blocking server for real-time updates' },
      { name: 'Express', reason: 'RESTful API design with middleware support' },
      { name: 'PostgreSQL', reason: 'Relational data integrity for financial records' },
      { name: 'Sequelize', reason: 'Type-safe ORM with migration support' }
    ],
    outcome: 'Successfully deployed to production within the internship period. The platform reduced expense processing time by an estimated 60% and eliminated manual tracking entirely. The approval workflow handled 100+ expense submissions during the pilot phase with zero data integrity issues.',
    liveUrl: null,
    githubUrl: 'https://github.com'
  },
  {
    slug: 'astra',
    title: 'Astra',
    year: '2025',
    role: 'Solo Developer',
    summary: 'Personal AI assistant for scheduling, productivity, and task management — built to learn how AI APIs integrate with modern web apps.',
    tags: ['AI', 'Web'],
    stack: ['React', 'Node.js', 'Gemini API', 'MongoDB'],
    featured: true,
    gradient: 'gradient-2',
    problem: 'Existing productivity tools felt either too complex (Notion, Jira) or too simple (basic to-do lists). I wanted an AI-powered assistant that could understand natural language requests and help organize my day without the overhead of a full project management suite.',
    approach: 'Built as a solo passion project. I integrated the Gemini API for natural language understanding and designed a conversational interface that feels like chatting with a smart friend about your schedule. The backend stores context and preferences in MongoDB for personalized responses over time.',
    features: [
      'Natural language task creation and scheduling',
      'AI-powered daily briefing and priority suggestions',
      'Conversational interface for quick interactions',
      'Persistent memory — learns your preferences over time',
      'Calendar integration and deadline tracking',
      'Dark/light mode with clean, minimal UI'
    ],
    techBreakdown: [
      { name: 'React', reason: 'Responsive chat-style interface with real-time updates' },
      { name: 'Gemini API', reason: 'State-of-the-art language understanding for natural input' },
      { name: 'Node.js', reason: 'API orchestration between frontend and AI services' },
      { name: 'MongoDB', reason: 'Flexible schema for evolving user preferences and context' }
    ],
    outcome: 'Currently in active development and personal use. The conversational UX dramatically reduced the friction of task management — what used to take opening an app and filling forms now happens in a single sentence. Exploring open-sourcing the core engine.',
    liveUrl: null,
    githubUrl: 'https://github.com'
  },
  {
    slug: 'hackathon-collab',
    title: 'CollabBoard',
    year: '2024',
    role: 'Frontend Lead',
    summary: 'Real-time collaborative whiteboard built during a 24-hour hackathon — enabling teams to brainstorm, sketch, and organize ideas together.',
    tags: ['Web', 'Open Source'],
    stack: ['React', 'Socket.io', 'Canvas API', 'Express'],
    featured: true,
    gradient: 'gradient-3',
    problem: 'During the hackathon, our team identified that remote brainstorming sessions lacked the spontaneity of in-person whiteboards. Existing tools were either too feature-heavy or had noticeable lag that broke the creative flow.',
    approach: 'We focused on speed and simplicity. I led the frontend, building the canvas-based drawing interface with React and the Canvas API. We used Socket.io for real-time synchronization so multiple users could draw, type, and move elements simultaneously without conflicts.',
    features: [
      'Real-time multi-user drawing and annotation',
      'Sticky notes, shapes, and freeform sketching',
      'Room-based sessions with shareable invite links',
      'Undo/redo with operation history',
      'Export board as PNG for documentation',
      'Mobile touch support for tablet users'
    ],
    techBreakdown: [
      { name: 'React', reason: 'Component architecture for UI controls and panels' },
      { name: 'Canvas API', reason: 'High-performance rendering for drawing operations' },
      { name: 'Socket.io', reason: 'Bi-directional real-time sync between users' },
      { name: 'Express', reason: 'Lightweight server for room management and signaling' }
    ],
    outcome: 'Built and demoed in under 24 hours. Won [Placeholder — Best Innovation] at the hackathon. The real-time sync handled 6 concurrent users without noticeable lag. The project reinforced my ability to ship under extreme time pressure and collaborate effectively in a team.',
    liveUrl: null,
    githubUrl: 'https://github.com'
  }
];
