
export default function Projects() {
  return (
    <>
      <div className="sh reveal">
        <p className="sl">Things I've built</p>
        <h2 className="st">Featured <em>Projects</em></h2>
        <div className="sline"></div>
      </div>

      <div className="pg">
        <div className="pc-card reveal">
          <div className="pc-title">BlissFlow</div>
          <p className="pc-desc">
            Full-stack web application built during internship.
          </p>
        </div>

        <div className="pc-card reveal">
          <div className="pc-title">Astra</div>
          <p className="pc-desc">
            Personal AI assistant for scheduling and productivity.
          </p>
        </div>

        <div className="pc-card reveal">
          <div className="pc-title">Hackathon Project</div>
          <p className="pc-desc">
            Team-built practical solution under deadline.
          </p>
        </div>
      </div>
    </>
  );
}