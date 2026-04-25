import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const filtered = activeTag === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container">
        <ScrollReveal>
          <p className="text-label" style={{ marginBottom: '0.5rem' }}>Projects</p>
          <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
            Things I've built.
          </h1>
          <p className="text-body" style={{ marginBottom: '3rem', maxWidth: '550px' }}>
            Each project is a deep dive — from problem to solution. Click any
            project to read the full case study.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="filter-bar">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${activeTag === tag ? 'active' : ''}`}
                onClick={() => setActiveTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div>
          {filtered.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-body" style={{ textAlign: 'center', padding: '3rem 0' }}>
            No projects found for "{activeTag}". Try another filter.
          </p>
        )}
      </div>
    </section>
  );
}
