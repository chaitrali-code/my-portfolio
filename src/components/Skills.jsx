
export default function Skills() {
  return (
    <>
      <div className="sh reveal">
        <p className="sl">What I work with</p>
        <h2 className="st">Skills & <em>Technologies</em></h2>
        <div className="sline"></div>
      </div>

      <div className="skills-wrap">
        <div className="sg" data-delay="0">
          <div className="pills">
            <span className="pill pk">React</span>
            <span className="pill pk">JavaScript</span>
            <span className="pill pk">Tailwind CSS</span>
            <span className="pill pk">HTML5</span>
            <span className="pill pk">CSS3</span>
          </div>
        </div>

        <div className="sg" data-delay="120">
          <div className="pills">
            <span className="pill lv">Node.js</span>
            <span className="pill lv">Express.js</span>
            <span className="pill lv">REST APIs</span>
          </div>
        </div>

        <div className="sg" data-delay="240">
          <div className="pills">
            <span className="pill mt">MongoDB</span>
            <span className="pill mt">MySQL</span>
          </div>
        </div>
      </div>
    </>
  );
}
