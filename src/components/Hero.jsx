
export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">
          <div className="dot-live"></div>
          Open to Opportunities
        </div>

        <h1 className="hero-name">
          Chaitrali <br />
          <em>Tikar</em>
        </h1>

        <p className="hero-role">
          Computer Engineering Student · Full Stack Developer
        </p>

        <p className="hero-desc">
          I build practical web applications, participate in hackathons,
          and design solutions that improve productivity.
        </p>

        <div className="hero-btns">
          <a href="#" className="btn btn-p">Resume</a>
          <a href="https://github.com" className="btn btn-g">GitHub</a>
          <a href="https://www.linkedin.com/in/chaitrali-tikar-0673672aa/" className="btn btn-g">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <div className="hsg">
            <div className="hstat">
              <div className="hstat-n">7+</div>
              <div className="hstat-l">Months Interning</div>
            </div>

            <div className="hstat lv">
              <div className="hstat-n">4+</div>
              <div className="hstat-l">Projects Built</div>
            </div>
          </div>

          <div className="hcard-foot">
            <div className="dot-green"></div>
            Currently building Astra
          </div>
        </div>
      </div>
    </section>
  );
}

