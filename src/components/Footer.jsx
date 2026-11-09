import { Link } from "react-router-dom";
import { roadmaps } from "../data/roadmaps";
const links = [
  ["MDN Web Docs", "https://developer.mozilla.org"],
  ["freeCodeCamp", "https://www.freecodecamp.org"],
  ["roadmap.sh", "https://roadmap.sh"],
  ["Khan Academy", "https://www.khanacademy.org"],
];
export default function Footer() {
  return (
    <footer className="footer">
      <div className="cont-footer">
        <div className="cols">
          <div>
            <h4>رهنما</h4>
            <p>
              نقشهٔ راه یادگیری برای برنامه‌نویسی، حسابداری، شبکه و زیرساخت؛
              مرحله‌به‌مرحله و با منابع رایگان.
            </p>
          </div>
          <div>
            <h4>نقشه‌های راه</h4>
            <ul>
              {roadmaps.map((r) => (
                <li key={r.id}>
                  <Link to={"/roadmap/" + r.id}>{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>منابع مفید</h4>
            <ul>
              {links.map(([name, url]) => (
                <li key={url}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <small>
          © ۱۴۰۵ رهنما. منابع معرفی‌شده متعلق به صاحبان آن‌هاست و ممکن است با
          گذر زمان تغییر کنند.
        </small>
      </div>
    </footer>
  );
}
