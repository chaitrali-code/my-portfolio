import ScrollReveal from '../components/ScrollReveal';
import SkillPill from '../components/SkillPill';
import TimelineItem from '../components/TimelineItem';
import { skillCategories } from '../data/skills';
import { workHistory, education, certifications } from '../data/experience';

export default function Experience() {
  return (
    <>
      {/* Skills Grid */}
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Experience</p>
            <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
              Skills & experience.
            </h1>
            <p className="text-body" style={{ marginBottom: '3rem', maxWidth: '550px' }}>
              A snapshot of my technical toolkit and professional journey so far.
            </p>
          </ScrollReveal>

          {/* Proficiency Legend */}
          <ScrollReveal delay={50}>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', fontSize: '0.8rem', color: 'var(--ink-muted)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="pill-dot expert"></span> Expert
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="pill-dot proficient"></span> Proficient
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="pill-dot familiar"></span> Familiar
              </span>
            </div>
          </ScrollReveal>

          <div className="skills-grid">
            {skillCategories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <div className="skills-category">
                  <h3 className="skills-category-title">{category.name}</h3>
                  <div className="skills-category-pills">
                    {category.skills.map((skill) => (
                      <SkillPill key={skill.name} name={skill.name} proficiency={skill.proficiency} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Work Timeline */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Work history</p>
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>
              Where I've worked
            </h2>
          </ScrollReveal>

          <div className="timeline">
            {workHistory.map((job, i) => (
              <TimelineItem
                key={job.company}
                company={job.company}
                role={job.role}
                dates={job.dates}
                achievements={job.achievements}
                side={i % 2 === 0 ? 'left' : 'right'}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-sm" style={{ background: 'var(--bg-muted)' }}>
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Education</p>
            <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>
              Education & certifications
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.institution} delay={i * 100}>
                <div className="edu-card">
                  <h3 className="edu-institution">{edu.institution}</h3>
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-dates">{edu.dates}</p>
                  {edu.details && (
                    <p className="text-small" style={{ marginTop: '0.5rem' }}>{edu.details}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {certifications.length > 0 && (
            <ScrollReveal delay={200}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {certifications.map((cert, i) => (
                  <span key={i} className="pill">{cert}</span>
                ))}
              </div>
            </ScrollReveal>
          )}

          {/* Download Resume */}
          <ScrollReveal delay={300}>
            <div style={{ marginTop: '2.5rem' }}>
              <a href="/resume.pdf" download className="btn btn-primary">
                Download Resume (PDF)
              </a>
              <p className="text-small" style={{ marginTop: '0.5rem' }}>
                [Placeholder — add your resume PDF to /public/resume.pdf]
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
