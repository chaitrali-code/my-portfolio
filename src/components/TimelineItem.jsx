import ScrollReveal from './ScrollReveal';

export default function TimelineItem({ company, role, dates, achievements, side, index }) {
  return (
    <ScrollReveal delay={index * 150} direction={side === 'left' ? 'left' : 'right'}>
      <div className={`timeline-item ${side}`}>
        <div className="timeline-dot"></div>
        <div className="timeline-card">
          <h3 className="timeline-company">{company}</h3>
          <p className="timeline-role">{role}</p>
          <p className="timeline-dates">{dates}</p>
          <ul className="timeline-achievements">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </ScrollReveal>
  );
}
