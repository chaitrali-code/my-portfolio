import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Toast from '../components/Toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowToast(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>Contact</p>
            <h1 className="heading-xl" style={{ marginBottom: '1rem' }}>
              Let's talk.
            </h1>
            <p className="text-body" style={{ marginBottom: '3rem', maxWidth: '500px' }}>
              Have a project in mind, want to collaborate, or just want to say hi?
              I'd love to hear from you.
            </p>
          </ScrollReveal>

          <div className="contact-grid">
            {/* Form */}
            <ScrollReveal delay={100}>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-input form-textarea"
                    placeholder="Tell me about your project or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={200}>
              <div>
                <div className="contact-info-item">
                  <div className="contact-info-icon">✉</div>
                  <div>
                    <p className="text-small">Email</p>
                    <a href="mailto:chaitrali678@gmail.com" style={{ fontWeight: 500, color: 'var(--ink)' }}>
                      chaitrali678@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">◉</div>
                  <div>
                    <p className="text-small">Availability</p>
                    <p style={{ fontWeight: 500 }}>Open to opportunities</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">⏰</div>
                  <div>
                    <p className="text-small">Timezone</p>
                    <p style={{ fontWeight: 500 }}>IST (UTC+5:30)</p>
                  </div>
                </div>

                <div className="contact-social-grid">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    ↗ GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chaitrali-tikar-0673672aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    ↗ LinkedIn
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-btn"
                  >
                    ↗ Twitter / X
                  </a>
                  <a
                    href="mailto:chaitrali678@gmail.com"
                    className="contact-social-btn"
                  >
                    ↗ Email
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {showToast && (
        <Toast
          message="Message sent successfully!"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}
