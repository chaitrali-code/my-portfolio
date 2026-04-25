const techItems = [
  'React', '·', 'Node.js', '·', 'JavaScript', '·', 'MongoDB', '·',
  'Express', '·', 'PostgreSQL', '·', 'Python', '·', 'Git', '·',
  'Tailwind CSS', '·', 'REST APIs', '·', 'VS Code', '·', 'Docker', '·',
  'Next.js', '·', 'Sequelize', '·', 'Figma', '·', 'Linux', '·',
];

export default function TechMarquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {techItems.map((item, i) => (
          <span key={`a-${i}`} className="marquee-item">
            {item === '·' ? <span className="marquee-dot"></span> : item}
          </span>
        ))}
        {techItems.map((item, i) => (
          <span key={`b-${i}`} className="marquee-item">
            {item === '·' ? <span className="marquee-dot"></span> : item}
          </span>
        ))}
      </div>
    </div>
  );
}
