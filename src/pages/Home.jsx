import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import TechMarquee from '../components/TechMarquee';
import SkillPill from '../components/SkillPill';
import { projects } from '../data/projects';
import { skillCategories } from '../data/skills';

const featuredProjects = projects.filter((p) => p.featured);
const topSkills = skillCategories.flatMap((cat) => cat.skills).slice(0, 10);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="section" style={{ paddingTop: '10rem', paddingBottom: '4rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="status-badge" style={{ marginBottom: '2rem' }}>
              Open to opportunities
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="heading-xl" style={{ marginBottom: '1.5rem', maxWidth: '800px' }}>
              Hi, I'm Chaitrali.<br />
              I build software that{' '}
              <span className="accent-text">ships.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-body" style={{ maxWidth: '550px', marginBottom: '2.5rem' }}>
              Computer Engineering student and Full Stack Developer.
              I build practical web applications, participate in hackathons,
              and design solutions that solve real problems.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/projects" className="btn btn-primary">
                See my work
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Selected Work */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Selected work</p>
            <h2 className="heading-lg" style={{ marginBottom: '3rem' }}>
              Projects I'm proud of
            </h2>
          </ScrollReveal>

          <div className="featured-grid">
            {featuredProjects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 150}>
                <ProjectCard project={project} index={i} featured />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link to="/projects" className="btn-ghost">
                View all projects
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-sm" style={{ background: 'var(--bg-muted)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <ScrollReveal>
              <p className="text-label" style={{ marginBottom: '0.5rem' }}>About me</p>
              <h2 className="heading-md" style={{ marginBottom: '1.5rem' }}>
                A developer who cares about craft
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-body" style={{ marginBottom: '1rem' }}>
                I'm a Computer Engineering student passionate about building things
                that work well and look great. From full-stack platforms to AI assistants,
                I enjoy the entire spectrum of turning ideas into working software.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                Currently interning at BlissQuants, where I'm building production-ready
                features for enterprise applications. When I'm not coding, you'll find me
                at hackathons or exploring new technologies.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link to="/about" className="btn-ghost">
                Read the full story
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-sm">
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Tech stack</p>
            <h2 className="heading-md" style={{ marginBottom: '2rem' }}>
              Technologies I work with
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {topSkills.map((skill) => (
                <SkillPill key={skill.name} name={skill.name} proficiency={skill.proficiency} />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Link to="/experience" className="btn-ghost">
              See all skills & experience
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
