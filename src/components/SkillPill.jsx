export default function SkillPill({ name, proficiency }) {
  return (
    <span className="pill">
      <span className={`pill-dot ${proficiency}`}></span>
      {name}
    </span>
  );
}
