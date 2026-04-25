import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index, featured = false }) {
  if (featured) {
    return (
      <Link to={`/projects/${project.slug}`} className="featured-card">
        <div className="featured-thumb">
          <div className={`featured-thumb-bg ${project.gradient}`}></div>
          <div className="featured-overlay">
            <h3 className="featured-title">{project.title}</h3>
            <p className="featured-desc">{project.summary.slice(0, 80)}...</p>
            <div className="featured-tags">
              {project.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="featured-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/projects/${project.slug}`} className="project-entry">
      <div className="project-number">
        {String(index + 1).padStart(2, '0')}
      </div>
      <div className="project-info">
        <div className="project-thumb">
          <div className={`project-thumb-inner ${project.gradient}`}></div>
          <div className="project-thumb-overlay">
            View case study →
          </div>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <div className="project-meta">
          <span className="project-year">{project.year}</span>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <p className="project-summary">{project.summary}</p>
      </div>
    </Link>
  );
}
