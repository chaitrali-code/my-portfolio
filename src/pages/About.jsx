import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container">
          <ScrollReveal>
            <p className="text-label" style={{ marginBottom: '0.5rem' }}>About</p>
            <h1 className="heading-xl" style={{ marginBottom: '3rem' }}>
              The story so far.
            </h1>
          </ScrollReveal>

          <div className="about-grid">
            {/* Portrait */}
            <ScrollReveal direction="left">
              <div className="about-portrait gradient-portrait">
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-mono)',
                  opacity: 0.7,
                  textAlign: 'center',
                  padding: '2rem'
                }}>
                  [Your photo here —<br />replace this div with an img tag]
                </div>
              </div>
              <div style={{ marginTop: '1.5rem' }}>
                <div className="status-badge">Currently: open to work</div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <div>
              <ScrollReveal delay={100}>
                <div className="about-section">
                  <h2 className="about-section-title">Background</h2>
                  <p className="text-body" style={{ marginBottom: '1rem' }}>
                    I'm Chaitrali Tikar, a Computer Engineering student who fell in love
                    with building things for the web. It started with curiosity about how
                    websites worked and quickly turned into a passion for full-stack
                    development.
                  </p>
                  <p className="text-body">
                    From my first "Hello World" to deploying production applications,
                    every step has been driven by the satisfaction of turning ideas into
                    working software. I believe great engineering is invisible — the best
                    code is the kind users never have to think about.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="pull-quote">
                  "I don't just write code. I build experiences that work beautifully
                  and ship on time."
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="about-section">
                  <h2 className="about-section-title">How I work</h2>
                  <p className="text-body" style={{ marginBottom: '1rem' }}>
                    I start with understanding the problem — not the technology. The right
                    tool depends on what you're building and who you're building it for.
                    That said, I'm most productive in the React + Node.js ecosystem and
                    love working with modern JavaScript.
                  </p>
                  <p className="text-body">
                    I value clean code, clear communication, and shipping iteratively.
                    At BlissQuants, I've learned that the best features are the ones that
                    actually solve user problems — not the most technically impressive ones.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="pull-quote">
                  "The best features are the ones that actually solve user problems."
                </div>
              </ScrollReveal>

              <ScrollReveal delay={500}>
                <div className="about-section">
                  <h2 className="about-section-title">What I'm into right now</h2>
                  <p className="text-body">
                    Currently exploring AI integration in web apps (hence Astra, my AI
                    assistant project). I'm fascinated by how large language models can
                    enhance productivity tools. Also diving deeper into system design,
                    database optimization, and cloud deployment — the backend skills
                    that make apps scale.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="about-section">
                  <h2 className="about-section-title">Beyond code</h2>
                  <p className="text-body">
                    When I'm not building software, you'll find me participating in
                    hackathons (I love the energy of building under pressure),
                    exploring new technologies, and [Placeholder — add your hobbies:
                    reading, gaming, music, design, etc.]. I believe the best developers
                    have interests outside of code — it gives you perspective and
                    creativity that pure technical work can't.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
