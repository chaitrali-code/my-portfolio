import { useParams, Link, Navigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="case-hero">
        <div className="container">
          <ScrollReveal>
            <Link to="/projects" className="text-small" style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              ← Back to projects
            </Link>
            <h1 className="heading-xl">{project.title}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginTop: '1.5rem' }}>
              <span className="tag">{project.role}</span>
              <span className="tag">{project.year}</span>
              {project.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={`case-hero-bg ${project.gradient}`}></div>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-narrow">
        {/* The Problem */}
        <ScrollReveal>
          <div className="case-section">
            <h2 className="case-section-title">The Problem</h2>
            <p className="text-body">{project.problem}</p>
          </div>
        </ScrollReveal>

        {/* The Approach */}
        <ScrollReveal>
          <div className="case-section">
            <h2 className="case-section-title">The Approach</h2>
            <p className="text-body">{project.approach}</p>
          </div>
        </ScrollReveal>

        {/* Key Features */}
        <ScrollReveal>
          <div className="case-section">
            <h2 className="case-section-title">Key Features</h2>
            <ul className="case-features">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Tech Stack */}
        <ScrollReveal>
          <div className="case-section">
            <h2 className="case-section-title">Tech Stack</h2>
            <div className="case-tech-grid">
              {project.techBreakdown.map((tech) => (
                <div key={tech.name} className="case-tech-item">
                  <div className="case-tech-name">{tech.name}</div>
                  <div className="case-tech-reason">{tech.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Outcome */}
        <ScrollReveal>
          <div className="case-section">
            <h2 className="case-section-title">Outcome & Results</h2>
            <p className="text-body">{project.outcome}</p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem 0 2rem' }}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                View on GitHub
              </a>
            )}
          </div>
        </ScrollReveal>

        {/* Prev/Next Nav */}
        <div className="case-nav">
          <div>
            {prevProject && (
              <Link to={`/projects/${prevProject.slug}`} className="case-nav-link">
                <span className="case-nav-label">← Previous</span>
                <span className="case-nav-title">{prevProject.title}</span>
              </Link>
            )}
          </div>
          <div style={{ textAlign: 'right' }}>
            {nextProject && (
              <Link to={`/projects/${nextProject.slug}`} className="case-nav-link">
                <span className="case-nav-label">Next →</span>
                <span className="case-nav-title">{nextProject.title}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
