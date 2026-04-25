import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2 className="heading-lg">Let's build something.</h2>
        <p className="text-body" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
          Got a project in mind? Let's talk about it.
        </p>
        <Link to="/contact" className="btn btn-primary">
          Get in touch
        </Link>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">
          © {new Date().getFullYear()} Chaitrali Tikar. Built with React + Vite.
        </span>

        <div className="footer-links">
          <a
            href="https://github.com/chaitrali-code"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/chaitrali-tikar-0673672aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
          >
            LinkedIn
          </a>
          <a href="mailto:chaitrali678@gmail.com" className="footer-social">
            Email
          </a>
          <Link to="/terminal" className="footer-social">
            &gt;_ Terminal
          </Link>
        </div>
      </div>
    </footer>
  );
}