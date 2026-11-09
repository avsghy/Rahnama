import { Link, NavLink } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
import { toFa, percent } from "../Utilities/utils";
import ThemeToggle from "./ThemeToggle";
export default function Sidebar({ progress, theme, onToggleTheme }) {
  const linkClass = ({ isActive }) => (isActive ? "on" : "");
  return (
    <aside id="side">
      <div className="logo">
        <Link to={""} className="logo-link">
          <span className="logo">
            <svg viewBox="0 0 24 24">
              <path d="M4 19c6 0 4-7 9-7s3-7 7-7" />
            </svg>
          </span>
          رهنما
        </Link>
      </div>
      <nav id="nav">
        <NavLink to="/" end className={linkClass}>
          خانه
        </NavLink>
        <p>نقشه‌های راه</p>
        {roadmaps.map((r) => (
          <NavLink key={r.id} to={"/roadmap/" + r.id} className={linkClass}>
            <i>{r.short}</i>
            <span>{r.name}</span>
            <b>
              {toFa(percent(progress.doneFor(r.id).length, r.steps.length))}٪
            </b>
          </NavLink>
        ))}
      </nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </aside>
  );
}
